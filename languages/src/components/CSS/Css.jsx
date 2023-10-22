import React from 'react'

const Css = () => {
  return (
    <>

      <div className="sidenav">
        <a href="/Css">History</a>
        <a href="/CSSDefinition">Definition</a>
        <a href="/Selectors">Selectors</a>
        <a href="#Attributes">Attributes</a>
        <a href="/video">Video <br /> Tutorial</a>
      </div>
      <div className="main-1">

        <h3 className="mb-3">HISTORY</h3>
        <p className="fs-5 text-muted"> CSS was first proposed by Håkon Wium Lie on 10 October 1994.[23] At the time, Lie was working with Tim Berners-Lee at CERN.[24] Several other style sheet languages for the web were proposed around the same time, and discussions on public mailing lists and inside World Wide Web Consortium resulted in the first W3C CSS Recommendation (CSS1)[25] being released in 1996. In particular, a proposal by Bert Bos was influential; he became co-author of CSS1, and is regarded as co-creator of CSS.[26]
          <br /><br />
        </p>

        <h4 className='fw-bold'>CSS version timeline</h4>
        <h6 className='mt-3 fw-bold mb-4'>CSS 1</h6>

        <p className="fs-5 ms-5">The first CSS specification to become an official W3C Recommendation is CSS level 1, published on 17 December 1996. Håkon Wium Lie and Bert Bos are credited as the original developers.[42][43] Among its capabilities are support for</p>
        <ul className="">
          <li className="list fs-5">Font properties such as typeface and emphasis</li>
          <li className="list fs-5" >Color of text, backgrounds, and other elements</li>
          <li className="list fs-5">Text attributes such as spacing between words, letters, and lines of text </li>
          <li className="list fs-5">Alignment of text, images, tables and other elements</li>
          <li className="list fs-5">Margin, border, padding, and positioning for most elements</li>
          <li className="list fs-5">Unique identification and generic classification of groups of attributes</li>

        </ul>
        <p className="fs-5 ms-5 fst-italic text-muted">The W3C no longer maintains the CSS 1 Recommendation.[44]</p>


        <h6 className='mt-3 fw-bold mb-4'>CSS 2</h6>

        <p className="fs-5 ms-5">CSS level 2 specification was developed by the W3C and published as a recommendation in May 1998. A superset of CSS 1, CSS 2 includes a number of new capabilities like absolute, relative, and fixed positioning of elements and z-index, the concept of media types, support for aural style sheets (which were later replaced by the CSS 3 speech modules)[45] and bidirectional text, and new font properties such as shadows.
        </p>
        <p className="fs-5 ms-5 fst-italic text-muted"> The W3C no longer maintains the CSS 2 recommendation</p>


        <h6 className='mt-3 fw-bold mb-4'>CSS 2.1</h6>
        <p className=" fs-5 ms-5">CSS level 2 revision 1, often referred to as &quot;CSS 2.1&quot;, fixes errors in CSS 2, removes poorly supported or not fully interoperable features and adds already implemented browser extensions to the specification. To comply with the W3C Process for standardizing technical specifications, CSS 2.1 went back and forth between Working Draft status and Candidate Recommendation status for many years. CSS 2.1 first became a Candidate Recommendation on 25 February 2004, but it was reverted to a Working Draft on 13 June 2005 for further review. It returned to Candidate Recommendation on 19 July 2007 and then updated twice in 2009. However, because changes and clarifications were made, it again went back to Last Call Working Draft on 7 December 2010.</p>
        <p className=" fs-5 ms-5">CSS 2.1 went to Proposed Recommendation on 12 April 2011.[47] After being reviewed by the W3C Advisory Committee, it was finally published as a W3C Recommendation on 7 June 2011.</p>
        <p className=" fs-5 ms-5">CSS 2.1 was planned as the first and final revision of level 2—but low-priority work on CSS 2.2 began in 2015.</p>


        <h6 className='mt-3 fw-bold mb-4'>CSS 3</h6>

        <p className="fs-5 ms-5 fst-italic text-muted"> &quot;CSS3&quot; redirects here. For other uses, see CSS3 (disambiguation).</p>
        <p className=" fs-5 ms-5">Unlike CSS 2, which is a large single specification defining various features, CSS 3 is divided into several separate documents called  &quot;modules &quot;. Each module adds new capabilities or extends features defined in CSS 2, preserving backward compatibility. Work on CSS level 3 started around the time of publication of the original CSS 2 recommendation. The earliest CSS 3 drafts were published in June 1999.[49]</p>
        <p className=" fs-5 ms-5"> Due to the modularization, different modules have different stability and statuses.</p>


        <h6 className='mt-3 fw-bold mb-4 '>CSS 4</h6>


        <p className=" fs-5 ms-5">There is no single, integrated CSS4 specification,[53] because the specification has been split into many separate modules which level independently.</p>
        <p className=" fs-5 ms-5">Modules that build on things from CSS Level 2 started at Level 3. Some of them have already reached Level 4 or are already approaching Level 5. Other modules that define entirely new functionality, such as Flexbox,[54] have been designated as Level 1 and some of them are approaching Level 2.</p>

        <p className=" fs-5 ms-5">The CSS Working Group sometimes publishes &quot;Snapshots&quot;, a collection of whole modules and parts of other drafts that are considered stable enough to be implemented by browser developers. So far, five such &quot;best current practices &quot; documents have been published as Notes, in 2007,[55] 2010,[56] 2015,[57] 2017,[58] and 2018.[59]</p>

        <p className=" fs-5 ms-5">Since these specification snapshots are primarily intended for developers, there has been a growing demand for a similar versioned reference document targeted at authors, which would present the state of interoperable implementations as meanwhile documented by sites like Can I Use...[60] and the MDN Web Docs.[61] A W3C Community Group has been established in early 2020 in order to discuss and define such a resource.[62] The actual kind of versioning is also up to debate, which means that the document, once produced, might not be called  &quot;CSS4&quot;.</p>


      </div >



    </>
  )
}

export default Css