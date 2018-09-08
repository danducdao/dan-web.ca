<?php

namespace App\Http\Controllers\MovieAdmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;
use App\Models\Movies\Categorie;
use App\Models\Movies\CategorieFilm;
use App\Models\Movies\Film;
use App\Classes\Helper;
use Input;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Categorie::orderBy('nom')->get();
        return View::make('movieadmin.categorie.index',compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $films = Film::where('active',1)->pluck("titre","id");
        $selectOptFilms = Helper::myListItem($films);
        return View::make('movieadmin.categorie.create',compact('selectOptFilms'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $valid = Validator::make(Input::all(),Categorie::$rules);

        if($valid->fails())
        {
            return $this->back_message_errors($valid);
        }
       
        $categorie = Categorie::create([
            'nom' => $request->input('nom') 
        ]);
       
        if(!$categorie)
        {
            $message = "Table categories a été sauvegardé avec sans succès";
            return  $this->redirect_with_message_errors('categorie.index',array('errors'=>$message));
        }

        $isCompleted = $this->addCategorieFilmRecord($request->input('film'),$categorie->id);
    
        if(!$isCompleted)
        {
            $message = "Table categorie_films a été sauvegardé avec sans succès";
            return  $this->redirect_with_message_errors('acteur.index',array('errors'=>$message));
        }

        return $this->redirect_with_message_success('categorie.index','Tables ont été sauvegardés avec succès');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $categorie = Categorie::find($id);

        if(!$categorie)
        {
            $message = "Aucun item existe";
            return $this->redirect_with_message_errors('categorie.index',array('errors'=>$message));
        }

        $selectOptFilm = "";    
        if(count($categorie->films)  > 0)
        {
            foreach($categorie->films as $film){
                $selectOptFilm .= $film->id . ",";
            }
        }

        $films = Film::where('active',1)->pluck("titre","id");
        $selectOptFilms = Helper::myListItem($films);

        return View::make('movieadmin.categorie.edit')->with([
                                                                'categorie' => $categorie,
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
        $valid = Validator::make(Input::all(),Categorie::$rules);

        if($valid->fails())
        {
            return $this->back_message_errors($valid);
        }

        $categorie = Categorie::find($id)->update([
            'nom' => $request->input('nom'),
            'active' => $request->input('active')
        ]);

        if(!$categorie)
        {
            $message = "Table categories a été sauvegardé avec sans succès";
            return  $this->redirect_with_message_errors('categorie.index',array('errors'=>$message));
        }

        if((int)$request->input('active') === 1)
        {
            $isCompleted = $this->addCategorieFilmRecord($request->input('film'),$id);
        }

        return $this->redirect_with_message_success('categorie.index','Tables ont été sauvegardés avec succès');
    }

    private function addCategorieFilmRecord(?string $idFilm,int $categorieId):bool
    {
        $affectedRows = CategorieFilm::where('categorie_id',$categorieId)->delete();  

        if($idFilm)
        {
            $idFilms = $idFilm?explode(',',$idFilm):"";

            foreach($idFilms as $idFilm)
            {
                $categorieFilm = new CategorieFilm();
                $categorieFilm->categorie_id = $categorieId;
                $categorieFilm->film_id = $idFilm;
                if(!$categorieFilm->save())
                {
                    $message = "Table Film a été sauvegardé avec sans succès";
                    return false;
                }   
            }
        }
        return true;
    }
}
