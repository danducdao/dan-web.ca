@extends('layouts/default')
@section('content')
<section>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12" style="padding-left:0">
                <a href="{{url('movieadmin/film/create')}}" class="btn btn-primary">Nouveau</a>
            </div>
        </div>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12" style="padding-left:0">
                <span style="font-size:25px;"><strong>Liste des films</strong></span>
            </div>
        </div>
        <div class="row">
                @php
                    $movies = array();
                    foreach($films as $film)
                    {
                        $movies[] = array(
                                'id' => $film->id,
                                'Titre' => $film->titre,
                                'Catégorie' => $film->nom_categorie,
                                'Description' => $film->description,
                                'Prix' => sprintf('$%s',$film->prix),
                                'Année sortie' => $film->annee_sortie,
                                'Langue' => $film->langue->nom,
                                'Langue original' => $film->langue_original !== null? $film->langue_original->nom:"",
                                'Durée du prêt' => $film->duree_location,
                                'Longeur' => $film->longeur,
                                'Coût remplacement' => sprintf('$%s',$film->cout_remplacement),
                                'Évaluation' => $film->evaluation,
                                'Nouveauté' => $film->nouveaute,
                                'Image' => $film->photo,
                                'Active' => $film->active
                            );
                    }
                    $style = array(
                        'Prix' => "text-align:right;",
                        'Durée du prêt' => "text-align:right;",
                        'Longeur' => "text-align:right;",
                        'Coût remplacement'> "text-align:right;",
                        'Active' => "text-align:center"
                    )
                @endphp
                <listing-component :data="{{ json_encode($movies) }}" 
                                   :item-style="{{ json_encode($style) }}" 
                                   :table-style="'width:100%;'"
                                   :url="'movieadmin/film'" >
                </listing-component>   
        </div>
    </section>
@stop