import '../RegSignStyle.scss';
import { Link } from "react-router-dom"
function Signin () {
    return(
        <div className='signin-bigbox'> 
            <div className="px-3 py-2">
                <h1>Sign In</h1>
                <div className='.signin-textbox1'>
                            <input type="text" class="form-control" placeholder="Username:"/>
                        </div>
                        <div className='.signin-textbox2'>
                            <input type="text" class="form-control" placeholder="Password"/>
                        </div>
                    <button type="button" class=".signin-button1">Forget Password?</button>
                </div>
                <Link to="/"><button type="button" class=".signin-button2">Sign In</button> </Link>
            </div>
    )
}
export default Signin;