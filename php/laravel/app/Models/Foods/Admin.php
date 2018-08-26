<?php

/*
* Program : Model Admin
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Foods;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Admin extends Model
{
    protected $connection = Helper::CONNECTION_DB_FOOD;
    protected $fillable = ['created_at','updated_at'];
}
