const articleContent = [
    {
        type: "iframe",
        src: "https://www.youtube.com/embed/rzppMeZ1vI0?si=UmEHw7Q1s0E467tD",
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
                content: "Maya Block 3 launched the OmegaLink 3-2 Mission on May 12, 06:30 UTC at Launch Complex 1A, Bataan Space Center, Philippines which carried 5 OmegaSat v5 to LEO."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "OmegaSat v5 is the new compact sized satellite for OmegaLink, a less weight, size and a modern version."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "The first stage vehicle was expended for this mission."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This mission flew the last Block 3 of Maya, as we developed the Maya Block 5 vehicle."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This mission, counts as sFlightX's 9th launch attempt and our 8th orbital launch of 2024."
            }
        ]
    }
];

export default articleContent;