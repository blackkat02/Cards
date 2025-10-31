// packages/card-core/src/cards/configs/rare-pickup-card-config.ts

import { PickUpCardData } from "../Interfaces/interfaces";
import { VisualComponent } from "../Interfaces/VisualTypes";

export const getRareVisualComponentsConfig = (
  data: PickUpCardData
): VisualComponent[] => {
  return [
    {
      name: "Frame",
      props: { style: "Metallic", size: "medium", color: "silver" },
    },
    {
      name: "Title",
      props: {
        text: data.archetype,
        fontStyle: "sans-serif",
        color: "blue",
        size: "L",
      },
    },
    {
      name: "Image",
      props: { source: `/pckup/images/${data.id}_rare.jpg` },
    },
    // Marker присутній, але, можливо, з іншою іконкою
    {
      name: "InfluenceMarker",
      props: { level: data.influenceLevel, icon: "Diamond" },
    },
    {
      name: "Description",
      props: { text: data.description },
    },
  ];
};
