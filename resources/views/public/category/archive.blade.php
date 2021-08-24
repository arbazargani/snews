@extends('public.template')

@section('meta')
    <title>{{ 'آرشیو دسته ' . $category[0]->name . ' ' . $settings['title_delimiter']->value . ' ' . $settings['website_name']->value }}</title>
    <meta name="description" content="آرشیو دسته ‌{{ $category[0]->name }}">
    <meta name="robots" content="index, follow">
@endsection

@section('content')
<!-- breadcrumbs -->
<ul class="uk-breadcrumb uk-margin-medium-right">
    <li><a href="{{ route('Home') }}">خانه</a></li>
    <li class="uk-disabled"><a>دسته</a></li>
    <li><a href="{{ route('Category > Archive', $category[0]->slug) }}">{{ $category[0]->name }}</a></li>
    <li class="uk-disabled"><a>آرشیو</a></li>
</ul>
<!-- breadcrumbs -->

<!-- content -->
<div class="uk-article">
            <h1 class="uk-text-lead">{{ 'آرشیو دسته: ' . $category[0]->name }}</h1>
            <hr>
            @if(count($PaginatedCategories))
            @foreach($PaginatedCategories as $article)
            @php

                $jalaliDate = new Verta($article->created_at);
                $jalaliDate->timezone('Asia/Tehran');
                Verta::setStringformat('Y/n/j H:i');
                $jalaliDate = Verta::instance($article->created_at);
                $jalaliDate = Facades\Verta::instance($article->created_at);
                $jalaliDate = explode(' ', $jalaliDate);
                $jalaliDate = $jalaliDate[1] . ' ' . $jalaliDate[0];
            @endphp
            <div class="article uk-margin @if($loop->even) uk-background-default @else uk-background-secondary uk-light @endif uk-border-rounded uk-box-shadow-small uk-box-shadow-hover-large">
                <div class="uk-container" uk-grid>
                    <div class="uk-width-1-3@m">
                        <a class="uk-link-reset" href="{{ route('Article > Single', $article->slug) }}"><img class="uk-border-rounded" src="{{ $article->cover }}" style="width: auto;"></a>
                    </div>
                    <div class="uk-width-2-3@m">
                        <p>
                            <a class="uk-link-reset" href="{{ route('Article > Single', $article->slug) }}"><h3 class="uk-margin-small-top uk-margin-small-bottom uk-text-lead">{{ $article->title }}</h3></a>
                            <span class="uk-text-meta fa-num"><span uk-icon="clock" class="uk-margin-small-left"></span> {{ $jalaliDate }}</span>
{{--                            <hr class="uk-divider-small">--}}
                            <div uk-grid>
                                <div class="uk-width-5-6">
                                    <p class="uk-text-truncate">
                                        <span>{{ $article->meta_description }}</span>
                                    </p>
                                </div>

                                <div class="uk-width-1-6">
                                    <a class="uk-bage uk-badge" href="{{ route('Article > Single', $article->slug) }}"><span uk-icon="arrow-right"></span></a>
                                </div>
                            </div>

                        </p>
                    </div>
                </div>
            </div>
            @endforeach

            <!-- paginator -->
            {{ $PaginatedCategories->links("pagination::uikit") }}
            <!-- paginator -->

            @else
            <div class="article uk-margin uk-background-default uk-border-rounded uk-box-shadow-small uk-box-shadow-hover-large">
                <div class="uk-container uk-padding-remove">
                    <div class="uk-alert uk-alert-warning">
                        <p>نوشته‌ای در این دسته وجود ندارد</p>
                    </div>
                </div>
            </div>
            @endif

            @if($category[0]->id == env('NEWSPAPER_CATEGORY_ID'))
                @php
                    $dir = 'repository';
                    $versions = new \App\Http\Controllers\NewspaperController();
                    $versions = $versions->ListDir();
                @endphp
                    @foreach ($versions as $version)
                        @if($version !== '.' && $version !== '..' && $version !== '.ftpquota' && $version !== 'final.php')
                    <div class="article uk-margin uk-background-default uk-border-rounded uk-box-shadow-small uk-box-shadow-hover-large">
                        <div class="uk-container" uk-grid>
                            <div class="uk-width-1-3@m">
                                <a class="uk-link-reset" href=""><img class="uk-border-rounded" src="/repository/{{ $version }}/frontpage_{{ $version }}.jpg" style="width: auto;"></a>
                            </div>
                            <div class="uk-width-2-3@m">
                                <p>
                                    <a class="uk-link-reset" href=""><h3 class="uk-margin-small-top uk-margin-small-bottom uk-text-lead">روزنامه صمت شماره {{ $version }}</h3></a>
    {{--                            <span class="uk-text-meta fa-num"><span uk-icon="clock" class="uk-margin-small-left"></span> {{ $jalaliDate }}</span>--}}
                                {{--                            <hr class="uk-divider-small">--}}
                                <div uk-grid>
                                    <div class="uk-width-5-6">
                                        <p class="uk-text-truncate">
    {{--                                        <span>{{ $article->meta_description }}</span>--}}
                                        </p>
                                    </div>

                                    <div class="uk-width-1-6">
                                        <a class="uk-bage uk-badge" href="{{ route('Newspaper > Download') }}?version={{$version}}">دانلود <span uk-icon="arrow-right"></span></a>
                                    </div>
                                </div>

                                </p>
                            </div>
                        </div>
                    </div>
                        @endif
                    @endforeach
            @endif
        </div>
<!-- content -->

@endsection
