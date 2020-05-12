import React, { useContext } from "react";
import Hero from "../components/Hero/heroStandard";
import ItemList from "../components/Cards/ItemList";
import image from "../components/Hero/images/mnz--CcIA7IJorU-unsplash.jpg";
import image2 from "../components/Hero/images/mnz-m1m2EZOZVwA-unsplash.jpg";
import clothingImage from "../components/Hero/images/artificial-photography-vB5qtt8X4NA-unsplash.jpg";

import { ItemContext } from "../components/Cards/ItemContext";


export default function ProductPage(props) {
  const { items, addItem, handleDetail } = useContext(ItemContext);

  // Set attributes based on props.category
  let heroObject;

  switch (props.category) {
    case "tshirts":
      heroObject = {
        title: "T-shirts",
        subtitle: "totally rad t-shirts or something like that",
        image: image
      };
      break;

    case "pants":
      heroObject = {
        title: "Pants",
        subtitle: "we made the holes in these pants the hard way",
        image: image2
      };

      break;

    case "sweatshirts & hoodies":
      heroObject = {
        title: "Hoodies",
        subtitle: "hoods up",
        image: clothingImage
      };

      break;

    default:
      heroObject = {
        title: null,
        subtitle: null,
        image: null
      }
      break;
  }
  const itemList = items.filter((el) => el.category === props.category);

  return (
    <div className="App">
      <Hero
        image={heroObject.image ? heroObject.image : "https://source.unsplash.com/user/mnzoutfits/800x600"}
        href={props.category}
        title={heroObject.title ? heroObject.title : null}
        subtitle={heroObject.subtitle ? heroObject.subtitle : null}
        alignment="flex-start"
        theme={{ main: "#444444", secondary: "#f8f8f8" }}
        displayButton="false"
        className="bubble"
      />
      <ItemList
        items={itemList}
        addItem={addItem}
        handleDetail={handleDetail}
      />
      <Hero
        image="https://source.unsplash.com/user/theburbgirl/900x700"
        href={props.category}
        backgroundSize="contain"
        title="words about clothing being cool"
        subtitle="buying things makes you feel good"
        theme={{ main: "#444444", secondary: "#f8f8f8" }}
        displayButton="true"
        buttonName="feeling lucky"
        alignment="center"
      />
    </div>
  );
}
