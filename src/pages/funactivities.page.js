import React from 'react'

function FunActivitiesPage() {

    const [kahoots, setKahoots] = useState(['', '']);




    return (
        <>
            <div className='container'>
                <h1 className='text-center display-3 mb-5'>Fun Activities</h1>


                <h3 className='text-center'>Kahoot Links</h3>

                {kahoots && kahoots.map((kahoot) => {
                    <a href={kahoot} className='btn btn-primary mb-3' target='_blank'>{kahoot.name}</a>
                })}

            </div>
        </>
    )
}

export default FunActivitiesPage