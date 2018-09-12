<?php

/*
* Program : class MovieStoreController
* Écrit par : Dan Duc Dao
*/

namespace App\Http\Controllers\MovieStore;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;

class MovieStoresController extends Controller
{
    public function index($id)
    {
        return View::make('moviestore.show',array('id' => $id));
    }
}
