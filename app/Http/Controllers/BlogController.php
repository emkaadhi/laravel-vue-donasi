<?php

namespace App\Http\Controllers;

use App\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function random($count)
    {
        $blogs = Blog::select('*')
            ->inRandomOrder()
            ->limit($count)
            ->get();

        $data['blogs'] = $blogs;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'Data blog berhasil ditampilkan',
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
            $request->file('image')->move('images/blog', $request->file('image')->getClientOriginalName());

            $blogs = Blog::create([
                'title' => $request->title,
                'description' => $request->description,
                'image' => $request->file('image')->getClientOriginalName(),
            ]);
        }

        $data['blogs'] = $blogs;

        return response()->json([
            'response_code' => '00',
            'resonse_message' => 'data blog berhasil ditambahkan',
            'data' => $data
        ], 200);
    }

    public function index()
    {
        $blogs = Blog::paginate(6);

        $data['blogs'] = $blogs;

        return response()->json([
            'response_code' => '00',
            'message' => 'data blogs berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function detail($id)
    {
        $blog = Blog::find($id);

        $data['blog'] = $blog;

        return response()->json([
            'response_code' => '00',
            'message' => 'data blog berhasil ditampilkan',
            'data' => $data
        ], 200);
    }
}
