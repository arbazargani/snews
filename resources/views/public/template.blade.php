<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<meta name="generator" content="Mamooth CMS" />
		<meta name="Development" content="Primer Studio" />
		<meta name="author" content="SMTNEWS" />

		@yield('meta')

		<link rel="stylesheet" href="{{ asset('assets/css/uikit-rtl.min.css') }}" />
		<link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}" />
		<link rel="canonical" href="{{ urldecode(url()->current()) }}" />
		<script src="{{ asset('assets/js/uikit.min.js') }}"></script>
		<script src="{{ asset('assets/js/uikit-icons.min.js') }}"></script>

        {{-- prism js --}}
        <link rel="stylesheet" href="{{ asset('assets/css/prism.css') }}" />

        <link href="https://vjs.zencdn.net/7.7.5/video-js.css" rel="stylesheet" />

        <!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->
        <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>


    <style media="screen">
		@media screen and (max-width: 479px) {
			/* start of phone styles */
			h1 {
				font-size: 24px!important;
			}
			h2 {
				font-size: 20px!important;
			}
			h3 {
				font-size: 16px!important;
			}
			h4 {
				font-size: 16px!important;
			}
		}

        .pulse {
            /*margin:100px;*/
            margin-left: 8px;
            vertical-align: middle;
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #0F7AE5;
            cursor: pointer;
            box-shadow: #004c9b;
            animation: pulse 2s infinite;
        }
        .pulse:hover {
            animation: none;
        }

        @-webkit-keyframes pulse {
            0% {
                -webkit-box-shadow: 0 0 0 0 rgb(88, 169, 248);
            }
            70% {
                -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
            }
            100% {
                -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
            }
        }
        @keyframes pulse {
            0% {
                -moz-box-shadow: 0 0 0 0 rgb(88, 169, 248);
                box-shadow: 0 0 0 0 rgb(88, 169, 248);
            }
            70% {
                -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
                box-shadow: 0 0 0 10px rgba(204,169,44, 0);
            }
            100% {
                -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
                box-shadow: 0 0 0 0 rgba(204,169,44, 0);
            }
        }
		</style>
    {!! $settings['before_body_codes']->value !!}
</head>
<body class="uk-background-muted" id="top">
	<div class="uk-section-primary uk-preserve-color">
		<div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">
			@include('public.template-parts.header')
		</div>
		</div>

		<div style="padding: 1% 5% 1% 5%;" uk-grid>
			<!-- main -->
			<div class="uk-width-2-3@m">
				@yield('content')
			</div>
			<!-- main -->

			<!-- sidebar -->
			<div class="uk-width-expand@m">
			 @include('public.template-parts.sidebar')
			</div>
			<!-- sidebar -->
		</div>

		<div class="uk-position-small uk-padding-remove uk-position-fixed uk-position-bottom-right" id="top-btn-wrapper">
			<a href="#top" id="top-btn" uk-totop uk-scroll></a>
		</div>
		<script>
			//Get the button:
			mybutton = document.getElementById("top-btn-wrapper");

			// When the user scrolls down 20px from the top of the document, show the button
			window.onscroll = function() {scrollFunction()};

			function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block";
			} else {
				mybutton.style.display = "none";
			}
			}

			// When the user clicks on the button, scroll to the top of the document
			function topFunction() {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
			}
		</script>
		<!-- Advertise socket - position fixed -->
			@if(count($advertises) > 0)
					@foreach($advertises->where('socket', 'position_fixed_mobile')->all() as $advertise)
							@if($advertise->just_admin && !Auth::check())
									@break
							@else
									<div @if($advertise->mobile_only) class="uk-hidden@s" @endif style="z-index: 111; position: fixed; bottom: 0; width: 100%;">{!! $advertise->content !!}</div>
							@endif
					@endforeach
			@endif
		<!-- Advertise socket - position fixed -->
		@include('public.template-parts.footer')
		@include('public.template-parts.scripts')
    {!! $settings['end_body_codes']->value !!}
</body>
</html>
