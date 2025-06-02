const articleContent = [
    {
        type: "iframe",
        src: "https://www.youtube.com/embed/97oERWoNCbQ?si=EkVBWZq8LJ9V1k4D",
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
                content: "Maya Block 4 launched the AlphaLink Mission on June 25, 08:00 UTC at Launch Complex 1A, Bataan Space Center, Philippines which carried Arenz Space's AlphaLink Satellites to LEO."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This mission, counts as sFlightX's 12th launch attempt and our 11th orbital launch of 2024."
            }
        ]
    }
];

export default articleContent;
