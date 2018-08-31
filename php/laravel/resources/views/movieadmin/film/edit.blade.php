@extends('layouts/default')
@section('content')
<section>
    {{Form::model($film,array('route' => array('film.update',$film->id), 'method' => 'put' ))}}
    <div class="row">
        <div class="hpanel hblue col-md-6">
            <div class="panel-heading hbuilt"><strong>Information</strong></div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('titre','Titre',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                             {{Form::text('titre',$film->titre,array('class' => 'form-control'))}} 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <textarea-component :div-class = "'col-md-6'"
                                        :label-class ="'control-label'"
                                        :label-text = "'Description'"
                                        :textarea-name = "'description'"
                                        :textarea-id = "'description'" 
                                        :textarea-text = "'{{ $film->description }}'"
                                        :textarea-cols = "'6'"
                                        :textarea-rows = "'3'" 
                                        :textarea-class = "'form-control'">
                    </textarea-component>
                </div><br>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('longeur','Longeur',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            {{Form::text('longeur',$film->longeur,array('class' => 'form-control'))}} 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('anneeSortie','Année sortie',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            {{Form::text('anneeSortie',$film->anneeSortie,array('class' => 'form-control'))}} 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('langue_id','Langue',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            {{Form::select('langue_id',$langues,$film->nom,array('class' => 'form-control'))}} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hpanel hblue col-md-6">
            <div class="panel-heading hbuilt"><strong>Location</strong></div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('dureeLocation','Durée du prêt',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            {{Form::text('dureeLocation',$film->dureeLocation,array('class' => 'form-control'))}}  
                        </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('prix','Prix',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            <span class="input-group-addon">$</span>
                            {{Form::text('prix',$film->prix,array('class' => 'form-control'))}}
                        </div> 
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('coutRemplacement','Coût de remplacement',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            <span class="input-group-addon">$</span>
                            {{Form::text('coutRemplacement',$film->coutRemplacement,array('class' => 'form-control'))}} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="hpanel hblue col-md-6">
            <div class="panel-heading hbuilt"><strong>Image</strong></div>
            <div class="panel-body">
                <div class="row">
                        <div class="col-md-4">
                            <fileupload-component 
                                    :max-files = "'1'"
                                    :max-size = "'2'"
                                    :file-ext = "'JPG, GIF, PNG, JPEG'">
                            </fileupload-component>
                        </div>
                        <image-component :file-data="'{{ $film->photo }}'"></image-component>
                </div>
            </div>
        </div>
        <div class="hpanel hblue col-md-6">
            <div class="panel-heading hbuilt"><strong>Autres</strong></div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('evaluation','Évaluation',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            {{Form::select('evaluation',App\Models\Movies\Film::evaluations(),$film->evaluation,array('class' => 'form-control'))}} 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('nouveaute','Nouveauté',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            {{Form::select('nouveaute',App\Models\Movies\Film::nouveautes(),$film->nouveaute,array('class' => 'form-control'))}} 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('nouveaute','Nouveauté',array('class' => 'control-label'))}}
                        <radio-component :attributs="{{ json_encode(App\Classes\Helper::radioBtnActiveAttribut($film->active)) }}"></radio-component>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8">
            <button type="submit" name="ok" class="btn btn-success">
                <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
                <span style="margin-left:5px;font-weight:bold;font-size:18px;">OK</span>
            </button>&nbsp;
            <button name="back" class="btn btn-success" onclick="window.location.href='movieadmin/film';return false;">
                <i class="fa fa-backward" style="font-size:24px;float:left;"></i>
                <span style="margin-left:5px;font-weight:bold;font-size:18px;" >BACK</span>
            </button>
        </div>
    </div>
    {{Form::close()}}
</section>
@stop