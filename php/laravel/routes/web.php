<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index');
Route::get('moviestore/categorie/{id}','MovieStore\MovieStoresController@index')->where(array('id' => '[1-9][0-9]*'));
Route::get('moviestore/movie/{id}','MovieStore\MovieStoresController@detail')->where(array('id' => '[1-9][0-9]*'));

Route::get('excel/write','Excel\WriteExcelsController@index');
Route::post('excel/writeXLSX','Excel\WriteExcelsController@writeXLSX')->where(array('id' => '[1-9][0-9]*'));
Route::post('excel/writeCSV','Excel\WriteExcelsController@writeCSV')->where(array('id' => '[1-9][0-9]*'));

Route::get('excel/readXLSX','Excel\ReadExcelsController@readXSLX');
Route::get('excel/readCSV','Excel\ReadExcelsController@readCSV');

Route::middleware(['auth'])->group(function(){
    Route::group(array('prefix' => 'movieadmin'), function(){
        Route::resource('film','MovieAdmin\FilmsController');
        Route::resource('categorie','MovieAdmin\CategoriesController');
        Route::resource('acteur','MovieAdmin\ActeursController');
   });
});





