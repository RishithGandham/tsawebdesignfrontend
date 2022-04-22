import React from 'react'
 

function ReferencePage() {
    return (
        <>
            <div className='container text-center'>
                <h1 className='text-center display-3 '>Reference Page</h1>
                <hr className='mb-5'></hr>
                <a href='http://tsawebapp.herokuapp.com/assets/portfolio.pdf' download><h1 className='mb-3 text-muted'>Portfolio</h1></a>

                <object className='mb-5' data='http://tsawebapp.herokuapp.com/assets/portfolio.pdf' type="application/pdf" width="600vw" height="600vh">
                    <p>Your web browser doesn't have a PDF plugin.
                        <a href='http://tsawebapp.herokuapp.com/assets/portfolio.pdf'>click here to download the PDF file.</a></p>
                </object>

                <h3 className='mb-3 text-muted'>Frameworks Used</h3>

                <div className='mb-5 container text-center'>

                    <h5 className='mb-3'> MongoDB || Express || React || NodeJS || Bootstrap  </h5>
                    <h6>We used the MERN stack to build this application</h6>
                    
                </div>

                <h3 className='mb-3 text-muted'> Hosting & Other Services</h3>

                <div className='mb-5 container text-center'>
                
                    <h5 className='mb-3'>Heroku || Go Daddy || Git/VCS/Github</h5>
                
                </div>




                


            </div>
        </>
    )
}

export default ReferencePage