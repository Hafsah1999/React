import React from 'react'

const Tags = () => {
  return (
    <>

      <div className="sidenav-1">

        <a className='site' href="/History">History</a>
        <a className='site' href="/Editors">Editors</a>
        <a className='site' href="/Definition">Definition</a>
       
        <a className='site' href="/Tags">Tags</a>


        <a className='site' href="/Attributes">Attributes</a>
        <a className='site'  href="/video">Video <br /> Tutorial</a>
      </div>
      <div className="main-1 ">
        <h1 className="ms-4 mb-4">HTML Tags</h1>
        <p className="text-muted ms-5 fs-4 mb-3">HTML tags are like keywords which defines that how web browser will format and display the content. With the help of tags, a web browser can distinguish between an HTML content and a simple content. HTML tags contain three main parts: opening tag, content and closing tag. But some HTML tags are unclosed tags</p>
        <p className='text-muted ms-5 fs-4 mb-3'>When a web browser reads an HTML document, browser reads it from top to bottom and left to right. HTML tags are used to create HTML documents and render their properties. Each HTML tags have different properties.</p>
        <p className='text-muted ms-5 fs-4 mb-3'>An HTML file must have some essential tags so that web browser can differentiate between a simple text and HTML text. You can use as many tags you want as per your code requirement.</p>
        <ul className="text-muted ms-5 fs-4">
          <li className="ms-4">All HTML tags must enclosed within &lt;&gt; these brackets.</li>
          <li className="ms-4">Every tag in HTML perform different tasks.</li>
          <li className="ms-4">If you have used an open tag &lt;tag&gt;, then you must use a close tag &lt;/tag&gt; (except some tags)</li>
        </ul>

        <h2 className="ms-5 text-danger mb-3">Syntax :</h2>
        <div className="card card-example">
          <div className="card-body ms-3 ">
            <p className=" fs-5"><small>&lt;tag&gt;content&lt;/tag&gt;</small></p>
          </div>
        </div>

        <h2 className="ms-5 text-danger mb-3">HTML Tag Examples :</h2>
        <div className="card-example-2 card ">
          <div className="card-body ms-3 mt-2">
            <p className=" fs-4"><span>&lt;p&gt;Paragraph Tag&lt;/p&gt;</span></p>
            <h2>&lt;h2&gt;Heading Tag&lt;/h2&gt;</h2>
            <p className="fs-4 mt-3"><b>&lt;b&gt;Bold Tag&lt;/b&gt;</b></p>
            <p className="fs-4"><i>&lt;i&gt;Italic Tag&lt;/i&gt;</i></p>
            <p className="fs-4"><u>&lt;u&gt;Underline Tag&lt;/u&gt;</u></p>
          </div>
        </div>

        <h2 className="text-primary mt-4 ms-3 mb-4">Unclosed HTML Tags</h2>
        <p className="text-muted fs-4 ms-5">Some HTML tags are not closed, for example br and hr.</p>
        <p className="text-muted fs-4 ms-5"><b className='text-danger'>&lt;br&gt; Tag :</b> br stands for break line, it breaks the line of the code.</p>
        <p className="text-muted fs-4 ms-5"><b className='text-danger'>&lt;hr&gt; Tag :</b> hr stands for Horizontal Rule. This tag is used to put a line across the webpage.</p>

        <hr className='mt-4 mb-4' />

        <h2 className="text-primary mt-4 ms-3 mb-4">HTML Meta Tags</h2>
        <p className="text-muted fs-5 ms-5">DOCTYPE, title, link, meta and style</p>

        <hr className='mt-4 mb-4' />

        <h2 className="text-primary mt-4 ms-3 mb-4">HTML Text Tags</h2>
        <p className="text-muted fs-5 ms-5">&lt;p&gt; &lt;h1&gt; &lt;h2&gt; &lt;h3&gt; &lt;h4&gt; &lt;h5&gt; &lt;h6&gt; &lt;strong&gt;
          &lt;acronym&gt; &lt;address&gt;  &lt;bdo&gt; &lt;blockquote&gt;<br /> &lt;cite&gt; &lt;q&gt; &lt;code&gt; &lt;ins&gt; &lt;del&gt;
          &lt;samp&gt; &lt;q&gt; &lt;pre&gt; &lt;var&gt; &lt;dfn&gt; &lt;br&gt;</p>

        <hr className='mt-4 mb-4' />
        <h2 className="text-primary mt-4 ms-3 mb-4">HTML Link Tags</h2>
        <p className="text-muted fs-5 ms-5"> &lt;a&gt; and &lt;base&gt; </p>
        <hr className='mt-4 mb-4' />

        <h2 className="text-primary mt-4 ms-3 mb-4">HTML Image and Object Tags</h2>
        <p className="text-muted fs-5 ms-5"> &lt;img&gt;  &lt;area&gt;  &lt;map&gt;  &lt;param&gt; and &lt;object&gt; </p>
        <hr className='mt-4 mb-4' />

        <h2 className="text-primary mt-4 ms-3 mb-4">HTML List Tags</h2>
        <p className="text-muted fs-5 ms-5"> &lt;ul&gt;  &lt;ol&gt;  &lt;li&gt;  &lt;dl&gt;  &lt;dt&gt; and &lt;dd&gt; </p>
        <hr className='mt-4 mb-4' />

        <h2 className="text-primary mt-4 ms-3 mb-4">HTML Table Tags</h2>
        <p className="text-muted fs-5 ms-5">table, tr, td, th, tbody, thead, tfoot, col, colgroup and caption </p>
        <hr className='mt-4 mb-4' />

        <h2 className="text-primary mt-4 ms-3 mb-4">HTML Form Tags</h2>
        <p className="text-muted fs-5 ms-5">form, input, textarea, select, option, optgroup, button, label, fieldset and legend </p>
        <hr className='mt-4 mb-4' />
        <h2 className="text-primary mt-4 ms-3 mb-4">Scripting Tags</h2>
        <p className="text-muted fs-5 ms-5">script and noscript </p>
        <hr className='mt-4 mb-4' />


      </div>

    </>
  )
}

export default Tags