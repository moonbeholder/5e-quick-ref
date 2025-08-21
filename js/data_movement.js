data_movement = [
    {
        title: "★ Move",
        icon: "run",
        subtitle: "1ft moved = 1ft of Speed",
        description: "Cross a distance by walking, running, or other means.",
        reference: "See Playing the Game: Combat (Movement and Position), Rules Glossary: Speed",
        bullets: [
            "On your turn, you can move a distance equal to your Speed or less. Or you can decide not to move.</br>Your movement can include climbing, crawling, jumping, and swimming. These different modes of movement can be combined with your regular movement, or they can constitute your entire move.</br>However you’re moving, deduct the distance of each part of your move from your Speed until it is used up or until you are done moving, whichever comes first.",
            "<b>Moving Around Other Creatures.</b> During your move, you can pass through the space of an ally, a creature that has the Incapacitated condition, a Tiny creature, or a creature that is two sizes larger or smaller than you. Another creature’s space is Difficult Terrain for you unless that creature is Tiny or your ally. You can’t willingly end a move in a space occupied by another creature. If you somehow end a turn in a space with another creature, you have the Prone condition unless you are Tiny or are of a larger size than the other creature.",
            "<b>Special Speeds.</b> Some creatures have special speeds, such as Burrow Speed, Climb Speed, Fly Speed, or Swim Speed. If you have more than one speed, choose which one to use when you move; you can switch between the speeds during your move. Whenever you switch, subtract the distance already moved from the new speed. The result determines how much farther you can move. If the result is 0 or less, you can't use the new speed during the current move.",
            "<b>Changes to Your Speeds.</b> If an effect increases or decreases your Speed for a time, any special speed you have increases or decreases by an equal amount for the same duration."
        ]
    },
    {
        title: "Climb",
        icon: "mountain-climbing",
        subtitle: "1ft climbed = 2ft of Speed",
        description: "Traverse a vertical surface.",
        reference: "See Rules Glossary: Climbing",
        bullets: [
            "While you’re climbing, each foot of movement costs 1 extra foot (2 extra feet in Difficult Terrain). You ignore this extra cost if you have a Climb Speed and use it to climb.",
            "At the DM’s discretion, climbing a slippery surface or one with few handholds might require a successful DC 15 Strength (Athletics) check.",
            "<b>Climb Speed.</b> A Climb Speed can be used in place of Speed to traverse a vertical surface without expending the extra movement normally associated with climbing."
        ]
    },
    {
        title: "Crawl",
        icon: "crawl",
        subtitle: "1ft crawled = 2ft of Speed",
        description: "Move slowly across the ground on hands and knees.",
        reference: "See Rules Glossary: Crawling",
        bullets: [
            "While you’re crawling, each foot of movement costs 1 extra foot (2 extra feet in Difficult Terrain)."
        ]
    },
    {
        title: "Drop Prone",
        icon: "falling",
        subtitle: "Free if your Speed > 0",
        description: "Throw yourself down to lie flat on the ground.",
        reference: "See Playing the Game: Combat (Movement and Position)",
        bullets: [
            "On your turn, you can give yourself the Prone condition without using an action or any of your Speed, but you can't do so if your speed is 0."
        ]
    },
    {
        title: "Difficult Terrain",
        icon: "stone-pile",
        subtitle: "1ft moved = 2ft of Speed",
        description: "Move through cluttered, uneven, or obstructed ground that slows progress.",
        reference: "See Playing the Game: Combat (Movement and Position)",
        bullets: [
            "If a space is Difficult Terrain, every foot of movement in that space costs 1 extra foot. For example, moving 5 feet through Difficult Terrain costs 10 feet of movement. Difficult Terrain isn't cumulative; either a space is Difficult Terrain, or it isn't.",
            "A space is Difficult Terrain if it contains any of the following, or something similar:",
            "- A creature that isn't Tiny or your ally.",
            "- Furniture that is sized for creatures of your size or larger.",
            "- Heavy snow, ice, rubble, or undergrowth.",
            "- Liquid that's between shin- and waist-deep.",
            "- A narrow opening sized for a creature one size smaller than you.",
            "- A slope of 20 degrees or more."
        ]
    },
    {
        title: "Grapple (Move)",
        icon: "grab",
        subtitle: "Your Speed is halved",
        description: "Drag or shove another along as you move.",
        reference: "See Grappled [Condition]",
        bullets: [
            "If you are grappling a creature, you can drag or carry the creature with you when you move, but every foot of movement costs 1 extra foot unless that creature is Tiny or two or more sizes smaller than you."
        ]
    },
    {
        title: "High Jump",
        icon: "wingfoot",
        subtitle: "Height = 3 + STR mod (ft)",
        description: "Leap upward into the air, reaching above your normal height.",
        reference: "See Rules Glossary: High Jump",
        bullets: [
            "When you make a High Jump, you leap into the air a number of feet equal to 3 plus your Strength modifier (minimum of 0 feet) if you move at least 10 feet on foot immediately before the jump. When you make a standing High Jump, you can jump only half that distance. Either way, each foot of the jump costs a foot of movement.",
            "You can extend your arms half your height above yourself during the jump. Thus, you can reach a distance equal to the height of the jump plus 1.5 times your height."
        ]
    },
    {
        title: "Improvise",
        icon: "skateboarding-02",
        subtitle: "Any stunt not listed",
        description: "Attempt some kind of kind of movement not listed here.",
        reference: "???",
        bullets: [
            "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    },
    {
        title: "Long Jump",
        icon: "jump-across",
        subtitle: "Distance = STR score (ft)",
        description: "Leap forward, covering horizontal distance in a single bound.",
        reference: "See Rules Glossary: Long Jump",
        bullets: [
            "When you make a Long Jump, you leap horizontally a number of feet up to your Strength score if you move at least 10 feet immediately before the jump. When you make a standing Long Jump, you can leap only half that distance. Either way, each foot you jump costs a foot of movement.",
            "If you land in Difficult Terrain, you must succeed on a DC 10 Dexterity (Acrobatics) check or have the Prone condition.",
            "This Long Jump rule assumes that the height of the jump doesn't matter, such as a jump across a stream or a chasm. At your DM's discretion, you must succeed on a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance), such as a hedge or a low wall. Otherwise, you hit the obstacle."
        ]
    },
    {
        title: "Stand Up",
        icon: "strong",
        subtitle: "Costs half your Speed",
        description: "Rise from the ground to your feet.",
        reference: "See Prone [Condition]",
        bullets: [
            "To stand up, spend an amount of movement equal to half your Speed (round down) to right yourself and thereby end the Prone condition. If your Speed is 0, you can’t right yourself."
        ]
    },
    {
        title: "Swim",
        icon: "at-sea",
        subtitle: "1ft swum = 2ft of Speed",
        description: "Move through water by kicking and pulling yourself forward.",
        reference: "See Rules Glossary: Swimming",
        bullets: [
            "While you’re swimming, each foot of movement costs 1 extra foot (2 extra feet in Difficult Terrain). You ignore this extra cost if you have a Swim Speed and use it to swim.",
            "At the DM’s discretion, moving any distance in rough water might require a successful DC 15 Strength (Athletics) check."
        ]
    }
]
