const articleContent = [
    {
        type: "iframe",
        src: "https://www.youtube.com/embed/yz2UST01rhM?si=9iyMl1GrJOc8nnii",
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
                content: "sFlightX and DAXT are currently targeting 8:00PM PhST (12:00 UTC) for the launch of Maya 4 Block 2.1 and Gripen (consecutively) into space. This mission carries 2 OmegaSat-mini v4 for Maya 4, a smaller version of our satellite. Gripen will launch 8 OmegaSat v4 to LEO."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "<b>For Maya 4:</b>"
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "• No hardware will be recovered, as we are pushing the rocket's performance at its maximum."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "• This mission will also feature a no payload sep mechanism if flight computers detect deviation to expected trajectory."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "• This last inaugural flight of Maya Block 2.1 verifies her capabilities for rapid reusability, before going to be fully operational with Block 3."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "<b>For Gripen:</b>"
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This is the second flight of Gripen and also first flight of G1003, Booster that will attempt to reenter earth´s atmosphere."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This mission, counts as sFlightX's 6th launch attempt and our 5th orbital launch of 2024."
            }
        ]
    }
];

export default articleContent;
