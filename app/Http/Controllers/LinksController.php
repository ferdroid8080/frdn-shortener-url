<?php

namespace App\Http\Controllers;

use App\Links;
use Illuminate\Http\Request;

class LinksController extends Controller
{


    public function getFullUrl($query)
    {
        $link = Links::where('shortened_url', $query)->first();

        if ($link) {
            $link->clicks = $link->clicks + 1;
            $link->save();
            return redirect($link->orig_url);
        } else {
            abort(404, 'Not found');
        }

    }


    public function create()
    {


        return view('create');
    }


    public function store(Request $request)
    {

        $request->validate([
            'orig_url' => 'required|starts_with:http://,https://',
            'description' => 'required'
        ]);

        $link = new Links();

        $shorten_url_generated = substr(md5(uniqid('frdn_', false)), 0, 8);

        $link->orig_url = $request->input('orig_url');
        $link->description = $request->input('description');
        $link->shortened_url = $shorten_url_generated;

        if ( $link->save() ) {
            return redirect('/new/link')->with('success', __('custom.create_controller_success', ['short' => url()->to('/' . $shorten_url_generated)]));
        } else {
            return redirect('/new/link')->withInput()->with('error', __('custom.create_controller_failed'));
        }

    }



}
