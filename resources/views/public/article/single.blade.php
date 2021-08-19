@extends('public.template')

@section('meta')
<title>{{ $article[0]->title . ' ' . $settings['title_delimiter']->value . ' ' . $settings['website_name']->value }}</title>
@if(!is_null($article[0]->meta_description))
<meta name="description" content="{{ $article[0]->meta_description }}">
@endif
@if(!is_null($article[0]->meta_robots))
<meta name="robots" content="{{ $article[0]->meta_robots }}">
@endif
@endsection

@section('content')
<ul class="uk-breadcrumb" style="
                                                        text-overflow: ellipsis;
                                                        white-space: nowrap;
                                                        overflow: hidden;
                                                        width: 100%;
                                                        ">
    <li><a href="{{ route('Home') }}">خانه</a></li>
    <li><a href="{{ route('Blog') }}">بلاگ</a></li>
    @if(count($article[0]->category->all()))
        <li>
            <a href="{{ route('Category > Archive', $article[0]->category->first()->slug) }}">{{ $article[0]->category->first()->name }}</a>
        </li>
    @else
        <li><a>بدون دسته‌بندی</a></li>
    @endif
    <li class="uk-disabled"><a>{{ $article[0]->title }}</a></li>
</ul>

<article class="article uk-background-default uk-border-rounded">

    <!-- Advertise socket - section 001 -->
    <div class="uk-margin">
        @if(count($advertises) > 0)
            @foreach($advertises->where('socket', 'article-001')->all() as $advertise)
                @if($advertise->just_admin && !Auth::check())
                    @break
                @else
                    <div>
                        {!! $advertise->content !!}
                    </div>
                    <hr>
                @endif
            @endforeach
        @endif
    </div>
    <!-- Advertise socket - section 001 -->

    <!-- article cover and meta box for small-screens -->
    <div class="uk-hidden@m">
        @if($article[0]->cover)
            <img class="uk-align-center uk-border-rounded"
                 src="{{ $article[0]->cover }}"
                 alt="{{ $article['0']->meta_title }}"
                 uk-img>
        @endif
        <metabox>
            <div class="uk-container uk-background-muted uk-padding@m uk-border-rounded">
                <a class="uk-text-meta uk-text-right">{{ $article[0]->rootitr }}</a>
                <h1 class="uk-margin-top uk-text-lead uk-text-right fa-kit-medium">{{ $article[0]->title }}</h1>
                <!-- category -->
                <div style="direction: rtl">
                    <span uk-icon="icon: folder"></span> <span class="uk-text-meta">دسته‌بندی: </span>
                    @if(count($article[0]->category->all()))
                        @foreach($article[0]->category->all() as $category)
                            <a class="uk-label uk-box-shadow-hover-small uk-background-muted uk-link-reset theme-color-red"
                               href="{{ route('Category > Archive', $category->slug) }}">{{ $category->name }}</a>
                            @if(!$loop->last)
                                ،
                            @endif
                        @endforeach
                    @else
                        <a class="theme-color-red">بدون دسته‌بندی</a>
                    @endif
                </div>
                <!-- category -->
                <hr/>
                <!-- date -->
                <div class="uk-text-center uk-margin-bottom" style="direction: ltr">
                    @php
                        $jalaliDate = new Verta($article[0]->created_at);
                        $jalaliDate->timezone('Asia/Tehran');
                        Verta::setStringformat('Y/n/j H:i');
                        $jalaliDate = Verta::instance($article[0]->created_at);
                        $jalaliDate = Facades\Verta::instance($article[0]->created_at);
                        $jalaliDate = explode(' ', $jalaliDate);
                        $jalaliDate = $jalaliDate[0] . ' ' . $jalaliDate[1];
                    @endphp
                    <span class="uk-text-meta fa-num"> <span uk-icon="clock"></span> {{ $jalaliDate }}</span>
                </div>
                <!-- date -->
            </div>
        </metabox>
    </div>
    <!-- article cover and meta box for small-screens -->

    <!-- article cover and meta box for med/large-screens -->
    <div class="uk-visible@m">
        <div>
            <div class="uk-inline uk-width-1-1 check-here">
                @if($article[0]->cover == 'ghost.png' || is_null($article[0]->cover))
                    <metabox>
                        <div class="uk-container uk-background-muted uk-padding@m uk-border-rounded">
                            <a class="uk-text-meta uk-text-right">{{ $article[0]->rootitr }}</a>
                            <h1 class="uk-margin-top uk-text-lead uk-text-right fa-kit-medium">{{ $article[0]->title }}</h1>
                        </div>
                    </metabox>
                @else
                <img class="uk-margin-remove uk-align-center uk-border-rounded"
                     src="{{ $article[0]->cover }}"
                     alt="{{ $article['0']->meta_title }}" style="min-width: 100%;" uk-img>
{{--                <div class="uk-position-top-left uk-label uk-margin uk-margin-left fa-num">--}}
{{--                    بازدید: {{ $article[0]->views }}</div>--}}
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-border-rounded">
                    <div style="direction: rtl">
                        <!-- title -->
                        <div class="uk-padding-remove" uk-grid>
                            <div>
{{--                                <img class="uk-border-pill uk-float-right"--}}
{{--                                     src="{{ asset('/assets/image/smlarbavaconprd.png') }}"--}}
{{--                                     style="width:55px; height:55px;">--}}

                                    <span uk-icon="icon: file-text; ratio: 2"></span>
                            </div>
                            <div class="uk-width-expand">
                                <a class="uk-text-meta uk-text-right">{{ $article[0]->rootitr }}</a>
                                <h1 class="uk-text-lead uk-margin-remove">{{ $article[0]->title }}</h1>
                                <span
                                    class="uk-text-meta">{{ $article[0]->writer }}</span>
                            </div>
                        </div>
                        <!-- title -->
                    </div>
                </div>
            </div>
            @endif
        </div>
        <div class="uk-margin-top">
            <!-- category -->
            <span uk-icon="icon: folder"></span> <span class="uk-text-meta">دسته‌بندی: </span>
            @if(count($article[0]->category->all()))
                @foreach($article[0]->category->all() as $category)
                    <a class="uk-label uk-box-shadow-hover-small uk-background-muted uk-link-reset theme-color-red"
                       href="{{ route('Category > Archive', $category->slug) }}">{{ $category->name }}</a>
                    @if(!$loop->last)
                        ،
                    @endif
                @endforeach
            @else
                <a class="theme-color-red">بدون دسته‌بندی</a>
            @endif
        <!-- category -->

            <!-- date -->
            @php
                $jalaliDate = new Verta($article[0]->created_at);
                $jalaliDate->timezone('Asia/Tehran');
                Verta::setStringformat('Y/n/j H:i:s');
                $jalaliDate = Verta::instance($article[0]->created_at);
                $jalaliDate = Facades\Verta::instance($article[0]->created_at);
                $jalaliDate = explode(' ', $jalaliDate);
                $jalaliDate = $jalaliDate[1] . ' ' . $jalaliDate[0];
            @endphp
            <div class="uk-float-left"><span class="uk-text-meta fa-num"> {{ $jalaliDate }} <span uk-icon="clock"></span></span>
            </div>
            <!-- date -->
        </div>
    </div>
    <!-- article cover and meta box for med/large-screens -->

    <content class="uk-text-justify">
        <div class="uk-margin-medium-top fa-num" id="print_article">
            @php
                // $content = str_replace('<video', '<video-js', $article[0]->content);
                // $content = str_replace('</video>', '</video-js>', $content);
                $content = str_replace('<video ', '<video preload="metadata"
                                                poster="'. $article[0]->cover .'"
                                                style="width: 100% !important; border-radius: 10px; margin: 3%"
                                                uk-video="autoplay: false"
                                                id="video"', $article[0]->content);
                $content = str_replace('<p', '<p class="fa-num"', $content)
            @endphp
            {{-- cover for printing--}}
            <img src="{{ $article[0]->cover }}" style="visibility: hidden; display: none" >

            {!! $content !!}
        </div>
    </content>

    <metabox>
        <div class="uk-container uk-text-center uk-background-muted uk-padding uk-margin uk-border-rounded">

            @if(count($article[0]->tag->all()) > 0)
                <span uk-icon="icon: bookmark"></span> <span class="uk-text-meta">برچسب: </span>
                @if(count($article[0]->tag->all()))
                    @foreach($article[0]->tag->all() as $tag)
                        <a class="uk-label uk-box-shadow-hover-small uk-background-muted uk-link-reset"
                           href="{{ route('Tag > Archive', $tag->slug) }}">{{ $tag->name }}</a>
                        @if(!$loop->last)
                            ،
                        @endif
                    @endforeach
                @else
                    <a>بدون برچسب</a>
                    @endif
                    </span>
                @endif

                <hr>

                <a class="uk-icon-button" uk-icon="whatsapp" rel="nofollow"
                   href="whatsapp://send?text={{ urldecode(urlencode(route('Article > Single', $article[0]->slug))) }}"
                   target="_blank"></a>

                <a class="uk-icon-button" uk-icon="twitter" rel="nofollow"
                   href="http://twitter.com/intent/tweet/?text={{ $article[0]->meta_description }};url={{ urldecode(urlencode(route('Article > Single', $article[0]->slug))) }}"
                   target="_blank"></a>

                <a class="uk-icon-button" uk-icon="linkedin" rel="nofollow"
                   href="http://www.linkedin.com/shareArticle?mini=true&amp;url={{ urldecode(urlencode(route('Article > Single', $article[0]->slug))) }};title={{ $article[0]->title }};source={{ route('Home') }}"
                   target="_blank"></a>

                <a class="uk-icon-button" uk-icon="print" onclick="printJS({ printable: 'print_article', type: 'html'})"></a>


                <br>
                <br>
                <br>

                <input class="uk-hidden" type="text" id="DirectUrl" value="{{ route('Article > Direct', $article[0]->id) }}">
                <a uk-tooltip="لینک کوتاه" onclick="CopyUrl()" class="uk-text-meta uk-link-reset">{{ route('Article > Direct', $article[0]->id) }} <span uk-icon="link"></span></a>

                <script>
                    function CopyUrl() {
                        var copyText = document.getElementById("DirectUrl");
                        copyText.select();
                        copyText.setSelectionRange(0, 99999)
                        document.execCommand("copy");
                        UIkit.notification({
                            message: "<span uk-icon='icon: copy'></span> کپی شد.",
                            pos: 'bottom-right',
                            status: 'success'
                        });
                    }
                </script>
        </div>
    </metabox>

    <!-- Advertise socket - section 003 -->
    <div class="uk-margin">
        @if(count($advertises) > 0)
            @foreach($advertises->where('socket', 'article-003')->all() as $advertise)
                @if($advertise->just_admin && !Auth::check())
                    @break
                @else
                    <div>
                        {!! $advertise->content !!}
                    </div>
                    <hr>
                @endif
            @endforeach
        @endif
    </div>
    <!-- Advertise socket - section 003 -->

    </comment>
    @if( env('DISQUS_SYSTEM') )
        @include('public.article.disqus')
    @else
        @include('public.article.comments')
    @endif
    </comments>
</article>
@endsection
