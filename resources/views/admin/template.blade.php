<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="Development" content="Alireza Bazargani." />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="Tiny-CMS" />
    <meta name="author" content="Mamooth CMS" />
    <meta name="robots" content="noindex, nofollow">
    @yield('meta')

    {{-- UIkit --}}
    <link rel="stylesheet" href="{{ asset('assets/css/uikit-rtl.min.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}" />
    <script src="{{ asset('assets/js/uikit.min.js') }}"></script>
    <script src="{{ asset('assets/js/uikit-icons.min.js') }}"></script>
    <!-- <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script> -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>


    {{-- Bootstrap --}}
    {{--    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">--}}
    {{--    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">--}}
    {{--    <link rel="stylesheet" href="{{ asset('assets/css/file-manager.css') }}">--}}
    {{--    <script src="{{ asset('assets/js/file-manager.js') }}"></script>--}}

    {{-- DatePicker --}}
    <script src="{{ asset('assets/date_picker/js/datePickerMain.js') }}"></script>
    <script src="{{ asset('assets/date_picker/js/bootstrap-datepicker.fa.js') }}"></script>
    <link rel="stylesheet" href="{{ asset('assets/date_picker/css/bootstrap-datepicker.css') }}" />


    <style>
        *:not(i) {
            font-family: Vazir-light !important;
        }
        body {
            min-height: 100vh;
        }
    </style>
</head>
<body>
@include('admin.template-parts.topbar')
<div class="uk-background-muted" uk-grid>
    <div class="uk-visible@m uk-background-secondary" style="border: 1px solid lightgray;">
        @include('admin.template-parts.sidebar')
    </div>
    <div class="uk-hidden@m uk-width-1-1">
        @include('admin.template-parts.offcanvas')
    </div>
    <div class="uk-width-expand@m">
        @yield('content')
    </div>
    @include('admin.template-parts.footer')
</div>
    @include('admin.template-parts.scripts')
</body>
</html>
