import { PickUpCardData } from "../Interfaces/interfaces";
import { VisualComponent } from "../Interfaces/VisualTypes";

export const getCommonVisualComponentsConfig = (
  data: PickUpCardData
): VisualComponent[] => {
  return [
    {
      name: "Frame",
      props: { style: "Basic", size: "small", color: "gray" },
    },
    {
      name: "Title",
      props: {
        text: data.archetype,
        fontStyle: "sans-serif",
        color: "dark",
        size: "M",
      },
    },
    {
      name: "Image",
      props: { source: `/pckup/images/${data.id}_low.jpg` },
    },
    // InfluenceMarker ВІДСУТНІЙ для Common
    {
      name: "Description",
      props: { text: data.description },
    },
  ];
};
