type MockData = {
  img: string;
  description: string;
  date: string;
};

export function getMockGallery() {
  const data: MockData[] = [
    {
      img: "https://picsum.photos/640/640?random=0",
      description:
        "It all began at a cozy coffee shop downtown. A shared smile, a casual conversation—and from that moment, something just clicked.",
      date: "November 15, 2018",
    },
    {
      img: "https://picsum.photos/640/640?random=1",
      description:
        "A movie night under the stars. Nervous laughter turned into endless conversation. The spark became a flame.",
      date: "April 2, 2018",
    },
    {
      img: "https://picsum.photos/640/640?random=2",
      description:
        "After a night of stargazing, the words just slipped out—and they felt more right than anything else.",
      date: "June 10, 2018",
    },
    {
      img: "https://picsum.photos/640/640?random=3",
      description:
        "Explored the streets of Kyoto hand in hand. Got lost, laughed too much, and made unforgettable memories.",
      date: "September 5, 2019",
    },
    {
      img: "https://picsum.photos/640/640?random=4",
      description:
        "Turning a house into a home—together. First couch, first shared bills, and a lot of midnight snacks.",
      date: "February 14, 2020",
    },
    {
      img: "https://picsum.photos/640/640?random=5",
      description:
        "In the middle of their favorite park, under autumn leaves, the question was asked—and the answer was a joyful “Yes!”",
      date: "November 26, 2022",
    },
    {
      img: "https://picsum.photos/640/640?random=6",
      description:
        "Surrounded by family and friends, they vowed forever. Tears, laughter, and a dance to remember.",
      date: "June 3, 2024",
    },
    // {
    //   img: "/img/photobooth.jpg",
    //   description:
    //     "This is the first time we took a picture in a photobooth, and one of the first images in our photobooth collection",
    //   date: "November 3, 2024",
    // },
    // {
    //   img: "/img/ice_skate.jpg",
    //   description:
    //     "The second time we do some ice skating, the payback from our first visit. I still remembered the time we slip off. ",
    //   date: "November 3, 2024",
    // },
    // {
    //   img: "/img/coffee_date.jpg",
    //   description:
    //     "The first time you invited me to drink coffee with you, such a nice coffee and place.",
    //   date: "December 22, 2024",
    // },
    // {
    //   img: "/img/skyranch.jpeg",
    //   description:
    //     "The 1st celebration of our monthsary, we try some extreme rides and I hate that Viking ship thing. My first time I received flowers",
    //   date: "December 30, 2024",
    // },
    // {
    //   img: "/img/clay_date.jpg",
    //   description:
    //     "One of the dates I feel a strong love, sorry I cannot post the NSFW stuff",
    //   date: "February 14, 2025",
    // },
    // {
    //   img: "/img/ice_cream.jpg",
    //   description:
    //     "I cleaned my storage in phone and cannot find the origin of us eating ice cream together.",
    //   date: "????",
    // },
  ];

  return data;
}
