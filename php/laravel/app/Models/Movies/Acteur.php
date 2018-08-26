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
    protected $fillable = ['created_at','updated_at'];

    public function films()
    {
        return $this->belongsToMany('App\Models\Movies\Film')->withTimestamps();
    }

    public function fullName($prenom,$nom)
    {
        return sprintf("%s %s",ucfirst(strtolower($prenom)),ucfirst(strtolower($nom))); 
    }
}
