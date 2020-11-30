<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css2?family=Bangers:wght@400&display=swap" rel="stylesheet"> 
<link rel="stylesheet" href="{{ mix('/css/app.css') }}">
<link rel="icon" href="{{ asset('/favicon.svg') }}" sizes="any" type="image/svg+xml">
<link rel="icon" href="{{ asset('/favicon.png') }}" type="image/png">

@php
  $accentColors = ['#AC6BFF', '#3B82F6', '#14B8A6', '#F97316', '#EF4444', '#DB2777'];
  $accentColor = collect($accentColors)->random();
@endphp

<style type="text/css">
  :root {
    --osm-accent: {{ $accentColor }};
  }
</style>