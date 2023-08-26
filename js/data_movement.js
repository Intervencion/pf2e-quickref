data_movement = [
    {
        title: "Stride",
        icon: "OneAction",
        subtitle: "You move up to your Speed",
        description: "Movement cost: 5ft per 5ft moved",
        reference: "Core Rulebook pg. 471 4.0",
        bullets: [
            "You move up to your Speed. "
        ]
    },
    {
        title: "Step",
        icon: "OneAction",
        subtitle: "You carefully move 5 feet",
        description: "Requirements: Your Speed is at least 10 feet",
        reference: "Core Rulebook pg. 471 4.0",
        bullets: [
            "You carefully move 5 feet. Unlike most types of movement, Stepping doesn't trigger reactions, such as Attacks of Opportunity, that can be triggered by move actions or upon leaving or entering a square.",
            "You can't Step into difficult terrain, and you can't Step using a Speed other than your land Speed. "
        ]
    },
    {
        title: "Stand",
        icon: "OneAction",
        subtitle: "You stand up from prone",
        description: " ",
        reference: "Core Rulebook pg. 471 4.0",
        bullets: [
            "You stand up from prone."
        ]
    },
    {
        title: "Tumble Through",
        icon: "OneAction",
        subtitle: "You Stride up to your Speed",
        description: " ",
        reference: "Core Rulebook pg. 240 4.0",
        bullets: [
            "You Stride up to your Speed. During this movement, you can try to move through the space of one enemy. Attempt an Acrobatics check against the enemy’s Reflex DC as soon as you try to enter its space. You can Tumble Through using Climb, Fly, Swim, or another action instead of Stride in the appropriate environment.",
            "Success: You move through the enemy's space, treating the squares in its space as difficult terrain (every 5 feet costs 10 feet of movement). If you don’t have enough Speed to move all the way through its space, you get the same effect as a failure.",
            "Failure: Your movement ends, and you trigger reactions as if you had moved out of the square you started in."
        ]
    },
    {
        title: "Balance",
        icon: "OneAction",
        subtitle: "Move across a narrow or uneven surface",
        description: "Requirements: You are in a square that contains a narrow surface, uneven ground, or another similar feature",
        reference: "Core Rulebook pg. 240 4.0",
        bullets: [
            "You move across a narrow surface or uneven ground, attempting an Acrobatics check against its Balance DC. You are flat-footed while on a narrow surface or uneven ground.",
            "Critical Success: You move up to your Speed.",
            "Success: You move up to your Speed, treating it as difficult terrain (every 5 feet costs 10 feet of movement).",
            "Failure: You must remain stationary to keep your balance (wasting the action) or you fall. If you fall, your turn ends.",
            "Critical Failure: You fall and your turn ends.",
        ]
    },
    {
        title: "High jump",
        icon: "wingfoot",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",

        reference: "PHB, pg. 182.",
        bullets: [
            "You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing high jump, you can jump only half that distance.",
            "You can extend your arms half your height above yourself during the jump.",
            "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can."
        ]
    },
    {
        title: "Long jump",
        icon: "jump-across",
        subtitle: "Cost: 5ft per 5ft",
        description: "Movement cost: 5ft per 5ft jumped",
        reference: "PHB, pg. 182.",
        bullets: [
            "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.",
            "When you make a standing long jump, you can leap only half that distance",
            "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
            "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check."
        ]
    },
    {
        title: "Difficult terrain",
        icon: "stone-pile",
        subtitle: "Cost modifier: +5ft per 5ft",
        reference: "PHB, pg. 182.",
        description: "Moving in difficult terrain costs an additional 5ft per 5ft of movement",
        bullets: [
            "This rule is true even if multiple things in a space count as difficult terrain.",
            "Low furniture, rubble, undergrowth, steep stairs, snow, and shallow bogs are examples of difficult terrain. The space of another creature, whether hostile or not, also counts as difficult terrain."
        ]
    },
    {
        title: "Through other creatures",
        icon: "ghost-ally",
        subtitle: "Cost modifier: +5ft per 5ft",
        reference: "PHB, pg. 182.",
        description: "Another creature's space counts as difficult terrain and therefore costs an additional 5ft per 5ft of movement",
        bullets: [
            "You can move through a nonhostile creature's space. In contrast, you can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.",
            "Whether a creature is a friend or an enemy, you can't willingly end your move in its space.",
            "If you leave a hostile creature's reach during your move, you provoke an opportunity attack."
        ]
    },
    {
        title: "Crawl",
        icon: "crawl",
        subtitle: "Cost modifier: +5ft per 5ft",
        description: "Crawling costs an additional 5ft per 5ft of movement",
        reference: "PHB, pg. 182.",
        bullets: [

        ]
    },
    {
        title: "Climb",
        icon: "crags",
        subtitle: "Cost modifier: +5ft per 5ft",
        description: "Climbing costs an additional 5ft per 5ft of movement",
        reference: "PHB, pg. 182.",
        bullets: [
            "May involve a Strength (Athletics) check if the climb is difficult",
            "You ignore this extra cost if you have a climbing speed and use it to climb."
        ]
    },
    {
        title: "Swim",
        icon: "at-sea",
        subtitle: "Cost modifier: +5ft per 5ft",
        description: "Swimming costs an additional 5ft per 5ft of movement",
        reference: "PHB, pg. 182.",
        bullets: [
            "May involve a Strength (Athletics) check if the swim is difficult",
            "You ignore this extra cost if you have a swimming speed and use it to swim."
        ]
    },
    {
        title: "Squeezing into a Smaller Space",
        icon: "dungeon-gate",
        subtitle: "Cost modifier: +5ft per 5ft",
        description: "Squeezing costs an additional 5ft per 5ft of movement",
        reference: "PHB, pg. 182.",
        bullets: [
            "A creature can squeeze through a space that is large enough for a creature one size smaller than it. Thus, a Large creature can squeeze through a passage that's only 5 feet wide.",
            "While squeezing through a space, a creature has disadvantage on attack rolls and Dexterity saving throws. Attack rolls against the creature have advantage while it's in the smaller space."
        ]
    },
    {
        title: "Grapple move",
        icon: "grab",
        subtitle: "Modifier: speed halved",
        description: "Drag or carry the grappled creature with you",
        reference: "PHB, pg. 195.",
        bullets: [
            "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
            "See the attack action for how to grapple a creature."
        ]
   },
   {
       title: "Mounting & Dismounting",
       icon: "horseshoe",
       subtitle: "Cost: half of speed",
       description: "Getting on and off of a mount",
       reference: "PHB, pg. 198",
       bullets: [
            "Once during your move, you can mount a creature that is within 5 feet of you, or dismount. Doing so costs an amount of movement equal to half your speed. For example, if your speed is 30 feet, you must spend 15 feet of movement to mount a horse. Therefore you can't mount it if you don't have 15 feet of movement left or if your speed is 0.",
            "If an effect moves your mount against its will while you're on it, you must succeed on a DC 10 Dexterity saving throw or fall off the mount, landing prone in a space within 5 feet of it. If you're knocked prone while mounted, you must make the same saving throw.",
            "If your mount is knocked prone, you can use your reaction to dismount as it falls and land on your feet. Otherwise you are dismounted and fall prone in a space within 5 feet of it."
       ]
   },
   {
    title: "Improvise",
    icon: "juggler",
    subtitle: "Any stunt not on this list",
    description: "Perform any movement or stunt you can imagine",
    bullets: [
        "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
    ]
    }
]
