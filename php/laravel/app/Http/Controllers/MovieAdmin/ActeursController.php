<?php

namespace App\Http\Controllers\MovieAdmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Movies\Acteur;
use App\Models\Movies\Film;
use App\Models\Movies\ActeurFilm;
use App\Classes\Helper;
use Input;


class ActeursController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $acteurs = Acteur::orderByRaw('prenom ASC , nom ASC')->get();
        return View::make('movieadmin.acteur.index',compact('acteurs'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $films = Film::where('active',1)->pluck("titre","id");
        $selectOptFilms=Helper::myListItem($films);
        return View::make('movieadmin.acteur.create',compact('selectOptFilms'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $valid = Validator::make(Input::all(),Acteur::$rules);

        if($valid->fails())
        {
            return $this->back_message_errors($valid);
        }

        $acteur = Acteur::create([
            'prenom' => $request->input('prenom'),
            'nom' => $request->input('nom')
        ]);
       
        if(!$acteur)
        {
            $message = "Table Acteur a été sauvegardé avec sans succès";
            return  $this->redirect_with_message_errors('acteur.index',array('errors'=>$message));
        }

        $isCompleted = $this->addActeurFilmRecord($request->input('film'),$acteur->id);

        if(!$isCompleted)
        {
            $message = "Table Acteur Film a été sauvegardé avec sans succès";
            return  $this->redirect_with_message_errors('acteur.index',array('errors'=>$message));
        }

        return $this->redirect_with_message_success('acteur.index','Items ont été sauvegardés avec succès');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $acteur = Acteur::find($id)->first();

        if(!$acteur)
        {
            $message = "Aucun item existe";
            return $this->redirect_with_message_errors('acteur.index',array('errors'=>$message));
        }

        $selectOptFilm = "";    
        if(count($acteur->films)  > 0)
        {
            foreach($acteur->films as $film){
                $selectOptFilm .= $film->id . ",";
            }
        }
        
        $films = Film::where('active',1)->pluck("titre","id");
        $selectOptFilms=Helper::myListItem($films);

        return View::make('movieadmin.acteur.edit')->with([
                                                            'acteur' => $acteur,
                                                            'selectOptFilms' => $selectOptFilms,
                                                            'selectOptFilm' =>  rtrim($selectOptFilm,',')
                                                          ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $valid = Validator::make(Input::all(),Acteur::$rules);

        if($valid->fails())
        {
            return $this->back_message_errors($valid);
        }

        $acteur = Acteur::find($id)->first();
        $acteur->prenom = $request->input('prenom');
        $acteur->nom = $request->input('nom');
        $acteur->active = $request->input('active');

        if(!$acteur->save())
        {
            $message = "Table Acteur a été sauvegardé avec sans succès";
            return  $this->redirect_with_message_errors('acteur.index',array('errors'=>$message));
        }
        //effectue cette opération seulement si acteur est active
        if((int)$request->input('active') === 1)
        {
            $isCompleted = $this->addActeurFilmRecord($request->input('film'),$acteur->id);

            if(!$isCompleted)
            {
                $message = "Table Acteur Film a été sauvegardé avec sans succès";
                return  $this->redirect_with_message_errors('acteur.index',array('errors'=>$message));
            }
        }

        $this->setActiveRecordActeurFilm($acteur->id,$request->input('active'));

        return $this->redirect_with_message_success('acteur.index','Items ont été sauvegardés avec succès');
    }

    private function setActiveRecordActeurFilm(int $acteurId, int $active)
    {
        ActeurFilm::where('acteur_id',$acteurId)->update([
            'active' => $active
        ]);
    }
    private function addActeurFilmRecord(?string $idFilm,int $acteurId):bool
    {
        $affectedRows = ActeurFilm::where('acteur_id',$acteurId)->delete();  

        if($idFilm)
        {
            $idFilms = $idFilm?explode(',',$idFilm):"";
            foreach($idFilms as $idFilm)
            {
                $acteurFilm = new ActeurFilm();
                $acteurFilm->acteur_id = $acteurId;
                $acteurFilm->film_id = $idFilm;
                if(!$acteurFilm->save())
                {
                    $message = "Table Film a été sauvegardé avec sans succès";
                    return false;
                }   
            }
        }
        return true;
    }
}
