@extends('layouts.default')
@section('content')
<section>
<div class="row">
    <div class="hpanel hblue col-md-6">
        <div class="panel-heading hbuilt">
            <strong>Lecture excel (CSV)</strong>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-md-12">
                     <table class="table table-bordered" cellspacing="1" cellpadding="1">
                        <tbody>
                               @for($i = 1; $i <= count($results); $i++)
                                  <tr>
                                       @foreach($results[$i] as $key => $value)
                                            <td {{ is_numeric($value) && strcmp($key,'A') != 0?"style=text-align:right;":""}}>
                                                {{ $value }}
                                            </td> 
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