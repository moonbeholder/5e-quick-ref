data_action = [
    {
        title: "Attack",
        icon: "sword-brandish",
        subtitle: "Make a melee or ranged attack.",
        description: "Make an attack roll with a weapon or an Unarmed Strike.",
        reference: "See Playing the Game: Combat (Making an Attack), Rules Glossary: Attack [Action]",
        bullets: [
            "When you take the Attack action, you make an attack. Whether you strike with a Melee weapon, fire a Ranged weapon, or make an attack roll as part of a spell, an attack has the following structure:",
            "<b>1. Choose a Target.</b> Pick a target within your attack’s range: a creature, an object, or a location.",
            "<b>2. Determine Modifiers.</b> The DM determines whether the target has Cover (see the next section) and whether you have Advantage or Disadvantage against the target. In addition, spells, special abilities, and other effects can apply penalties or bonuses to your attack roll.",
            "<b>3. Resolve the Attack.</b> Make the attack roll, as detailed earlier in this chapter. On a hit, you roll damage unless the particular attack has rules that specify otherwise. Some attacks cause special effects in addition to or instead of damage.",
            "<b><i>Equipping and Unequipping Weapons.</i></b> You can either equip or unequip one weapon when you make an attack as part of this action. You do so either before or after the attack. If you equip a weapon before an attack, you don’t need to use it for that attack. Equipping a weapon includes drawing it from a sheath or picking it up. Unequipping a weapon includes sheathing, stowing, or dropping it.",
            "<b><i>Moving between Attacks.</i></b> If you move on your turn and have a feature, such as Extra Attack, that gives you more than one attack as part of the Attack action, you can use some or all of that movement to move between those attacks."
        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Double your movement speed.",
        description: "For the rest of the turn, gain extra movement equal to your Speed.",
        reference: "See Rules Glossary: Dash [Action]",
        bullets: [
            "When you take the Dash action, you gain extra movement for the current turn. The increase equals your Speed after applying any modifiers. With a Speed of 30 feet, for example, you can move up to 60 feet on your turn if you Dash.",
            "If your Speed of 30 feet is reduced to 15 feet, you can move up to 30 feet this turn if you Dash."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks.",
        description: "Movement doesn’t provoke Opportunity Attack for the rest of the turn.",
        reference: "See Rules Glossary: Disengage [Action]",
        bullets: [
            "If you take the Disengage action, your movement doesn’t provoke Opportunity Attacks for the rest of the current turn."
        ]
    },
    {
        title: "Dodge",
        icon: "dodging",
        subtitle: "Increase your defenses.",
        description: "Attack rolls against you have Disadvantage, and you make Dexterity saving throws with Advantage.",
        reference: "See Rules Glossary: Dodge [Action]",
        bullets: [
            "If you take the Dodge action, you gain the following benefits: until the start of your next turn, any attack roll made against you has Disadvantage if you can see the attacker, and you make Dexterity saving throws with Advantage.",
            "You lose these benefits if you have the Incapacitated condition or if your Speed is 0."
        ]
    },
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Grab a creature.",
        description: "Grab another creature with a hand, etc. and hold onto them.",
        reference: "See Rules Glossary: Grappling, Rules Glossary, Unarmed Strike",
        bullets: [
            "A creature can grapple another creature. Characters typically grapple by using an Unarmed Strike. Many monsters have special attacks that allow them to quickly grapple prey. However a grapple is initiated, it follows these rules.",
            "<b><i>Initiating a Grapple.</b></i> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or it has the Grappled condition. The DC for the saving throw and any escape attempts equals 8 plus your Strength modifier and Proficiency Bonus. This grapple is possible only if the target is no more than one size larger than you and if you have a hand free to grab it.",
            "<b><i>Grappled Condition.</b></i> Successfully grappling a creature gives it the Grappled condition.",
            "<b><i>One Grapple per Hand.</b></i> A creature must have a hand free to grapple another creature. Some stat blocks and game effects allow a creature to grapple using a tentacle, a maw, or another body part. Whatever part a grappler uses, it can grapple only one creature at a time with that part, and the grappler can’t use that part to target another creature unless it ends the grapple.",
            "<b><i>Ending a Grapple.</b></i> A Grappled creature can use its action to make a Strength (Athletics) or Dexterity (Acrobatics) check against the grapple’s escape DC, ending the condition on itself on a success. The condition also ends if the grappler has the Incapacitated condition or if the distance between the Grappled target and the grappler exceeds the grapple’s range. In addition, the grappler can release the target at any time (no action required)."
        ]
    },
    {
        title: "Help",
        icon: "shaking-hands",
        subtitle: "Aid an ally.",
        description: "Help another creature’s ability check or attack roll, or administer first aid.",
        reference: "See Rules Glossary: Help [Action]",
        bullets: [
            "When you take the Help action, you do one of the following.",
            "Assist an Ability Check. Choose one of your skill or tool proficiencies and one ally who is near enough for you to assist verbally or physically when they make an ability check. That ally has Advantage on the next ability check they make with the chosen skill or tool. This benefit expires if the ally doesn’t use it before the start of your next turn. The DM has final say on whether your assistance is possible.",
            "Assist an Attack Roll. You momentarily distract an enemy within 5 feet of you, giving Advantage to the next attack roll by one of your allies against that enemy. This benefit expires at the start of your next turn."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "Conceal yourself.",
        description: "Try to conceal yourself in order to be unseen by other creatures.",
        reference: "See Rules Glossary: Hide [Action]",
        bullets: [
            "With the Hide action, you try to conceal yourself. To do so, you must succeed on a DC 15 Dexterity (Stealth) check while you’re Heavily Obscured or behind Three-Quarters Cover or Total Cover, and you must be out of any enemy’s line of sight; if you can see a creature, you can discern whether it can see you.",
            "On a successful check, you have the Invisible condition while hidden. Make note of your check’s total, which is the DC for a creature to find you with a Wisdom (Perception) check.",
            "You stop being hidden immediately after any of the following occurs: you make a sound louder than a whisper, an enemy finds you, you make an attack roll, or you cast a spell with a Verbal component."
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list.",
        description: "Perform any action you can imagine.",
        reference: "See Playing the Game: Actions",
        bullets: [
            "You can improvise other actions. When you describe an action not detailed elsewhere in the rules, the Dungeon Master tells you whether that action is possible and what kind of D20 Test you need to make, if any."
        ]
    },
    {
        title: "Influence",
        icon: "suspicious",
        subtitle: "Alter a creature's attitude.",
        description: "Make a Charisma or Wisdom check to alter a creature’s attitude.",
        reference: "See Rules Glossary: Influence [Action]",
        bullets: [
            "You urge a monster to do something. Describe or roleplay how you’re communicating with the monster. The DM then determines whether the monster feels willing, unwilling, or hesitant due to your interaction; this determination establishes whether an ability check is necessary.",
            "<b><i>Willing.</i></b> If your urging aligns with the monster’s desires, no ability check is necessary; the monster fulfills your request in a way it prefers.",
            "<b><i>Unwilling.</i></b> If your urging is repugnant to the monster or counter to its alignment, no ability check is necessary; it doesn’t comply.",
            "<b><i>Hesitant.</i></b> If you urge the monster to do something that it is hesitant to do, you must make an ability check, which is affected by the monster’s attitude: Friendly, Indifferent, or Hostile. The DM chooses the check, which has a default DC equal to 15 or the monster’s Intelligence score, whichever is higher. On a successful check, the monster does as urged. On a failed check, you must wait 24 hours (or a duration set by the DM) before urging it in the same way again.",
            "Depending on the nature of the Influence, the DM might have you make one of the following skill checks: <b>Animal Handling</b>, <b>Deception</b>, <b>Intimidation</b>, <b>Performance</b>, or <b>Persuasion</b>.",
            "A <b>Friendly</b> creature views you favorably. You have Advantage on the ability check to influence a Friendly creature. An <b>Indifferent</b> creature has no desire to help or hinder you. Indifferent is the default attitude of a monster. A <b>Hostile</b> creature views you unfavorably. You have Disadvantage on an ability check to influence a Hostile creature."
        ]
    },
    {
        title: "Magic",
        icon: "magic-swirl",
        subtitle: "Do something magic.",
        description: "Cast a spell, use a magic item, or use a magical feature.",
        reference: "See Rules Glossary: Magic [Action], Spells: Casting Spells (Casting Time)",
        bullets: [
            "When you take the Magic action, you cast a spell that has a casting time of an action or use a feature or magic item that requires a Magic action to be activated.",
            "<b>One Spell with a Spell Slot per Turn.</b> On a turn, you can expend only one spell slot to cast a spell. This rule means you can’t, for example, cast a spell with a spell slot using the Magic action and another one using a Bonus Action on the same turn.",
            "<b>Longer Casting Times.</b> Certain spells—including a spell cast as a Ritual—require more time to cast: minutes or even hours. While you cast a spell with a casting time of 1 minute or more, you must take the Magic action on each of your turns, and you must maintain Concentration (see the Rules Glossary) while you do so. If your Concentration is broken, the spell fails, but you don’t expend a spell slot. To cast the spell again, you must start over."
        ]
    },
    {
        title: "Melee Attack",
        icon: "swordswoman",
        subtitle: "Make a melee attack.",
        description: "Attack a target within reach with a weapon or an Unarmed Strike.",
        reference: "See Playing the Game: Combat (Melee Attacks)",
        bullets: [
            "A melee attack allows you to attack a target within your reach. A melee attack typically uses a handheld weapon or an Unarmed Strike. Many monsters make melee attacks with claws, teeth, or other body parts. A few spells also involve melee attacks.",
            "<b><i>Reach.</i></b> A creature has a 5-foot reach and can thus attack targets within 5 feet when making a melee attack. Certain creatures have melee attacks with a reach greater than 5 feet, as noted in their descriptions."
        ]
    },
    {
        title: "Other Ability",
        icon: "embraced-energy",
        subtitle: "Use a character ability.",
        description: "Use a class feature or another ability.",
        reference: "See class page or relevant page",
        bullets: [
            "Many class features and other abilities provide additional action options."
        ]
    },
    {
        title: "Ranged Attack",
        icon: "bowman",
        subtitle: "Make a ranged attack.",
        description: "Attack a target at a distance.",
        reference: "See Playing the Game: Combat (Ranged Attacks)",
        bullets: [
            "When you make a ranged attack, you fire a bow, hurl an axe, or otherwise send projectiles to strike a foe at a distance. Many spells also involve making a ranged attack.",
            "<b><i>Range.</i></b> You can make ranged attacks only against targets within a specified range. If a ranged attack, such as one made with a spell, has a single range, you can’t attack a target beyond this range.",
            "Some ranged attacks, such as those made with a Longbow, have two ranges. The smaller number is the normal range, and the larger number is the long range. Your attack roll has Disadvantage when your target is beyond normal range, and you can’t attack a target beyond long range.",
            "<b><i>Ranged Attacks in Close Combat.</i></b> Aiming a ranged attack is more difficult when a foe is next to you. When you make a ranged attack roll with a weapon, a spell, or some other means, you have Disadvantage on the roll if you are within 5 feet of an enemy who can see you and doesn’t have the Incapacitated condition."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Prepare an action.",
        description: "Prepare to take an action in response to a trigger you define.",
        reference: "See Rules Glossary: Ready [Action]",
        bullets: [
            "You take the Ready action to wait for a particular circumstance before you act. To do so, you take this action on your turn, which lets you act by taking a Reaction before the start of your next turn.",
            "First, you decide what perceivable circumstance will trigger your Reaction. Then, you choose the action you will take in response to that trigger, or you choose to move up to your Speed in response to it. Examples include “If the cultist steps on the trapdoor, I’ll pull the lever that opens it,” and “If the zombie steps next to me, I move away.”",
            "When the trigger occurs, you can either take your Reaction right after the trigger finishes or ignore the trigger.",
            "When you Ready a spell, you cast it as normal (expending any resources used to cast it) but hold its energy, which you release with your Reaction when the trigger occurs. To be readied, a spell must have a casting time of an action, and holding on to the spell’s magic requires Concentration, which you can maintain up to the start of your next turn. If your Concentration is broken, the spell dissipates without taking effect."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "Use your senses.",
        description: "Try to spot something not obvious.",
        reference: "See Rules Glossary: Search [Action]",
        bullets: [
            "When you take the Search action, you make a Wisdom check to discern something that isn’t obvious. The Search table suggests which skills are applicable when you take this action, depending on what you’re trying to detect.",
            "Depending on the nature of your Search, the DM might have you make one of the following skill checks: <b>Insight</b>, <b>Medicine</b>, <b>Perception</b>, or <b>Survival</b>."
        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Push another creature.",
        description: "Push, pull, or knock down another creature.",
        reference: "See Rules Glossary: Unarmed Strike",
        bullets: [
            "The target must succeed on a Strength or Dexterity saving throw (it chooses which), or you either push it 5 feet away or cause it to have the Prone condition. The DC for the saving throw equals 8 plus your Strength modifier and Proficiency Bonus. This shove is possible only if the target is no more than one size larger than you."
        ]
    },
    {
        title: "Study",
        icon: "think",
        subtitle: "Use your brain.",
        description: "Try to deduce important information.",
        reference: "See Rules Glossary: Study [Action]",
        bullets: [
            "When you take the Study action, you make an Intelligence check to study your memory, a book, a clue, or another source of knowledge and call to mind an important piece of information about it.",
            "Depending on the nature of your Study, the DM might have you make one of the following skill checks: <b>Arcana</b>, <b>History</b>, <b>Investigation</b>, <b>Nature</b>, or <b>Religion</b>."
        ]
    },
    {
        title: "Unarmed Strike",
        icon: "punch",
        subtitle: "Make an unarmed attack.",
        description: "Make an attack without a weapon.",
        reference: "See Rules Glossary: Unarmed Strike",
        bullets: [
            "Instead of using a weapon to make a melee attack, you can use a punch, kick, headbutt, or similar forceful blow. In game terms, this is an Unarmed Strike—a melee attack that involves you using your body to damage, grapple, or shove a target within 5 feet of you.",
            "Whenever you use your Unarmed Strike, choose one of the following options for its effect.",
            "<b><i>Damage.</i></b> You make an attack roll against the target. Your bonus to the roll equals your Strength modifier plus your Proficiency Bonus. On a hit, the target takes Bludgeoning damage equal to 1 plus your Strength modifier.",
            "<b><i>Grapple.</i></b> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or it has the Grappled condition. The DC for the saving throw and any escape attempts equals 8 plus your Strength modifier and Proficiency Bonus. This grapple is possible only if the target is no more than one size larger than you and if you have a hand free to grab it.",
            "<b><i>Shove.</i></b> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or you either push it 5 feet away or cause it to have the Prone condition. The DC for the saving throw equals 8 plus your Strength modifier and Proficiency Bonus. This shove is possible only if the target is no more than one size larger than you."
        ]
    },
    {
        title: "Utilize",
        icon: "snatch",
        subtitle: "Interact with an object.",
        description: "Use a nonmagical object.",
        reference: "See Rules Glossary: Utilize [Action]",
        bullets: [
            "You normally interact with an object while doing something else, such as when you draw a sword as part of the Attack action. When an object requires an action for its use, you take the Utilize action."
        ]
    }
]
