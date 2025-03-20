import React from 'react'

interface cardprops {
  title : string;
  content : string;
}

const Impactcard : React.FC<cardprops> = ({ title , content }) => {
  return (
    <div className='h-56 w-64 mt-6 bg-surface shadow-lg rounded-lg items-center flex flex-col justify-evenly'>
      <h1 className='text-2xl font-serif font-bold text-violet-700'>{title}</h1>
      <p className='text-secondary font-serif p-4'>{content}</p>
    </div>
  )
}

export default Impactcard