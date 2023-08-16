import { useState } from "react"
import { useDispatch } from "react-redux"
import addsignupdata from "../Redux/Action/Actioincreators"
import { useNavigate } from "react-router-dom"
const Signup = () => {
    useNavigate()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formdata, setFormdata] = useState([])
    const changehandler = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const submithandler = (e) => {
        e.preventDefault();
        if (formdata.name && formdata.email && formdata.password && formdata.confirmpassword) {
            if (formdata.password === formdata.confirmpassword) {
                const c = dispatch(addsignupdata(formdata))
                console.log(c)
                navigate("/login")
                alert(("user created sucessfully"))
                fetch("http://localhost:8080/api/post", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(formdata)
                }
                )
            } else {
                alert("password not match")
            }
        }
        else {
            alert("fill all fields")
        }
    }
    return (
        <div>
            <div className='container border bg-info mt-4 p-2'>
                <div className="row"><h1 className="text-center">Welcome to signup page</h1>
                    <form className='form' onSubmit={submithandler}>
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
                            <div className="container">
                                <div className="row">
                                    <button type="submit" className='form-control col p-3'>submit</button>
                                    <button type="reset" className='form-control col p-3'>reset</button>
                                </div>
                                <p className="text-center">Already resitered <b onClick={() => navigate("/login")}>login here</b></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Signup