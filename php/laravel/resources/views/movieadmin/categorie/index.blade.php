@extends('layouts/default')
@section('content')
<section>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12" style="padding-left:0">
                <a href="{{url('movieadmin/categorie/create')}}" class="btn btn-primary">Nouveau</a>
            </div>
        </div>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12" style="padding-left:0">
                <span style="font-size:25px;"><strong>Liste des catégories</strong></span>
            </div>
        </div>
        <div class="row">
                @php
                    $my_categories = array();
                    foreach($categories as $categorie)
                    {
                        $my_categories[] = array(
                                'id' => $categorie->id,
                                'Nom' => $categorie->nom,
                                'Active' => $categorie->active
                            );
                    }
                    $style = array(
                        2 => "text-align:center;width:50px;"
                    )
                @endphp
                <listing-component :data="{{ json_encode($my_categories) }}" 
                                   :url="'movieadmin/categorie'" 
                                   :listing-style="{{ json_encode($style) }}" 
                                   :table-style="'width:20%;'"
                                   :active-col="2" />
        </div>
    </section>
@stop