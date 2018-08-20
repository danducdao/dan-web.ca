<?php

namespace App\Models\Movies;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class CategorieFilm extends Model
{
    protected $connection = Helper::CONNECTION_DB_MOVIE;
    protected $fillable = ['created_at'];
}
