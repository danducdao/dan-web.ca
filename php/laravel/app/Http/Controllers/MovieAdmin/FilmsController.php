<?php

namespace App\Http\Controllers\MovieAdmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use App\Models\Movies\Film;
use App\Models\Movies\Langue;
use App\Models\Movies\LangueOriginal;
use App\Models\Movies\Categorie;
use App\Models\Movies\CategorieFilm;
use Input;

class FilmsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $films = Film::leftJoin('categorie_films',function($join){
             $join->on('Films.id','=','categorie_films.film_id');
        })->leftJoin('categories',function($join){
            $join->on('categorie_films.categorie_id','=','categories.id');
        })->select('films.*','categories.nom AS nom_categorie')->get();

        return View::make('movieadmin.film.index',compact('films'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $selectOptLangue = $this->optLangue();

        $selectOptCategorie = $this->getOptions(Categorie::where('active',1)->pluck('nom','id'));

        return View::make('movieadmin.film.create')->with([
                                                            'selectOptLangue' => $selectOptLangue[0],
                                                            'selectOptLangueOriginal' => $selectOptLangue[1],
                                                            'selectOptCategorie' => $selectOptCategorie
                                                          ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $valid = Validator::make(Input::all(),Film::$rules);

        if($valid->fails())
        {
            return Redirect::back()->withInput()->withErrors($valid);
        }

        $film = new Film();
        $film->titre = $request->input('titre');
        $film->description = $request->input('description');
        $film->annee_sortie = $request->input('annee_sortie');
        $film->langue_id = $request->input('langue');
        $film->langue_original_id = $request->input('langue_original');
        $film->duree_location = $request->input('duree_location'); 
        $film->prix = $request->input('prix');
        $film->longeur = $request->input('longeur');
        $film->cout_remplacement = $request->input('cout_remplacement');
        $film->evaluation = $request->input('evaluation');
        $film->nouveaute =  trim($request->input('nouveaute'));
        $film->photo = $request->input('file');
    
        if($film->save())
        {
            $categorieFilm = new CategorieFilm();
            $categorieFilm->categorie_id = $request->input('categorie');
            $categorieFilm->film_id = $film->id;
            if(!$categorieFilm->save())
            {
                $message = "Table catégorie film a été sauvegardé avec sans succès";
                return $this->redirect_with_message_errors('film.index',array("errors",$message));
            }
        }else{
            $message = "Table Filma été sauvegardé avec sans succès";
            return $this->redirect_with_message_errors('film.index',array("errors",$message));
        }
        return $this->redirect_with_message_success("film.index","Items ont été sauvegardés avec succès");
    }

    private function optLangue() : array
    {
        $langue_array = [];

        array_push($langue_array,Langue::where('active',1)->pluck('nom','id')); 
        array_push($langue_array,LangueOriginal::where('active',1)->pluck('nom','id')); 

        $langue_array[0] = $this->getOptions($langue_array[0]);
        $langue_array[1] = $this->getOptions($langue_array[1]);

        return $langue_array;
    }
    private function getOptions(object $items) : array
    {
        $options = array();
        foreach($items as $key => $item)
        {
            $std = app()->make('stdClass');
            $std->id = $key;
            $std->nom = $item;
            $options[] = $std;
        }
        return $options;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $film = Film::with('Langue','langue_original')->where(['id' => $id,'active' => 1])->firstOrFail();

        $selectOptLangue = $this->optLangue();

        $selectOptCategorie = $this->getOptions(Categorie::where('active',1)->pluck('nom','id'));

        $categorie = Categorie::join('categorie_films',function($join){
             $join->on('categories.id', '=', 'categorie_films.categorie_id');
        })->where('categorie_films.film_id',$id)->first();
        
        return View::make('movieadmin.film.edit')->with([
                                                          'film' => $film,
                                                          'categorie' => $categorie,
                                                          'selectOptLangue' => $selectOptLangue[0],
                                                          'selectOptLangueOriginal' => $selectOptLangue[1],
                                                          'selectOptCategorie' => $selectOptCategorie
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
        $valid = Validator::make(Input::all(),Film::$rules);

        if($valid->fails())
        {
            return Redirect::back()->withInput()->withErrors($valid);
        }

        $film = Film::find($id);
        $film->titre = $request->input('titre');
        $film->description = $request->input('description');
        $film->annee_sortie = $request->input('annee_sortie');
        $film->langue_id = $request->input('langue');
        $film->langue_original_id = $request->input('langue_original');
        $film->duree_location = $request->input('duree_location'); 
        $film->prix = $request->input('prix');
        $film->longeur = $request->input('longeur');
        $film->cout_remplacement = $request->input('cout_remplacement');
        $film->evaluation = $request->input('evaluation');
        $film->nouveaute =  trim($request->input('nouveaute'));
        $film->photo = $request->input('file');
        $film->active = $request->input('active');
        
        if($film->save())
        {
            $categorieFilm = CategorieFilm::where('film_id', $id)->first();
            $categorieFilm->active = $film->active;
            $categorieFilm->categorie_id = $request->input('categorie');
            if(!$categorieFilm->save())
            {
                $message = "Table catégorie film a été sauvegardé avec sans succès";
                return $this->redirect_with_message_errors('film.index',array("errors", $message ));
            }
        }else{
            $message = "Table Film a été sauvegardé avec sans succès";
            return $this->redirect_with_message_errors('film.index',array("errors",$message));
        }
        return $this->redirect_with_message_success("film.index","Items ont été sauvegardés avec succès");
    }
}
