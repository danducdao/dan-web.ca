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
use Input;

class FilmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $films = Film::all();
        return View::make('movieadmin.film.index',compact('films'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return View::make('movieadmin.film.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    private function initLangue($langues,array & $array_langue)
    {
        foreach($langues as $key => $langue)
        {
            $item = app()->make('stdClass');
            $item->id = $key;
            $item->nom = $langue;
            $array_langue[] = $item;
        }
    }

    public function test(){
      echo "tesss";
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $langue_array = [];

        $film = Film::with('Langue','langue_original')->find($id);
        
        array_push($langue_array,Langue::where('active',1)->pluck('nom','id')); 
        array_push($langue_array,LangueOriginal::where('active',1)->pluck('nom','id')); 

        $selectOptLangue = $selectOptLangueOriginal = []; 

        $this->initLangue($langue_array[0],$selectOptLangue);
        $this->initLangue($langue_array[1],$selectOptLangueOriginal);

        return View::make('movieadmin.film.edit',compact('film','selectOptLangue','selectOptLangueOriginal'));
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
        $film->nouveaute = $request->input('nouveaute');
        $film->photo = $request->input('file');
        $film->active = $request->input('active');
        $film->save();
        
        return redirect('movieadmin/film');
    }
}
