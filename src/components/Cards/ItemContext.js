import React, { useState } from "react";
import { storeItems } from "./Items";

export const ItemContext = React.createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || storeItems
  );
  const [detail, setDetail] = useState(
    JSON.parse(localStorage.getItem("detail")) || " "
  );


  React.useEffect(() => {
    localStorage.setItem("detail", JSON.stringify(detail));
    localStorage.setItem("items", JSON.stringify(items));
  }, [detail, items]);

  const getItem = (id) => {
    const product = items.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetail(product);
  };

  const addItem = (id) => {
    let tempItems = [...items];
    const index = tempItems.indexOf(getItem(id));
    const item = tempItems[index];
    item.inCart = true;
    item.count += 1;
    const price = item.price;
    item.total = price;
    item.qty += 1;
    item.stock -= 1;
    setItems(tempItems);
  };


  const removeItem = (id) => {
    let tempCart = [...items];
    const index = tempCart.indexOf(getItem(id));
    const item = tempCart[index];
    item.qty -= 1
    if (item.qty <= 0) {
      item.inCart = false;
    }
    setItems(tempCart);
  };

  return (
    <ItemContext.Provider
      value={{
        items,
        setItems,
        addItem,
        removeItem,
        handleDetail,
        detail,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};
