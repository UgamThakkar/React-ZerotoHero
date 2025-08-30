import React from 'react'
import ListItems from './ListItems';

const RestaurantCategory = ({data}) => {
    console.log("data", data);
  return (
    <div>
        <div className='w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4'>
            <div className='flex justify-between'>
                <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {/* Accordion Body */}
            <ListItems items={data?.itemCards} />
        </div>

    </div>
  )
}

export default RestaurantCategory