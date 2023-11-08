import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'

const signupSchema = Yup.object().shape ({
    username : Yup.string().required('Required'),
    password:Yup.string().required('Required').min(6, 'Too short').max(50, 'Too long'),
    confirmpassword:Yup.string().required('Required'),
})

const Signup = () => {

    const navigate = useNavigate()

    const SignUpForm = useFormik ({
        initialValues :{
            username : '',
            password : '',
            confirmpassword : '',
        },

        onSubmit : (values) => {
            console.log(values)
            navigate('/Login')
        },

        validationSchema : signupSchema,
    })

    




    return (
        <div className='bg-dark    '>

            <div className="container d-flex align-items-center justify-content-center " style={{ height: "100vh" }}>
                <div className="card p-5 bg-transparent">


                    <h1 className="text-center">Sign Up</h1>
                    <p className=" text-center customer">Already a customer? <Link to="/Login" className='login'>Login</Link></p>
                   
                   
                    <form onSubmit={SignUpForm.handleSubmit}>
                        <span style={{color:"blue", fontSize:"10", marginLeft:"10"}}>{SignUpForm.touched.username && SignUpForm.errors.username}</span>
                        <input type="text" onChange={SignUpForm.handleChange}  id="username"  placeholder="Username" className='form-control text-light mt-4 input p-2 bg-transparent' value={SignUpForm.values.username} />
                    
                        <br />
                        <span style={{color:"blue", fontSize:"10", marginLeft:"10"}}>{SignUpForm.touched.password && SignUpForm.errors.password}</span>
                        <input type="password"  id="password"  placeholder="Password" className='form-control text-light px-3  input p-2 bg-transparent' onChange={SignUpForm.handleChange} value={SignUpForm.values.password} />
                  <br />
                        <span style={{color:"blue", fontSize:"10", marginLeft:"10"}}>{SignUpForm.touched.confirmpassword && SignUpForm.errors.confirmpassword}</span>
                        <input type="password"  id="confirmpassword"  placeholder="Confirm password" className='form-control text-light px-3  input p-2 bg-transparent' onChange={SignUpForm.handleChange} value={SignUpForm.values.confirmpassword} />

                        <Link to="/Login" className='nav-link'> <button type="submit" className='btn fs-4  w-100 mt-5'>SignUp</button></Link>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup