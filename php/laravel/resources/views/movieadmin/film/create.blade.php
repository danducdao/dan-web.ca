@extends('layouts/default')
@section('content')
<section>
    {{ Form::open(['route' => 'film.store']) }}
        <div class="row">
            <div class="col-md-12">
            <h2><em>Ajouter film</em></h2>
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
                                {{Form::text('titre',null,array('class' => 'form-control'))}} 
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
                                            :textarea-text = "'{{old('description')}}'"
                                            :textarea-cols = "'6'"
                                            :textarea-rows = "'3'" 
                                            :textarea-class = "'form-control'"
                                            :span-error = "true"
                                            :span-error-message = "'{{ $errors->first('description') }}'">
                        </textarea-component>
                    </div><br>
                    <div class="row">
                         <select-component :div-class="'col-md-6'"
                                            :label-class="'control-label'"
                                            :label-text="'Catégorie'"
                                            :select-opt-class="'form-control'"
                                            :select-opt-name = "'categorie'"
                                            :select-opt-items = "{{ json_encode($selectOptCategorie) }}"
                                            :select-opt-item="'{{ old('categorie') }}'"
                                            :span-error = "true"
                                            :span-error-message = "'{{ $errors->first('categorie') }}'" />
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-6">
                                    {{Form::label('longeur','Longeur',array('class' => 'control-label'))}}
                                    <div class="input-group m-b">
                                        {{Form::text('longeur',null,array('class' => 'form-control'))}} 
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    {{Form::label('annee_sortie','Année sortie',array('class' => 'control-label'))}}
                                    <div class="input-group m-b">
                                        {{Form::text('annee_sortie',null,array('class' => 'form-control'))}} 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <select-component :div-class="'col-md-6'"
                                                  :label-class="'control-label'"
                                                  :label-text="'Langue'"
                                                  :select-opt-class="'form-control'"
                                                  :select-opt-name = "'langue'"
                                                  :select-opt-items = "{{ json_encode($selectOptLangue) }}"
                                                  :select-opt-item="'{{ old('langue') }}'"
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
                                                  :select-opt-item="'{{ old('langue_original') }}'"  />
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
                            {{Form::label('duree_location','Durée du prêt',array('class' => 'control-label'))}}
                            <div class="input-group m-b">
                                {{Form::text('duree_location',null,array('class' => 'form-control'))}}  
                                <span style="color:red;">{{ $errors->first('dureeLocation') }}</span>
                            </div> 
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            {{Form::label('prix','Prix',array('class' => 'control-label'))}}
                            <div class="input-group m-b">
                                <span class="input-group-addon">$</span>
                                {{Form::text('prix',null,array('class' => 'form-control'))}}
                            </div>
                            @if($errors->first('prix'))
                                <div style='position:absolute;top:55px;'>
                                    <span style="color:red;">{{ $errors->first('prix') }}</span>
                                </div><br>
                                <div>{{ print_r($errors)}}</div>
                            @endif
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            {{Form::label('cout_remplacement','Coût de remplacement',array('class' => 'control-label'))}}
                            <div class="input-group m-b">
                                <span class="input-group-addon">$</span>
                                {{Form::text('cout_remplacement',null,array('class' => 'form-control'))}} 
                            </div>
                            <div style='position:absolute;top:55px;'>
                                <span style="color:red;">{{ $errors->first('cout_remplacement') }}</span>
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
                            <image-component></image-component>
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
                                        :select-opt-item="'{{ old('evaluation') }}'"  />
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <select-multiple-component :label-text="'Nouveauté'"
                                                    :label-class ="'control-label'"
                                                    :select-opt-name = "'nouveaute'"
                                                    :select-opt-items = "{{ json_encode(App\Models\Movies\Film::nouveautes()) }}"
                                                    :select-opt-item="'{{ old('nouveaute') }}'"  />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <submit-button-component button-text="OK"></submit-button-component>&nbsp;
                <back-button-component button-text="BACK"
                                       redirect-url="movieadmin/film">
                </back-button-component>
            </div>
        </div>

    {{ Form::close() }}
</section>
@stop