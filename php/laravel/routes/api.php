<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

use Illuminate\Http\Request;
Use App\Genre;
Use App\Album;
Use App\Artiste;

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

Route::get('genres', function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return Genre::all();
});
 
Route::get('genres/{id}', function($id) {
    return Genre::find($id);
});

Route::post('genres', function(Request $request) {
    return Genre::create($request->all);
});

Route::put('genres/{id}', function(Request $request, $id) {
    $article = Genre::findOrFail($id);
    $article->update($request->all());
    return $article;
});

Route::delete('genres/{id}', function($id) {
    Genre::find($id)->delete();

    return 204;
});

/************** Album ************* */

Route::get('albums', function() {
    return Album::all();
});
 
Route::get('albums/{id}', function($genreId) {
    return Album::where('genreId',$genreId)->get();
});

Route::get('albumsDetail/{id}', function($id) {
    return Album::find($id);
});


Route::post('albums', function(Request $request) {
    return Album::create($request->all);
});

Route::put('albums/{id}', function(Request $request, $id) {
    $album= Album::findOrFail($id);
    $album->update($request->all());
    return $album;
});

Route::delete('albums/{id}', function($id) {
    Album::find($id)->delete();
    return 204;
});

/************** Artiste ************* */

Route::get('artistes', function() {
    return Artiste::all();
});
 
Route::get('artistes/{id}', function($id) {
    return Artiste::find($id);
});

Route::post('artistes', function(Request $request) {
    return Artiste::create($request->all);
});

Route::put('artistes/{id}', function(Request $request, $id) {
    $artiste= Artiste::findOrFail($id);
    $artiste->update($request->all());
    return $artiste;
});

Route::delete('artistes/{id}', function($id) {
    Artiste::find($id)->delete();
    return 204;
});







