import React from 'react'

const CityInfo = (props) => {
    if(!props.municipio){
        return <p>Select a municipio</p>
    }
    return (
        <div>
            <p>{props.municipio.name}</p>
            <p>{props.municipio.lat}</p>
            <p>{props.municipio.lng}</p>
        </div>
    )
}

export default CityInfo;
 