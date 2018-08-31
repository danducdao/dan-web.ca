<?php

namespace App\Http\Controllers\MovieAdmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use App\Models\Movies\Film;
use App\Models\Movies\Langue;
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

        return 'Film admin create';
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
        $film = Film::with('Langue')->find($id);
        $langues = Langue::where('active',1)->pluck('nom','id'); 
        return View::make('movieadmin.film.edit',compact('film','langues'));
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
       $film = Film::find($id);
       $film->titre = $request->input('titre');
       $film->description = $request->input('description');
       $film->anneeSortie = $request->input('anneeSortie');
       $film->langue_id = $request->input('langue_id');
       $film->dureeLocation = $request->input('dureeLocation'); 
       $film->prix = $request->input('prix');
       $film->longeur = $request->input('longeur');
       $film->coutRemplacement = $request->input('coutRemplacement');
       $film->evaluation = $request->input('evaluation');
       $film->nouveaute = $request->input('nouveaute');
       $film->photo = $request->input('file');
       $film->active = $request->input('active');
       $film->save();
       return redirect('movieadmin/film');
    }
}
