<div style="background: #1b1919; padding: 10px !important" class="uk-section uk-padding-remove">
@php
    $jdate = new Verta();
    $jdate = verta();
    $jdate = $jdate->format('%d %B، %Y');
@endphp
<p class="uk-text-meta fa-num" style="color: white; margin-right: 2%">{{ $jdate }}</p>
</div>