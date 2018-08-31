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

    static function evaluations()
    {
        return array( 
             'G' => 'General Audiences',
             'PG' => 'Parental Guidance Suggested',
             'PG-13' => 'Parents Strongly Cautioned' ,
             'R' => 'Restricted',
             'NC-17' => 'No One 17 And Under Admitted'
        );
    }

    static function nouveautes()
    {
         return array(
             'Trailers' => 'Trailers',
             'Commentairies' => 'Commentairies',
             'Deleted Scenes' =>  'Deleted Scenes',
             'Behind the Scenes' => 'Behind the Scenes'
         );
    }
}
