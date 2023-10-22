import React from 'react'

const Definition = () => {
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
      <div className="main-1 ">

        <h1 className='ms-4 mb-4'>What is HTML?</h1>

        <p className="ms-5 text-muted fs-4">HTML (HyperText Markup Language) is a markup language that tells web browsers how to structure the web pages you visit. It can be as complicated or as simple as the web developer wants it to be. HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way. The enclosing tags can make content into a hyperlink to connect to another page, italicize words, and so on. <br /><br /> For example, consider the following line of text:</p>
        <div className="card card-example">
          <div className="card-content mt-2 ms-4">
            <p className=" text-muted fs-5"><small>My cat is very grumpy</small></p>
          </div>
        </div>

        <p className="ms-5 text-muted fs-4"> If we wanted the text to stand by itself, we could specify that it is a paragraph by enclosing it in a paragraph (<span>&lt;</span>p<span>&gt;</span>) element:</p>

        <div className="card card-example-1">
          <div className="card-content mt-2 ms-4">
            <h5 className='text-danger mt-2'>HTML :</h5>
            <p className=" text-muted fs-5"><small><span>&lt;</span>p<span>&gt;</span>My cat is very grumpy<span>&lt;</span>/p<span>&gt;</span></small></p>
          </div>
        </div>

        <div className="card card-note">
          <p className="fs-5 text-muted ms-3 mt-3"><span className="fw-bold fs-5 text-primary">NOTE:</span> Tags in HTML are not case-sensitive. This means they can be written in uppercase or lowercase. For example, a <span>&lt;</span>title <span>&gt;</span> tag could be written as <span>&lt;</span>title <span>&gt</span>, <span>&lt;</span>TITLE <span>&gt;</span>, <span>&lt;</span>Title <span>&gt;</span>, <span>&lt;</span>TiTlE <span>&gt;</span>, etc., and it will work. However, it is best practice to write all tags in lowercase for consistency and readability.</p>
        </div>

        <h1 className='ms-4 mb-4'>Anatomy of HTML element</h1>
        <p className="ms-5 text-muted fs-4">Let&apos;s further explore our paragraph element from the previous section :</p>
        <img className='w-75 ms-5 mb-3' src="data:image/png;base64,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" alt="" />
        <p className="ms-5 text-muted fs-4">The anatomy of our element is:</p>
        <ul>
          <li className="ms-5 fs-4"><p className=""><span className="fw-bold">The Opening Tag:</span> This consists of the name of the element (in this example, p for paragraph), wrapped in opening and closing angle brackets. This opening tag marks where the element begins or starts to take effect. In this example, it precedes the start of the paragraph text.</p></li>
          <li className="ms-5 fs-4"><p className=""><span className="fw-bold">The Content:</span> This is the content of the element. In this example, it is the paragraph text.</p></li>
          <li className="ms-5 fs-4"><p className=""><span className="fw-bold">The Closing Tag:</span>  This is the same as the opening tag, except that it includes a forward slash before the element name. This marks where the element ends. Failing to include a closing tag is a common beginner error that can produce peculiar results.</p></li>

          
        </ul>
        <p className="ms-5 text-muted fs-4 mb-5">The element is the opening tag, followed by content, followed by the closing tag.</p>
      
      <h1 className="ms-4 mb-4">What are Tags and Attributes?</h1>

      <p className="ms-5 text-muted fs-4 mb-2">Tags and attributes are the basis of HTML.</p>
      <p className="ms-5 text-muted fs-4 mb-5">They work together but perform different functions – it is worth investing 2 minutes in differentiating the two.</p>
      <h1 className="ms-4 mb-4">What Are HTML Tags?</h1>
      <p className="ms-5 text-muted fs-4 mb-2">Tags are used to mark up the start of an HTML element and they are usually enclosed in angle brackets. An example of a tag is: <span className='text-danger'>&lt;</span><span className="text-primary">h1</span><span className='text-danger'>&gt;</span> .</p>
       <p className="ms-5 text-muted fs-4 mb-5">Most tags must be opened  <span className='text-danger'>&lt;</span><span className="text-primary">h1</span><span span className='text-danger'>&gt;</span> and closed  <span className='text-danger'>&lt;</span><span className="text-primary">/h1</span><span className='text-danger'>&gt;</span> in order to function.</p>
      <h1 className="ms-4 mb-4">What are HTML Attributes?</h1>
      <p className="text-muted ms-5 fs-4 mb-5">Attributes contain additional pieces of information. Attributes take the form of an opening tag and additional info is placed inside.</p>
      <p className="text-muted ms-5 fs-4 mb-3">An example of an attribute is:</p>
      <p className="text-danger mb-4 ms-5">&lt;img src =&quot;mydog.jpg&quot; alt=&quot;A photo of my dog.&quot;&gt;&lt;/img&gt;</p>
      <p className="text-muted ms-5 fs-4 mb-5">In this instance, the image source (src) and the alt text (alt) are attributes of the <span className='text-danger'>&lt;</span><span className="text-primary">img</span><span className='text-danger'>&gt;</span> tag.</p>
      
      </div>
    </>
  )
}
<img src="mydog.jpg" alt="A photo of my dog."></img>
export default Definition