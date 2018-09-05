<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Laravel</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <link rel="stylesheet" href="{{ URL::asset('temp/css/fontawesome/css/font-awesome.css') }}" />
  <link rel="stylesheet" href="{{ URL::asset('temp/css/metisMenu/dist/metisMenu.css') }}" />
  <link rel="stylesheet" href="{{ URL::asset('temp/css/animate.css/animate.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('temp/css/bootstrap/dist/css/bootstrap.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('temp/css/sweetalert/lib/sweet-alert.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('temp/css/toastr/build/toastr.min.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('temp/css/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('temp/css/fonts/pe-icon-7-stroke/css/helper.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('temp/css/styles/style.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('temp/css/styles/static_custom.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('css/musicstore.css') }}"/>
  <link rel="stylesheet" href="{{ URL::asset('css/autocomplete.css') }}"/>

</head>
<body>
<!--The content below is only a placeholder and can be replaced.-->
<div id="header">
	<div class="color-line">
	</div>
	<div id="logo" class="light-version">
		<span>
			Dan Duc Dao
		</span>
	</div>
	<nav role="navigation">
		<div class="header-link hide-menu">
			<i class="fa fa-bars"></i>
		</div>
		<div class="small-logo">
			<span class="text-primary">Dan Duc Dao</span>
		</div>
	</nav>
</div>
<aside id="menu">
	<div id="navigation">
		<div class="profile-picture">
			<img src={{URL::asset('temp/images/av1.png')}} class="img-circle m-b" alt="logo" />
		</div>
		<ul class="nav" id="side-menu">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="#">
					<span class="nav-label">Movie store</span>
					<span class="fa arrow"></span>
				</a>
				@php
					  $categories = App\Models\Movies\Categorie::all();
				@endphp
				<ul class="nav nav-second-level">
					<li>
					    <a href="#">
							<span class="nav-label">Catégories</span>
							<span class="fa arrow"></span>
						</a>
						<ul class="nav nav-third-level">
							@foreach($categories as $categorie)
								<li><a href="{{url('/movie/categorie/'.$categorie->id)}}">{{$categorie->nom}}</a></li>
							@endforeach
						</ul>
					</li>
					<li>
						<a href="#">
							<span class="nav-label">Admin</span>
							<span class="fa arrow"></span>
						</a>
						<ul class="nav nav-third-level">
							<li><a href="{{url('movieadmin/film')}}">Films</a></li>
							<li><a href="{{url('movieadmin/categorie')}}">Catégories</a></li>
						</ul>
				    </li>
                    <li>
						<a href="#">
							<span class="nav-label">Excels</span>
							<span class="fa arrow"></span>
						</a>
						<ul class="nav nav-third-level">
							<li><a href="{{url('/movie/excel/write')}}">Écriture excel</a></li>
							<li><a href="{{url('/movie/excel/readXLSX')}}">Lecture excel (XSLX)</a></li>
							<li><a href="{{url('/movie/excel/readCSV')}}">Lecture excel (CSV)</a></li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</aside>
<div id="wrapper">
	<div class="row">
		<div class="col-lg-12">
			<div class="hpanel">
				<div class="panel-body">
				   @include('partials.errors')
				   @include('partials.success')
                   @yield('content')
                </div>
			</div>
		</div>
	</div>
</div>

  <script src="{{mix('js/app.js')}}" ></script>
  <script src="{{ URL::asset('temp/js/jquery/dist/jquery.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/jquery-ui/jquery-ui.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/slimScroll/jquery.slimscroll.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/bootstrap/dist/js/bootstrap.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/metisMenu/dist/metisMenu.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/iCheck/icheck.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/peity/jquery.peity.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/nestable/jquery.nestable.js') }}"></script>
  <script src="{{ URL::asset('temp/js/sweetalert/lib/sweet-alert.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/toastr/build/toastr.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/sparkline/index.js') }}"></script>
  <script src="{{ URL::asset('temp/js/bootstrap-tour/build/js/bootstrap-tour.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/datatables/media/js/jquery.dataTables.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/datatables_plugins/integration/bootstrap/3/dataTables.bootstrap.min.js') }}"></script>
  <script src="{{ URL::asset('temp/js/homer.js') }}"></script>

</body>
</html>