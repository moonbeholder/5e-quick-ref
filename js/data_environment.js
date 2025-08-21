data_environment_obscurance = [
    {
        title: "Lightly Obscured",
        icon: "high-grass",
        subtitle: "Partially concealed",
        description: "The environment is hazy or unclear, making details harder to see.",
        reference: "See Playing the Game: Exploration (Vision and Light), Rules Glossary: Lightly Obscured",
        bullets: [
            "In a Lightly Obscured area—such as an area with Dim Light, patchy fog, or moderate foliage—you have Disadvantage on Wisdom (Perception) checks that rely on sight."
        ]
    },
    {
        title: "Heavily Obscured",
        icon: "vines",
        subtitle: "Fully concealed",
        description: "The environment is shrouded in darkness, fog, or similar cover, making it impossible to see.",
        reference: "See Playing the Game: Exploration (Vision and Light), Rules Glossary: Heavily Obscured",
        bullets: [
            "A Heavily Obscured area—such as an area with Darkness, heavy fog, or dense foliage—is opaque. You have the Blinded condition when trying to see something there."
        ]
    }
]

data_environment_light = [
    {
        title: "Bright Light",
        icon: "primitive-torch",
        subtitle: "Fully visible",
        description: "The area is well lit, making sight unhindered.",
        reference: "See Playing the Game: Exploration (Vision and Light)",
        bullets: [
            "Bright Light lets most creatures see normally. Even gloomy days provide Bright Light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ]
    },
    {
        title: "Dim Light",
        icon: "candle-light",
        subtitle: "Partially visible",
        description: "The area is shadowed and details are blurry, making sight uncertain.",
        reference: "See Playing the Game: Exploration (Vision and Light)",
        bullets: [
            "Dim Light, also called shadows, creates a Lightly Obscured area. An area of Dim Light is usually a boundary between Bright Light and surrounding Darkness. The soft light of twilight and dawn also counts as Dim Light. A full moon might bathe the land in Dim Light."
        ]
    },
    {
        title: "Darkness",
        icon: "worried-eyes",
        subtitle: "No visibility",
        description: "The area is devoid of light, making normal sight impossible.",
        reference: "See Playing the Game: Exploration (Vision and Light)",
        bullets: [
            "Darkness creates a Heavily Obscured area. Characters face Darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon, or in an area of magical Darkness."
        ]
    }
]

data_environment_vision = [
    {
        title: "Blindsight",
        icon: "blindfold",
        subtitle: "Perceive without sight",
        description: "Perceive your surroundings without relying on sight, within a certain radius.",
        reference: "Rules Glossary: Blindsight",
        bullets: [
            "If you have Blindsight, you can see within a specific range without relying on physical sight. Within that range, you can see anything that isn’t behind Total Cover even if you have the Blinded condition or are in Darkness. Moreover, in that range, you can see something that has the Invisible condition."
        ]
    },
    {
        title: "Darkvision",
        icon: "angry-eyes",
        subtitle: "See in darkness",
        description: "A creature can see better in the dark or low light conditions, within a certain radius.",
        reference: "Rules Glossary: Darkvision",
        bullets: [
            "If you have Darkvision, you can see in Dim Light within a specified range as if it were Bright Light and in Darkness within that range as if it were Dim Light. You discern colors in that Darkness only as shades of gray."
        ]
    },
    {
        title: "Tremorsense",
        icon: "boot-stomp",
        subtitle: "Feel vibrations",
        description: "A creature can perceive movement without sight by sensing vibrations, within a certain radius.",
        reference: "Rules Glossary: Tremorsense",
        bullets: [
            "A creature with Tremorsense can pinpoint the location of creatures and moving objects within a specific range, provided that the creature with Tremorsense and anything it is detecting are both in contact with the same surface (such as the ground, a wall, or a ceiling) or the same liquid.",
            "Tremorsense can’t detect creatures or objects in the air, and it doesn’t count as a form of sight."
        ]
    },
    {
        title: "Truesight",
        icon: "all-seeing-eye",
        subtitle: "See the truth",
        description: "A creature can see everything in its true form, independent of the environment, within a certain radius.",
        reference: "Rules Glossary: Truesight",
        bullets: [
            "If you have Truesight, your vision is enhanced within a specified range. Within that range, your vision pierces through the following:",
            "<b>Darkness.</b> You can see in normal and magical Darkness.",
            "<b>Invisibility.</b> You see creatures and objects that have the Invisible condition.",
            "<b>Visual Illusions.</b> Visual illusions appear transparent to you, and you automatically succeed on saving throws against them.",
            "<b>Transformations.</b> You discern the true form of any creature or object you see that has been transformed by magic.",
            "<b>Ethereal Plane.</b> You see into the Ethereal Plane."
        ]
    }
]

data_environment_cover = [
    {
        title: "Half Cover",
        icon: "brick-pile",
        subtitle: "Partially concealed",
        description: "The creature is partially conceiled, with about half its body exposed.",
        reference: "See Playing the Game: Combat (Cover)",
        bullets: [
            "A creature behind Half Cover gain a +2 bonus to AC and Dexterity saving throws.",
            "Another creature or an object that covers at least half of the target provides Half Cover.",
            "A target can benefit from cover only when an attack or other effect originates on the opposite side of the cover. If a target is behind multiple sources of cover, only the most protective degree of cover applies; the degrees aren’t added together. For example, if a target is behind a creature that gives Half Cover and a tree trunk that gives Three-Quarters Cover, the target has Three-Quarters Cover."
        ]
    },
    {
        title: "Three-Quarters Cover",
        icon: "stakes-fence",
        subtitle: "Mostly concealed",
        description: "The creature is mostly conceiled, with only a small part exposed.",
        reference: "See Playing the Game: Combat (Cover)",
        bullets: [
            "A creature behind Three-Quarters Cover gain a +5 bonus to AC and Dexterity saving throws.",
            "An object that covers at least three-quarters of the target provides Three-Quarters Cover.",
            "A target can benefit from cover only when an attack or other effect originates on the opposite side of the cover. If a target is behind multiple sources of cover, only the most protective degree of cover applies; the degrees aren’t added together. For example, if a target is behind a creature that gives Half Cover and a tree trunk that gives Three-Quarters Cover, the target has Three-Quarters Cover."
        ]
    },
    {
        title: "Full cover",
        icon: "defensive-wall",
        subtitle: "Fully concealed",
        description: "The creature is completely conceiled, with no part of it exposed.",
        reference: "See Playing the Game: Combat (Cover)",
        bullets: [
            "A creature behind Full Cover can't be targeted directly.",
            "An object that covers the whole target provides Full Cover.",
            "A target can benefit from cover only when an attack or other effect originates on the opposite side of the cover. If a target is behind multiple sources of cover, only the most protective degree of cover applies; the degrees aren’t added together. For example, if a target is behind a creature that gives Half Cover and a tree trunk that gives Three-Quarters Cover, the target has Three-Quarters Cover."
        ]
    }
]
