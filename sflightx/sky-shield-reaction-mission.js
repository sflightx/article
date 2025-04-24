const articleContent = [
    {
        type: "div",
        class: "container",
        id: "full",
        children: [
            {
                type: "h4",
                class: "md-typescale-headline-large",
                content: "sFlightX has identified 2 concerning anomalies during the Sky Shield Reaction Mission, and corrective actions have been approved."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "More info at <a href=\"https://sflightx.com/blob/mishap/0016-mishap-report.pdf\">our Mishap Investigation</a>."
            },
            {
                type: "br"
            },
            {
                type: "h4",
                class: "md-typescale-headline-large",
                content: "SSR Mission successfully launched from Terra Aurora, Droo."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "Maya Block 6 lifted off at 15:52 UTC from Pad A. This mission carried 5 Sky Shield Reaction Satellites to Low Droo Orbit."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "The vehicle left the launch pad underperformed, thus accelerating below the Thrust to Weight Ratio (TWR) threshold."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "On T+ 2:53 seconds into the flight, the first stage engine cuts off, delayed by 9 seconds to compensate for the TWR loss from ascent. A few seconds later, the second stage ignites and the fairings detached."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "The booster on descent, successfully demonstrated a retrograde entry burn. The booster, B6001 executed its final landing burn with all 3 Agila Engines, but it hit the ocean fast enough to make a hard splashdown. Final telemetry was retrieved at 125 meters, with a speed of 566 km/h."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "Same as the first stage, the second stage also underperformed through its circularization burn, overshooting the payload to its intended orbit."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "With flights like this, we can make the vehicle as we iterate and solve."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "sFlightX is now cooperating with the Central Aeronautics and Space Administration to work with the mishap investigation following the Sky Shield Reaction Mission."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "Return to flight will occur once the investigation is finished."
            },
            {
                type: "br"
            },
            {
                type: "h4",
                class: "md-typescale-headline-large",
                content: "<b>Maya Block 6</b>, sFlightX's Flagship rocket is set to launch on its debut flight. Featuring enormous upgrades from block 1 to Block 5, this mission is the most ambitious yet in terms of rapid reuse and reliability. Liftoff is targeted on January 29 at Terra Aurora, Droo. Launch window opens at 3am Philippine Standard Time (19:00 UTC)."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "This mission, Maya will carry 5 <a href=\"https://sites.google.com/view/alphaxspace/skyshieldreaction?authuser=0\">Sky Shield Reaction</a> Satellites from <a href=\"https://x.com/alphax_space\">AlphaX Space</a>'s AlphaLink."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "Upgrades debuting to this vehicle, Booster 6001, will utilize upgraded fairings to support high-velocity re-entry upon recovery. This ensures wider range options for our recovery vessels while not compromising the safety of our workers in the ship."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "The first stage received several structural upgrades, including the reduction of dry mass for more payload. We reverted to Maya Block 1 design where the first stage is narrower than the second stage. This effectively makes the vehicle optimized for any second stage size while boosters can launch any variants."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "Looking at the forward section, Maya consists of 4 hypersonic fins, that use aerodynamic surfaces to generate lift enough to steer Maya Block 6 to the launch site more accurately. Previous data from earlier flights suggests using this than grid fins as our primary source of steering."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                class: "md-typescale-body-large",
                content: "Then, the aft section comprises 2 static aerodynamic surfaces that help to generate more lift during the gliding phase of the flight. Maya blocks 2 and 3 lost control due to limited aerodynamic surface leading to hypersonic backflips during ascent and descent."
            },
            {
                type: "p",
                class: "md-typescale-body-large",
                content: "Maya Block 6 is now equipped with bigger Agila v2 Engines, capable of producing 5 million pounds of force! This setup reduced the number of engines from 13 to 7. Given the lesser number of engines, Maya Block 6 is capable of losing 2 engines mid-flight. We are working thoroughly to maximize the rocket engine efficiency for future reliability."
            },
            {
                type: "blockquote",
                class: "twitter-tweet",
                data: {
                    "dnt": "true",
                    "theme": "dark"
                },
                content: 'Sky Shield Reaction is our Alphalink satellite shield for security and upgrades in satellite systems. <a href="https://t.co/OPGsik0T4K">https://t.co/OPGsik0T4K</a><br>&mdash; Alphalink (@AlphalinkSat) <a href="https://twitter.com/AlphalinkSat/status/1876626038618538197?ref_src=twsrc%5Etfw">January 7, 2025</a>'
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
                            { type: "p", slot: "trailing-supporting-text", content: "T-1:00" }
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
                            { type: "div", slot: "trailing-supporting-text", content: "T+0:03" }
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
                            { type: "div", slot: "trailing-supporting-text", content: "T+0:03" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MAX-Q" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+1:18" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MAIN ENGINE CUTOFF 1 (MECO-1)" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+2:53" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "MAIN STAGE SEPARATION" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+2:57" }
                        ]
                    },
                    {
                        type: "md-list-item",
                        children: [
                            { type: "div", slot: "headline", content: "STAGE 2 IGNITION" },
                            { type: "div", slot: "trailing-supporting-text", content: "T+3:14" }
                        ]
                    }
                ]
            }

        ]
    }
];

export default articleContent;