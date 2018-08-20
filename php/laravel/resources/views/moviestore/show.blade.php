@extends('layouts.default')

@section('content')

@php
    $categorie = App\Models\Movies\Categorie::where('id',$id)->where('active',1)->firstOrFail();;
@endphp

<section>
    <div class="col-lg-6">
        <h2> Catégorie {{  $categorie->nom }}</h2>
        @foreach($categorie->films as $movie) 
            <div class="hpanel">
                <div class="panel-body" style="display:block">
                    <div class="h-100">
                        <div class="col-lg-2">
                            <img alt="{{$movie->titre}}" src="{{URL::asset($movie->filmArtUrl)}}" />
                        </div>
                        <div class="col-lg-10">
                            <div>
                                    Titre : <span><em>{{$movie->titre}}</em></span>
                            </div>
                            @php
                                $acteurs = array();
                                foreach($movie->acteurs as $acteur){
                                    $acteurs[] = $acteur->fullName($acteur->prenom,$acteur->nom);
                                } 
                            @endphp
                            <div>
                                    Acteur(s) : <span>{{ implode(",",$acteurs) }}</span>
                            </div>
                            <div>
                                    Durée : <span>{{ $movie->longeur }} min</span>
                            </div>
                            <div>
                                    Prix : <span>${{ number_format($movie->prix,2, '.' , '.') }}</span>
                            </div>
                            <div>
                                    Description : <div class="truncate">{{$movie->description}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
</section>

@stop