type MockData = {
  img: string;
  description: string;
  header: string;
};

export function getMockMemories() {
  const data: MockData[] = [
    {
      img: "/img/photobooth.jpg",
      description:
        "This is the first time we took a picture in a photobooth, and one of the first images in our photobooth collection",
      header: "November 3, 2024",
    },
    {
      img: "/img/ice_skate.jpg",
      description:
        "The second time we do some ice skating, the payback from our first visit. I still remembered the time we slip off. ",
      header: "November 3, 2024",
    },
    {
      img: "/img/coffee_date.jpg",
      description:
        "The first time you invited me to drink coffee with you, such a nice coffee and place.",
      header: "December 22, 2024",
    },
    {
      img: "/img/skyranch.jpeg",
      description:
        "The 1st celebration of our monthsary, we try some extreme rides and I hate that Viking ship thing. My first time I received flowers",
      header: "December 30, 2024",
    },
    {
      img: "/img/clay_date.jpg",
      description:
        "One of the dates I feel a strong love, sorry I cannot post the NSFW stuff",
      header: "February 14, 2025",
    },
    {
      img: "/img/ice_cream.jpg",
      description:
        "I cleaned my storage in phone and cannot find the origin of us eating ice cream together.",
      header: "????",
    },
  ];

  return data;
}
