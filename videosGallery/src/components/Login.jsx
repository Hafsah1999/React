import { useFormik } from 'formik'
import * as Yup from 'yup'
 import { Link, useNavigate } from 'react-router-dom'

const loginSchema = Yup.object().shape( {

  email: Yup.string().required('Required').email('Invalid email'),
  password: Yup.string().required('Required').min(6, 'Too short').max(50, 'Too long'),

}) 

const Login = () => {
  const navigate = useNavigate()

  //Step1:Formic initialization
  const loginForm = useFormik({
    initialValues: {

      email: '',
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
      <div className="container-fluid w-100 bg-img">
        <div className="col">
          <div className="card  bg-transparent d-block m-auto loginCard">
            <div className="card-header bg-transparent">
              <h1 className="text-danger">LOGIN</h1>
            </div>
            <div className="card-body bg-transparent">

              {/* step3: handling form when submit */}
              <form onSubmit={loginForm.handleSubmit}>
                {/* Step2: main form handling */}
                
                <div className="form-group ">
                  <label className="text-danger">Email address:</label><br />
                  <span style={{color:"blue", fontSize:"10", marginLeft:"10"}}>{loginForm.touched.email && loginForm.errors.email}</span>
                  <input type="email" className="form-control ms-0 m-2 bg-transparent " style={{border:"none", borderBottom:"1px solid lightgrey"}}  id="email" onChange={loginForm.handleChange} value={loginForm.values.email}  />
                  
                </div>
                <div className="form-group">
                  <label className="text-danger">Password:</label><br />
                  <span style={{color:"blue", fontSize:"10", marginLeft:"10"}}>{loginForm.touched.password && loginForm.errors.password}</span>
                  <input type="text" className="form-control ms-0 m-2 bg-transparent" style={{border:"none", borderBottom:"1px solid lightgrey"}} id="password" onChange={loginForm.handleChange} value={loginForm.values.password} />
                </div>
                <button className="btn btn-danger ms-0 m-2 mt-3 p-2 w-100" type="submit">LOGIN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
