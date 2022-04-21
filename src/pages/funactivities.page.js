import React from 'react'

function FunActivitiesPage() {

    




    return (
        <>
            <div className='container'>
                <h1 className='text-center display-3 mb-5'>Fun Activities</h1>


                <h3 className='text-center'>Kahoot Links</h3>
                <ol className='mb-5 '>
                    <li><a href='https://kahoot.it/'>Diwali Kahoot</a></li>
                    <li><a href='https://kahoot.it/'>Hannukah Kahoot</a></li>
                </ol>

                <h3 className='text-center mt-5'>Youtube Video Guide Embeds</h3>

                {/* bootstrap video */}
                <div className='embed-responsive embed-responsive-16by9 mb-3'>
                    <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/'></iframe>
                </div>
                <div className='embed-responsive embed-responsive-16by9 mb-3'>
                    <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/'></iframe>
                </div>



                <div className=''></div>
                

            </div>
        </>
    )
}

export default FunActivitiesPage