import React from 'react'
 

function ReferencePage() {
    return (
        <>
            <div className='container text-center'>
                <h1 className='text-center display-3 '>Reference Page</h1>
                <hr className='mb-5'></hr>
                <a href='http://tsawebapp.herokuapp.com/assets/portfolio.pdf' download><h1 className='mb-3 text-muted'>Portfolio</h1></a>

                <object data='http://tsawebapp.herokuapp.com/assets/portfolio.pdf' type="application/pdf" width="600vw" height="600vh">
                    <p>Your web browser doesn't have a PDF plugin.
                        <a href='http://tsawebapp.herokuapp.com/assets/portfolio.pdf'>click here to download the PDF file.</a></p>
                </object>

                


            </div>
        </>
    )
}

export default ReferencePage