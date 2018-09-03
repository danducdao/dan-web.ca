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

    public static $rules = array(
        'titre' => 'required',
        'description' => 'required',
        'langue' => 'required',
        'dureeLocation' => 'regex:/^[1-9][0-9]*$/',
        'prix' => 'regex:/^[0-9]+\\.?[0-9]*$/',
        'coutRemplacement' => 'regex:/^[0-9]+\\.?[0-9]*$/'
    );

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

    public function langue_original()
    {
        return $this->belongsTo('App\Models\Movies\LangueOriginal');
    }

    public static function evaluations():array
    {
        $evaluations = array(
            'G' => 'General Audiences',
            'PG' => 'Parental Guidance Suggested',
            'PG-13' => 'Parents Strongly Cautioned' ,
            'R' => 'Restricted',
            'NC-17' => 'No One 17 And Under Admitted'
        );
        return self::getOptions($evaluations);
    }
    
    static function nouveautes():array
    {
        $nouveautes = array(
             'Trailers' => 'Trailers',
             'Commentairies' => 'Commentairies',
             'Deleted Scenes' =>  'Deleted Scenes',
             'Behind the Scenes' => 'Behind the Scenes'
         );
         return self::getOptions($nouveautes);
    }

    private static function getOptions(array $options):array
    {
        $selectOptItems = array();
        if(is_array($options))
        {   
            $app = app();
            foreach($options as $key => $option)
            {
                $item = $app->make('stdClass');
                $item->id = $key;
                $item->nom = $option;
                $selectOptItems[] = $item;
            }
        }
        return $selectOptItems;
    }
}
