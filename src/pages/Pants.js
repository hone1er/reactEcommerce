import React, { useContext } from "react";
import Hero from "../components/Hero/heroStandard";
import ItemList from "../components/Cards/ItemList";
import image from "../components/Hero/lan-deng-quddu_dZKkQ-unsplash.jpg";
import image2 from "../components/Hero/rodion-kutsaev-pVoEPpLw818-unsplash.jpg";
import { ItemContext } from "../components/Cards/ItemContext";
export default function Pants() {
  const { items, addItem, handleDetail } = useContext(ItemContext);

  // const reverseItems = itms => {
  //   let newItems = [];
  //   for (let i = itms.length - 1; i >= 0; i--) {
  //     newItems.push(itms[i]);
  //   }
  //   return newItems;
  // };
 const itemsList = items.filter(el => el.category === "Pants");
  return (
    <div className="App">
      <Hero image={image} href="/pants" displayButton="false" />
      <ItemList items={itemsList} addItem={addItem} handleDetail={handleDetail} />
      <Hero
        image={image2}
        href="/tshirts"
        title="words about clothing being cool"
        subtitle="buying things makes you feel good"
        theme={{ main: "black", secondary: "white" }}
        displayButton="true"
        buttonName="feeling lucky"
        alignment="center"
      />
    </div>
  );
}
