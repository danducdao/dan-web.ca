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
        'prix' => 'nullable|regex:/^[0-9]+\\.?[0-9]*$/',
        'cout_remplacement' => 'nullable|regex:/^[0-9]+\\.?[0-9]*$/'
    );

    public static function boot(){
		parent::boot();
		self::creating(function ($my_model) {
            $my_model->duree_location = 3;
            $my_model->prix = 4.99;
            $my_model->cout_remplacement = 19.99;
            $my_model->evaluation = 'G';
            $my_model->active = 1;
		});
    }
    
    public function categories()
    {
        return $this->belongsToMany('App\Models\Movies\Categorie','categorie_films','film_id','categorie_id')->withTimestamps();
    }

    public function acteurs()
    {
        return $this->belongsToMany('App\Models\Movies\Acteur','acteur_films','film_id','acteur_id')->withTimestamps();
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
             'Commentaries' => 'Commentaries',
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
