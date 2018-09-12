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
                <h2 class="font-light m-b-xs">Admin - Catégorie</h2>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                    <div class="panel-body">
                        <p><a href="{{url('movieadmin/categorie/create')}}" class="btn btn-primary">Nouveau</a></p>
                        <p>{{ $categories->links() }}</p>
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
                                   :url="'/movieadmin/categorie'" 
                                   :item-style="{{ json_encode($style) }}" 
                                   :table-style="'width:20%;'" /></listing-component>
                        <p>{{ $categories->links() }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@stop