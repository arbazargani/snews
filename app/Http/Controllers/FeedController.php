<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
use Carbon\Carbon;

class FeedController extends Controller
{
    public function Index() {
        // $articles = Article::where('state', '=', 1)->get();
        $articles = Article::where('state', '=', 1)
                            ->where('created_at','<=', Carbon::now())
                            ->orderBy('id', 'DESC')->limit(30)->get();
        $lastModified = $articles->first();
        return response()
        ->view('public.feed.index', compact(['articles', 'lastModified']))
        ->header('Content-Type','application/atom+xml; charset=UTF-8');
    }

    public function V2() {
        // $articles = Article::where('state', '=', 1)->get();
        $articles = Article::where('state', '=', 1)
                            ->where('created_at','<=', Carbon::now())
                            ->orderBy('id', 'DESC')->limit(30)->get();
        $lastModified = $articles->first();
        return response()
        ->view('public.feed.v2', compact(['articles', 'lastModified']))
        ->header('Content-Type','application/atom+xml; charset=UTF-8');
    }
    
    public function Category() {
        //
    }

}