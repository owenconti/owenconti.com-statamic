<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="{{ $excerpt ?? "Web programming articles including tips, tricks, and tutorials on Laravel, PHP, React, Vue, MySQL and more." }}" />
<meta property="og:site_name" content="Owen Conti">
<meta property="og:type" content="website">
<meta property="og:title" content="{{ $title ?? "Owen Conti" }}">
<meta property="og:description" content="{{ $excerpt ?? "Web programming articles including tips, tricks, and tutorials on Laravel, PHP, React, Vue, MySQL and more." }}">
<meta property="og:url" content="{{ $current_url }}">
<meta property="og:image" content="{{ config('app.url') }}/images/owenconti-square.png">
<meta property="twitter:image" content="{{ config('app.url') }}/og-image-generator?title={{ base64_encode($title) }}">

<link href="https://github.com/owenconti" rel="me">
<link rel="webmention" href="https://webmention.io/owenconti.com/webmention" />
<link rel="pingback" href="https://webmention.io/owenconti.com/xmlrpc" />

<link rel="stylesheet" href="{{ mix('/css/app.css') }}">
<link rel="icon" href="{{ asset('/favicon.svg') }}" sizes="any" type="image/svg+xml">
<link rel="icon" href="{{ asset('/favicon.png') }}" type="image/png">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css2?family=Bangers:wght@400&display=swap" rel="stylesheet"> 

@php
  $accentColors = ['#AC6BFF', '#3B82F6', '#14B8A6', '#F97316', '#EF4444', '#DB2777'];
  $accentColor = collect($accentColors)->random();
@endphp

<style type="text/css">
  :root {
    --osm-accent: {{ $accentColor }};
  }
</style>