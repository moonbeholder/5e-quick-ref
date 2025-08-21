data_condition = [
    {
        title: "Blinded",
        icon: "blindfold",
        subtitle: "Can't see",
        description: "You are plunged into darkness, unable to see.",
        reference: "See Rules Glossary: Blinded [Condition]",
        bullets: [
            "While you have the Blinded condition, you experience the following effects.",
            "<b>Can’t See.</b> You can’t see and automatically fail any ability check that requires sight.",
            "<b>Attacks Affected.</b> Attack rolls against you have Advantage, and your attack rolls have Disadvantage."
        ]
    },
    {
        title: "Charmed",
        icon: "smitten",
        subtitle: "Influenced by another",
        description: "You are wrapped in a haze of affection, admiration, or trust toward another creature.",
        reference: "See Rules Glossary: Charmed [Condition]",
        bullets: [
            "While you have the Charmed condition, you experience the following effects.",
            "<b>Can’t Harm the Charmer.</b> You can’t attack the charmer or target the charmer with damaging abilities or magical effects.",
            "<b>Social Advantage.</b> The charmer has Advantage on any ability check to interact with you socially."
        ]
    },
    {
        title: "Deafened",
        icon: "hearing-disabled",
        subtitle: "Can't hear",
        description: "You are plunged into sudden silence.",
        reference: "See Rules Glossary: Deafened [Condition]",
        bullets: [
            "While you have the Deafened condition, you experience the following effect.",
            "<b>Can’t Hear.</b> You can’t hear and automatically fail any ability check that requires hearing."
        ]
    },
    {
        title: "Exhaustion",
        icon: "despair",
        subtitle: "You're weakened",
        description: "You are worn out physically, mentally, or both.",
        reference: "See Rules Glossary: Exhaustion [Condition]",
        bullets: [
            "While you have the Exhaustion condition, you experience the following effects.",
            "<b>Exhaustion Levels.</b> This condition is cumulative. Each time you receive it, you gain 1 Exhaustion level. You die if your Exhaustion level is 6.",
            "<b>D20 Tests Affected.</b> When you make a D20 Test, the roll is reduced by 2 times your Exhaustion level.",
            "<b>Speed Reduced.</b> Your Speed is reduced by a number of feet equal to 5 times your Exhaustion level.",
            "<b>Removing Exhaustion Levels.</b> Finishing a Long Rest removes 1 of your Exhaustion levels. When your Exhaustion level reaches 0, the condition ends."
        ]
    },
    {
        title: "Frightened",
        icon: "sharp-smile",
        subtitle: "You're frightened",
        description: "You are overwhelmed by fear.",
        reference: "See Rules Glossary: Frightened [Condition]",
        bullets: [
            "While you have the Frightened condition, you experience the following effects.",
            "<b>Ability Checks and Attacks Affected.</b> You have Disadvantage on ability checks and attack rolls while the source of fear is within line of sight.",
            "<b>Can’t Approach.</b> You can’t willingly move closer to the source of fear."
        ]
    },
    {
        title: "Grappled",
        icon: "grab",
        subtitle: "Held in place",
        description: "You are held in place by another creature, unable to move freely.",
        reference: "See Rules Glossary: Grappled [Condition]",
        bullets: [
            "While you have the Grappled condition, you experience the following effects.",
            "<b>Speed 0.</b> Your Speed is 0 and can’t increase.",
            "<b>Attacks Affected.</b> You have Disadvantage on attack rolls against any target other than the grappler.",
            "<b>Movable.</b> The grappler can drag or carry you when it moves, but every foot of movement costs it 1 extra foot unless you are Tiny or two or more sizes smaller than it.",
            "<b>Ending a Grapple.</b> A Grappled creature can use its action to make a Strength (Athletics) or Dexterity (Acrobatics) check against the grapple’s escape DC, ending the condition on itself on a success. The condition also ends if the grappler has the Incapacitated condition or if the distance between the Grappled target and the grappler exceeds the grapple’s range. In addition, the grappler can release the target at any time (no action required)."
        ]
    },
    {
        title: "Incapacitated",
        icon: "internal-injury",
        subtitle: "Unable to act",
        description: "You are unable to act, as your mind or body temporarily shuts down.",
        reference: "See Rules Glossary: Incapacitated [Condition]",
        bullets: [
            "While you have the Incapacitated condition, you experience the following effects.",
            "<b>Inactive.</b> You can’t take any action, Bonus Action, or Reaction.",
            "<b>No Concentration.</b> Your Concentration is broken.",
            "<b>Speechless.</b> You can’t speak.",
            "<b>Surprised.</b> If you’re Incapacitated when you roll Initiative, you have Disadvantage on the roll."
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "Unseen by others",
        description: "You are hidden from sight as though vanished from the world.",
        reference: "See Rules Glossary: Invisible [Condition]",
        bullets: [
            "While you have the Invisible condition, you experience the following effects.",
            "<b>Surprise.</b> If you’re Invisible when you roll Initiative, you have Advantage on the roll.",
            "<b>Concealed.</b> You aren’t affected by any effect that requires its target to be seen unless the effect’s creator can somehow see you. Any equipment you are wearing or carrying is also concealed.",
            "<b>Attacks Affected.</b> Attack rolls against you have Disadvantage, and your attack rolls have Advantage. If a creature can somehow see you, you don’t gain this benefit against that creature."
        ]
    },
    {
        title: "Paralyzed",
        icon: "internal-injury",
        subtitle: "Frozen in place",
        description: "You are frozen in place, unable to move or act, your body locked rigid.",
        reference: "See Rules Glossary: Paralyzed [Condition]",
        bullets: [
            "While you have the Paralyzed condition, you experience the following effects.",
            "<b>Incapacitated.</b> You have the Incapacitated condition.",
            "<b>Speed 0.</b> Your Speed is 0 and can’t increase.",
            "<b>Saving Throws Affected.</b> You automatically fail Strength and Dexterity saving throws.",
            "<b>Attacks Affected.</b> Attack rolls against you have Advantage.",
            "<b>Automatic Critical Hits.</b> Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you."
        ]
    },
    {
        title: "Petrified",
        icon: "rock",
        subtitle: "Turned to stone",
        description: "You are transformed into solid stone, frozen in place and unaware of the world around you.",
        reference: "See Rules Glossary: Petrified [Condition]",
        bullets: [
            "While you have the Petrified condition, you experience the following effects.",
            "<b>Turned to Inanimate Substance.</b> You are transformed, along with any nonmagical objects you are wearing and carrying, into a solid inanimate substance (usually stone). Your weight increases by a factor of ten, and you cease aging.",
            "<b>Incapacitated.</b> You have the Incapacitated condition.",
            "<b>Speed 0.</b> Your Speed is 0 and can’t increase.",
            "<b>Attacks Affected.</b> Attack rolls against you have Advantage.",
            "<b>Saving Throws Affected.</b> You automatically fail Strength and Dexterity saving throws.",
            "<b>Resist Damage.</b> You have Resistance to all damage.",
            "<b>Poison Immunity.</b> You have Immunity to the Poisoned condition."
        ]
    },
    {
        title: "Poisoned",
        icon: "poison-bottle",
        subtitle: "Weakened by toxins",
        description: "Your body is weakened by toxins, causing nausea and unsteadiness.",
        reference: "See Rules Glossary: Poisoned [Condition]",
        bullets: [
            "While you have the Poisoned condition, you experience the following effect.",
            "<b>Ability Checks and Attacks Affected.</b> You have Disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        icon: "crawl",
        subtitle: "Flat on the ground",
        description: "You are sprawled on the ground and vulnerable.",
        reference: "See Rules Glossary: Prone [Condition]",
        bullets: [
            "While you have the Prone condition, you experience the following effects.",
            "<b>Restricted Movement.</b> Your only movement options are to crawl or to spend an amount of movement equal to half your Speed (round down) to right yourself and thereby end the condition. If your Speed is 0, you can’t right yourself.",
            "<b>Attacks Affected.</b> You have Disadvantage on attack rolls. An attack roll against you has Advantage if the attacker is within 5 feet of you. Otherwise, that attack roll has Disadvantage."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "Bound and immobile",
        description: "You are bound or trapped, unable to move freely.",
        reference: "See Rules Glossary: Restrained [Condition]",
        bullets: [
            "While you have the Restrained condition, you experience the following effects.",
            "<b>Speed 0.</b> Your Speed is 0 and can’t increase.",
            "<b>Attacks Affected.</b> Attack rolls against you have Advantage, and your attack rolls have Disadvantage.",
            "<b>Saving Throws Affected.</b> You have Disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Stunned",
        icon: "knocked-out-stars",
        subtitle: "Dazed and unresponsive",
        description: "You are dazed and overwhelmed, unable to act with clarity.",
        reference: "See Rules Glossary: Stunned [Condition]",
        bullets: [
            "While you have the Stunned condition, you experience the following effects.",
            "<b>Incapacitated.</b> You have the Incapacitated condition.",
            "<b>Saving Throws Affected.</b> You automatically fail Strength and Dexterity saving throws.",
            "<b>Attacks Affected.</b> Attack rolls against you have Advantage."
        ]
    },
    {
        title: "Unconscious",
        icon: "coma",
        subtitle: "Knocked out cold",
        description: "You're knocked out, asleep, and helpless, completely unresponsive to the world.",
        reference: "See Rules Glossary: Unconscious [Condition]",
        bullets: [
            "While you have the Unconscious condition, you experience the following effects.",
            "<b>Inert.</b> You have the Incapacitated and Prone conditions, and you drop whatever you’re holding. When this condition ends, you remain Prone.",
            "<b>Speed 0.</b> Your Speed is 0 and can’t increase.",
            "<b>Attacks Affected.</b> Attack rolls against you have Advantage.",
            "<b>Saving Throws Affected.</b> You automatically fail Strength and Dexterity saving throws.",
            "<b>Automatic Critical Hits.</b> Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you.",
            "<b>Unaware.</b> You’re unaware of your surroundings."
        ]
    },
    {
        title: "Dying",
        icon: "backstab",
        subtitle: "Close to death",
        description: "You hover on the brink of death, barely clinging to life.",
        reference: "See Playing the Game: Damage and Healing (Dropping to Zero Hit Points)",
        bullets: [
            "<b>Falling Unconscious.</b> If you reach 0 Hit Points and don’t die instantly, you have the Unconscious condition until you regain any Hit Points, and you now face making Death Saving Throws.",
            "<b>Death Saving Throws.</b> Whenever you start your turn with 0 Hit Points, you must make a Death Saving Throw to determine whether you creep closer to death or hang on to life. Unlike other saving throws, this one isn’t tied to an ability score. You’re in the hands of fate now.",
            "<b>Three Successes/Failures.</b> Roll 1d20. If the roll is 10 or higher, you succeed. Otherwise, you fail. A success or failure has no effect by itself. On your third success, you become Stable. On your third failure, you die. The successes and failures don’t need to be consecutive; keep track of both until you collect three of a kind. The number of both is reset to zero when you regain any Hit Points or become Stable.",
            "<b>Rolling a 1 or 20.</b> When you roll a 1 on the d20 for a Death Saving Throw, you suffer two failures. If you roll a 20 on the d20, you regain 1 Hit Point.",
            "<b>Damage at 0 Hit Points.</b> If you take any damage while you have 0 Hit Points, you suffer a Death Saving Throw failure. If the damage is from a Critical Hit, you suffer two failures instead. If the damage equals or exceeds your Hit Point maximum, you die.",
            "<b>Stabilizing a Character.</b> You can take the Help action to try to stabilize a creature with 0 Hit Points, which requires a successful DC 10 Wisdom (Medicine) check. A Stable creature doesn’t make Death Saving Throws even though it has 0 Hit Points, but it still has the Unconscious condition. If the creature takes damage, it stops being Stable and starts making Death Saving Throws again. A Stable creature that isn’t healed regains 1 Hit Point after 1d4 hours."
        ]
    }
]
