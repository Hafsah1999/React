import React from 'react'

const Attributes = () => {
  return (
    <>

      <div className="sidenav">
        <a href="/History">History</a>

        <a href="/Editors">Editors</a>
        <a href="/Definition">Definition</a>
        <a href="/Tags">Tags</a>
        <a href="#Attributes">Attributes</a>
        <a href="/video">Video <br /> Tutorial</a>
      </div>
      <div className="main-1">

        <h1 className="ms-4 mb-4">HTML Attributes</h1>
        <p className="text-muted ms-5 fs-4 mb-3">HTML attributes provide additional information about HTML elements.</p>

        <h2 className="text-primary mt-4 ms-3 mb-4">HTML Attributes</h2>
        <ul className="text-muted ms-5 fs-4">
          <li className="ms-4">All HTML elements can have attributes</li>
          <li className="ms-4">Attributes provide additional information about elements</li>
          <li className="ms-4">Attributes are always specified in the start tag</li>
          <li className="ms-4">Attributes usually come in name/value pairs like: name=&quot;value&quot;</li>
        </ul>

        <h2 className="text-primary mt-4 ms-3 mb-4">The href Attribute</h2>
        <p className="text-muted ms-5 fs-4 mb-3">The <span className="text-danger">&lt;a&gt;</span> tag defines a hyperlink. The <span className='text-danger'>href</span> attribute specifies the URL of the page the link goes to:</p>

        <h2 className="ms-5 text-danger mb-3">Example :</h2>
        <div className="card card-example">
          <div className="card-body ms-3 ">
            <p className=" fs-5"><span className="text-primary">&lt;</span><span className="text-danger">a href</span><span className="text-primary">=&quot;https://www.languages.com&quot;</span><span className="text-primary">&gt;</span>Visit mypage<span className="text-primary">&lt;</span><span className="text-danger">/a</span><span className="text-primary">&gt;</span></p>
          </div>
        </div>

        <h2 className="text-primary mt-4 ms-3 mb-4">The src Attribute</h2>
        <p className="text-muted ms-5 fs-4 mb-3">The <span className="text-danger">&lt;img&gt;</span>  tag is used to embed an image in an HTML page. The <span className='text-danger'></span> attribute specifies the URL of the page the link goes to:</p>

        <h2 className="ms-5 text-danger mb-3">Example :</h2>
        <div className="card card-example">
          <div className="card-body ms-3 ">
            <p className=" fs-5"><span className="text-primary">&lt;</span><span className="text-danger">a href</span><span className="text-primary">=&quot;https://www.languages.com&quot;</span><span className="text-primary">&gt;</span>Visit mypage<span className="text-primary">&lt;</span><span className="text-danger">/a</span><span className="text-primary">&gt;</span></p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Attributes