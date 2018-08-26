<?php

/*
* Program : Model Album
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Musics;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Album extends Model
{
    protected $connection = Helper::CONNECTION_DB_MUSIC;
    protected $fillable = ['created_at','updated_at'];
}
