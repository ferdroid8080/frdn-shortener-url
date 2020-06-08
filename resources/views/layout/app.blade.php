<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Get shorten url - @yield('title')</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <style>
            body, html {
                margin: 0;
                padding: 0;
            }
        </style>
        @yield('create_styles')
    </head>
    <body>

        <div class="container">
            @yield('container')
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
</html>
