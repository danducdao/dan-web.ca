<?php

/*
* Program : Model Genre
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Musics;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Genre extends Model
{
    protected $connection = Helper::CONNECTION_DB_MUSIC;
    protected $fillable = ['created_at','updated_at'];
}
