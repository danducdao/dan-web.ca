@extends('layouts/default')
@section('content')
<section>
    {{Form::model($film,array('route' => array('film.update',$film->id), 'method' => 'put' ))}}
    <div class="row">
        <div class="col-md-12">
        <h2><em>Modifier film</em></h2>
        </div>
    </div>
    <div class="row">
        <div class="hpanel hblue col-md-6">
            <div class="panel-heading hbuilt"><strong>Information</strong></div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('titre','Titre',array('class' => 'control-label'))}}
                        <span style="color:red;">*</span>
                        <div class="input-group m-b">
                             {{Form::text('titre',$film->titre,array('class' => 'form-control'))}} 
                             <span style="color:red;">{{ $errors->first('titre') }}</span>
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
                                        :textarea-class = "'form-control'"
                                        :span-error = "true"
                                        :span-error-message = "'{{ $errors->first('titre') }}'">
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
                        {{Form::label('annee_sortie','Année sortie',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            {{Form::text('annee_sortie',$film->annee_sortie,array('class' => 'form-control'))}} 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <select-component :div-class="'col-md-6'"
                                      :label-class="'control-label'"
                                      :label-text="'Langue'"
                                      :select-opt-class="'form-control'"
                                      :select-opt-name = "'langue'"
                                      :select-opt-items = "{{ json_encode($selectOptLangue) }}"
                                      :selected-opt-item="'{{ $film->langue_id }}'"
                                      :span-error = "true"
                                      :span-error-message = "'{{ $errors->first('langue') }}'" />
                </div>
                <div class="row">
                    <select-component :div-class="'col-md-6'"
                                      :label-class="'control-label'"
                                      :label-text="'Langue original'"
                                      :select-opt-class="'form-control'"
                                      :select-opt-name = "'langue_original'"
                                      :select-opt-items = "{{ json_encode($selectOptLangueOriginal) }}"
                                      :selected-opt-item="'{{ $film->langue_original_id }}'" />
                </div>
            </div>
        </div>
        <div class="hpanel hblue col-md-6">
            <div class="panel-heading hbuilt"><strong>Location</strong></div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('duree_location','Durée du prêt',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            {{Form::text('duree_location',$film->duree_location,array('class' => 'form-control'))}}  
                            <span style="color:red;">{{ $errors->first('dureeLocation') }}</span>
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
                        @if($errors->first('prix'))
                            <div style='position:absolute;top:55px;'>
                                <span style="color:red;">{{ $errors->first('prix') }}</span>
                            </div><br>
                        @endif
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('cout_remplacement','Coût de remplacement',array('class' => 'control-label'))}}
                        <div class="input-group m-b">
                            <span class="input-group-addon">$</span>
                            {{Form::text('cout_remplacement',$film->cout_remplacement,array('class' => 'form-control'))}} 
                        </div>
                        <div style='position:absolute;top:55px;'>
                            <span style="color:red;">{{ $errors->first('coutRemplacement') }}</span>
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
                                    :name="'Image'" 
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
                    <select-component :div-class="'col-md-6'"
                                      :label-class="'control-label'"
                                      :label-text="'Évaluation'"
                                      :select-opt-class="'form-control'"
                                      :select-opt-name = "'evaluation'"
                                      :select-opt-items = "{{ json_encode(App\Models\Movies\Film::evaluations()) }}"
                                      :selected-opt-item="'{{ $film->evaluation }}'" />
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <select-multiple-component :label-text="'Nouveauté'"
                                                   :label-class ="'control-label'"
                                                   :select-opt-name = "'nouveaute'"
                                                   :select-opt-item="'{{ $film->nouveaute }}'"
                                                   :select-opt-items = "{{ json_encode(App\Models\Movies\Film::nouveautes()) }}" />
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        {{Form::label('active','Active',array('class' => 'control-label'))}}
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