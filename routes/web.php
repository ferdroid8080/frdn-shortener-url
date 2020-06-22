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

Route::get('/{route?}', function () {
    return view('main');
})->where('route', '[0-9A-Za-z.\/?]+');


Route::get('/s/{query}', 'LinksController@getFullUrl');
Route::post('/new/link', 'LinksController@store');
Route::get('/shorten/{url}', 'LinksController@short');

// Route::get('/new/link', 'LinksController@create');



