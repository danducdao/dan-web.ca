<?php

namespace App\Http\Controllers\MovieAdmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Validator;
use App\Models\Movies\Categorie;
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
        $categories = Categorie::all();
        return View::make('movieadmin.categorie.index',compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return View::make('movieadmin.categorie.create');
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
            $message = "Item a été sauvegardé avec sans succès";
            return  $this->redirect_with_message_errors('categorie.index',array('errors'=>$message));
        }

        return $this->redirect_with_message_success('categorie.index','Item a été sauvegardé avec succès');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $categorie = Categorie::where(['id' => $id,'active' => 1])->first();

        if(!$categorie)
        {
            $message = "Aucun item existe";
            return $this->redirect_with_message_errors('categorie.index',array('errors'=>$message));
        }

        return View::make('movieadmin.categorie.edit',compact('categorie'));
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

        $categorie = Categorie::where(['id' => $id,'active' => 1])->update([
            'nom' => $request->input('nom') 
        ]);

        if(!$categorie)
        {
            $message = "Item a été sauvegardé avec sans succès";
            return  $this->redirect_with_message_errors('categorie.index',array('errors'=>$message));
        }
        return $this->redirect_with_message_success('categorie.index','Item a été sauvegardé avec succès');
    }
}
