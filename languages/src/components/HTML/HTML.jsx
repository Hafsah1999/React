/* eslint-disable react-refresh/only-export-components */
import React from 'react'

const HTML = () => {
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
                  
                        <h3 className="mb-3">HISTORY</h3>
                        <p className="fs-5 text-muted">In 1980, physicist Tim Berners-Lee, a contractor at CERN, proposed and prototyped ENQUIRE, a system for CERN researchers to use and share documents. In 1989, Berners-Lee wrote a memo proposing an Internet-based hypertext system.[3] Berners-Lee specified HTML and wrote the browser and server software in late 1990. That year, Berners-Lee and CERN data systems engineer Robert Cailliau collaborated on a joint request for funding, but the project was not formally adopted by CERN. In his personal notes of 1990, Berners-Lee listed "some of the many areas in which hypertext is used"; an encyclopedia is the first entry.[4] <br /><br />

                            The first publicly available description of HTML was a document called "HTML Tags",[5] first mentioned on the Internet by Tim Berners-Lee in late 1991.[6][7] It describes 18 elements comprising the initial, relatively simple design of HTML. Except for the hyperlink tag, these were strongly influenced by SGMLguid, an in-house Standard Generalized Markup Language (SGML)-based documentation format at CERN. Eleven of these elements still exist in HTML 4
                            HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visible or audible web pages. Default characteristics for every item of HTML markup are defined in the browser, and these characteristics can be altered or enhanced by the web page designer's additional use of CSS. Many of the text elements are mentioned in the 1988 ISO technical report TR 9537 Techniques for using SGML, which describes the features of early text formatting languages such as that used by the RUNOFF command developed in the early 1960s for the CTSS (Compatible Time-Sharing System) operating system. These formatting commands were derived from the commands used by typesetters to manually format documents. However, the SGML concept of generalized markup is based on elements (nested annotated ranges with attributes) rather than merely print effects, with separate structure and markup. HTML has been progressively moved in this direction with CSS. <br /><br />
                            Berners-Lee considered HTML to be an application of SGML. It was formally defined as such by the Internet Engineering Task Force (IETF) with the mid-1993 publication of the first proposal for an HTML specification, the "Hypertext Markup Language (HTML)" Internet Draft by Berners-Lee and Dan Connolly, which included an SGML Document type definition to define the syntax.[9][10] The draft expired after six months, but was notable for its acknowledgment of the NCSA Mosaic browser's custom tag for embedding in-line images, reflecting the IETF's philosophy of basing standards on successful prototypes. Similarly, Dave Raggett's competing Internet Draft, "HTML+ (Hypertext Markup Format)", from late 1993, suggested standardizing already-implemented features like tables and fill-out forms. <br /><br />
                            After the HTML and HTML+ drafts expired in early 1994, the IETF created an HTML Working Group. In 1995, this working group completed "HTML 2.0", the first HTML specification intended to be treated as a standard against which future implementations should be based. <br /><br />
                            Further development under the auspices of the IETF was stalled by competing interests. Since 1996, the HTML specifications have been maintained, with input from commercial software vendors, by the World Wide Web Consortium (W3C).[13] In 2000, HTML became an international standard (ISO/IEC 15445:2000). HTML 4.01 was published in late 1999, with further errata published through 2001. In 2004, development began on HTML5 in the Web Hypertext Application Technology Working Group (WHATWG), which became a joint deliverable with the W3C in 2008, and was completed and standardized on 28 October 2014. <br /><br />
                        </p>

                        <h4 className='fw-bold'>HTML version timeline</h4>
                        <h6 className='mt-3 fw-bold mb-4'>HTML 2</h6>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>November 24, 1995 </h6>
                        <p className="fs-5 ms-5">HTML 2.0 was published as RFC 1866. Supplemental RFCs added capabilities:</p>
                        <ul className="">
                            <li className="list fs-5">November 25, 1995: RFC 1867 (form-based file upload)</li>
                            <li className="list fs-5" >May 1996: RFC 1942 (tables)</li>
                            <li className="list fs-5">August 1996: RFC 1980 (client-side image maps)</li>

                            <li className="list fs-5">January 1997: RFC 2070 (internationalization)</li>

                        </ul>

                        <h6 className='mt-3 fw-bold mb-4'>HTML 4</h6>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>December 18, 1997 </h6>
                        <p className="fs-5 ms-5">HTML 4.0[18] was published as a W3C Recommendation. It offers three variations:</p>
                        <ul className="">
                            <li className="list fs-5">Strict, in which deprecated elements are forbidden</li>
                            <li className="list fs-5" >Transitional, in which deprecated elements are allowed</li>
                            <li className="list fs-5 mb-2">Frameset, in which mostly only frame related elements are allowed.</li>

                            <p className=" fs-5 list-1 text-muted">Initially code-named "Cougar",[17] HTML 4.0 adopted many browser-specific element types and attributes, but also sought to phase out Netscape's visual markup features by marking them as deprecated in favor of style sheets. HTML 4 is an SGML application conforming to ISO 8879 – SGML.</p>

                        </ul>

                        <h6 className='mt-3 fw-bold mb-4'>HTML 5</h6>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>October 28, 2014 </h6>
                        <p className=" fs-5 list-1 text-muted">HTML5[25] was published as a W3C Recommendation.</p>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>November 1, 2016</h6>
                        <p className=" fs-5 list-1 text-muted">HTML 5.1[27] was published as a W3C Recommendation.[28][29]</p>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>December 14, 2017</h6>
                        <p className=" fs-5 list-1 text-muted">HTML 5.2[30] was published as a W3C Recommendation.[31][32]</p>

                        <h4 className='fw-bold'>HTML draft version timeline</h4>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>October 1991</h6>
                        <p className=" fs-5 list-1 text-muted">HTML Tags,[6] an informal CERN document listing 18 HTML tags, was first mentioned in public.</p>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>June 1992</h6>
                        <p className=" fs-5 list-1 text-muted">First informal draft of the HTML DTD,[33] with seven subsequent revisions (July 15, August 6, August 18, November 17, November 19, November 20, November 22)[34][35][36]</p>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>November 1992</h6>
                        <p className=" fs-5 list-1 text-muted">HTML DTD 1.1 (the first with a version number, based on RCS revisions, which start with 1.1 rather than 1.0), an informal draft[36]</p>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>June 1993</h6>
                        <p className=" fs-5 list-1 text-muted">Hypertext Markup Language[37] was published by the IETF IIIR Working Group as an Internet Draft (a rough proposal for a standard). It was replaced by a second version[38] one month later.</p>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>November 1993</h6>
                        <p className=" fs-5 list-1 text-muted">HTML+ was published by the IETF as an Internet Draft and was a competing proposal to the Hypertext Markup Language draft. It expired in July 1994.[39]</p>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>November 1994</h6>
                        <p className=" fs-5 list-1 text-muted">First draft (revision 00) of HTML 2.0 published by IETF itself[40] (called as "HTML 2.0" from revision 02[41]), that finally led to the publication of RFC 1866 in November 1995.[42]</p>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>April 1995 (authored March 1995)</h6>
                        <p className=" fs-5 list-1 text-muted">HTML 3.0[43] was proposed as a standard to the IETF, but the proposal expired five months later (28 September 1995)[44] without further action. It included many of the capabilities that were in Raggett's HTML+ proposal, such as support for tables, text flow around figures, and the display of complex mathematical formulas.[44]
                            W3C began development of its own Arena browser as a test bed for HTML 3 and Cascading Style Sheets,[45][46][47] but HTML 3.0 did not succeed for several reasons. The draft was considered very large at 150 pages and the pace of browser development, as well as the number of interested parties, had outstripped the resources of the IETF.[13] Browser vendors, including Microsoft and Netscape at the time, chose to implement different subsets of HTML 3's draft features as well as to introduce their own extensions to it.[13] (See browser wars.) These included extensions to control stylistic aspects of documents, contrary to the "belief [of the academic engineering community] that such things as text color, background texture, font size, and font face were definitely outside the scope of a language when their only intent was to specify how a document would be organized."[13] Dave Raggett, who has been a W3C Fellow for many years, has commented for example: "To a certain extent, Microsoft built its business on the Web by extending HTML features."[13]</p>
                        <h6 className='mt-3 fw-bold mb-4 ms-4'>January 2008</h6>
                        <p className=" fs-5 list-1 text-muted">HTML5 was published as a Working Draft by the W3C.[48]
                            Although its syntax closely resembles that of SGML, HTML5 has abandoned any attempt to be an SGML application and has explicitly defined its own "html" serialization, in addition to an alternative XML-based XHTML5 serialization.[49]</p>
                        <h5 className='mt-3 fw-bold mb-4 ms-4'>2011 HTML5 – Last Call</h5>
                        <p className=" fs-5 list-1 text-muted">On 14 February 2011, the W3C extended the charter of its HTML Working Group with clear milestones for HTML5. In May 2011, the working group advanced HTML5 to "Last Call", an invitation to communities inside and outside W3C to confirm the technical soundness of the specification. The W3C developed a comprehensive test suite to achieve broad interoperability for the full specification by 2014, which was the target date for recommendation.[50] In January 2011, the WHATWG renamed its "HTML5" living standard to "HTML". The W3C nevertheless continues its project to release HTML5.[51]</p>
                        <h5 className='mt-3 fw-bold mb-4 ms-4'>2012 HTML5 – Candidate Recommendation</h5>
                        <p className=" fs-5 list-1 text-muted">In July 2012, WHATWG and W3C decided on a degree of separation. W3C will continue the HTML5 specification work, focusing on a single definitive standard, which is considered a "snapshot" by WHATWG. The WHATWG organization will continue its work with HTML5 as a "Living Standard". The concept of a living standard is that it is never complete and is always being updated and improved. New features can be added but functionality will not be removed.[52]
                            In December 2012, W3C designated HTML5 as a Candidate Recommendation.[53] The criterion for advancement to W3C Recommendation is "two 100% complete and fully interoperable implementations".[54]</p>
                        <h5 className='mt-3 fw-bold mb-4 ms-4'>2014 HTML5 – Proposed Recommendation and Recommendation</h5>
                        <p className=" fs-5 mb-5 list-1 text-muted">In September 2014, W3C moved HTML5 to Proposed Recommendation.[55]
                            On 28 October 2014, HTML5 was released as a stable W3C Recommendation,[56] meaning the specification process is complete.[57]</p>


                </div>
            

           

            </>




            )
}

            export default HTML