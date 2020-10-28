<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        return view('admin.auth.login');
    }

    public function login(Request $request)
    {
        $data = request()->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

            $fieldType = filter_var($request->username, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

            if(Auth::guard('web')->attempt(array($fieldType => $request['username'], 'password' => $request['password'],'role' => 2)))
            {
                $notification=array(
                  'messege'=>'You Are Log In',
                  'alert-type'=>'success'
                   );
                return redirect()->intended(route('admin.home'))->with($notification);
            }else{
              $notification=array(
                'messege'=>'Oppos! Admin/Password Is worng',
                'alert-type'=>'error'
                 );
                return redirect()->back()->with($notification);
            }
    }
}
