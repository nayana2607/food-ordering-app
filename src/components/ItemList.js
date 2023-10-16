import { URLS } from "../utils/constants";

const ItemList = ({ items }) => {

  return (
    <div>
      {items.itemCards
        ? items.itemCards.map((item) => (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span className="font-medium">{item.card.info.name}</span>

                  <span className="font-medium">- ₹ {item.card.info.price?item.card.info.price / 100:item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button className="p-1 text-center bg-black text-white shadow-lg rounded-lg">
                    Add +{" "}
                  </button>
                </div>
              { item.card.info.imageId && <img
                  src={URLS.CDN_URL + item.card.info.imageId}
                  className="w-full rounded-sm"
                />}
              </div>
            </div>
          ))
        : items.categories.map((category) => (
            <div key={category.tile}>
              <span className="font-bold">{category.title}</span>
              {category.itemCards.map((item) => (
            <div
              key={item.card.info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span >{item.card.info.name}</span>

                  <span>- ₹ {item.card.info.price / 100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button className="p-1 text-center  bg-black text-white shadow-lg rounded-lg">
                    Add +{" "}
                  </button>
                </div>
                {item.card.info.imageId &&<img
                  src={URLS.CDN_URL + item.card.info.imageId}
                  className="w-full rounded-sm"
                />}
               </div>
          
               </div>
               ))} </div>
          ))}
    </div>
  );
};

export default ItemList;
