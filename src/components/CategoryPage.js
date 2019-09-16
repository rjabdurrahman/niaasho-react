import React from 'react'

export default function CategoryPage({match}) {
    return (
        <div>
            Category {match.params.id}
        </div>
    )
}
