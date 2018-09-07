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
Route::get('movie/categorie/{id}','Movies\MovieStoreController@index')->where(array('id' => '[1-9][0-9]*'));
Route::get('movie/movie/{id}','Movies\MovieStoreController@detail')->where(array('id' => '[1-9][0-9]*'));

Route::get('movie/excel/write','Movies\Excels\WriteExcelController@index');
Route::post('movie/excel/writeXLSX','Movies\Excels\WriteExcelController@writeXLSX')->where(array('id' => '[1-9][0-9]*'));
Route::post('movie/excel/writeCSV','Movies\Excels\WriteExcelController@writeCSV')->where(array('id' => '[1-9][0-9]*'));

Route::get('movie/excel/readXLSX','Movies\Excels\ReadExcelController@readXSLX');
Route::get('movie/excel/readCSV','Movies\Excels\ReadExcelController@readCSV');

Route::group(array('prefix' => 'movieadmin'), function(){
     Route::resource('film','MovieAdmin\FilmsController');
     Route::resource('categorie','MovieAdmin\CategoriesController');
     Route::resource('acteur','MovieAdmin\ActeursController');
});

