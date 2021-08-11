<?php

namespace App\Providers;

use App\Advertise;
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
        $date = date("Y-m-d H:i:s");

        $categories = Category::where('id', '!=', 1)->get();

        $latestArticles = Article::where('state', 1)->latest()->limit(5)->get();

        $popularArticles = Article::where('state', 1)->orderBy('views', 'desc')->limit(3)->get();

        $notPopularArticles = Article::where('state', 1)->orderBy('views', 'asc')->limit(10)->get();

        $advertises = Advertise::where('state', 1)->where('expires_at', '>', $date)->get();

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
            'advertises'
        ] ) );
    }
}
