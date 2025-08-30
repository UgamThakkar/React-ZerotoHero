import React from 'react'

const ListItems = ({items}) => {
    console.log("Items", items);
  return (
    <div>
        {items.map((item)=> (
            <div key={item?.card?.info?.id} className='p-2 m-2 border-b-2 border-gray-300 text-left'>
                <div className='py-2'>
                    <span>{item?.card?.info?.name.replace(/[.,;:\s]+$/, "")}</span>
                    <span> - र {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                </div>
                <p className='text-sm'>{item?.card?.info?.description}</p>
            </div>
    ))} 
    </div>
  );
};

export default ListItems;