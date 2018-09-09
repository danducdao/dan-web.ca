<?php

/*
* Program : Model CategorieFilm
* Écrit par : Dan Duc Dao
*/

namespace App\Models\Movies;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class CategorieFilm extends Model
{
    protected $connection = Helper::CONNECTION_DB_MOVIE;
    protected $fillable = ['created_at','updated_at'];
    private static $_instance = NULL; 
    
    public function saveCategorieFilmsRecord(?string $filmId,int $categorieId):bool
    {
        $affectedRows = $this->where('categorie_id',$categorieId)->delete(); 

        if($filmId)
        {
            $filmIds = explode(',',$filmId);
            foreach($filmIds as $filmId)
            {
                self::$_instance = new self();
                self::$_instance->categorie_id = $categorieId;
                self::$_instance->film_id = $filmId;
                if(!self::$_instance->save())
                {
                    return false;
                }   
            }
        }
        return true;
    }

    public function saveFilmCategorieRecord(?int $categorieId, int $filmId):bool
    {
        $affectedRows = $this->where('film_id',$filmId)->delete();

        if($categorieId)
        {
            $this->categorie_id = $categorieId;
            $this->film_id = $filmId;
            if(!$this->save())
            {
                return false;
            }
        }
        return true; 
    }
}
