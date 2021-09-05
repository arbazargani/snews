@extends('public.template')

@section('meta')
<title>{{ 'نتایج جستجو' . " " . $settings['title_delimiter']->value . " " . $settings['website_name']->value }}</title>
    <meta name="description" content="{{ 'نتایج جستجو'}}">
    <meta name="robots" content="index, follow">
@endsection

@section('content')
<ul class="uk-breadcrumb uk-margin-medium-right">
    <li><a href="{{ route('Home') }}">خانه</a></li>
    <li class="uk-disabled"><a>نتایج جستجو</a></li>
    @if(isset($_GET['query']))
    <li class="uk-disabled"><a>{{ $_REQUEST['query'] }}</a></li>
    @endif
</ul>
<div class="uk-padding-small" uk-grid>
    <div class="uk-article uk-width-1-1@m">
        <article class="article uk-padding">
            <!-- socket - search -->
            <div class="uk-card uk-card-hover uk-card-body">
                <!-- <h3 class="uk-card-title uk-text-meta">جستجو</h3> -->
                <!-- <hr class="uk-divider-small"> -->
                <form class="uk-grid-small" action="{{ route('Old Search') }}" uk-grid>
                    <div class="uk-width-3-4@m">
                        <input class="uk-input" type="text" name="query" id="query" placeholder="جستجو در اخبار قدیمی">
                    </div>
                    <div class="uk-width-1-4@m">
                        <button class="uk-button uk-button-primary theme-background-red" type="submit"><span uk-icon="search"></span></button>
                    </div>
                </form>
            </div>
            <!-- socket - search -->
            @if(isset($_GET['query']))
            <h1 class="uk-text-lead">{{ 'نتایج جستجو: ' . $_REQUEST['query'] }}</h1>
            @endif
            <hr>
            @if($articles !== false && count($articles) !== 0)
                <div class="uk-child-width-1-2@m" uk-grid="masonry: true" uk-grid>
                    @foreach ($articles as $article)
                    <div>
                        <div class="uk-card uk-card-default uk-card-hover uk-border-rounded">
                            <div class="uk-card-media-top">
                                @php
                                $category = DB::connection('mysql_sec')->select("SELECT * FROM `smtnw6_categories` WHERE `id` = '". $article->catid ."'");
                                @endphp
                                <!-- <a href="{{ route('Old cms > News > Simple > Short', [$category[0]->alias, $article->id]) }}"><img src="https://smtnews.ir/{{ json_decode($article->images)->image_intro }}" alt="" class="uk-border-rounded" style="width: 100%; height: 180px;"></a> -->
                            </div>
                            <div class="uk-card-body">
                                @php
                                    $jalaliDate = new Verta($article->created);
                                    $jalaliDate->timezone('Asia/Tehran');
                                    Verta::setStringformat('Y/n/j H:i');
                                    $jalaliDate = Verta::instance($article->created);
                                    $jalaliDate = Facades\Verta::instance($article->created);
                                @endphp
                                <!-- <div class="uk-card-badge uk-label kit-lite">{{ $article->hits }} بازدید</div> -->
                                <h2 class="uk-card-title uk-text-lead"><a href="{{ route('Old cms > News > Simple > Short', [$category[0]->alias, $article->id]) }}" class="uk-link-heading fa-kit-medium">{{ $article->title }}</a></h2>
                                <p class="uk-text-meta uk-margin-remove-top"><time class="fa-num" datetime="{{ $article->created }}">{{ $jalaliDate }}</time></p>
                            </div>
                            <a class="uk-button uk-button-primary theme-background-red" style="width: 100%; border-radius: 0px 0px 5px 5px;" href="{{ route('Old cms > News > Simple > Short', [$category[0]->alias, $article->id]) }}">بازدید</a>
                        </div>
                    </div>
                    @endforeach
                </div>
            @else
                <div class="uk-alert-warning" uk-alert>
                    <p>جستجوی شما نتیجه‌ای نداشت.</p>
                </div>
            @endif

            @if(isset($_GET['query']))
            <hr>
            <?php
                $prev = (isset($_GET['page']) && $_GET['page'] > 0) ? $_GET['page']-1 : '1';
                $next = (isset($_GET['page']) && $_GET['page'] == 1) ? $_GET['page']+1 : 1;
                $next = (!isset($_GET['page'])) ? 2 : $_GET['page']+1;
            ?>
            <div class="uk-container">
                <ul class="uk-pagination">
                    <li><a href="?query={{ $_GET['query'] }}&page={{ $prev }}"><span class="uk-margin-small-right" uk-pagination-previous></span> قبل</a></li>
                    <li class="uk-margin-auto-left uk-float-left"><a href="?query={{ $_GET['query'] }}&page={{ $next }}">بعد <span class="uk-margin-small-left" uk-pagination-next></span></a></li>
                </ul>
            </div>
            @endif
        </article>
    </div>
</div>
@endsection
