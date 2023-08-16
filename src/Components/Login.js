import { useState} from "react"
import {  useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const Login = () => {
    


    const [formdata, setFormdata] = useState([])
    const navigate = useNavigate()
    const y = useSelector(state => state.form)
    console.log(y)
    console.log(y.email)
    
   

    const changehandler = (e) => {

        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const submithandler = (e) => {
        e.preventDefault();
        const match = () => {
            if (y.find(item => item.email === formdata.email && item.password === formdata.password)) {
                alert("login sucessfull")
                navigate("/dashboard")
            } else {
                alert("user not found")
            }
        }
        match()
    }

  



return (
    <div>
        <div className='container border bg-info mt-4 p-2'>
            <div className="row"><h1 className="text-center">Welcome to signup page</h1>
                <form className='form' onSubmit={submithandler}>
                    <div className="col p-3">

                        <div className="col  p-3">

                            <label className='form-control'>Email:<input type='text' name='email' onChange={changehandler} className='form-control' /> </label>

                        </div>
                        <div className="col  p-3">

                            <label className='form-control'>Password:<input type='text' name='password' onChange={changehandler} className='form-control' /> </label>

                        </div>

                        <div className="container">
                            <div className="row">
                                <button type="submit" className='form-control col p-3'>submit</button>
                                <button type="reset" className='form-control col p-3'>reset</button>

                            </div>
                            <p className="text-center">Not resitered <b onClick={() => navigate("/")}>Resister here</b></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div >
)
}

export default Login