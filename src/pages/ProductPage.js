import React, { useContext } from "react";
import Hero from "../components/Hero/heroStandard";
import ItemList from "../components/Cards/ItemList";
import image from "../components/Hero/drew-beamer-5DD7-L4A4Uw-unsplash.jpg";
import image2 from "../components/Hero/rodion-kutsaev-pVoEPpLw818-unsplash.jpg";
import pantsHeroImage from "../components/Hero/lan-deng-quddu_dZKkQ-unsplash.jpg";

import { ItemContext } from "../components/Cards/ItemContext";

export default function ProductPage(props) {
  const { items, addItem, handleDetail } = useContext(ItemContext);

// Set attributes based on props.category
  const hero = props.category === "pants" ? pantsHeroImage : image;
  const subtitle =
    props.category === "tshirts"
      ? "totally rad t-shirts or something like that"
      : null;
  const title = props.category === "tshirts" ? "T-Shirts" : null;
  const itemList = items.filter((el) => el.category === props.category);

  return (
    <div className="App">
      <Hero
        image={hero}
        href={props.category}
        title={title}
        subtitle={subtitle}
        alignment="flex-start"
        theme={{ main: "black", secondary: "white" }}
        displayButton="false"
        className="bubble"
      />
      <ItemList
        items={itemList}
        addItem={addItem}
        handleDetail={handleDetail}
      />
      <Hero
        image={image2}
        href={props.category}
        backgroundSize="contain"
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
