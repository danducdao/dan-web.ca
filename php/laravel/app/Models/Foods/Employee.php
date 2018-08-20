<?php

namespace App\Models\Foods;

use Illuminate\Database\Eloquent\Model;
use App\Classes\Helper;

class Employee extends Model
{
    protected $connection = Helper::CONNECTION_DB_FOOD;
    protected $fillable = ['created_at'];
}
