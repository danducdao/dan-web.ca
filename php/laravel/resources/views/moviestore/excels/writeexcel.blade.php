@extends('layouts.default')
@section('content')
<section>
<div class="row">
    <div class="hpanel hblue col-md-6">
        <div class="panel-heading hbuilt">
            <strong>Trouver la liste des films</strong>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-4">
                    {{ Form::open(array('url' => 'movie/excel/writeXLSX'))}}
                    <div style="padding:10px 0 10px 0;">
                        {{ Form::label('prix','Prix du film',array('class' => 'control-label'))}}
                        {{ Form::text('prix','',array('class' => 'form-control'))}}
                    </div>
                    <div>
                        {{ Form::submit("OK",array('class' => 'btn btn-success'))}}
                    </div>
                    {{Form::close()}}
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">   
    <div class="hpanel hblue col-md-6">
        <div class="panel-heading hbuilt">
            <strong>Trouver la liste des films</strong>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-4">
                    {{ Form::open(array('url' => 'movie/excel/writeCSV'))}}
                    <div style="padding:10px 0 10px 0;">
                        {{ Form::label('acteur','Nom d\'acteur',array('class' => 'control-label'))}}
                        {{ Form::select('acteur', $acteurs,"1", ['class'=> 'chosen-select-width', "tabindex" => "15", "data-placeholder" => "Liste auteur"]) }}
                    </div>
                    <div>
                         {{ Form::submit("OK",array('class' => 'btn btn-success'))}}
                    </div>
                    {{Form::close()}}
                </div>
            </div>
        </div>
    </div>
</div>
</section>
@stop