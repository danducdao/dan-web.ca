@extends('layouts/default')
@section('content')
<div class="content">
    <div class="row">
        <div class="col-sm-4 col-sm-offset-4">
            <div class="hpanel hgreen" >
                <div class="panel-heading hbuilt">
                    {{ __('Login') }}
                </div>
                <div class="panel-body">
                    <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                            @csrf
                        <P>
                            <label for="email" class="form-label">{{ __('E-Mail Address') }}</label>
                            <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>
                            @if ($errors->has('email'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </P>
                        <P>
                            <label for="password" class="form-label">{{ __('Password') }}</label>
                            <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                            @if ($errors->has('password'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </P>
                        <p>      
                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            <label class="form-check-label" for="remember">
                                {{ __('Remember Me') }}
                            </label> 
                        </p>
                        <p>
                            <button type="submit" class="btn btn-success">
                                    {{ __('Login') }}
                            </button>
                        </p>
                        <p>
                            <a href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                        </p>  
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
