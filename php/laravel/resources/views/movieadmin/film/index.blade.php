@extends('layouts/default')
@section('content')
<section>
    <div class="normalheader">
       <div class="hpanel">
            <div class="panel-body">
               <a href="#" class="small-header-action">
                   <div class="clip-header">
                        <i class="fa fa-arrow-up"></i>
                   </div>
               </a>
                <h2 class="font-light m-b-xs">Admin - Film</h2>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                     <div class="panel-body">
                        <p><a href="{{url('movieadmin/film/create')}}" class="btn btn-primary">Nouveau</a></p>
                        <p>{{ $films->links() }}</p>
                         @php
                            $movies = array();
                            foreach($films as $film)
                            {
                                $categorie_nom = $acteur_nom = "";

                                if(count($film->categories) > 0)
                                {
                                    foreach($film->categories as $categorie)
                                    {
                                    $categorie_nom .= $categorie->nom;
                                    }
                                }

                                if(count($film->acteurs) > 0)
                                {
                                    $acteur_nom = "<select multiple size='4'>";
                                    foreach($film->acteurs as $acteur)
                                    {
                                        $acteur_nom .= sprintf("<option>%s</option>",$acteur->fullName($acteur->prenom,$acteur->nom));
                                    }
                                    $acteur_nom .= "</select>";
                                }

                                $movies[] = array(
                                                    'id' => $film->id,
                                                    'Titre' => $film->titre,
                                                    'Catégorie' => $categorie_nom,
                                                    'Acteurs' => $acteur_nom,
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
                                'Coût remplacement' => "text-align:right;",
                                'Active' => "text-align:center"
                            )
                        @endphp
                        <listing-component :data="{{ json_encode($movies) }}" 
                                        :item-style="{{ json_encode($style) }}" 
                                        :table-style="'width:80%;'"
                                        :url="'/movieadmin/film'" >
                        </listing-component> 
                        <p>{{ $films->links() }}</p>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@stop