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
<meta property="og:image" content="https://snaps-proxy.owenconti.workers.dev?w=1200&h=632&dpi=2&url=https://owenconti.com/og-image-generator/?title={{ base64_encode($title ?? 'Owen Conti') }}&excerpt={{ base64_encode($excerpt ?? '') }}">
<meta property="twitter:image" content="https://snaps-proxy.owenconti.workers.dev?w=1200&h=632&dpi=2&url=https://owenconti.com/og-image-generator/?title={{ base64_encode($title ?? 'Owen Conti') }}&excerpt={{ base64_encode($excerpt ?? '') }}">
<meta property="twitter:card" content="summary_large_image">

<link href="https://github.com/owenconti" rel="me">
<link rel="webmention" href="https://webmention.io/owenconti.com/webmention" />
<link rel="pingback" href="https://webmention.io/owenconti.com/xmlrpc" />

<link rel="icon" href="{{ asset('/favicon.svg') }}" sizes="any" type="image/svg+xml" />
<link rel="icon" href="{{ asset('/favicon.png') }}" type="image/png" />

<link rel="preload" as="style" onload="this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
<link rel="preload" as="style" onload="this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Bangers:wght@400&display=swap" /> 

<style type="text/css">{!! readfile(public_path('css/app.css')) !!}</style>

@php
  $accentColors = ['#B353FF', '#3B82F6', '#14B8A6', '#FC8800', '#FF1E1E', '#F50A73'];
  $accentColor = collect($accentColors)->random();
@endphp
<style type="text/css">
  :root {
    --osm-accent: {{ $accentColor }};
  }
</style>

<script type="text/javascript">
const $html = document.getElementsByTagName('html')[0];

const hasPreference = !!localStorage.darkModeEnabled;
const preferenceDarkMode = localStorage.darkModeEnabled === 'true';
const osDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const darkMode = hasPreference ? preferenceDarkMode : osDarkMode;

if (darkMode) {
  $html.classList.add('dark');
} else {
  $html.classList.remove('dark');
}
</script>