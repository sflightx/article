const articleContent = [
    {
        type: "iframe",
        src: "https://www.youtube.com/embed/KM_XrzBsXHk?si=1Mf0pDqMpFDHOkhg",
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
        id: "full",
        children: [
            {
                type: "h4",
                class: "md-typescale-headline-large",
                content: "Maya Block 2 launched at 8:00 AM PhST (00:00 UTC) from Droo for Flight 2, sFlightX’s third launch and second orbital attempt of 2024. Carrying a dummy payload—a structural dead weight—this mission is all about pushing the limits."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "No hardware recovery is targeted, but the booster will fire a boostback burn to nail its trajectory. sFlightX is charging toward the stars with this one!"
            }
        ]
    }
];

export default articleContent;
