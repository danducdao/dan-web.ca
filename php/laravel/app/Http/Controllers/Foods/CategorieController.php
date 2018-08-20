<?php


namespace App\Http\Controllers\Foods;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Foods\Categorie;



class CategorieController extends Controller
{
    public function index()
    {
        return Categorie::all();
    }

    public function show($id)
    {
        return Categorie::find($id);
    }

    public function update(Request $request, $id)
    {
       // $categorie = Categorie::findOrFail($id);
        
        //$categorie->update(array("nom" => "tesxxxxx","description" => "tttt","photo" => "photosss","created_at" => "2018-08-17 18:53:13"));
       // $categorie->update(json_decode($request->all()));
       //print_r($request->request);
      // return array("nom" => "tesxxxxx","description" => "tttt","photo" => "photosss","created_at" => "2018-08-17 18:53:13");

      response()->headers->set("Access-Control-Allow-Origin","*");
      response()->headers->set("Content-Type","application/json");
      response()->headers->set("Access-Control-Allow-Headers","Content-Type");
      response()->headers->set("Access-Control-Allow--Methods","POST,PUT,OPTIONS");
      return "teee";
    }
}
