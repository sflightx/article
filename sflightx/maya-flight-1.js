const articleContent = [
  {
    type: "iframe",
    src: "https://www.youtube.com/embed/xGEqVUy47UM?si=M8cbvuraNtGTqm0x",
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    referrerpolicy: "strict-origin-when-cross-origin",
    allowfullscreen: "false",
    style: {
      width: "100%",
      aspectRatio: "16/9",
    }
  },
  {
    type: "div",
    class: "container",
    indent: "all",
    children: [
      {
        type: "h4",
        class: "md-typescale-headline-large",
        content: "On January 20, 2024, sFlightX celebrated a milestone with the inaugural launch of Maya from Droo, powered by the pioneering Booster Block 2."
      },
      {
        type: "p",
        class: "md-typescale-body-large",
        content: "The mission saw Maya Two fall short of orbital velocity, likely due to insufficient booster chamber pressure, which hindered the desired speed before the second stage separated. Despite this, the second stage exceeded expectations, achieving an impressive 20,000 m/s, far surpassing initial estimates."
      },
      {
        type: "p",
        class: "md-typescale-body-large",
        content: "This marked the company's second launch attempt and its first orbital mission of 2024."
      }
    ]
  }
];

export default articleContent;