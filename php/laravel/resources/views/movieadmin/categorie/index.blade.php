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
                        $titre_film = "";
                        if(count($categorie->films) > 0)
                        {
                            $titre_film="<select>";
                            foreach($categorie->films as $key => $film)
                            {
                                if($film->active === 1)
                                    $titre_film .= "<option>" . ++$key . ' - ' . $film->titre . "</option>";
                            }
                            $titre_film .= "</select>";
                        }
                        $my_categories[] = array(
                                'id' => $categorie->id,
                                'Nom' => $categorie->nom,
                                'Films' => $titre_film,
                                'Active' => $categorie->active
                            );
                    }
                    $style = array(
                        'Active' => "text-align:center;width:50px;"
                    )
                @endphp
                <listing-component :data="{{ json_encode($my_categories) }}" 
                                   :url="'movieadmin/categorie'" 
                                   :item-style="{{ json_encode($style) }}" 
                                   :table-style="'width:20%;'" />
        </div>
    </section>
@stop