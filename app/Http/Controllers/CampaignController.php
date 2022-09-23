<?php

namespace App\Http\Controllers;

use App\Campaign;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    public function index()
    {
        $campaigns = Campaign::paginate(6);

        $data['campaigns'] = $campaigns;

        return response()->json([
            'response_code' => '00',
            'message' => 'data campaigns berhasil ditampilkan',
            'data' => $data
        ], 200);
    }
    public function detail($id)
    {
        $campaign = Campaign::find($id);

        $data['campaign'] = $campaign;

        return response()->json([
            'response_code' => '00',
            'message' => 'data campaign berhasil ditampilkan',
            'data' => $data
        ], 200);
    }
    public function random($count)
    {
        $campaigns = Campaign::select('*')
            ->inRandomOrder()
            ->limit($count)
            ->get();

        $data['campaigns'] = $campaigns;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'Data campaign berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'required|mimes:jpg,jpeg,png',
        ]);

        if ($request->hasFile('image')) {
            $request->file('image')->move('images/campaign', $request->file('image')->getClientOriginalName());

            $campaigns = Campaign::create([
                'title' => $request->title,
                'description' => $request->description,
                'image' => $request->file('image')->getClientOriginalName(),
            ]);
        }

        $data['campaigns'] = $campaigns;

        return response()->json([
            'response_code' => '00',
            'resonse_message' => 'data campaign berhasil ditambahkan',
            'data' => $data
        ], 200);
    }

    public function search($keyword)
    {
        $campaigns = Campaign::select('*')->where('title', 'like', '%' . $keyword . '%')->get();

        $data['campaigns'] = $campaigns;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'Data pencarian campaign berhasil ditampilkan',
            'data' => $data
        ]);
    }
}
