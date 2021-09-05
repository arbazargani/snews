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
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;


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
                ])->orWhere([
                    ['state', '=', 1],
                    ['created_at', '<=', Carbon::now()],
                    ['writer', 'LIKE', '%' . $query . '%']
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
    public function OldSearch(Request $request) {
        if ($request->isMethod('get')) {
            if ($request->has('query') && !is_null($request['query'])) {
                $query = $request['query'];
                $qlimit = 20;
                $query = "SELECT * FROM `smtnw6_content` WHERE `title` LIKE '%$query%' LIMIT $qlimit";

                if ($request->has('page') && !is_null($request['page']) && $request['page'] > 1) {
                    $qoffset = $request['page']*20;
                    $query .= " OFFSET $qoffset";
                }
                $articles = DB::connection('mysql_sec')->select($query);
                // return $articles;
            }
        }
        if (!isset($articles)) {
            $articles = false;
            $query = '';
            return view('public.home.oldsearch', compact(['articles']));

        }

        // $articles = $this->arrayPaginatorV2($articles, $request);
        // $articles = new Paginator($articles, 20);

        // return var_dump(count($articles));

        return view('public.home.oldsearch', compact(['articles']));
    }

    public function arrayPaginatorV1($array, $request) {
        $page = Input::get('page', 1);
        $perPage = 10;
        $offset = ($page * $perPage) - $perPage;

        return new LengthAwarePaginator(array_slice($array, $offset, $perPage, true), count($array), $perPage, $page,
            ['path' => $request->url(), 'query' => $request->query()]);
    }

    public function arrayPaginatorV2($array, $request) {
        $page = Input::get('page', 1);
        $perPage = 10;
        $offset = ($page * $perPage) - $perPage;

        return new LengthAwarePaginator(
            array_slice(
                $array,
                $offset,
                $perPage,
                true
            ),
            count($array),
            $perPage,
            $page,
            ['path' => $request->url(), 'query' => $request->query()]
        );
    }

    public function GetOldNewsCategoriesFromID ($id) {
        return DB::connection('mysql_sec')->select("SELECT * FROM `smtnw6_categories` WHERE `id` = $id")[0];
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
