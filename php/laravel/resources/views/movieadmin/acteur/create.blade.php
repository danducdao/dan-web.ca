@extends('layouts/default')
@section('content')
<section>
{{ Form::open(['route' => 'acteur.store']) }}
    <div class="row">
        <div class="col-md-12">
            <h2><em>Ajouter acteur</em></h2>
        </div>
    </div>
    <div class="row">
        <div class="hpanel hblue col-md-6">
            <div class="panel-heading hbuilt"><strong>Information</strong></div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('prenom','Prénom',array('class' => 'control-label'))}}
                        <span style="color:red;">*</span>
                        <div class="input-group m-b">
                             {{Form::text('prenom',null,array('class' => 'form-control'))}} 
                             <span style="color:red;">{{ $errors->first('prenom') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('nom','Nom',array('class' => 'control-label'))}}
                        <span style="color:red;">*</span>
                        <div class="input-group m-b">
                             {{Form::text('nom',null,array('class' => 'form-control'))}} 
                             <span style="color:red;">{{ $errors->first('nom') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <select-multiple-component :label-text="'Films'"
                                                    :label-class ="'control-label'"
                                                    :select-opt-name = "'film'"
                                                    :select-opt-items = "{{ json_encode($selectOptFilm) }}"
                                                    :select-opt-item="'{{ old('film') }}'"  />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8">
            <submit-button-component button-text="OK"></submit-button-component>&nbsp;
            <back-button-component button-text="BACK"
                                   redirect-url="movieadmin/acteur">
            </back-button-component>
        </div>
    </div>
{{ Form::close() }}
</section>
@stop