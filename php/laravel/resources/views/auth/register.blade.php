@extends('layouts/default')
@section('content')
<div class="content">
    <div class="row">
        <div class="col-sm-4 col-sm-offset-4">
            <div class="hpanel hgreen" >
                <div class="panel-heading hbuilt">
                    ENRGISTRER
                </div>
                <div class="panel-body">
                    
                <form method="POST" action="{{ route('register') }}" aria-label="{{ __('Register') }}">
                    @csrf
                    <P>
                        <label for="name" class="form-label">{{ __('Name') }}</label>
                        <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>
                        @if ($errors->has('name'))
                            <span style="color:red;">
                                <strong>{{ $errors->first('name') }}</strong>
                            </span>
                        @endif
                    </P>
                    <P>
                        <label for="email" class="col-form-label">{{ __('E-Mail Address') }}</label>
                        <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>
                        @if ($errors->has('email'))
                            <span style="color:red;">
                                <strong>{{ $errors->first('email') }}</strong>
                            </span>
                        @endif
                    </P>
                    <p>
                        <label for="password" class="form-label">{{ __('Password') }}</label>
                        <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                        @if ($errors->has('password'))
                            <span style="color:red;">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </p>
                    <p>
                        <label for="password-confirm" class="-form-label">{{ __('Confirm Password') }}</label>
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                    </p>
                    <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <button type="submit" class="btn btn-success">
                                {{ __('Enregistrer') }}
                            </button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
