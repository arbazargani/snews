@foreach($ceoNotes[0]->article as $article)
@php
    $jalaliDate = new Verta($article->created_at);
    $jalaliDate->timezone('Asia/Tehran');
    Verta::setStringformat('Y/n/j H:i');
    $jalaliDate = Verta::instance($article->created_at);
    $jalaliDate = Facades\Verta::instance($article->created_at);
    $jalaliDate = explode(' ', $jalaliDate);
    $jalaliDate = $jalaliDate[1] . ' ' . $jalaliDate[0];
@endphp
<div class="uk-card uk-card-default uk-card-body uk-padding-remove-top uk-border-rounded">
    <div class="uk-width-1-1@m uk-margin-small-bottom">
        <a href="{{ route('Article > Single', $article->slug) }}"><img src="{{ $article->cover }}" alt="{{ $article->title }}" class="uk-border-rounded" uk-img></a>
    </div>
    <a class="uk-link-reset uk-text-meta uk-card-title fa-num">{{ $jalaliDate }}</a>
    <a class="uk-link-reset" href="{{ route('Article > Single', $article->slug) }}"><h4 class="uk-h5">{{ $article->title }}</h4></a>
</div>
@endforeach