import { IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {items.map((item, index) => (
            <div
              data-testid="foodItems"
              key={item.card.info.id}
              className={`px-6 py-5 text-left flex justify-between items-start hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 ${
                index !== items.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              {/* Text section */}
              <div className="w-8/12 pr-4">
                <div className="mb-2">
                  <span className="font-semibold text-gray-800 text-lg break-words">
                    {item.card.info.name}
                  </span>
                  <div className="flex items-center mt-1">
                    <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      ₹{item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.card.info.description}
                </p>
              </div>

              {/* Image + Button */}
              <div className="w-4/12 relative group">
                {item.card.info.imageId && (
                  <img
                    src={IMG_URL + item.card.info.imageId}
                    className="w-full h-24 object-cover rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    alt={item.card.info.name}
                  />
                )}
                <button className="absolute bottom-2 right-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:cursor-pointer hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 font-medium text-sm">
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;