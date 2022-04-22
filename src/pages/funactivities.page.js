import React from 'react'

function FunActivitiesPage() {






    return (
        <>
            <div className='container'>
                <h1 className='text-center display-3 mb-5'>Fun Activities</h1>

                <h3 className='text-center'>Kahoot Links</h3>
                <ol className='mb-5 '>
                    <li><a target="_blank" href='https://create.kahoot.it/share/diwali/1fba21cf-295b-46ff-b1c6-fb7d0a3828ab'>Diwali Kahoot</a></li>
                    <li><a target="_blank" href='https://create.kahoot.it/share/hanukkah/d80b453d-bfe7-4cd0-8582-a5cb52c50938'>Hannukah Kahoot</a></li>
                </ol>

                <h3 className='text-center mt-5'>YouTube Video Guide Embeds</h3>

                {/* bootstrap video */}
                <h4></h4>
                <div className='embed-responsive embed-responsive-16by9 mb-3'>
                    <iframe className='embed-responsive-item' src="https://www.youtube.com/embed/Ik8ntEDhbfg" ></iframe>
                </div>
                
            </div>
        </>
    )
}

export default FunActivitiesPage