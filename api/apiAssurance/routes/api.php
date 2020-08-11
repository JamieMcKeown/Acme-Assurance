<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

use App\Demande;


Route::post('/user/new', 'Demandes@create');
Route::get('/user/{courriel}', 'Demandes@showWithCourriel');
Route::post('/user/edit/{courriel}', 'Demandes@modify');
