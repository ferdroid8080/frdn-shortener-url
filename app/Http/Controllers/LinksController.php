<?php

namespace App\Http\Controllers;

use App\Links;
use App\LinksTracker;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;
use Log;

class LinksController extends Controller
{


    public function getFullUrl($query)
    {
        $link = Links::where('shortened_url', $query)->first();

        $ip = $_SERVER['REMOTE_ADDR'];
        $ipInfo = file_get_contents("http://ip-api.com/json/" . $ip);
        $ipInfo = json_decode($ipInfo);

        $agent = new Agent();
        $tracker = [
            'ip' => $ip,
            'browser' => $agent->browser(),
            'os' => $agent->platform(),
            'device' => $agent->device(),
            'robot' => $agent->robot(),
            'referer' => isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '',
            'user_agent' => $_SERVER['HTTP_USER_AGENT']
        ];

        if ($ipInfo->status == 'success') {
            $tracker['country'] = $ipInfo->country;
            $tracker['city']  = $ipInfo->city;
            $tracker['region'] = $ipInfo->region;
            $tracker['region_code'] = $ipInfo->regionName;
            $tracker['isp'] = $ipInfo->isp;
            $tracker['country_code'] = $ipInfo->countryCode;
            $tracker['timezone'] = $ipInfo->timezone;
        }

        if ($link) {
            $link->clicks = $link->clicks + 1;
            $link->save();

            foreach($tracker as $i => $v) {
                $linkTracker = new LinksTracker();
                $linkTracker->dyn_field = $i;
                $linkTracker->dyn_value_field = $v;
                $linkTracker->links_id = $link->id;
                $linkTracker->save();
            }

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
