{{--<script id="dsq-count-scr" src="https://arbazargani.disqus.com/count.js" async></script>--}}

{{-- prism js --}}
<script src="{{ asset('assets/js/prism.js') }}"></script>

{{-- Count api --}}
<script>
    function liveViews(response) {
        document.getElementById('todayHits').innerText = response.value;
    }
</script>
<script async src="https://api.countapi.xyz/hit/smtnews.ir/{{date("Ymd")}}?callback=liveViews"></script>

