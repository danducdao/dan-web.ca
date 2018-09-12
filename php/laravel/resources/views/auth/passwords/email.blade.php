@extends('layouts/default')
@section('content')
<div class="content">
    <div class="row">
        <div class="col-sm-4 col-sm-offset-4">
            <div class="hpanel hgreen" >
                <div class="panel-heading hbuilt">{{ __('Reset Password') }}</div>
                <div class="panel-body">
                    <form method="POST" action="{{ route('password.email') }}" aria-label="{{ __('Reset Password') }}">
                        @csrf
                        <p>
                            <label for="email" class="form-label">{{ __('Courriel') }}</label>
                            <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>
                            @if ($errors->has('email'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </P>
                        <p>
                            <button type="submit" class="btn btn-success">
                                    {{ __('Send Password Reset Link') }}
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
