<?php

/*
* Program : Model Categorie
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Foods;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Categorie extends Model
{
    protected $connection = Helper::CONNECTION_DB_FOOD;
    protected $fillable = ['created_at','updated_at'];
}
