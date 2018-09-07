@extends('layouts/default')
@section('content')
<section>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12" style="padding-left:0">
                <a href="{{url('movieadmin/acteur/create')}}" class="btn btn-primary">Nouveau</a>
            </div>
        </div>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12" style="padding-left:0">
                <span style="font-size:25px;"><strong>Liste des acteurs</strong></span>
            </div>
        </div>
        <div class="row">
                @php
                    $my_acteurs = array();
                    foreach($acteurs as $acteur)
                    {
                        $titre_film = "";
                        if(count($acteur->films) > 0 && $acteur->active === 1)
                        {
                            $titre_film="<select>";
                            foreach($acteur->films as $key => $film)
                            {
                                $titre_film .= "<option>" . ++$key . ' - ' . $film->titre . "</option>";
                            }
                            $titre_film .= "</select>";
                        }
                        $my_acteurs[] = array(
                                                'id' => $acteur->id,
                                                'Prénom' => $acteur->prenom,
                                                'Nom' => $acteur->nom,
                                                'Films' => $titre_film,
                                                'Active' => $acteur->active
                                             );
                    }
                    $style = array('Active' => "text-align:center;width:50px;");
                @endphp
                <listing-component :data="{{ json_encode($my_acteurs) }}" 
                                   :url="'movieadmin/acteur'" 
                                   :item-style="{{ json_encode($style) }}" 
                                   :table-style="'width:40%;'" />
        </div>
    </section>
@stop