<?php

/*
* Program : Model Categorie
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Movies;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Categorie extends Model
{
    protected $connection = Helper::CONNECTION_DB_MOVIE;
    protected $fillable = ['nom','active','created_at','updated_at'];

    public static $rules = array(
        'nom' => 'required'
    );

    public function films()
    {
        return $this->belongsToMany('App\Models\Movies\Film','categorie_films','categorie_id','film_id')->withTimestamps();
    }
}
