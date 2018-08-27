@extends('layouts.default')
@section('content')
<section>
<div class="row">
    <div class="hpanel hblue col-md-6">
        <div class="panel-heading hbuilt">
           <strong>Lecture excel (XSLX)</strong>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-12">
                     <table class="table table-bordered" cellspacing="1" cellpadding="1">
                        <thead>
                            <tr>
                                @foreach(array_except($salesOrders['1'],'H') as $titre)
                                 <th style="text-align:center;">{{ $titre }}</th>
                                @endforeach
                            </tr>
                        </thead>
                        <tbody>
                               @php
                                   $numCols = array("E","F","G");
                               @endphp
                               @for($i = 2; $i <= count($salesOrders); $i++)
                                  <tr>
                                       @foreach(array_except($salesOrders[$i],'H') as $key => $value)
                                            @if(in_array($key,$numCols))
                                                <td style="text-align:right">{{ (strcmp($key,"E") != 0?'$':'') . trim($value) }}</td>
                                            @else
                                                <td>{{$value}}</td>
                                            @endif
                                       @endforeach
                                  </tr>
                               @endfor
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
@stop