<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class QwordsController extends Controller
{
    //
    public function index(): Response
    {
        return Inertia::render('Main', [
            'title' => 'Qwords',
            'header' => 'Selamat Datang',
        ]);
    }
}
