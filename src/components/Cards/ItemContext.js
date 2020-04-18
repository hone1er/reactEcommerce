import React, { useState, useEffect } from "react";
import { storeItems } from "./Items";

export const ItemContext = React.createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || storeItems
  );
  const [detail, setDetail] = useState(
    JSON.parse(localStorage.getItem("detail")) || " "
  );

  const [cart, setCart] = useState({ total: 0, qty: 0 });

  const uniqueCategories = {};
  for (let i = 0; i < items.length; i++) {
    if (!uniqueCategories[items[i].category]) {
      uniqueCategories[items[i].category] = true;
    }
  }

  // eslint-disable-next-line
  const [categories, setCategories] = useState(Object.keys(uniqueCategories));

  useEffect(() => {
    const itemsInCart = items.filter((el) => {
      return el.qty > 0;
    });

    function totalQuantity() {
      return getQuantity(items) === 1
        ? `${getQuantity(items)} item`
        : `${getQuantity(items)} items`;
    }

    function getQuantity() {
      if (itemsInCart.length) {
        return itemsInCart
          .map((item) => {
            return item.qty;
          })
          .reduce((acc, val) => {
            return (acc += val);
          });
      }
      return 0;
    }

    const total =
      itemsInCart.length > 0
        ? itemsInCart
            .map((item) => {
              return item.price * item.qty;
            })
            .reduce((acc, val) => {
              return (acc += val);
            })
            .toFixed(2)
        : 0;

    setCart({ total: total, qty: totalQuantity() });
  }, [items]);

  useEffect(() => {
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
    item.qty -= 1;
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
        cart,
        categories,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};
