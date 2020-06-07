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

Route::get('/', function () {
    return view('index');
});


Route::get('/{query}', 'LinksController@getFullUrl');
Route::get('/new/link', 'LinksController@create');
Route::post('/new/link', 'LinksController@store');

Route::get('/shorten/{url}', 'LinksController@short');
