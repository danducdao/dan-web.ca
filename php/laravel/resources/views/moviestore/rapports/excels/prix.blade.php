@extends('layouts.default')

@section('content')

<section>
    <div class="col-lg-12">
        {{ Form::open(array('url' => 'movie/rapport/prix'))}}
            {{ Form::label('prix','Prix du film')}}
            {{ Form::text('prix','')}}
            {{ Form::submit("OK")}}
        {{Form::close()}}
    </div>
</section>

@stop