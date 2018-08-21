<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");
header("Access-Control-Request-Method:GET,HEAD,POST,PUT");

use Illuminate\Http\Request;
Use App\Models\Musics\Genre;
Use App\Models\Musics\Album;
Use App\Models\Musics\Artiste;
Use App\Models\Foods\Categorie;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});






