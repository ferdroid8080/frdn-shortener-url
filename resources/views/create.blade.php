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
    .mt-8 {
        margin-top: .8rem;
    }
    .alert {
        border-radius: .6rem;
        margin: 2rem 0;
        padding: 0 .8rem;
        font-weight: 500;
    }
    .alert-danger {
        border: .1rem solid #992b35;
        background-color: #f1dfe0;
        color:#af1926;
    }
    .alert-success {
        border: .1rem solid #2b9959;
        background-color: #cef0dc;
        color:#0f8842;
    }
</style>
@endsection

@section('container')
<div class="row">
    <div class="col s12">
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
            <div class="alert alert-success">
                {{ session('success') }}
            </div>
        @endif
        <div class="row mt-8">
            <form action="/new/link" method="post" class="col s12">
                @csrf
                <div class="row">
                    <div class="input-field col s6">
                        <input type="text" name="orig_url" />
                        <label>@lang('custom.create_form_url_label')</label>
                    </div>
                    <div class="input-field col s6">
                        <input type="text" name="description" />
                        <label>@lang('custom.create_form_description_label')</label>
                    </div>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action">
                    @lang('custom.create_form_button_submit') <i class="material-icons right"> send</i>
                </button>
            </form>
        </div>
    </div>
</div>
@endsection

