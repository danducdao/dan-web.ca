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
               <h2 class="font-light m-b-xs">Admin - Acteur</h2>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                    <div class="panel-body">
                        <p><a href="{{url('movieadmin/acteur/create')}}" class="btn btn-primary">Nouveau</a></p>
                        <p>{{ $acteurs->links() }}</p>
                            @php
                                $my_acteurs = array();
                                foreach($acteurs as $acteur)
                                {
                                    $titre_film = "";
                                    if(count($acteur->films) > 0)
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
                                   :url="'/movieadmin/acteur'" 
                                   :item-style="{{ json_encode($style) }}" 
                                   :table-style="'width:40%;'" ></listing-component>
                        <p>{{ $acteurs->links() }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@stop