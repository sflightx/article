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
        id: "full",
        children: [
            {
                type: "h4",
                class: "md-typescale-headline-large",
                content: "Maya Block 2 rocketed into the night sky at 8:30 PM PhST (12:30 UTC) on April 3, 2024, from Droo for Maya Flight 4, sFlightX’s fifth launch and fourth orbital mission of 2024."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "Carrying a single OmegaSat-mini—a sleek, compact version of our satellite—this flight is a critical step forward."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "No hardware recovery is on the cards, but the booster is set for a soft targeted splashdown about 30km downrange from the launchpad. A no-sep mechanism will kick in if flight computers spot any trajectory deviations, ensuring mission safety. As the second-to-last inaugural flight, this mission tests Maya’s chops for rapid reusability, paving the way for full operational status."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "sFlightX is pushing the boundaries of what’s possible, one launch at a time!"
            }
        ]
    }
];

export default articleContent;
