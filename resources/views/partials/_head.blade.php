<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"> 
<link rel="stylesheet" href="{{ mix('/css/app.css') }}">
<link rel="icon" href="{{ asset('/favicon.png') }}" type="image/png">

@php
  $secondaryColors = ['#AC6BFF', '#3B82F6', '#14B8A6', '#84CC16', '#F59E0B', '#F97316', '#EF4444', '#DB2777'];
  $color = collect($secondaryColors)->random();
@endphp

<style type="text/css">
  :root {
    --osm-secondary: {{ $color }};
  }
</style>