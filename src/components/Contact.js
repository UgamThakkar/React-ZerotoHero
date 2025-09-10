import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact</h1>
      <form>
        <input type='text' className="border border-black p-2 m-2" placeholder='name'></input>
        <input type='text' className="border border-black p-2 m-2" placeholder='query'></input>
        <button className='bg-black text-white rounded-lg p-2 m-2 cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default Contact