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

Auth::routes();

Route::get('/user/logout', 'UserController@logout')->name('User > Logout');

Route::get('/', 'HomeController@Index')->name('Home');

Route::get('/home', function () {
    if (Auth::check()) {
        return redirect()->route('Admin');
    }
    return redirect()->route('Home');
});

Route::get('index.html', function () {
   return redirect()->route('Home');
});

Route::get('/blog', function() {
    return redirect(route('Home'));
})->name('Blog');

Route::get('/article/{slug}', 'ArticleController@Show')->middleware('CheckPageState')->name('Article > Single');
// Route::get('/amp/article/{slug}', 'ArticleController@Show')->middleware('CheckPageState')->name('Article > Single > AMP');
Route::get('/direct/{id}', 'ArticleController@Direct')->name('Article > Direct');

Route::get('page/{slug}', 'PageController@Show')->name('Page > Single');
// Route::get('/amp/{slug}', 'PageController@Show')->name('Page > Single > AMP');

Route::get('/tag/{slug}', 'TagController@Archive')->name('Tag > Archive');
// Route::get('/amp/tag/{slug}', 'TagController@Archive')->name('Tag > Archive > AMP');

Route::get('/category/{slug}', 'CategoryController@Archive')->name('Category > Archive');
// Route::get('/amp/category/{slug}', 'CategoryController@Archive')->name('Category > Archive > AMP');

Route::get('/author/{username}', 'UserController@Archive')->name('User > Archive');

Route::post('/comment/{id}/submit' ,'CommentController@Submit')->name('Comment > Submit');

Route::prefix('admin')->middleware('auth', 'HasAdminAccess', 'CheckPageState')->group(function () {
    Route::get('/', 'AdminController@Index')->name('Admin');

    Route::get('profile', 'UserController@Profile')->name('Profile');
    Route::post('profile/update', 'UserController@Update')->name('Profile > Update');

    Route::get('settings', 'SettingController@Manage')->name('Setting');
    Route::post('settings/update', 'SettingController@Update')->name('Setting > Update');


    Route::get('users', 'UserController@Manage')->name('Users > Manage');
    Route::post('users/{id}/update', 'UserController@Update')->name('User > Update');
    Route::post('users/{id}/lock', 'UserController@Lock')->name('User > Lock');
    Route::post('users/{id}/unlock', 'UserController@Unlock')->name('User > Unlock');

    Route::get('article/new', 'ArticleController@New')->name('Article > New');
    Route::post('article/new/submit', 'ArticleController@Submit')->name('Article > Submit');
    Route::get('article/manage/', 'ArticleController@Manage')->name('Article > Manage');
    Route::get('article/edit/{id}', 'ArticleController@Edit')->name('Article > Edit');
    Route::post('article/edit/{id}/update', 'ArticleController@Update')->name('Article > Update');
    Route::post('article/delete/{id}', 'ArticleController@DeleteTemporary')->name('Article > Delete');
    Route::post('article/permanenet-delete/{id}/', 'ArticleController@DeletePermanently')->name('Article > Delete Permanently');
    Route::post('article/restore/{id}', 'ArticleController@Restore')->name('Article > Restore');

    Route::get('page/new', 'PageController@New')->name('Page > New');
    Route::post('page/new/submit', 'PageController@Submit')->name('Page > Submit');
    Route::get('page/manage/', 'PageController@Manage')->name('Page > Manage');
    Route::get('page/edit/{id}', 'PageController@Edit')->name('Page > Edit');
    Route::post('page/edit/{id}/update', 'PageController@Update')->name('Page > Update');
    Route::post('page/delete/{id}', 'PageController@DeleteTemporary')->name('Page > Delete');
    Route::post('page/permanenet-delete/{id}/', 'PageController@DeletePermanently')->name('Page > Delete Permanently');
    Route::post('page/restore/{id}', 'PageController@Restore')->name('Page > Restore');

    Route::get('tag', 'TagController@Manage')->name('Tag > Manage');
    Route::get('tag/ajax', 'TagController@Ajax')->name('Tag > Ajax');
    Route::post('tag/new/submit', 'TagController@Submit')->name('Tag > Submit');
    Route::post('tag/delete/{id}', 'TagController@Delete')->name('Tag > Delete');


    Route::get('category', 'CategoryController@Manage')->name('Category > Manage');
    Route::post('category/new/submit', 'CategoryController@Submit')->name('Category > Submit');
    Route::post('category/delete/{id}', 'CategoryController@Delete')->name('Category > Delete');


    Route::get('comment/manage/', 'CommentController@Manage')->name('Comment > Manage');
    Route::post('comment/approve/{id}/', 'CommentController@Approve')->name('Comment > Approve');
    Route::post('comment/unapprove/{id}/', 'CommentController@Unapprove')->name('Comment > Unapprove');
    Route::post('comment/delete/{id}', 'CommentController@Delete')->name('Comment > Delete');


    Route::get('advertise/new', 'AdvertiseController@New')->name('Advertise > New');
    Route::post('advertise/new/submit', 'AdvertiseController@Submit')->name('Advertise > Submit');
    Route::get('advertise/manage/', 'AdvertiseController@Manage')->name('Advertise > Manage');
    Route::get('advertise/edit/{id}', 'AdvertiseController@Edit')->name('Advertise > Edit');
    Route::post('advertise/edit/{id}/update', 'AdvertiseController@Update')->name('Advertise > Update');
    Route::post('advertise/delete/{id}', 'AdvertiseController@Delete')->name('Advertise > Delete');

});

