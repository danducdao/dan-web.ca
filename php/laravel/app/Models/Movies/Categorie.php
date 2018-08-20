<?php

namespace App\Models\Movies;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Categorie extends Model
{
    protected $connection = Helper::CONNECTION_DB_MOVIE;
    protected $fillable = ['created_at'];

    public function films()
    {
        return $this->belongsToMany('App\Models\Movies\Film')->withTimestamps();
    }
}
