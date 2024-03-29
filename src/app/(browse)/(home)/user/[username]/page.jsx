import React from 'react'

const page = ({ params }) => {
    return (
        <div>
            {params.username}
        </div>
    )
}

export default page
