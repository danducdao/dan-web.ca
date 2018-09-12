@extends('layouts.default')
@section('content')
@php

    $films = App\Models\Movies\Categorie::selectRaw("sum(categories.id),categories.nom,films.*")
                                          ->leftJoin('categorie_films','categorie_films.categorie_id','=','categories.id')
                                          ->leftJoin('films','films.id','=','categorie_films.film_id')
                                          ->where('categories.id',$id)
                                          ->groupBy('categories.id','films.id')
                                          ->paginate(10);
@endphp
<section>
    @if(count($films) > 0)
        <div class="normalheader">
        <div class="hpanel">
                <div class="panel-body">
                    <a href="#" class="small-header-action">
                        <div class="clip-header">
                            <i class="fa fa-arrow-up"></i>
                        </div>
                    </a>
                    @foreach($films as $film) 
                        @if ($loop->first)
                           <h2 class="font-light m-b-xs"><em>Catégorie {{  $film->nom }}</em></h2>
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
        <div class="content">
            <p>{{ $films->links() }}</p>  
            <div class="store">
                    @foreach($films as $movie) 
                        <div>
                            <div class="hpanel ">
                                <div class="panel-body col-lg-12">
                                    <div>
                                        <img alt="{{$movie->titre}}" src="{{URL::asset($movie->filmArtUrl?$movie->filmArtUrl:'images/placeholder.gif')}}" />
                                    </div>
                                    <div>
                                        <div><strong>Titre :</strong> <span><em>{{$movie->titre}}</em></span></div>
                                        @php 
                                            $acteurs = App\Models\Movies\Acteur::selectRaw("CONCAT(acteurs.prenom,' ',acteurs.nom) AS nom")
                                                                                ->leftJoin('acteur_films','acteur_films.acteur_id','=','acteurs.id')
                                                                                ->leftJoin('films','films.id','=','acteur_films.film_id')
                                                                                ->where('films.id',$film->id)
                                                                                ->groupBy('acteurs.id')->get();
                                            $acteurNom="";                                
                                            if(count($acteurs) > 0)
                                            foreach($acteurs as $acteur)
                                                $acteurNom .= $acteur->nom . ", ";
                                        @endphp
                                        <div><strong>Acteurs :</strong> <span>{{rtrim($acteurNom,', ')}}</span></div>
                                        <div><strong>Durée :</strong> <span>{{ $movie->longeur?$movie->longeur . "min":"" }}</span></div>
                                        <div><strong>Prix :</strong> <span>${{ number_format($movie->prix,2, '.' , '.') }}</span></div>
                                        <div><strong> Description : </strong><div class="truncate">{{$movie->description}}</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
            </div>
            <p>{{ $films->links() }}</p>  
        </div>
    @endif
</section>
@stop