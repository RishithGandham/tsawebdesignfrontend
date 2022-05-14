import React from 'react'
 

function ReferencePage() {
    return (
        <>
            <div className='container text-center'>
                <h1 className='text-center display-4 '>Reference Page</h1>
                <hr className='mb-5'></hr>
                <a href='/pdf/title.pdf'target='_blank' ><h4 className='mb-3'>Title Page 1748-1</h4></a>
                <a href='/pdf/worklogs.pdf' target='_blank'><h4 className='mb-3 '>Plan of Work Log</h4></a>
                <a href='/pdf/studentcopyright.pdf' target='_blank' ><h4 className='mb-3 '>Student Copyright Checklist</h4></a>
                <a href='/pdf/citations.pdf'target='_blank' ><h4 className='mb-3 mb-5'>Citations</h4></a>


                <hr className='mb-5'/>

                <h3 className='mb-3 text-muted'>Frameworks Used</h3>

                <div className='mb-5 container text-center'>

                    <h5 className='mb-3'> MongoDB || Express || React || NodeJS || Bootstrap  </h5>
                    <h6>The MERN technology stack was used to develop this application</h6>
                    
                </div>

                <hr className='mb-5'/>

                <h3 className='mb-3 text-muted'> Hosting & Other Services</h3>

                <div className='mb-5 container text-center'>
                
                    <h5 className='mb-3'>Heroku || Go Daddy || Git/VCS/Github</h5>
                
                </div>




                


            </div>
        </>
    )
}

export default ReferencePage