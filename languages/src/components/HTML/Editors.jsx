import React from 'react'

const Editors = () => {
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
                <h1 className='ms-4 mb-4'>HTML Editors</h1>
                <p className="ms-5 text-muted fs-4">A simple text editor is all you need to learn HTML.</p>
                <h1 className='ms-4 display-6 mb-4'>Learn HTML Using Notepad or TextEdit</h1>
                <p className="ms-5 text-muted fs-4">Web pages can be created and modified by using professional HTML editors.</p>
                <p className="ms-5 text-muted fs-4">However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
                <p className="ms-5 text-muted fs-4">We believe that using a simple text editor is a good way to learn HTML.</p>
                <p className="ms-5 text-muted fs-4 mb-4">Follow the steps below to create your first web page with Notepad or TextEdit.</p>

                <h1 className='ms-4 display-6 mb-4'>Step 1: Open Notepad (PC)</h1>
                <p className="ms-5 fs-5"><b>Windows 8 or later:</b></p>
                <p className="ms-5 fs-5">Open the <b>Start Screen</b> (the window symbol at the bottom left on your screen). Type <b>Notepad.</b></p>
                <p className="ms-5 fs-5"><b>Windows 7 or earlier:</b></p>
                <p className="ms-5 fs-5 mb-4">Open <b> Start &gt; Programs &gt; Accessories &gt; Notepad</b></p>

                <h1 className='ms-4 display-6 mb-4'>Step 1: Open TextEdit (Mac)</h1>
                <p className="ms-5 fs-5">Open <b> Finder &gt; Applications &gt; TextEdit</b></p>
                <p className="ms-5 fs-5">Also change some preferences to get the application to save files correctly. In <b> Preferences &gt; Format     &gt;</b> choose <b>&quot;Plain Text&quot;</b></p>
                <p className="ms-5 fs-5">Then under &quot;Open and Save&quot;, check the box that says &quot;Display HTML files as HTML code instead of formatted text&quot;.</p>
                <p className="ms-5 fs-5"><b>Then open a new document to place the code.</b></p>

                <h1 className='ms-4 display-6 mb-4'>Step 2: Write Some HTML  </h1>
                <p className="ms-5 text-muted fs-4">Write or copy the following HTML code into Notepad:</p>

                <div className="card card-editor">

                    <div className="card card-editor-1  shadow">
                        <div className="card-body ">
                            <div className="card-body editor-inner">
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
                    </div>

                </div>

                <img className='ms-5 mt-2 mb-4' src="https://www.w3schools.com/html/img_notepad.png" alt="" />

                <h1 className='ms-4 display-6 mb-4'>Step 3: Save the HTML Page</h1>
                <p className="ms-5 fs-5">Save the file on your computer. Select <b>File &gt; Save As</b> in the Notepad menu.</p>
                <p className="ms-5 fs-5">Name the file <b>&quot;index.html&quot;</b>and set the encoding to <b> UTF-8 </b>(which is the preferred encoding for HTML files).</p>
                <img className='ms-5 mt-2 mb-4' src="https://www.w3schools.com/html/img_saveas.png" alt="" />

                <h1 className='ms-4 display-6 mb-4'> Step 4: View the HTML Page in Your Browser</h1>
                <p className="ms-5 fs-5">Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose &quot;Open with&quot;).</p>
                <p className="ms-5 fs-5"> The result will look much like this:</p>
                <img className='ms-5 mt-2 mb-4' src="https://www.w3schools.com/html/img_chrome.png" alt="" />

            </div >


        </>
    )
}

export default Editors