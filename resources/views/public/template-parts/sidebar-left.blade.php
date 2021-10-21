<div class="uk-background-default uk-border-rounded">
    <!-- socket - special archive -->
        <div class="sidebar-element uk-margin-small-bottom">
            <div class="uk-card uk-card-hover uk-card-body">
                <h3 class="uk-card-title uk-text-meta">
                    <span class="pulse"></span>
                    <span>{{ $settings['special_archive']->title }}</span>
                </h3>
                <hr class="uk-divider-small">
                <a href="{{ $settings['special_archive']->value }}">
                    <img class="uk-border-rounded" src="https://smtnews.ir/storage/uploads/special_archive.jpg">
                </a>
            </div>
        </div>
    <!-- socket - special archive -->
    @php
    if(\Illuminate\Support\Facades\Cache::has('newspaper')) {
        $newspaper = \Illuminate\Support\Facades\Cache::get('newspaper');
    } else {
        $newspaper = \App\Category::with(['article' => function($query) {
                                            $query->where('state', 1)
                                            ->latest();
                                        }])
                                        ->where('id', env('NEWSPAPER_CATEGORY_ID'))
                                        ->get();
        \Illuminate\Support\Facades\Cache::put('newspaper', $newspaper, now()->addMinutes(40));
    }
        $version = (!count($newspaper) || !count($newspaper[0]->article)) ? null : $newspaper[0]->article[0];
    @endphp
    <!-- socket - newsppaer -->
    @if(!is_null($version))
        <div class="sidebar-element uk-margin-remove-top">
            <div class="uk-card uk-card-hover uk-card-body">
                <h3 class="uk-card-title uk-text-meta">
                    <span class="pulse"></span>
                    <span>آرشیو روزنامه</span>
                </h3>
                <hr class="uk-divider-small">
                <img class="uk-border-rounded" src="{{ env('SITE_URL') . "/repository/" . strip_tags($version->content) . "/frontpage_" . strip_tags($version->content ) . ".jpg" }}" alt="{{ $version->title }}">
                <hr>

                <a href="{{ route('Article > Single', $version->slug) }}">
                    <button class="uk-button uk-margin-small-top uk-text-center uk-button-text"><span
                            uk-icon="arrow-right"></span>
                        {{ $version->title }}
                    </button>
                </a>
            </div>
        </div>
    @endif
    <!-- socket - newsppaer -->

    <!-- socket - thumbnail article -->
    <div class="sidebar-element">
        <div class="uk-card uk-card-hover uk-card-body">
            <h3 class="uk-card-title uk-text-meta">
                <span class="pulse"></span>
                <span>یادداشت مدیر مسئول</span>
            </h3>
            <hr class="uk-divider-small">
            @include('public.template-parts.timeline')
        </div>
    </div>
    <!-- socket - thumbnail article -->

    <!-- Advertise socket - section 001 -->
    <div class="sidebar-element" id="advertise-socket-sidebar-001">
        @if(count($advertises) > 0)
            @foreach($advertises->where('socket', 'sidebar-001')->all() as $advertise)
                @if($advertise->just_admin && !Auth::check())
                    @break
                @else
                    <div class="uk-card uk-card-hover uk-card-body @if($advertise->mobile_only) uk-hidden@s @endif">
                        {!! $advertise->content !!}
                    </div>
                @endif
            @endforeach
        @endif
    </div>
    <!-- Advertise socket - section 001 -->

    <!-- Advertise socket - section 002 -->
    <div class="sidebar-element" id="advertise-socket-sidebar-002">
        @if(count($advertises) > 0)
            @foreach($advertises->where('socket', 'sidebar-002')->all() as $advertise)
                @if($advertise->just_admin && !Auth::check())
                    @break
                @else
                    <div class="uk-card uk-card-hover uk-card-body @if($advertise->mobile_only) uk-hidden@s @endif">
                        {!! $advertise->content !!}
                    </div>
                @endif
            @endforeach
        @endif
    </div>
    <!-- Advertise socket - section 002 -->

    <!-- Advertise socket - section 003 -->
    <div class="sidebar-element" id="advertise-socket-sidebar-003">
        @if(count($advertises) > 0)
            @foreach($advertises->where('socket', 'sidebar-003')->all() as $advertise)
                @if($advertise->just_admin && !Auth::check())
                    @break
                @else
                    <div class="uk-card uk-card-hover uk-card-body @if($advertise->mobile_only) uk-hidden@s @endif">
                        {!! $advertise->content !!}
                    </div>
                @endif
            @endforeach
        @endif
    </div>
    <!-- Advertise socket - section 003 -->

    <!-- Advertise socket - section 004 -->
    <div class="sidebar-element" id="advertise-socket-sidebar-004">
        @if(count($advertises) > 0)
            @foreach($advertises->where('socket', 'sidebar-004')->all() as $advertise)
                @if($advertise->just_admin && !Auth::check())
                    @break
                @else
                    <div class="uk-card uk-card-hover uk-card-body @if($advertise->mobile_only) uk-hidden@s @endif">
                        {!! $advertise->content !!}
                    </div>
                @endif
            @endforeach
        @endif
    </div>
    <!-- Advertise socket - section 004 -->

</div>
