const articleContent = [
    {
        type: "iframe",
        src: "https://www.youtube.com/embed/zrfy6G7WDXs?si=n4Y_8xU91oXB080e",
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
                content: "Maya Block 3 launched the OmegaLink 2-1 Mission on April 23, 16:34 UTC at Launch Complex 1A, Bataan Space Center, Philippines which carried 8 OmegaSat v5 to LEO."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "OmegaSat v5 is the new compact sized satellite for OmegaLink, a less weight, size and a modern version."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This mission, counts as sFlightX's 8th launch attempt and our 7th orbital launch of 2024."
            }
        ]
    }
];

export default articleContent;
