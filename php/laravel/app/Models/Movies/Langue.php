<?php

/*
* Program : Model Langue
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Movies;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Langue extends Model
{
    protected $connection = Helper::CONNECTION_DB_MOVIE;
    protected $fillable = ['created_at','updated_at'];

    public function Films()
    {
        return $this->hasMany('App\Models\Movies\Film');
    }
}
