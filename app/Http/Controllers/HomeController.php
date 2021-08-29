<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Article;
use App\Category;
use App\Setting;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // auth middleware for entire application
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function Index(Request $request)
    {
//        $sliderArticles = Article::latest()->where('state', 1)
//                                            ->where('created_at','<=', Carbon::now())
//                                            ->where('cover', '!=', 'ghost.png')
//                                            ->limit(5)->get();
        $level_one_articles = Category::where('id', env('LEVEL_one_CATEGORY_ID'))->with(['article' => function($query)
            {
                $query->where('cover', '!=', 'ghost.png')
                    ->latest()->first();
            }]
        )->get();

        $homeTitle = Setting::where('name', 'meta_title')->first();
        $homeDescription = Setting::where('name', 'meta_description')->first();

        $bankAndInsuranceArticles = $this->GetCategoryLatest('بانک-و-بیمه');

        $carIndustry = $this->GetCategoryLatest('صنعت-خودرو');

        $industry = $this->GetCategoryLatest('صنعت');

        $mine = $this->GetCategoryLatest('معدن');

        $commerce = $this->GetCategoryLatest('تجارت');
        
        $economy = $this->GetCategoryLatest('اقتصاد');

        if ($request->isMethod('get')) {
            if ($request->has('query') && !is_null($request['query'])) {
                $query = $request['query'];
                $articles = Article::where([
                    ['state', '=', 1],
                    ['created_at', '<=', Carbon::now()],
                    ['title', 'LIKE', '%' . $query . '%']
                ])->orWhere([
                    ['state', '=', 1],
                    ['created_at', '<=', Carbon::now()],
                    ['content', 'LIKE', '%' . $query . '%']
                ])->paginate(10);
                return view('public.home.search', compact('articles'));
            }
        }

        return view('public.home.index', compact([
            'level_one_articles',
            'homeTitle',
            'homeDescription',
            'bankAndInsuranceArticles',
            'carIndustry',
            'industry',
            'mine',
            'commerce',
            'economy'
        ]));
    }

    /**
     * @param $query
     */
    public function Search($query) {

    }
    
    public function GetCategoryLatest($slug, $limit = 3) {
        $data = Category::where('slug', "$slug")->with(['article' => function($query) use ($limit)
        {
            $query->where('cover', '!=', 'ghost.png')
                ->where('created_at', '<=', Carbon::now())
                ->limit($limit)
                ->latest();
        }
        ])->get();
        $data = $data[0]->article;

        return $data;
    }

    public function Faker()
    {
        $article = factory(Article::class, 100)->create();
    }

    public function MenuStructureWithParents()
    {
        $menu_structure = Category::where('id', '!=', '1')->where('parent', '!=', -1)->where('show_in_menu', '=', 1)->get()->groupBy('parent');
        return $menu_structure;
    }

    public function MenuStructureWithoutParents()
    {
        $menu_structure = $this->MenuStructureWithParents();
        $used_categories = [1];
        foreach ($menu_structure as $parents => $childs) {
            $used_categories[] = $parents;
        }
        $single_categories = Category::where('parent', -1)->WhereNotIn('id', $used_categories)->where('show_in_menu', '=', 1)->get();

        return $single_categories;
    }

    public function Test()
    {
        $user = new User();
        $user->CanEditPages();
    }
}
