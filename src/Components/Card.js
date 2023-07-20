import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    console.log(props)
    let badgesText
    if (props.openSpots) {
        if(props.country === 'ONLINE'){
            badgesText = 'ONLINE'
        }
    }else{
        badgesText = 'SOULD OUT'
    }
    return(
        <div className='card'>
            <img className='card--image' src={`./Images/${props.image}`} alt='katie'/>
            <div className='card--data'>
                <div className='badges'>
                    <FontAwesomeIcon icon={faStar} style={{color: 'red'}} />
                    <span>{props.star}</span>
                    <span className='greys'>({props.rating}). {props.country}</span>
                </div>
                <p>{props.text}</p>
                <span>From ${props.cost} / <span className='greys'>{props.person}</span></span>
                {badgesText && <span className='status'>{badgesText}</span>}
            </div>
        </div>
    )
};
