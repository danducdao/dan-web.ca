@extends('layouts.default')
@section('content')
<section>
<div class="row">
    <div class="hpanel hblue col-md-6">
        <div class="panel-heading hbuilt">&nbsp;</div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-12">
                    {{ Form::open(array('url' => 'movie/excel/writeXLSX'))}}
                    <div class="col-md-1" style="height:37px;width:40px;padding-left:0">
                        {{ Form::label('prix','Prix',array('class' => 'control-label'))}}
                    </div>
                    <div class="col-md-4" style="padding-left:0;padding-right:0;">
                        {{ Form::text('prix','',array('class' => 'form-control'))}}
                    </div>
                    <div class="col-md-2">
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
        <div class="panel-heading hbuilt">&nbsp;</div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-12">
                    {{ Form::open(array('url' => 'movie/excel/writeCSV'))}}
                    <div class="col-md-1" style="height:37px;width:60px;padding-left:0">
                         {{ Form::label('acteur','Acteur')}}
                    </div>
                    <div class="col-md-4" style="padding-left:0;padding-right:0;">
                        <div id="autocomplete-app">
                            <autocomplete-component :items="{{ $acteurs }}" :name="'acteur'"></autocomplete-component>
                        </div>
                    </div>
                    <div class="col-md-2">
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