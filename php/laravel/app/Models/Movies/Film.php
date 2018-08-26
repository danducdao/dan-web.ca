<?php

/*
* Program : Model Film
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Movies;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Film extends Model
{
    protected $connection = Helper::CONNECTION_DB_MOVIE;
    protected $fillable = ['created_at','updated_at'];

    public function categories()
    {
        return $this->belongsToMany('App\Models\Movies\Categorie')->withTimestamps();
    }

    public function acteurs()
    {
        return $this->belongsToMany('App\Models\Movies\Acteur')->withTimestamps();
    }

    public function langue()
    {
        return $this->belongsTo('App\Models\Movies\Langue');
    }
}
