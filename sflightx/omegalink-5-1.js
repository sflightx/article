const articleContent = [
    {
        type: "div",
        class: "container",
        id: "full",
        children: [
            {
                type: "h4",
                class: "md-typescale-headline-large",
                content: "SFlightX is currently targeting May 28 for the launch of 8 OmegaSat to Low Droo Orbit. Window opens at 21:40 UTC, pending weather conditions."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "After months of delay due to several hardware issues, SFlightX Teams will <b>attempt another launch<b> of Maya Block 6 at Terra Aurora, Uthain Republics, Droo. The mission will feature enormous upgrades from the previous inaugural flight of Maya 6."
            },
            {
                type: "br"
            },
            {
                type: "h2",
                class: "md-typescale-display-medium",
                content: "MISSION COUNTDOWN"
            },
            {
                type: "p",
                class: "md-typescale-body-large",
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
                            { type: "div", slot: "headline", content: "MS-1 LOX LOAD UNDERWAY" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-19:45" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-1 CH2 LOAD UNDERWAY" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-16:50" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-2 CH2 LOAD UNDERWAY" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-15:30" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-2 LOX LOAD UNDERWAY" },
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
                            { type: "div", slot: "headline", content: "MS-1 PROPELLANT LOAD IS COMPLETE" },
                            { type: "div", slot: "trailing-supporting-text", content: "T-4:30" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-2 PROPELLANT LOAD IS COMPLETE" },
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
                            { type: "div", slot: "trailing-supporting-text", content: "T-0:01" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "LIFTOFF!" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+0:02" }
                        ]
                    }
                ]
            },
            {
                type: "h2",
                class: "md-typescale-display-medium",
                content: "FLIGHT EVENTS"
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "All times not yet approximate."
            },
            {
                type: "md-list",
                children: [
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "LIFTOFF" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+0:02" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MAX-Q" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+1:12" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-1 ENGINE CUTOFF 1 (MECO-1)" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+2:39" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-1 STAGE SEPARATION" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+2:42" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-1 BOOSTBACK BURN" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+2:49" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-1 BOOSTBACK SHUTDOWN" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+2:55" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-1 HYPERSONIC ENTRY BURN" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+4:15" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-1 HYPERSONIC ENTRY BURN SHUTDOWN" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+4:37" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-1 IS TRANSONIC" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+6:02" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-1 FULL ENGINE LANDING BURN" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+6:09" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-1 SEQUENCIAL CUTOFF, HOVER BURN AND SPLASHDOWN" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+6:25" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MS-2 MECO" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+7:40" }
                        ]
                    }
                ]
            }

        ]
    }
];

export default articleContent;