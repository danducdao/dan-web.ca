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

Route::get('/','HomeController@index');
Route::get('movie/categorie/{id}','MovieStoreController@index')->where(array('id' => '[1-9][0-9]*'));
Route::get('movie/movie/{id}','MovieStoreController@detail')->where(array('id' => '[1-9][0-9]*'));

