<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <link rel="icon" href="favicon-32x32.png" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name') }}</title>
        <link rel="apple-touch-icon" href="favicon-32x32.png" />
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    </head>
    <body>
        <div id="app"></div>
        <noscript>
            <p>You need JavaScript enabled in order to run this site</p>
        </noscript>
        <script src="{{ mix('/js/index.js') }}"></script>
    </body>
</html>
