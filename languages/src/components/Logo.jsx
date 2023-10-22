import React from 'react'
import { Link } from "react-router-dom";

const Logo = () => (
    <>
        {/* Navbar */}


        {/* Content */}
        <div className="container-fluid content">
            <div className="card content-title bg-transparent">
                <h1 className="display-3  fw-bold site-title text-white ">LEARN TO CODE</h1>
                <h4 className=' sub-title fs-3'>With the world &apos; s largest web developer site.</h4>

                <div className="input-group mt-4 search-content">
                    <input type="text" className="form-control fs-5 border-none form-control-lg" placeholder='Search our tutorials,e.g. HTML' />
                    <button className="btn btn-success w-25"><i className="fa-solid fa-magnifying-glass" />
                    </button>
                </div>

                <Link to="/" className='text-begin text-white mt-4 ms-5 p-2 fs-4'>Not Sure Where To Begin?</Link>
            </div>
        </div>
        {/* content-2 */}
        <div className="container-fluid bg-content-2">
            <div className="row content-2">
                <div className="col-md-6">
                    <h1 className="text-center display-2 p-4 fw-bold mt-5">HTML</h1>
                    <h5 className="text-center mt-0  mb-3 p-2">The language for building web pages</h5>

                    <button className="btn btn-success btn-content-2 opacity-75  p-2  d-block m-auto mt-4"><Link to="/HTML" className="nav-link text-white" aria-current="page">
                  Learn HTML
                </Link></button>
                    <button className="btn btn-warning btn-content-2 opacity-75 p-2 text-white d-block m-auto mt-4"><Link to="/video" className='nav-link text-white' aria-current="page">Video Tutorial</Link></button>
                    <button className="btn btn-dark btn-content-2  p-2  d-block m-auto mt-4">HTML Reference</button>
                    <button className="btn btn-danger btn-content-2 opacity-75 p-2  d-block m-auto mt-4">Get Certified</button>

                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg content-2-card">
                        <div className="card-body">
                            <h3 className="mt-3 ms-4">HTML Example: </h3>
                            <div className="card shadow bg-white bg-opacity-25 card-inner">
                                <div className="card-body ">
                                    <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>!DOCTYPE </span><span className='text-danger'>html</span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><br />
                                    <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>html</span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><br />
                                    <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>title </span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><span className="">HTML Tutorial</span> <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>/title</span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><br />
                                    <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>head </span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><br />
                                    <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>/head </span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><br />
                                    <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>body </span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><br /><br />
                                    <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>h1</span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><span>HTML Heading <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>/h1</span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><br /></span>
                                    <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>p </span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><span>HTML Paragraph</span> <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>/p</span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><br /><br />
                                    <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>/body</span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><br />
                                    <span className='fs-5' style={{ color: "blue" }}>&lt;</span><span style={{ color: "maroon" }}>/html </span><span className="fs-5 " style={{ color: "blue" }}>&gt;</span><br />

                                </div>
                            </div>
                            <button className=" btn btn-success btn-try w-50">Try it Yourself</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Content-3 */}
        <div className="container-fluid bg-content-3">
            <div className="row content-2">
                <div className="col-md-6">
                    <h1 className="text-center display-2 fw-bold p-4 mt-5">CSS</h1>
                    <h5 className="text-center mt-0 mb-3 p-2">The language for styling web pages</h5>

                    <button className="btn btn-success btn-content-2 opacity-75  p-2  d-block m-auto mt-4">Learn CSS</button>
                    <button className="btn btn-warning btn-content-2 opacity-75 p-2 text-white d-block m-auto mt-4">Video Tutorial</button>
                    <button className="btn btn-dark btn-content-2  p-2  d-block m-auto mt-4">CSS Reference</button>
                    <button className="btn btn-danger btn-content-2 opacity-75 p-2  d-block m-auto mt-4">Get Certified</button>

                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg content-2-card">
                        <div className="card-body">
                            <h3 className="mt-3 ms-4">CSSExample: </h3>
                            <div className="card shadow bg-white bg-opacity-25 card-inner">
                                <div className="card-body  mt-3 m-2 ">

                                    <span style={{ color: "maroon" }}>body</span><span style={{ color: "black" }}>{"  {"}</span><br />
                                    <span className="text-danger ms-4">background-color</span><span> :</span> <span style={{ color: "blue" }}>lightblue ;</span><br />
                                    <span style={{ color: "black" }}>{"  }"}</span><br />
                                    <span style={{ color: "maroon" }}>h1</span><span style={{ color: "black" }}>{"  {"}</span><br />
                                    <span className="text-danger ms-4">color</span><span> :</span> <span style={{ color: "blue" }}>white ;</span><br />
                                    <span className="text-danger ms-4">text</span><span> :</span> <span style={{ color: "blue" }}>center ;</span><br />
                                    <span style={{ color: "black" }}>{"  }"}</span><br />
                                    <span style={{ color: "maroon" }}>p</span><span style={{ color: "black" }}>{"  {"}</span><br />
                                    <span className="text-danger ms-4">font-family</span><span> :</span> <span style={{ color: "blue" }}>veranda ;</span><br />
                                    <span className="text-danger ms-4">font-size</span><span> :</span> <span style={{ color: "blue" }}>20px ;</span><br />
                                    <span style={{ color: "black" }}>{"  }"}</span><br />


                                </div>
                            </div>
                            <button className=" btn btn-success btn-try w-50">Try it Yourself</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Content-4 */}
        <div className="container-fluid bg-dark">
            <div className="row content-2">
                <div className="col-md-6">
                    <h1 className="text-center display-2 text-white fw-bold p-4  mt-5">JAVASCRIPT</h1>
                    <h5 className="text-center mt-0 mb-3 text-white p-2">The language for programming web pages</h5>

                    <button className="btn btn-success btn-content-2 opacity-75  p-2  d-block m-auto mt-4">Learn JAVASCRIPT</button>
                    <button className="btn btn-warning btn-content-2 opacity-75 p-2 text-white d-block m-auto mt-4">Video Tutorial</button>
                    <button className="btn btn-light  btn-content-2  p-2  d-block m-auto mt-4"> Reference</button>
                    <button className="btn btn-danger btn-content-2 opacity-75 p-2  d-block m-auto mt-4">Get Certified</button>

                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg content-4-card">
                        <div className="card-body">
                            <h3 className="mt-3 ms-4">JavascriptExample: </h3>
                            <div className="card shadow bg-white bg-opacity-50 card-inner">
                                <div className="card-body  mt-3 m-2 ">

                                    <div className="htmlHigh">
                                        <span className="tagnamecolor" style={{ color: "brown" }}>
                                            <span className="tagcolor" style={{ color: "mediumblue" }}>
                                                &lt;
                                            </span>
                                            button
                                            <span className="attributecolor" style={{ color: "red" }}>
                                                {" "}
                                                onclick
                                                <span className="attributevaluecolor" style={{ color: "mediumblue" }}>
                                                    = &quot;myFunction()&quot; 
                                                </span>
                                            </span>
                                            <span className="tagcolor" style={{ color: "mediumblue" }}>
                                                &gt;
                                            </span>
                                        </span>
                                        Click Me!
                                        <span className="tagnamecolor" style={{ color: "brown" }}>
                                            <span className="tagcolor" style={{ color: "mediumblue" }}>
                                                &lt;
                                            </span>
                                            /button
                                            <span className="tagcolor" style={{ color: "mediumblue" }}>
                                                &gt;
                                            </span>
                                        </span>
                                        <br />
                                        <br />
                                        <span className="tagnamecolor" style={{ color: "brown" }}>
                                            <span className="tagcolor" style={{ color: "mediumblue" }}>
                                                &lt;
                                            </span>
                                            script
                                            <span className="tagcolor" style={{ color: "mediumblue" }}>
                                                &gt;
                                            </span>
                                        </span>
                                        <span className="jscolor" style={{ color: "black" }}>
                                            <br />
                                            <span className="jskeywordcolor" style={{ color: "mediumblue" }}>
                                                function
                                            </span>{" "}
                                            myFunction() {"{"}
                                            <br />
                                            <span className="jsnumbercolor" style={{ color: "red" }}></span> &nbsp;{" "}
                                            <span className="jskeywordcolor" style={{ color: "mediumblue" }}>
                                                let
                                            </span>{" "}
                                            x = document.
                                            <span className="jspropertycolor" style={{ color: "black" }}>
                                                getElementById
                                            </span>
                                            (
                                            <span className="jsstringcolor" style={{ color: "brown" }}>
                                                &quot;demo&quot;
                                            </span>
                                            );
                                            <br />
                                            <span className="jsnumbercolor" style={{ color: "red" }}></span>&nbsp; x.
                                            <span className="jspropertycolor" style={{ color: "black" }}>
                                                style
                                            </span>
                                            .
                                            <span className="jspropertycolor" style={{ color: "black" }}>
                                                fontSize
                                            </span>{" "}
                                            ={" "}
                                            <span className="jsstringcolor" style={{ color: "brown" }}>
                                                &quot;25px&quot;
                                            </span>
                                            ; <br />
                                            <span className="jsnumbercolor" style={{ color: "red" }}></span>&nbsp; x.
                                            <span className="jspropertycolor" style={{ color: "black" }}>
                                                style
                                            </span>
                                            .
                                            <span className="jspropertycolor" style={{ color: "black" }}>
                                                color
                                            </span>{" "}
                                            ={" "}
                                            <span className="jsstringcolor" style={{ color: "brown" }}>
                                                &quot;red &quot;
                                            </span>
                                            ; <br />
                                            {"}"}
                                            <br />
                                        </span>
                                        <span className="tagnamecolor" style={{ color: "brown" }}>
                                            <span className="tagcolor" style={{ color: "mediumblue" }}>
                                                &lt;
                                            </span>
                                            /script
                                            <span className="tagcolor" style={{ color: "mediumblue" }}>
                                                &gt;
                                            </span>
                                        </span>
                                    </div>



                                </div>
                            </div>
                            <button className=" btn btn-success btn-try w-50">Try it Yourself</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Content-5 */}
        <div className="container-fluid bg-danger bg-opacity-25">
            <div className="row content-2">
                <div className="col-md-6">
                    <h1 className="text-center display-2 fw-bold p-4 mt-5">Python</h1>
                    <h5 className="text-center mt-0 mb-3 p-2">A popular programming language</h5>

                    <button className="btn btn-success btn-content-2 opacity-75  p-2  d-block m-auto mt-4">Learn Python</button>
                    <button className="btn btn-warning btn-content-2 opacity-75 p-2 text-white d-block m-auto mt-4">Video Tutorial</button>
                    <button className="btn btn-dark btn-content-2  p-2  d-block m-auto mt-4">Python Reference</button>
                    <button className="btn btn-danger btn-content-2 opacity-75 p-2  d-block m-auto mt-4">Get Certified</button>

                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg content-2-card">
                        <div className="card-body">
                            <h3 className="mt-3 ms-4">PythonExample: </h3>
                            <div className="card shadow bg-white bg-opacity-25 card-inner">
                                <div className="card-body  mt-3 m-2 ">

                                    <span className='text-primary'>if{" "} </span><span className="text-danger">5</span>{" >"}<span></span><span className="text-danger">2</span><span> :</span><br />
                                    <span className='ms-4'>print</span><span>{" ("}</span><span>  &quot; </span><span style={{ color: "maroon" }}>5 is greater  than 2!</span><span>  &quot;</span><span>{" )"}</span>

                                </div>
                            </div>
                            <button className=" btn btn-success btn-try w-50">Try it Yourself</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Content-6 */}
        <div className="container-fluid bg-success bg-opacity-25">
            <div className="row content-2">
                <div className="col-md-6">
                    <h1 className="text-center display-2 fw-bold p-4 mt-5">SQL</h1>
                    <h5 className="text-center mt-0 mb-3 p-2">A language for accessing database</h5>

                    <button className="btn btn-success btn-content-2 opacity-75  p-2  d-block m-auto mt-4">Learn SQL</button>
                    <button className="btn btn-warning btn-content-2 opacity-75 p-2 text-white d-block m-auto mt-4">Video Tutorial</button>
                    <button className="btn btn-dark btn-content-2  p-2  d-block m-auto mt-4">SQL Reference</button>
                    <button className="btn btn-danger btn-content-2 opacity-75 p-2  d-block m-auto mt-4">Get Certified</button>

                </div>

                <div className="col-md-6">
                    <div className="card shadow-lg content-2-card">
                        <div className="card-body">
                            <h3 className="mt-3 ms-4">SQLExample: </h3>
                            <div className="card shadow bg-white bg-opacity-25 card-inner">
                                <div className="card-body  mt-3 m-2 ">

                                    <span className="sqlcolor" style={{ color: "black" }}>
                                        <span className="sqlnumbercolor" style={{ color: "" }}></span>{" "}
                                        <span className="sqlkeywordcolor" style={{ color: "mediumblue" }}>
                                            SELECT
                                        </span>{" "}
                                        *{" "}
                                        <span className="sqlkeywordcolor" style={{ color: "mediumblue" }}>
                                            FROM
                                        </span>{" "}
                                        Customers
                                        <br />
                                        <span className="sqlnumbercolor" style={{ color: "" }}></span>{" "}
                                        <span className="sqlkeywordcolor" style={{ color: "mediumblue" }}>
                                            WHERE
                                        </span>{" "}
                                        Country=
                                        <span className="sqlstringcolor" style={{ color: "brown" }}>
                                            &apos;Mexico&apos;
                                        </span>
                                        ;<span className="sqlnumbercolor" style={{ color: "" }}></span>{" "}
                                    </span>


                                </div>
                            </div>
                            <button className=" btn btn-success btn-try w-50">Try it Yourself</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* content-7 */}
        <div className="container-fluid bg-dark">

            <div className="row">
                <div className="col-md-6">
                    <div className="card  content-7 mt-5 mb-4 ms-5 me-3 ">
                        <div className="card-content-7  card-body bg-danger bg-opacity-25">
                            <h1 className='text-center p-4 fw-bold'>PHP</h1>
                            <h5 className='text-center'>A server programming language</h5>
                            <button className=" btn btn-dark btn-content-7  mt-4   mb-4">Learn PHP</button>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card content-7 mt-5 mb-4 ms-2 me-5 ">
                        <div className="card-content-7 card-body bg-primary bg-opacity-25">
                            <h1 className='text-center p-4 fw-bold'>Java</h1>
                            <h5 className='text-center'>A programming language</h5>
                            <button className=" btn btn-dark btn-content-7  mt-4   mb-4">Learn JAVA</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card  content-7 mt-4 mb-4 ms-5 me-3 ">
                        <div className="card-content-7  card-body bg-warning bg-opacity-25">
                            <h1 className='text-center p-4 fw-bold'>Jquery</h1>
                            <h5 className='text-center'>A JS library for developing web pages</h5>
                            <button className=" btn btn-dark btn-content-7  mt-4   mb-4">Learn PHP</button>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card content-7 mt-4 mb-4 ms-2 me-5 ">
                        <div className="card-content-7 card-body bg-success bg-opacity-50">
                            <h1 className='text-center p-4 fw-bold'>Bootastrap</h1>
                            <h5 className='text-center'>A CSS framework for designing better web pages</h5>
                            <button className=" btn btn-dark btn-content-7  mt-4   mb-4">Learn BOOTSTRAP</button>

                        </div>
                    </div>
                </div>
            </div>


            <div className="row ">
                <div className="col-md-6">
                    <div className="card  content-7 mt-4 mb-5 ms-5 me-3 ">
                        <div className="card-content-7  card-body bg-light bg-opacity-25">
                            <h1 className='text-center p-4 fw-bold'>C++</h1>
                            <h5 className='text-center'>A programming language</h5>
                            <button className=" btn btn-dark btn-content-7  mt-4   mb-4">Learn C++</button>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card content-7 mt-4 mb-5 ms-2 me-5 ">
                        <div className="card-content-7 card-body bg-danger bg-opacity-25">
                            <h1 className='text-center p-4 fw-bold'>Angular</h1>
                            <h5 className='text-center'>A Javascript framework</h5>
                            <button className=" btn btn-dark btn-content-7  mt-4   mb-4">Learn ANGULAR</button>

                        </div>
                    </div>
                </div>
            </div>


            <div className="row ">
                <div className="col-md-6">
                    <div className="card  content-7 mt-4 mb-5 ms-5 me-3 ">
                        <div className="card-content-7  card-body bg-danger bg-opacity-25">
                            <a to="/" className='nav-link'> <h1 className='text-center p-4 fw-bold'>C</h1></a>


                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card content-7 mt-4 mb-5 ms-2 me-5 ">
                        <div className="card-content-7 card-body bg-warning bg-opacity-25">
                            <a to="/" className='nav-link'> <h1 className='text-center p-4 fw-bold'>C#</h1></a>

                        </div>
                    </div>
                </div>
            </div>


            <div className="row ">
                <div className="col-md-3">
                    <div className="card  content-7 mt-4 mb-5 ms-5 me-3 ">
                        <div className="card-content-7  card-body bg-primary bg-opacity-25">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>React</h3></a>


                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card content-7 mt-4 mb-5 ms-4 me-4 ">
                        <div className="card-content-7 card-body bg-light bg-opacity-25">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>Vue</h3></a>

                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card  content-7 mt-4 mb-5 ms-3 me-5 ">
                        <div className="card-content-7  card-body bg-dark bg-opacity-50">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>MySql</h3></a>


                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card content-7 mt-4 mb-5 ms-2 me-5 ">
                        <div className="card-content-7 card-body bg-success bg-opacity-50">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>XML</h3></a>

                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col-md-3">
                    <div className="card  content-7 mt-4 mb-5 ms-5 me-3 ">
                        <div className="card-content-7  card-body bg-danger bg-opacity-50">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>Node.js</h3></a>


                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card content-7 mt-4 mb-5 ms-4 me-4 ">
                        <div className="card-content-7 card-body bg-warning bg-opacity-50">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>JSON</h3></a>

                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card  content-7 mt-4 mb-5 ms-3 me-5 ">
                        <div className="card-content-7  card-body bg-primary bg-opacity-50">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>Icons</h3></a>


                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card content-7 mt-4 mb-5 ms-2 me-5 ">
                        <div className="card-content-7 card-body bg-warning bg-opacity-25">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>Canvas</h3></a>

                        </div>
                    </div>
                </div>

            </div>

            <div className="row ">
                <div className="col-md-3">
                    <div className="card  content-7 mt-4 mb-5 ms-5 me-3 ">
                        <div className="card-content-7  card-body bg-success bg-opacity-75">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>Graphics</h3></a>


                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card content-7 mt-4 mb-5 ms-4 me-4 ">
                        <div className="card-content-7 card-body bg-info bg-opacity-75">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>Git</h3></a>

                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card  content-7 mt-4 mb-5 ms-3 me-5 ">
                        <div className="card-content-7  card-body bg-danger bg-opacity-25">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>TypeScript</h3></a>


                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card content-7 mt-4 mb-5 ms-2 me-5 ">
                        <div className="card-content-7 card-body bg-danger bg-opacity-75">
                            <a to="/" className='nav-link'> <h3 className='text-center p-4 fw-bold'>Django</h3></a>

                        </div>
                    </div>
                </div>
            </div>


            <div className="row ">
                <div className="col-md-6">
                    <div className="card  content-7 mt-4 mb-5 ms-5 me-3 ">
                        <div className="card-content-7  card-body bg-primary bg-opacity-50">
                            <a to="/" className='nav-link'> <h2 className='text-center p-4 fw-bold'>Excel</h2></a>


                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card content-7 mt-4 mb-5 ms-2 me-5 ">
                        <div className="card-content-7 card-body bg-warning bg-opacity-50">
                            <a to="/" className='nav-link'> <h2 className='text-center p-4 fw-bold'>Googlesheets</h2></a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6">
                    <div className="card  content-7 mt-2 mb-5 ms-5 me-3 ">
                        <div className="card-content-7  card-body bg-danger bg-opacity-50">
                            <a to="/" className='nav-link'> <h2 className='text-center p-4 fw-bold'>Artificial Intelligence</h2></a>


                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card content-7 mt-2 mb-5 ms-2 me-5 ">
                        <div className="card-content-7 card-body bg-success bg-opacity-50">
                            <a to="/" className='nav-link'> <h2 className='text-center p-4 fw-bold'>Machine Learning</h2></a>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* my-learning */}
        <div className="conatiner-fluid bg-danger bg-opacity-25 ">
            <h1 className='fw-bold text-center display-3 my-learning-heading p-5 '>My Learning</h1>
            <h4 className="text-center p-2">
                Track your progress with our free  &quot;My Learning &quot; program.
            </h4>
            <h4 className="text-center p-2"> Log in to your account, and start earning points!
            </h4>

            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow learning-card ">
                        <div className="card-body ms-3 mt-3">
                            <h2 className='mb-3'>Hi, Liam</h2>
                            <p className="">Welcome to the  new  &quot;My Learning &quot; here. This will be <br />
                                your hub to all the tutorials we offer and your learning progress,</p>
                            <p className="mb-4">We hope you will continue to learn with us.</p>
                            <button className=" btn btn-dark btn-learning">Continue &quot;Learn HTML &quot;</button>
                            <button className='btn btn-light bg-transparent fs-5 ms-2 btn-learning-2'>Browse tutorials</button>
                        </div>
                    </div>
                </div>



                <div className="col-md-4 mt-5">

                    <div className="card shadow learning-card-2 mt-5 ms-5 p-2">
                        <div className="card-body">
                            <h5 className='text-center'>Good Job!</h5>
                            <p className='text-center text-muted'>Your score</p>
                            <h1 className="text-center display-3 fw-bold mt-5 mb-0">2279 </h1><p className='fw-bold mb-4 mt-0 text-center'>Points</p>
                            <p className='ms-4 text-muted'>Score factors</p>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card  p-1 mb-2  card-learning-sub-card">
                                        <div className="card-body">
                                            <h6 className='fw-bold  mb-0'>755</h6>
                                            <p className="mb-1"><small>Lessons Read</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card p-1   card-learning-sub-card">
                                        <div className="card-body">
                                            <h6 className='fw-bold  mb-0'>755</h6>
                                            <p className="mb-1"><small>Lessons Read</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="card p-1   card-learning-sub-card">
                                        <div className="card-body">
                                            <h6 className='fw-bold  mb-0'>755</h6>
                                            <p className="mb-1"><small>Lessons Read</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card p-1   card-learning-sub-card">
                                        <div className="card-body">
                                            <h6 className='fw-bold  mb-0'>755</h6>
                                            <p className="mb-1"><small>Lessons Read</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>




                </div>
                <button className="btn btn-success btn-learning-1 mt-5 mb-5 d-block m-auto">Sign Up For free</button>
            </div>
        </div>

        {/* content-8 */}
        <div className="container-fluid bg-primary bg-opacity-25">
            <h1 className="display-3 text-center p-5 fw-bold">Web Templates</h1>
            <h4 className="text-center p-2">Browse our selection of free responsive HTML Templates</h4>


            <div className="row">

                <div className="col-md-6">
                    <div className="card mt-3 mb-5">
                        <div className="card-body">
                            <a href="/"> <img className='template-img ms-5 mt-4' src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/07/attachment_118434235-scaled-e1593791468915.jpg?auto=format&q=60&fit=max&w=930" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card w-100 mt-3 mb-5 ">
                        <div className="card-body">
                            <a href="/"><img className='template-img ms-5 mt-4' src="https://www.motocms.com/blog/wp-content/uploads/2014/07/how-choose-photo-background-11.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>




                <button className="btn btn-dark btn-template mb-5 fs-4 d-block m-auto">Browse Templates</button>
            </div>

        </div>

        {/* Footer */}
        <div className="container-fluid bg-dark text-white">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5 className='text-white'>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="/" className="nav-link p-0 nav-link text-white">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what&apos;s new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">
                                    Email address
                                </label>
                                <input
                                    id="newsletter1"
                                    type="text"
                                    className="form-control"
                                    placeholder="Email address"
                                />
                                <button className="btn btn-primary" type="button">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© 2023 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="/">
                                <svg className="bi" width={24} height={24}>
                                    <use xlinkHref="/twitter" />
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="/">
                                <svg className="bi" width={24} height={24}>
                                    <use xlinkHref="/instagram" />
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="/">
                                <svg className="bi" width={24} height={24}>
                                    <use xlinkHref="/facebook" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>

    </>
)

export default Logo