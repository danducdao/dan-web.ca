<?php

/*
* Program : Model ActeurFilm
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Movies;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class ActeurFilm extends Model
{
    protected $connection = Helper::CONNECTION_DB_MOVIE;
    protected $fillable = ['acteur_id','film_id','created_at','updated_at'];
}
