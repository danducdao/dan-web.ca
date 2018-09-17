<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exemple - Laravel</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('css/autocomplete.css') }}"/>
  <!-- Vendor styles -->
  <link rel="stylesheet" href="{{ URL::asset('css/vendor/fontawesome/css/font-awesome.css') }}" />
  <link rel="stylesheet" href="{{ URL::asset('css/vendor/metisMenu/dist/metisMenu.css') }}" />
  <link rel="stylesheet" href="{{ URL::asset('css/vendor/animate.css/animate.css') }}" />
  <link rel="stylesheet" href="{{ URL::asset('css/vendor/bootstrap/dist/css/bootstrap.css') }}" />
  <!-- App styles -->
  <link rel="stylesheet" href="{{ URL::asset('css/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css') }}" />
  <link rel="stylesheet" href="{{ URL::asset('css/fonts/pe-icon-7-stroke/css/helper.css') }}" />
  <link rel="stylesheet" href="{{ URL::asset('css/styles/style.css') }}"> 
</head>
<body>
    <!-- Header -->
    <div id="header">
        <div class="color-line">
        </div>
        <div id="logo" class="light-version">
            <span>
                Exemple - Laravel
            </span>
        </div>
        <nav role="navigation">
            <div class="header-link hide-menu"><i class="fa fa-bars"></i></div>
            <div class="small-logo">
                <span class="text-primary">Exemple - Laravel</span>
            </div>
            <div class="navbar-right">
                <ul class="nav navbar-nav no-borders">
                    @guest
                        <li class="dropdown">
                            <a class="nav-link" href="{{ route('login') }}">
                                <i class="pe-7s-lock"></i>
                            </a>
                        </li>
                        <li class="dropdown">
                            <a class="nav-link" href="{{ route('register') }}">
                                <i class="pe-7s-add-user"></i>
                            </a>
                        </li>
                    @else
                        <li class="dropdown">
                            <a href="#" style="font-size:17px;">{{ Auth::user()->name }}</a>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-item" 
                            href="{{ route('logout') }}"
                            onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                                    <i class="pe-7s-unlock"></i>
                            </a>
                        </li>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    @endguest 
                </ul>
            </div>
        </nav>
    </div>
    <!-- Navigation -->
    <aside id="menu">
        <div id="navigation">
            <div class="profile-picture">
                <a href="index.html">
                    <img src={{URL::asset('images/logo.jpg')}} class="img-circle m-b" alt="logo" width="150" height="100" />
                </a>
            </div>
            <ul class="nav" id="side-menu">
                <li>
                <a href="/"><span class="nav-label">Home</span></a>
                </li>
                <li>
                    <a href="#"><span class="nav-label">Movie admin</span><span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li><a href="{{url('movieadmin/film')}}">Films</a></li>
                        <li><a href="{{url('movieadmin/categorie')}}">Catégories</a></li>
                        <li><a href="{{url('movieadmin/acteur')}}">Acteurs</a></li>	
                    </ul>
                </li>
                <li>
                    <a href="#"><span class="nav-label">Movie store</span><span class="fa arrow"></span> </a>
                    @php
                        $categories = App\Models\Movies\Categorie::all();
                    @endphp
                    <ul class="nav nav-second-level">
                        @foreach($categories as $categorie)
                            <li><a href="{{url('/moviestore/categorie/'.$categorie->id)}}">{{$categorie->nom}}</a></li>
                        @endforeach	
                    </ul>
                </li>
                <li>
                    <a href="#"><span class="nav-label">Excel</span><span class="fa arrow"></span> </a>
                    <ul class="nav nav-second-level">
                        <li><a href="{{url('/excel/write')}}">Écriture excel</a></li>
                        <li><a href="{{url('/excel/readXLSX')}}">Lecture excel (xslx)</a></li>
                        <li><a href="{{url('/excel/readCSV')}}">Lecture excel (csv)</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>

    <!-- Main Wrapper -->
    <div id="wrapper">
        <div class="p-lg">
            <div class="content" data-child="row">
                @include('partials.errors')
                @include('partials.success')
                @yield('content')      
            </div>
        </div>
        <!-- Footer-->
        <footer class="footer">
            <span class="pull-right">
                Example - Laravel
            </span>
        </footer>
    </div>

    <script src="{{mix('js/app.js')}}" ></script>

    <!-- Vendor scripts -->
    <script src="{{ URL::asset('js/vendor/jquery/dist/jquery.min.js') }}"></script>
    <script src="{{ URL::asset('js/vendor/jquery-ui/jquery-ui.min.js') }}"></script>
    <script src="{{ URL::asset('js/vendor/slimScroll/jquery.slimscroll.min.js') }}"></script>
    <script src="{{ URL::asset('js/vendor/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ URL::asset('js/vendor/metisMenu/dist/metisMenu.min.js') }}"></script>
    <script src="{{ URL::asset('js/vendor/iCheck/icheck.min.js') }}"></script>
    <script src="{{ URL::asset('js/vendor/sparkline/index.js') }}"></script>

    <!-- App scripts -->
    <script src="{{ URL::asset('js/vendor/homer.js') }}"></script>
</body>
</html>