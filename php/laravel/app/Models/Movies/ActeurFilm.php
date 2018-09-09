<?php

/*
* Program : Model ActeurFilm
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Movies;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class ActeurFilm extends Model
{
    protected $connection = Helper::CONNECTION_DB_MOVIE;
    protected $fillable = ['acteur_id','film_id','created_at','updated_at'];
    private static $_instance = NULL; 

    public function saveFilmActeursRecord(?string $acteurId,int $filmId):bool
    {
        $affectedRows = $this->where('film_id',$filmId)->delete(); 

        if($acteurId)
        {
            $acteurIds = explode(',',$acteurId);
            foreach($acteurIds as $acteurId)
            {
                self::$_instance = new self();
                self::$_instance->acteur_id = $acteurId;
                self::$_instance->film_id = $filmId;
                if(!self::$_instance->save())
                {
                    return false;
                }   
            }
        }
        return true;
    } 

    public function saveActeurFilmsRecord(?string $filmId,int $acteurId):bool
    {
        $affectedRows = $this->where('acteur_id',$acteurId)->delete();  

        if($filmId)
        {
            $filmIds = explode(',',$filmId);
            foreach($filmIds as $filmId)
            {
                self::$_instance = new self();
                self::$_instance->acteur_id = $acteurId;
                self::$_instance->film_id = $filmId;
                if(!self::$_instance->save())
                {
                    return false;
                }   
            }
        }
        return true;
    }
}
