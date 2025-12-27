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
        indent: "all",
        children: [
            {
                type: "h4",
                class: "md-typescale-headline-large",
                content: "After months of unfavorable weather conditions, SFlightX is targeting to launch the RTF Mission One at Terra Aurora, Uthain Republics, Droo. The vehicle and ground infrastructure are ready for launch, pending regulatory approval."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This mission, counts as SFlightX's 18th orbital launch attempt and 1st launch of 2026. Numerous upgrades both vehicle and pad are observable, as we take step towards rapid reusability of Maya vehicles."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "The new Maya RTF (Rapid Turnaround Flight) vehicle features upgraded Agila engines, improved thermal protection system, and enhanced avionics suite. These upgrades are designed to facilitate quicker turnaround times between flights, aiming to reduce refurbishment time and costs."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "The booster for this flight, Booster 7001 is now equipped with 33 advanced Agila v2 engines from 7 bigger engines in the previous version, which offer higher thrust and improved efficiency, redundancy of engine-out capabilities compared to previous versions. The second stage also features upgraded Agila v2 Vacuum engines for better performance in space."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This flight will debut a new systematic approach of descent. The first 3 center Agila v2 engines will ignite then each group of 5 engines will ignite pre-launch. There is 7 maximum engine-out in order to overcome the thrust-to-weight ratio (TWR). This gives our team confidence that Maya can proceed in-flight while losing power."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "During ascent, the vehicle will perform a standard gravity turn trajectory to reach orbit. After stage separation, the second stage will ignite its Agila v2 Vacuum engine to continue the journey to orbit."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "At main engine cutoff (MECO-1), the first stage will separate and begin its descent back to Terra Aurora. The booster will perform what we call flip separation wherein the second stage will separate in a flipping manner.The booster will continue the boostback maneuver to the launch site."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "Booster 7001 will perform a controlled water landing of the coast of Uthain Republics. All 13 inner engines will reignite for the landing burn, followed by a 10 second pinpoint hover of 3 engines, and a shutting down all engines, ensuring a soft touchdown on the water surface. The booster will be recovered and refurbished for future flights."
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
//Reach Tydos
//Perform a high-altitude flyby (~100,000 km above Tydos)
//Collect and return interplanetary space dust to Earth