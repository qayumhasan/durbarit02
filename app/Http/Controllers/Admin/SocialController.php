<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Social;
use Carbon\Carbon;

class SocialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=Social::first();
        return view('admin.social.index',compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
      $id=$request->id;
      $upadte=Social::where('id',$id)->update([
        'facebook'=>$request['facebook'],
        'twitter'=>$request['twitter'],
        'youtube'=>$request['youtube'],
        'instragram'=>$request['instragram'],
        'linkend'=>$request['linkend'],
        'google'=>$request['google'],
        'feed'=>$request['feed'],
        'updated_at'=>Carbon::now()->toDatetimeString(),
      ]);
      if($upadte){
        $notification=array(
            'messege'=>'Updated Success',
            'alert-type'=>'success'
             );
         return redirect()->back()->with($notification);
      }
      else {
        $notification=array(
            'messege'=>'Updated faild.',
            'alert-type'=>'error'
             );
         return redirect()->back()->with($notification);
      }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
