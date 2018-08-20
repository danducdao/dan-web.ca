<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\DB;

class MovieStoreController extends Controller
{
    public function index($id)
    {
        return View::make('moviestore.show',array('id' => $id));
    }
}
