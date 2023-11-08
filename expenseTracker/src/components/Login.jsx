import { useFormik } from 'formik'
import * as Yup from 'yup'
 import {  useNavigate } from 'react-router-dom'

const loginSchema = Yup.object().shape( {

  username: Yup.string().required('Required'),
  password: Yup.string().required('Required').min(6, 'Too short').max(50, 'Too long'),

}) 

const Login = () => {
  const navigate = useNavigate()

  //Step1:Formic initialization
  const loginForm = useFormik({
    initialValues: {

      username: '',
      password: '',
    },
    //Step5: validation schema
    onSubmit: (values) =>
    {
      console.log(values)
      navigate('/Home')
    },
    //step6: validation of loginSchema
    validationSchema :loginSchema,
  
  })

  return (
    <>
    <div className="bg-dark">
      <div className="container d-flex align-items-center justify-content-center " style={{ height: "100vh" }}>
     
          <div className="card p-5 bg-transparent ">
            
            <h1 className="text-center mb-3">Login</h1>
           

              {/* step3: handling form when submit */}
              <form onSubmit={loginForm.handleSubmit}>
                {/* Step2: main form handling */}
                
    
               
                  <span style={{color:"blue", fontSize:"10", marginLeft:"10"}}>{loginForm.touched.username && loginForm.errors.username}</span>
                  <input type="text" className="form-control text-light px-3  input p-2 bg-transparent " placeholder='Username' style={{border:"none"}}  id="username"  onChange={loginForm.handleChange} value={loginForm.values.username}  />
             
              <br />
                  <span style={{color:"blue", fontSize:"10", marginLeft:"10"}}>{loginForm.touched.password && loginForm.errors.password}</span>
                  <input type="text" className="form-control text-light px-3  input p-2 bg-transparent" style={{border:"none"}} placeholder='Password' id="password" onChange={loginForm.handleChange} value={loginForm.values.password} />
                
                <button className="btn fs-4  w-100 mt-5" type="submit">LOGIN</button>
              </form>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Login;
