const articleContent = [
    {
        type: "p",
        content: "sFlightX has identified 2 concerning anomalies during the Sky Shield Reaction Mission, and corrective actions have been approved."
    },
    {
        type: "p",
        content: "More info at <a href=\"https://sflightx.com/blob/mishap/0016-mishap-report.pdf\">our Mishap Investigation</a>."
    },
    {
        type: "br"
    },
    {
        type: "h2",
        content: "SSR Mission successfully launched from Terra Aurora, Droo."
    },
    {
        type: "p",
        content: "Maya Block 6 lifted off at 15:52 UTC from Pad A. This mission carried 5 Sky Shield Reaction Satellites to Low Droo Orbit."
    },
    {
        type: "p",
        content: "The vehicle left the launch pad underperformed, thus accelerating below the Thrust to Weight Ratio (TWR) threshold."
    },
    {
        type: "p",
        content: "On T+ 2:53 seconds into the flight, the first stage engine cuts off, delayed by 9 seconds to compensate for the TWR loss from ascent. A few seconds later, the second stage ignites and the fairings detached."
    },
    {
        type: "p",
        content: "The booster on descent, successfully demonstrated a retrograde entry burn. The booster, B6001 executed its final landing burn with all 3 Agila Engines, but it hit the ocean fast enough to make a hard splashdown. Final telemetry was retrieved at 125 meters, with a speed of 566 km/h."
    },
    {
        type: "p",
        content: "Same as the first stage, the second stage also underperformed through its circularization burn, overshooting the payload to its intended orbit."
    },
    {
        type: "p",
        content: "With flights like this, we can make the vehicle as we iterate and solve."
    },
    {
        type: "p",
        content: "sFlightX is now cooperating with the Central Aeronautics and Space Administration to work with the mishap investigation following the Sky Shield Reaction Mission."
    },
    {
        type: "p",
        content: "Return to flight will occur once the investigation is finished."
    },
    {
        type: "br"
    },
    {
        type: "p",
        content: "<b>Maya Block 6</b>, sFlightX's Flagship rocket is set to launch on its debut flight. Featuring enormous upgrades from block 1 to Block 5, this mission is the most ambitious yet in terms of rapid reuse and reliability. Liftoff is targeted on January 29 at Terra Aurora, Droo. Launch window opens at 3am Philippine Standard Time (19:00 UTC)."
    },
    {
        type: "p",
        content: "This mission, Maya will carry 5 <a href=\"https://sites.google.com/view/alphaxspace/skyshieldreaction?authuser=0\">Sky Shield Reaction</a> Satellites from <a href=\"https://x.com/alphax_space\">AlphaX Space</a>'s AlphaLink."
    },
    {
        type: "p",
        content: "Upgrades debuting to this vehicle, Booster 6001, will utilize upgraded fairings to support high-velocity re-entry upon recovery. This ensures wider range options for our recovery vessels while not compromising the safety of our workers in the ship."
    },
    {
        type: "p",
        content: "The first stage received several structural upgrades, including the reduction of dry mass for more payload. We reverted to Maya Block 1 design where the first stage is narrower than the second stage. This effectively makes the vehicle optimized for any second stage size while boosters can launch any variants."
    },
    {
        type: "p",
        content: "Looking at the forward section, Maya consists of 4 hypersonic fins, that use aerodynamic surfaces to generate lift enough to steer Maya Block 6 to the launch site more accurately. Previous data from earlier flights suggests using this than grid fins as our primary source of steering."
    },
    {
        type: "p",
        content: "Then, the aft section comprises 2 static aerodynamic surfaces that help to generate more lift during the gliding phase of the flight. Maya blocks 2 and 3 lost control due to limited aerodynamic surface leading to hypersonic backflips during ascent and descent."
    },
    {
        type: "p",
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
        content: "MISSION COUNTDOWN"
    },
    {
        type: "p",
        content: "All times are approximate."
    },
    {
        type: "table",
        content: [
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-30:00" },
                    { type: "td", content: "LD VERIFIES GO FOR PROP LOAD" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-29:45" },
                    { type: "td", content: "STAGE 1 LOX LOAD UNDERWAY" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-26:50" },
                    { type: "td", content: "STAGE 1 CH2 LOAD UNDERWAY" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-15:30" },
                    { type: "td", content: "STAGE 2 CH2 LOAD UNDERWAY" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-13:30" },
                    { type: "td", content: "STAGE 2 LOX LOAD UNDERWAY" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-8:00" },
                    { type: "td", content: "FTS IS ARMED" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-5:35" },
                    { type: "td", content: "AGILA ENGINE CHILL" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-4:30" },
                    { type: "td", content: "STAGE 1 PROPELLANT LOAD IS COMPLETE" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-2:55" },
                    { type: "td", content: "STAGE 2 PROPELLANT LOAD IS COMPLETE" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-1:00" },
                    { type: "td", content: "VEHICLE START-UP" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-0:25" },
                    { type: "td", content: "LD VERIFIES GO FOR LAUNCH!" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T-0:01" },
                    { type: "td", content: "ENGINE IGNITION SEQUENCE START" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T+0:03" },
                    { type: "td", content: "LIFTOFF!" }
                ]
            }
        ]
    },
    {
        type: "h2",
        content: "FLIGHT EVENTS"
    },
    {
        type: "p",
        content: "All times not yet approximate."
    },
    {
        type: "table",
        content: [
            {
                type: "tr",
                children: [
                    { type: "td", content: "T+0:03" },
                    { type: "td", content: "LIFTOFF" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T+1:18" },
                    { type: "td", content: "MAX-Q" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T+2:53" },
                    { type: "td", content: "MAIN ENGINE CUTOFF 1 (MECO-1)" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T+2:57" },
                    { type: "td", content: "MAIN STAGE SEPARATION" }
                ]
            },
            {
                type: "tr",
                children: [
                    { type: "td", content: "T+3:14" },
                    { type: "td", content: "STAGE 2 IGNITION" }
                ]
            }
        ]
    }
];
