<?php

namespace App\Http\Controllers;

use App\Tag;
use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;

use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

use Illuminate\Support\Facades\DB;

class TagController extends Controller
{
    public function Manage()
    {
        $tags = Tag::paginate(20);
        return view('admin.tag.manage', compact('tags'));
    }

    public function Submit(Request $request)
    {
        $request->validate([
            'name'=>'required|min:3|max:30',
            'slug'=>'max:30'
        ]);
        $tag = new Tag();
        $tag->name = $request['name'];
        if (isset($request['slug']) && !is_null($request['slug'])) {
            $tag->slug = SlugService::createSlug(Tag::class, 'slug', $request['slug']);
        }
        $tag->save();
        return redirect(route('Tag > Manage'));
    }

    public function Delete($id)
    {
        $tag = Tag::find($id)->delete();
        return back();
    }

    public function Archive(Request $request, $slug)
    {
        $tag = Tag::with('article')->where('slug', '=', $slug)->get();
        if (!count($tag)) {
          return abort('404');
        }

        //handle array of objects pagination

        // Get current page form url e.x. &page=1
        $currentPage = LengthAwarePaginator::resolveCurrentPage();

        // Create a new Laravel collection from the array data
        // $itemCollection = collect($items);
        $itemCollection = collect($tag[0]->article->where('state', 1)->reverse());

        // Define how many items we want to be visible in each page
        $perPage = 10;

        // Slice the collection to get the items to display in current page
        $currentPageItems = $itemCollection->slice(($currentPage * $perPage) - $perPage, $perPage)->all();

        // Create our paginator and pass it to the view
        $paginatedItems = new LengthAwarePaginator($currentPageItems , count($itemCollection), $perPage);

        // set url path for generted links
        $paginatedItems->setPath($request->url());

        $PaginatedTags = $paginatedItems;
  
        return view('public.tag.archive', compact('tag', 'PaginatedTags'));
    }

    public function oldEngine($slug) {
        $tag = DB::connection('mysql_sec')->select("SELECT * FROM `smtnw6_tags` WHERE `alias` = '$slug'");
        
        if (!count($tag)) {
            return abort('404');
        } else {
            $tag_id = $tag[0]->id;
        };

        $articles_id = DB::connection('mysql_sec')->select("SELECT DISTINCT `content_item_id` as `id` FROM `smtnw6_contentitem_tag_map` WHERE `tag_id` = '$tag_id' LIMIT 10");

        $articles = [];
        foreach ($articles_id as $article_id) {
            array_push ($articles, DB::connection('mysql_sec')->select("SELECT * FROM `smtnw6_content` WHERE `id` = {$article_id->id}")[0]);
        }

        return $articles;
    }
}
