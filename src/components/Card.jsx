import React from 'react';

const Card = (props) => {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105'>
      <img className='h-48 w-full object-cover' src={props.photo} alt={props.name} />
      <div className='p-4 text-center'>
        <h3 className='text-lg font-semibold text-gray-800'>{props.name}</h3>
      </div>
    </div>
  );
};

export default Card;
