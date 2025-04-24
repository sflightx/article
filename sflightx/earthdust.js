const articleContent = [
    {
        type: "iframe",
        src: "https://www.youtube.com/embed/GRGp3KLjimQ?si=ZltMci3yzn76DVa8",
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
                content: "EarthDust Sample Return Mission"
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "On April 18 at 10:30 UTC, Maya Block 3 launched the EarthDust Sample Return Mission from Launch Complex 1A at the Bataan Space Center, Philippines."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "The mission aims to deliver scientific instruments to Tydos and return space dust collected from beyond the Kuiper Belt back to Earth."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This marks the maiden flight of the Block 3 launch vehicle, which features reusable architecture."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "The first stage is equipped for potential Return to Launch Site (RTLS), pending mission conditions."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This launch is sFlightX’s 7th launch attempt and the 6th successful orbital launch of 2024."
            }
        ]
    }
];

export default articleContent;

//Mission Objectives:
//Reach Tydos
//Perform a high-altitude flyby (~100,000 km above Tydos)
//Collect and return interplanetary space dust to Earth