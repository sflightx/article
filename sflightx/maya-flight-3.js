const articleContent = [
    {
        type: "iframe",
        src: "https://www.youtube.com/embed/5KwatxWMCMw?si=NQp6kLqlGk4uGF1E",
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
                content: "Maya Block 2 soared skyward at 4:50 AM PhST (20:50 UTC) on March 25, 2024, from Droo for Flight 3, sFlightX’s fourth launch and third orbital mission of 2024."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "Packed with eight OmegaSat-mini satellites—compact versions of our cutting-edge tech—this flight is set to make waves."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "No hardware recovery is planned, but the booster will execute a boostback burn and a landing burn, showcasing precision and power. sFlightX is charging full speed into the future!"
            }
        ]
    }
];

export default articleContent;
