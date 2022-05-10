import '../RegSignStyle.scss';

    function Register (){
        return(
            <div className='register-bigbox'> 
                <div className="px-3 py-2">
                    <h1>Register</h1>
                        <div className='.register-textbox1'>
                            <input type="text" class="form-control" placeholder="Username:"/>
                        </div>
                        <div className='.register-textbox2'>
                            <input type="text" class="form-control" placeholder="Email:"/>
                        </div>
                        <div className='.register-textbox3'>
                            <input type="text" class="form-control" placeholder="Password:"/>
                        </div>
                        <div className='.register-textbox4'>
                            <input type="text" class="form-control" placeholder="Confirm Password:"/>
                        </div>
                    </div>
                    <button type="button" class="Get Started">Get Started</button>
                </div>
        )
    }
export default Register;