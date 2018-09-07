<?php

/*
* Program : Model Acteur
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Movies;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Acteur extends Model
{
    protected $connection = Helper::CONNECTION_DB_MOVIE;
    protected $fillable = ['prenom','nom','created_at','updated_at'];
    public static $rules = array(
        'prenom' => 'required',
        'nom' => 'required'
    );

    public function films()
    {
        return $this->belongsToMany('App\Models\Movies\Film','acteur_films','acteur_id','film_id')->withTimestamps();
    }

    public function fullName($prenom,$nom)
    {
        return sprintf("%s %s",ucfirst(strtolower($prenom)),ucfirst(strtolower($nom))); 
    }
}
