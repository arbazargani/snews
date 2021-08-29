<?php

namespace App\Providers;

use App\Advertise;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Hekmatinasser\Verta\Verta;

use App\Article;
use App\Category;
use App\Setting;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (env('APP_ENV') == 'production') {
            \URL::forceScheme('https');
        }

        $date = date("Y-m-d H:i:s");

        $categories = Category::where('id', '!=', 1)->where('created_at', '<=', Carbon::now())->get();

//        $latestArticles = Article::where('created_at', '<=', Carbon::now())->where('state', 1)->latest()->limit(10)->get();
        $latestArticles = Article::where('created_at', '<=', Carbon::now())->where('state', 1)->limit(10)->latest()->get();

        $popularArticles = Article::where('state', 1)->where('created_at','<=', Carbon::now())
                                                    ->whereNotIn('cover', ['', 'ghost.png'])
                                                    ->where('created_at', '<=', Carbon::now())
                                                    ->whereBetween('created_at', [Carbon::now()->subDays(3), Carbon::now()])->orderBy('views', 'desc')->limit(10)->get();

        $notPopularArticles = Article::where('state', 1)->where('created_at','<=', Carbon::now())->whereBetween('created_at', [Carbon::now()->subDays(3), Carbon::now()])->orderBy('views', 'asc')->limit(10)->get();

        // $ceoNotes = Category::where('slug', 'یادداشت-مدیر-مسئول')->with(['article' => function($query)
        $ceoNotes = Category::where('slug', 'سیاست')->with(['article' => function($query)
        {
            $query->where('cover', '!=', 'ghost.png')
                ->where('created_at', '<=', Carbon::now())
                ->limit(5)
                ->latest();
        }
        ])->get();

        $advertises = Advertise::where('state', 1)->get();

        $settings['website_name'] = Setting::where('name', 'website_name')->first();

        $settings['title_delimiter'] = Setting::where('name', 'title_delimiter')->first();

        $settings['logo_src'] = Setting::where('name', 'logo_src')->first();

        $settings['before_body_codes'] = Setting::where('name', 'before_body_codes')->first();

        $settings['end_body_codes'] = Setting::where('name', 'end_body_codes')->first();

        $settings['site_down'] = Setting::where('name', 'site_down')->first();

        $settings['menu_structure'] = Setting::where('name', 'menu_structure')->first();



        view()->share( compact( [
            'latestArticles',
            'categories',
            'settings',
            'notPopularArticles',
            'popularArticles',
            'ceoNotes',
            'advertises'
        ] ) );
    }
}
