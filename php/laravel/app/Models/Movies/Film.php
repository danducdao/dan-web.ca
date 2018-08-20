<?php

namespace App\Models\Movies;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Film extends Model
{
    protected $connection = Helper::CONNECTION_DB_MOVIE;
    protected $fillable = ['created_at'];

    public function categories()
    {
        return $this->belongsToMany('App\Models\Movies\Categorie')->withTimestamps();
    }

    public function acteurs()
    {
        return $this->belongsToMany('App\Models\Movies\Acteur')->withTimestamps();
    }
}
