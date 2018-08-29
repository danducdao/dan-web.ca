@extends('layouts/default')
@section('content')

<section id="category-index-container">
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12">
                Nouveau
            </div>
        </div>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12" style="padding-left:0">
                <span style="font-size:25px;"><strong>Liste des catégories</strong></span>
            </div>
        </div>
        <div class="row">
            <div id="app">
                @php
                    $myCustomFilms = array();
                    foreach($films as $film)
                    {
                        $myCustomFilms[] = array(
                                'id' => $film->id,
                                'Titre' => $film->titre,
                                'Description' => $film->description,
                                'Prix' => sprintf('$%s',$film->prix),
                                'Année sortie' => $film->anneeSortie,
                                'Langue' => $film->langue->nom,
                                'Durée du prêt' => $film->dureeLocation,
                                'Longeur' => $film->longeur,
                                'Coût remplacement' => sprintf('$%s',$film->coutRemplacement),
                                'Évaluation' => $film->evaluation,
                                'Nouveauté' => $film->nouveaute,
                                'Image' => $film->filmArtUrl,
                                'Active' => $film->active
                            );
                    }

                    $style = array(
                        3 => "text-align:right;",
                        6 => "text-align:right;",
                        7 => "text-align:right;",
                        8 => "text-align:right;",
                        12 => "text-align:center"
                    )
                @endphp

                <my-custom-list-component :data="{{ json_encode($myCustomFilms) }}" 
                                          :mystyle="{{ json_encode($style) }}" 
                                          :url="'movieadmin/film'" 
                                          :activecol="12">
                </my-custom-list-component>   

            </div>
        </div>
    </section>
@stop