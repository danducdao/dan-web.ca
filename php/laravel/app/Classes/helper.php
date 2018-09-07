<?php

/*
* Program : class Helper
* Écrit par : Dan Duc Dao
*/

namespace App\Classes;

class Helper{
     public const CONNECTION_DB_FOOD = "mysql";
     public const CONNECTION_DB_MUSIC = "mysql2";
     public const CONNECTION_DB_MOVIE = "mysql3"; 
     
     public static function radioBtnActiveAttribut(int $active):array
     {
         return array(
            array( 'name' => 'active',
                   'value' => 1,
                   'text' => 'Oui',
                   'checked' => $active === 1?true:false),
            array( 'name' => 'active',
                   'value' => 0,
                   'text' => 'Non',
                   'checked' => $active === 0?true:false )
            );
    }
    public static function myListItem(object $items) : array
    {
        $myListe = array();
        foreach($items as $key => $item)
        {
            $std = app()->make('stdClass');
            $std->id = $key;
            $std->nom = $item;
            $myListe[] = $std;
        }
        return $myListe;
    }

}