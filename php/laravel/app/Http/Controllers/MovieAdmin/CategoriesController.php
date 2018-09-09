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
        //Montrer seulement les films qui n'appartiennent à aucun catégorie
        $films = Film::leftJoin('categorie_films',function($join){
            $join->on('films.id','=','categorie_films.film_id');
        })->where('categorie_films.id', null)
          ->orderBy('films.titre')
          ->pluck("films.titre","films.id");

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

        $categorieFilm = new CategorieFilm;
        $categorieFilmSaved = $categorieFilm->saveCategorieFilmsRecord($request->input('film'),$id);
        if(!$categorieFilmSaved)
        {
            $message = "Table categorie_films a été sauvegardé avec sans succès";
            return  $this->redirect_with_message_errors('categorie.index',array('errors'=>$message));
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

        //Montrer seulement les films qui n'appartiennent à aucun catégorie
        $films = Film::leftJoin('categorie_films',function($join){
            $join->on('films.id','=','categorie_films.film_id');
        })->where('categorie_films.id', null)
          ->orderBy('films.titre')
          ->pluck("films.titre","films.id");

        $selectOptFilms = Helper::myListItem($films);

        $films = Film::join('categorie_films',function($join){
            $join->on('films.id','=','categorie_films.film_id');
        })->where('categorie_films.categorie_id', $id)
          ->groupBy('films.id')
          ->orderBy('films.titre')
          ->pluck("films.titre","films.id");
        
        $selectOptFilms = array_merge($selectOptFilms, Helper::myListItem($films));
        
        return View::make('movieadmin.categorie.edit')->with([
                                                                'categorie' => $categorie,
                                                                'selectOptFilms' => $selectOptFilms,
                                                                'selectOptFilm' => rtrim($selectOptFilm,',')
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

        $categorieFilm = new CategorieFilm;
        $categorieFilmSaved = $categorieFilm->saveCategorieFilmsRecord($request->input('film'),$id);
        if(!$categorieFilmSaved)
        {
            $message = "Table categorie_films a été sauvegardé avec sans succès";
            return  $this->redirect_with_message_errors('categorie.index',array('errors'=>$message));
        }

        return $this->redirect_with_message_success('categorie.index','Tables ont été sauvegardés avec succès');
    }
}
