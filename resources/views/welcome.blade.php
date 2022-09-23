<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.6.1/lux/bootstrap.min.css"
        integrity="sha512-v51SrQ+z+dLohC1d0HyJA0nSM6XIyLoQl3IxRtM28vlbOPBRMSD3MlyUMNkLyBPlVGxt+9V+ChVG2c8LQsiu3w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Laravel</title>
</head>

<body>
    <div id="app"></div>

    <script src="{{ mix('/js/app.js') }}"></script>
</body>

</html>
