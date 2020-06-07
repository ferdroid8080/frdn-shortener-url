@extends('layout.app')

@section('title')
Create
@endsection

@section('create_styles')
<style>
    h2 {
        font-weight: 700;
    }
    h4 {
        font-weight: 300;
    }
    h2, h4 {
        margin: 0;
    }
    form .form-control {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 8px 0;
    }
    .form-control label {
        width: 90px;
        text-align: right;
        padding: 0px 8px;
    }
</style>
@endsection

@section('container')
<header>
    <h2>@lang('custom.create_h2_title')</h2>
    <h4>@lang('custom.create_h4_title')</h4>
</header>
@if ($errors->any() || session('error'))
<div class="alert alert-danger">
    <ul>
        @if (session('error'))
            <li>{{ session('error') }}</li>
        @endif
        @if ($errors->any())
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        @endif
    </ul>
</div>
@endif
@if (session('success'))
    <div class="alert alert-danger">
        {{ session('success') }}
    </div>
@endif
<form action="/new/link" method="post">
    @csrf
    <div class="form-control">
        <label>@lang('custom.create_form_url_label')</label>
        <input type="text" name="orig_url" />
    </div>
    <div class="form-control">
        <label>@lang('custom.create_form_description_label')</label>
        <input type="text" name="description" />
    </div>
    <button type="submit">@lang('custom.create_form_button_submit')</button>
</form>
@endsection

