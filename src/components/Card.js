import React from 'react';

const Card = (props) => {

const date = new Date();

	return (

    <div className='bg-light-blue dib br3 ma2 grow bw2 shadow-5'> 
       <img alt='robots' src={`https://robohash.org/test${props.id}`}/>
        <div>	
	    <h2>{props.name}</h2>
	    <p>{props.email}</p>
	    <span>{date.toLocaleString()}</span>
	    </div>
    </div>
	);
}

export default Card;