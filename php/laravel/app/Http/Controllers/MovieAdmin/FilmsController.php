<?php

namespace App\Http\Controllers\MovieAdmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;
use App\Models\Movies\Film;
use App\Models\Movies\Langue;
use App\Models\Movies\LangueOriginal;
use App\Models\Movies\Categorie;
use App\Models\Movies\Acteur;
use App\Models\Movies\CategorieFilm;
use App\Models\Movies\ActeurFilm;
use App\Classes\Helper;
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
        $films = Film::orderBy('titre')->paginate(10);
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

        $selectOptCategorie = Helper::myListItem(Categorie::where('active',1)->pluck('nom','id'));

        $acteurs = Acteur::where('active',1)->orderByRaw('prenom ASC , nom ASC')
                                            ->select(DB::raw("CONCAT(prenom,' ',nom) AS nom"),"id")
                                            ->pluck("nom","id");

        $selectOptActeurs = Helper::myListItem($acteurs);
        
        return View::make('movieadmin.film.create')->with([
                                                            'selectOptLangue' => $selectOptLangue[0],
                                                            'selectOptLangueOriginal' => $selectOptLangue[1],
                                                            'selectOptCategorie' => $selectOptCategorie,
                                                            'selectOptActeurs' => $selectOptActeurs
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
    
        if(!$film->save())
        {
            $message = "Table Films été sauvegardé avec sans succès";
            return $this->redirect_with_message_errors('film.index',array("errors",$message));
        }

        //Sauvegarder la catégorie de ce film
        $categorieFilm = new CategorieFilm;
        $categorieFilmSaved = $categorieFilm->saveFilmCategorieRecord($request->input('categorie'), $film->id);
        if(!$categorieFilmSaved)
        {
            $message = "Table categorie_films a été sauvegardé avec sans succès";
            return $this->redirect_with_message_errors('film.index',array("errors",$message));
        }

        //Sauvegarde des acteurs de ce film
        $acteurFilm = new ActeurFilm;
        $filmActeur = $acteurFilm->saveFilmActeursRecord($request->input('acteur'),$film->id);
        if(!$filmActeur)
        {
            $message = "Table acteur_films a été sauvegardé avec sans succès";
            return $this->redirect_with_message_errors('film.index',array("errors",$message));
        }
        
        return $this->redirect_with_message_success("film.index","Tables ont été sauvegardés avec succès");
    }

    private function optLangue() : array
    {
        $langue_array = [];

        array_push($langue_array,Langue::where('active',1)->pluck('nom','id')); 
        array_push($langue_array,LangueOriginal::where('active',1)->pluck('nom','id')); 

        $langue_array[0] = Helper::myListItem($langue_array[0]);
        $langue_array[1] = Helper::myListItem($langue_array[1]);

        return $langue_array;
    }
    
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $film = Film::find($id);

        //obtenir la liste des langues du film
        $selectOptLangue = $this->optLangue();

        //obtenir la liste des catégories du film
        $selectOptCategories = Helper::myListItem(Categorie::where('active',1)->pluck('nom','id'));
        $selectOptCategorie = "";
        if(count($film->categories) > 0)
        {
            foreach($film->categories as $categorie)
            {
                $selectOptCategorie = $categorie->id;
            }
        }

        $acteurs = Acteur::where('active',1)->orderByRaw('prenom ASC , nom ASC')
                                            ->select(DB::raw("CONCAT(prenom,' ',nom) AS nom"),"id")
                                            ->pluck("nom","id");

        //obtenir la liste des acteurs du film
        $selectOptActeurs = Helper::myListItem($acteurs);
        $selectOptActeur = "";
        if(count($film->acteurs) > 0)
        {
           foreach($film->acteurs as $acteur) 
           {
              $selectOptActeur .= $acteur->id . ",";
           }   
        }

        return View::make('movieadmin.film.edit')->with([
                                                          'film' => $film,
                                                          'selectOptLangue' => $selectOptLangue[0],
                                                          'selectOptLangueOriginal' => $selectOptLangue[1],
                                                          'selectOptCategories' => $selectOptCategories,
                                                          'selectOptCategorie' => $selectOptCategorie,
                                                          'selectOptActeurs' => $selectOptActeurs,
                                                          'selectOptActeur' => rtrim($selectOptActeur,',')
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
        
        if(!$film->save())
        {
            $message = "Table Films a été sauvegardé avec sans succès";
            return $this->redirect_with_message_errors('film.index',array("errors",$message));
        }
        
        //Sauvegarder la catégorie de ce film
        $categorieFilm = new CategorieFilm;
        $categorieFilmSaved = $categorieFilm->saveFilmCategorieRecord($request->input('categorie'), $film->id);
        if(!$categorieFilmSaved)
        {
            $message = "Table categorie_films a été sauvegardé avec sans succès";
            return $this->redirect_with_message_errors('film.index',array("errors",$message));
        }

        //Sauvegarder les acteurs de ce film
        $acteurFilm = new ActeurFilm;
        $filmActeur = $acteurFilm->saveFilmActeursRecord($request->input('acteur'),$film->id);
        if(!$filmActeur)
        {
            $message = "Table acteur_films a été sauvegardé avec sans succès";
            return $this->redirect_with_message_errors('film.index',array("errors",$message));
        }
        
        return $this->redirect_with_message_success("film.index","Items ont été sauvegardés avec succès");
    }
}
