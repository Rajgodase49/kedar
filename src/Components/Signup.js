import { useState } from "react"
import { useDispatch } from "react-redux"
import addsignupdata from "../Redux/Action/Actioincreators"
import { useNavigate } from "react-router-dom"
import {ToastContainer,toast} from "react-toastify"
const Signup = () => {useNavigate()
        const dispatch = useDispatch()
        const navigate= useNavigate()
    const [formdata, setFormdata] = useState([])
    

    const changehandler = (e) => {

        setFormdata( {...formdata,[e.target.name]: e.target.value })
    }
    
    const submithandler = (e) => {
        e.preventDefault();
      if (formdata.name && formdata.email && formdata.password && formdata.confirmpassword){
            if(formdata.password===formdata.confirmpassword){
                const c= dispatch(addsignupdata(formdata))
            console.log(c)
                    navigate("/login")
                    
                    toast(("user created sucessfully"))
            }else{
                toast("password not match")
            }
            
        }
        else{
            alert("fill all fields")
        }
    }

    return (
        <div>
            <div className='container border bg-info mt-4 p-2'>
                <div className="row">
                    <form className='form'onSubmit={submithandler}>
                        <div className="col p-3">
                            <div className="col  p-3">
                                <label className='form-control'>Name:<input type='text' name='name' onChange={changehandler} className='form-control' /> </label>

                            </div>
                            <div className="col  p-3">

                                <label className='form-control'>Email:<input type='text' name='email' onChange={changehandler} className='form-control' /> </label>

                            </div>
                            <div className="col  p-3">

                                <label className='form-control'>Password:<input type='text' name='password' onChange={changehandler} className='form-control' /> </label>

                            </div>
                            <div className="col  p-3">

                                <label className='form-control'>Confirm Password:<input type='text' name='confirmpassword' onChange={changehandler} className='form-control' /> </label>

                            </div>
                            <button type="submit" className='form-control  p-3'>submit</button>
                            <button type="reset" className='form-control  p-3'>reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Signup