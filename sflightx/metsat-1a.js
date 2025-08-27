const articleContent = [
//    {
//        type: "iframe",
//        src: "https://www.youtube.com/embed/GRGp3KLjimQ?si=ZltMci3yzn76DVa8",
//        title: "YouTube video player",
//        frameborder: "0",
//        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
//        referrerpolicy: "strict-origin-when-cross-origin",
//        allowfullscreen: "false",
//        style: {
//            width: "100%",
//            aspectRatio: "16/9",
//        }
//    },
    {
        type: "div",
        class: "container",
        id: "full",
        children: [
            {
                type: "h4",
                class: "md-typescale-headline-large",
                content: "After months of unfavorable weather conditions, sFlightX is targeting to launch Borneo Space Xploration Agency (BXSA)'s MetSat-1A Mission no earlier than Friday, Spetember 19 at Launch Complex 3A, Bataan Space Center, Philippines. The vehicle and ground infrastructure are ready for launch, pending regulatory approval."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This mission, counts as sFlightX's 17th orbital launch attempt and 3rd launch of 2025. Numerous upgrades both vehicle and pad are observable, as we take step towards rapid reusability of Maya vehicles."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "B6003 will debut this flight. After executing a short period of entry burn ~30 seconds, the first stage booster will attempt propulsive landing below 2km AGL (Altitude at Ground Level). All 13 engines will relight during the landing burn. When reaches pre-determined altitude based on environment conditions, all engines cuts off but the and 3 center engines will continue the landing phase as the landing legs deploy."
            },
            {
                type: "h3",
                class: "md-typescale-display-small",
                content: "MISSION COUNTDOWN"
            },
            {
                type: "h6",
                class: "md-typescale-headline-small",
                content: "All times are approximate."
            },
            {
                type: "md-list",
                children: [
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "LD VERIFIES GO FOR PROP LOAD" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-30:00" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "STAGE 1 LOX LOAD UNDERWAY" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-29:45" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "STAGE 1 CH2 LOAD UNDERWAY" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-26:50" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "STAGE 2 CH2 LOAD UNDERWAY" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-15:30" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "STAGE 2 LOX LOAD UNDERWAY" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-13:30" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "FTS IS ARMED" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-8:00" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "AGILA ENGINE CHILL" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-5:35" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "STAGE 1 PROPELLANT LOAD IS COMPLETE" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-4:30" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "STAGE 2 PROPELLANT LOAD IS COMPLETE" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-2:55" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "VEHICLE START-UP" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-1:00" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "LD VERIFIES GO FOR LAUNCH!" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-0:25" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "ENGINE IGNITION SEQUENCE START" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-0:03" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "LIFTOFF!" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+0:00" }
                        ]
                    }
                ]
            },
            {
                type: "h3",
                class: "md-typescale-display-small",
                content: "FLIGHT EVENTS"
            },
            {
                type: "h6",
                class: "md-typescale-headline-small",
                content: "All times not yet approximate."
            },
            {
                type: "md-list",
                children: [
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "LIFTOFF" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+0:00" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MAX-Q" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+1:10" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MAIN ENGINE CUTOFF 1 (MECO-1)" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+2:44" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MAIN STAGE SEPARTAION" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+3:05" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "SECOND STAGE ENGINE START 1 (SSES-1)" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+3:10" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "FAIRING SEPARATION" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+3:34" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "LANDING BURN START" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+6:02" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "LANDING BURN SHUTDOWN" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+6:10" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "SECOND ENGINE CUTOFF 1 (SECO-1)" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+10:30" }
                        ]
                    }
                ]
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This launch is sFlightX’s 17th launch attempt and 2nd orbital launch of 2025."
            }
        ]
    }
];

export default articleContent;

//Mission Objectives:
//Launch
//Perform a high-altitude flyby (~100,000 km above Tydos)
//Collect and return interplanetary space dust to Earth