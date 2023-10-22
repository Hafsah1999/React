import React from 'react'

const CssDefinition = () => {
  return (
    <>

      <div className="sidenav">
        <a href="/History">History</a>
        <a href="/CSSDefinition">Definition</a>
        <a href="/Selectors">Selectors</a>
        <a href="#Attributes">Attributes</a>
        <a href="/video">Video <br /> Tutorial</a>
      </div>
      <div className="main-1">
        <h1 className='ms-4 mb-4'>What is CSS?</h1>

        <p className="ms-5 text-muted fs-4">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. <br /> <br />
          CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts.[3] This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.</p>
        
          <h1 className="ms-4 mb-4 text-danger">CSS Syntax :
        </h1>
        <img src="https://www.w3schools.com/css/img_selector.gif" alt="" className='w-75 ms-5 mt-4 mb-5'/>
        <p className="text-primary fs-4 ms-5 mb-3">The selector points to the HTML element you want to style.</p>
        <p className="text-primary fs-4 ms-5 mb-3">The declaration block contains one or more declarations separated by semicolons.</p>
        <p className="text-primary fs-4 ms-5 mb-3">Each declaration includes a CSS property name and a value, separated by a colon.</p>
        <p className="text-primary fs-4 ms-5 mb-3">Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
        
        <p className="ms-5 fs-4 text-danger">CSS example:</p>

        <div className="card card-editor">

          <div className="card card-editor-1  shadow">
            <div className="card-body ">
              <div className="card-body editor-inner">
                <span style={{ color: "maroon" }}>body</span><span> {"{"} </span> <br /> <span className="text-primary ms-5 ">background-color : </span><span className="text-danger">red ;</span> <br /> <span>{"}"}</span> <br /> <br />
                <span style={{ color: "maroon" }}>h1</span><span> {"{"} </span> <br /> <span className="text-primary ms-5 ">background-color : </span><span className="text-danger">white ;</span> <br /> <span className="text-primary ms-5 ">text-color : </span><span className="text-danger">violet ;</span> <br /> <span>{"}"}</span> <br /><br />
                <span style={{ color: "maroon" }}>p</span><span> {"{"} </span> <br /> <span className="text-primary ms-5 ">background-color : </span><span className="text-danger">white ;</span> <br /> <span className="text-primary ms-5 ">text-color : </span><span className="text-danger">violet ;</span> <br /> <span>{"}"}</span>
              </div>
            </div>
          </div>

        </div>




        <h1 className='ms-4 mb-4'>Why Use CSS?</h1>
        <p className="ms-5 text-muted fs-4">CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>



        <h1 className="ms-4 mb-4">CSS Saves a Lot of Work!</h1>

        <p className="ms-5 text-muted fs-4 mb-2">The style definitions are normally saved in external .css files. <br />With an external stylesheet file, you can change the look of an entire website by changing just one file! <br /><br />
        </p>

        
      </div>

    </>
  )
}

export default CssDefinition