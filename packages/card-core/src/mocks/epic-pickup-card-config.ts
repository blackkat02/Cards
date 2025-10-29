// packages/card-core/src/cards/mocks/epic-pickup-card-config.ts

import { VisualComponent, PickUpCardData } from "../Interfaces/interfaces";

// 🔥 Це ФУНКЦІЯ, тому що вона приймає динамічні дані (data)
export const getEpicVisualComponentsConfig = (
  data: PickUpCardData
): VisualComponent[] => {
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
        text: data.archetype, // 🔥 Динамічні дані з об'єкта
        fontStyle: "serif",
        color: "bright-gold",
        size: "XL",
      },
    },
    {
      name: "Image",
      props: {
        source: `/pckup/images/${this.data.id}_epic.jpg`,
        quality: "HD",
      },
    },
    // 4. Marker
    {
      name: "InfluenceMarker",
      props: { level: this.data.influenceLevel, icon: "Star" },
    },
    // 5. Опис
    {
      name: "Description",
      props: { text: this.data.description, textColor: "yellow" },
    },
  ];
};