Route::get('/sitemap_index.xml', 'SitemapController@Index')->name('Sitemap');
Route::get('/article-sitemap.xml', 'SitemapController@Article')->name('Sitemap > Articles');
Route::get('/page-sitemap.xml', 'SitemapController@Page')->name('Sitemap > Pages');
Route::get('/category-sitemap.xml', 'SitemapController@Category')->name('Sitemap > Categories');
Route::get('/tag-sitemap.xml', 'SitemapController@Tag')->name('Sitemap > Tags');

Route::get('/rss', 'FeedController@Index')->name('Rss');

/*
* old cms newspaper router
*/
//Route::get('/newspaper-archive/{param}.html', 'NewspaperController@OldEngine')->name('Old cms > Newspaper');

/*
* old cms news router
*/
Route::get('/{param_1}/{id}-{slug}.html', 'ArticleController@OldEngineSimple')->where(['id' => '[0-9]+'])->name('Old cms > News > Simple');
Route::get('/{param_1}/{id}', 'ArticleController@OldEngineSimple')->where(['id' => '[0-9]+'])->name('Old cms > News > Simple > Short');

Route::get('/{param_1}/{param_2}/{id}-{slug}.html', 'ArticleController@OldEngineComplex')->where(['id' => '[0-9]+'])->name('Old cms > News > Complex');
Route::get('/{param_1}/{param_2}/{id}', 'ArticleController@OldEngineComplex')->where(['id' => '[0-9]+'])->name('Old cms > News > Complex > Short');

/*
* old cms tags router
*/
Route::get('/component/tags/tag/{slug}.html', 'TagController@oldEngine')->name('Old cms > Tags');
Route::get('/tags/{id}', 'ArticleController@GetPostTagsFromID');


/*
* old cms categories router
*/
Route::get('/{param_1}/{param_2}.html', 'CategoryController@OldEngineComplex')->name('Old cms > Categories > Complex');
Route::get('/{param_1}.html', 'CategoryController@OldEngineSimple')->name('Old cms > Categories > Short');

//http://localhost:8000/newspaper-archive/51680-v1714.html

Route::get('faker', 'HomeController@Faker');

//Route::get('glide/{path}', function($path){
//    $server = \League\Glide\ServerFactory::create([
//        'source' => app('filesystem')->disk('public')->getDriver(),
//        'cache' => storage_path('glide'),
//    ]);
//    return $server->getImageResponse($path, Input::query());
//})->where('path', '.+');

Route::get('menu', 'HomeController@MenuStructureWithParents');
Route::get('wmenu', 'HomeController@MenuStructureWithoutParents');

Route::get('rule', 'HomeController@Test');

Route::get('/newspaper/listdir', 'NewspaperController@ListDir');
Route::get('/newspaper/download', 'NewspaperController@Download')->name('Newspaper > Download');
