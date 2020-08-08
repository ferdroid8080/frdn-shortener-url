<?php

namespace App\Http\Controllers;

use App\Links;
use App\LinksTracker;
use Exception;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;
use Log;
use Str;

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
        $response = array('success' => true, 'message' => '');

        try {

            if ( $request->input('orig_url') == null )
                throw new Exception( __('validation.required', [ 'attribute' => 'original url' ]) );

            if ( ! Str::startsWith($request->input('orig_url'), 'http://') && ! Str::startsWith($request->input('orig_url'), 'https://') )
                throw new Exception( __('validation.starts_with', [ 'attribute' => 'original url', 'values' => 'http://,https://' ]) );


            $link = new Links();
            $shorten_url_generated = substr(md5(uniqid('frdn_', false)), 0, 8);

            $link->orig_url = $request->input('orig_url');
            $link->description = $request->input('description');
            $link->shortened_url = $shorten_url_generated;

            if ( $link->save() ) {
                $response['success'] = true;
                $response['message'] = __('custom.create_controller_success', ['short' => url()->to('/s/' . $shorten_url_generated)]);
            } else {
                throw new Exception( __('custom.create_controller_failed') );
            }

        } catch(Exception $e) {
            Log::debug('[ LinksController@store ] (at line '  . $e->getLine() . ') ' . $e->getMessage());
            $response['success'] = false;
            $response['message'] = $e->getMessage();
        }

        return response()->json($response);
    }



}
