<?php

namespace App\Models\Foods;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Categorie extends Model
{
    protected $connection = Helper::CONNECTION_DB_FOOD;
    protected $fillable = ['nom','description','photo','active','created_at','updated_at'];
}
