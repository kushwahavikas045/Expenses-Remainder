import React from 'react'

const ErrorTest = ({heroName}) => {
    if(heroName === 'joker'){
        throw new Error('not vald name')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default ErrorTest;
