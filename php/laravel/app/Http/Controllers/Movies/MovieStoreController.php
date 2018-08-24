<?php

namespace App\Http\Controllers\Movies;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;

class MovieStoreController extends Controller
{
    public function index($id)
    {
        return View::make('moviestore.show',array('id' => $id));
    }
}
