@extends('layouts/default')
@section('content')
<section>
{{Form::model($acteur,array('route' => array('acteur.update',$acteur->id), 'method' => 'put' ))}}
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
                             {{Form::text('prenom',$acteur->prenom,array('class' => 'form-control'))}} 
                             <span style="color:red;">{{ $errors->first('prenom') }}</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('nom','Nom',array('class' => 'control-label'))}}
                        <span style="color:red;">*</span>
                        <div class="input-group m-b">
                             {{Form::text('nom',$acteur->nom,array('class' => 'form-control'))}} 
                             <span style="color:red;">{{ $errors->first('nom') }}</span>
                        </div>
                    </div>
                </div>
                @if($acteur->active === 1)
                <div class="row">
                    <div class="col-md-6">
                        <select-multiple-component :label-text="'Films'"
                                                    :label-class ="'control-label'"
                                                    :select-opt-name = "'film'"
                                                    :select-opt-items = "{{ json_encode($selectOptFilms) }}"
                                                    :select-opt-item="'{{ $selectOptFilm }}'"  />
                    </div>
                </div>
                @endif
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('active','Active',array('class' => 'control-label'))}}
                        <radio-component :attributs="{{ json_encode(App\Classes\Helper::radioBtnActiveAttribut($acteur->active)) }}"></radio-component>
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