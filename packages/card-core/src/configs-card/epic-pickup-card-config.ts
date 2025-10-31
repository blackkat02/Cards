import { PickUpCardData } from "../Interfaces/interfaces";
import { VisualComponent } from "../Interfaces/VisualTypes";

export const getEpicVisualComponentsConfig = (
  data: PickUpCardData
): VisualComponent[] => {
  const descriptionText =
    data.description || "No detailed information available.";

  return [
    {
      name: "Frame",
      props: {
        style: "Ornate",
        size: "large",
        color: "gold",
        animation: "sparkle",
      },
    },
    {
      name: "Title",
      props: {
        text: data.archetype,
        fontStyle: "serif",
        color: "bright-gold",
        size: "XL",
      },
    },
    {
      name: "Image",
      props: {
        source: `/pckup/images/${data.id}_epic.jpg`,
        quality: "HD",
      },
    },
    {
      name: "InfluenceMarker",
      props: {
        level: data.influenceLevel,
        icon: "Star",
      },
    },
    {
      name: "Description",
      props: { text: descriptionText, textColor: "yellow" },
    },
  ];
};
