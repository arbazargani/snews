<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;

use App\User;
use App\Article;
use App\Page;
use App\Comment;
use App\Setting;
use App\Category;

class AdminController extends Controller
{
    public function Index(Request $request) {
        $articles = [
            'all' => Article::count(),
            'published' => Article::where('state', 1)->count(),
            'drafts' => Article::where('state', 0)->count(),
            'deleted' => Article::where('state', -1)->count(),
            'popular' => Article::orderBy('views', 'desc')->take(5)->get()
        ];

        $pages = [
            'all' => Page::count(),
            'published' => Page::where('state', 1)->count(),
            'drafts' => Page::where('state', 0)->count(),
            'deleted' => Page::where('state', -1)->count()
        ];

        $comments = [
            'all' => Comment::count(),
            'approved' => Comment::where('approved', 1)->count(),
            'unapproved' => Comment::where('approved', 0)->count(),
        ];

        $google_analytics_id = Setting::where('name', 'google_analyitics_client-id')->pluck('value');

        $date = new Carbon($request->get('date', today()));
        $filePath = storage_path("logs/laravel-{$date->format('Y-m-d')}.log");
        $logs = [];

        if (File::exists($filePath)) {
            $logs = [
                'lastModified' => new Carbon(File::lastModified($filePath)),
                'name' => File::name($filePath),
                'size' => File::size($filePath),
                'file' => File::get($filePath)
            ];
        }

        
        return view('admin.home.index', compact(['articles', 'pages', 'comments', 'logs']));
    }

    public function Analytics(Request $request) {
        $users = User::all();
        $articles = Article::where('id', '>', 0);
        $analytics = [];
        $date = date('Y-m-d');
        // return $users;
        foreach($users as $user) {
            $dataset = $articles
                        // ->where('created_at', "like", "%$date%")
                        ->whereDate('created_at', Carbon::today())
                        ->where('user_id', $user->id);
            $analytics [$user->username] = [
                'count' => $dataset->count(),
                'hits' => $dataset->sum('views'),
                'average' => (int) $dataset->average('views'),
            ];
        }

        return view('admin.analytics.manage', compact(['analytics']));
    }
}
