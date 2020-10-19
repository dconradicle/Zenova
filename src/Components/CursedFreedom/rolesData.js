

const roles = [
    {
        id: "r1",
        name: "Captain",
        Prerequisite: "Proficiency with navigator's tools or vehicles (water)",
        discription: "The captain is the overall leader of the ship, and his \
orders are to be obeyed absolutely. To disobey is \
mutiny; punishment is swift, and often deadly. A pirate \
captain is usually elected, while a privateer is given \
command by attaining a captain’s rank. Captains are \
often charismatic natural leaders or powerful and \
intimidating figures. The captain acts as the face of the \
ship.",
        abilities: [
            {
                ability: "Captains Orders",
                definition: "As a bonus action, you can choose \
a friendly creature who can see or hear you to attack \
the enemy. The creature can immediately use its \
reaction to make one weapon attack. Once you use \
this feature, you must finish a short or long rest before \
you can use it again."
            },
            {
                ability: "Weak Spot",
                definition: "As an action you can look for a weakness \
in the defenses of the enemy’s vessel. Make a DC \
15 Intelligence (Vehicles - Water) check to spot a \
weakness and give advantage on the next attack roll \
by your allies that targets that weakness until the start \
of your next turn. Once you use this feature, you must \
finish a short or long rest before you can use it again."
            }
        ]
    },
    {
        id: "r2",
        name: "Quatermaster",
        Prerequisite: "Proficiency with navigator's tools or vehicles (water)",
        discription: "The quartermaster (or first mate for privateers) is the \
second in command and is responsible for enforcing \
rules and acting as a counterbalance to the captain in \
decisions by representing the crew. The quartermaster \
is also responsible for splitting up any booty taken \
from a prize.",
        abilities: [
            {
                ability: "Terrify",
                definition: "As a bonus action, you can choose an enemy \
creature within 60 feet of you who can see and hear \
you. The creature gains disadvantage on their next \
attack roll, skill check, or saving throw. Once you use \
this feature, you must finish a short or long rest before \
you can use it again."
            },
            {
                ability: "Rally",
                definition: "As a reaction, you can boost the courage and \
resolve of a friendly creature who can see or hear you \
that fails a saving throw. The creature immediately \
rerolls the saving throw, taking the higher roll. In \
addition, until the end of its next turn, the creature has \
advantage on saving throws against being frightened. \
Once you use this feature, you must finish a short or \
long rest before you can use it again."
            }
        ]
    },
    {
        id: "r3",
        name: "Pilot",
        Prerequisite: "Proficiency with navigator's tools or vehicles (water)",
        discription: "As the number three on the ship, the pilot (or \
helmsperson) reports directly to the captain. The \
pilot serves as the ship’s navigator and is usually the \
best sailor on the ship. A pilot is also responsible for \
keeping a daily log and maintaining charts, maps and \
navigation tools. The careful plotting, map reading \
and navigational skills can help your ship hide, avoid \
danger, or travel faster.",
        abilities: [
            {
                ability: "Evasive Maneuvers",
                definition: "As an action, you can take \
evasive maneuvers. Make a DC 15 Dexterity (Vehicles \
- Water) check. A success imposes disadvantage on \
attack rolls enemies make against your ship until the \
start of your next turn. Once you use this feature, you \
must finish a short or long rest before you can use it \
again."
            },
            {
                ability: "Full Sail",
                definition: "As an action, you can order all the sails to be \
set. Make a DC 15 Charisma (Vehicles - Water) check. \
On a success, your ship’s velocity doubles until the \
start of your next turn. At the start of your next turn, if \
your ship’s velocity is greater than the maximum speed \
of your ship, the velocity slows down to equal to the \
ship’s maximum speed. Once you use this feature, you \
must finish a short or long rest before you can use it \
again."
            }
        ]
    },
    {
        id: "r4",
        name: "Boatswain",
        Prerequisite: "Proficiency with carpenter's tools, weaver's tools, or vehicles(water)",
        discription: "The boatswain, or bosun, is responsible for the ship \
itself and keeping it in shape for travel and battle. A \
boatswain looks after the wood, canvas, and ropes \
that are of vital importance on board. The boatswain \
oversees activities such as dropping and weighing \
anchor, setting the sails, and leading shore parties for \
supplies or repairs. As a boatswain you gain the following naval combat",
        abilities: [
            {
                ability: "Order Repairs",
                definition: "As an bonus action, you can order \
repairs to the deck, hull, sails or rigging of the ship. \
The ship recovers hit points equal to 1d4 + your \
Charisma modifier. The die rolled for repairs changes \
when you reach certain levels: to 1d6 at 5th level, 1d8 \
at 10th level, and 1d10 at 15th level. Once you use this \
feature, you must finish a long rest before you can use \
it again."
            },
            {
                ability: "Emergency Repair",
                definition: "When your ship’s current hit \
points are equal to or less than half its maximum, you \
can make emergency repairs. As an action, you lead \
the repair of the deck, hull, sails, or rigging. The ship \
recovers hit points equal to a 1d6 + your Dexterity \
modifier. The die rolled for repairs changes when you \
reach certain levels: to 2d6 at 5th level, 3d6 at 10th \
level, and 4d6 at 15th level. Once you use this feature, \
you must finish a long rest before you can use it again."
            }
        ]
    },
    {
        id: "r5",
        name: "Master Gunner",
        Prerequisite: "Proficiency with martial weapons or alchemist's supplies",
        discription: "The master gunner is the person in charge of the ship’s \
        guns and his mates who assist him in his duties.",
        abilities: [
            {
                abillity: "Careful Aim",
                definition: "You personally aim any cannon to help \
                set the range for all others cannons. All cannon attacks \
                made by your ship until the start of your next turn are \
                made with advantage. Once you use this feature, you \
                must finish a short or long rest before you can use it \
                again."
            },
            {
                ability: "Order Broadside",
                definition: "As a bonus action, you can order \
                all the heavy cannons that have a target within 60 feet \
                to fire at the same time (forgoing their normal turns). \
                This allows you to make one attack roll for all the heavy \
                cannons with advantage. On a miss, the attacks do half \
                damage. Once you use this feature, you must finish a \
                long rest before you can use it again."
            }
        ]
    },
    {
        id: "r6",
        name: "Ships Surgeon",
        Prerequisite: "Proficiency with medicine, cook's utensils, herbalism kit or carpenter's tools",
        discription: "A ship’s surgeon reports to the quartermaster and \
        serves not just as a healer, but as the barber for the \
        entire crew. A surgeon should as comfortable with \
        shaving a beard as cutting off a damaged leg. Ships \
        rarely have a true doctor onboard, and this role is often \
        filled by the cook, carpenter, or whoever says yes to \
        the job.",
        abilities: [
            {
                ability: "Smelling Salts",
                definition: "As an action, you touch a creature that \
                is unconscious in an attempt to rouse them using an \
                alchemical solution. Make a DC 15 Wisdom (Medicine) \
                check. On a success, the creature becomes conscious \
                and gains 1 hit point. Once you use this feature, you \
                must finish a short or long rest before you can use it \
                again."
            },
            {
                ability: "Medical Miracle",
                definition: "As a bonus action, you touch a \
                creature in an attempt to heal any damage. The \
                creature regains hit points equal to 1d4 + your \
                Wisdom modifier. The die rolled changes when you \
                reach certain levels: to 1d6 at 5th level, 1d8 at 10th \
                level, and 1d10 at 15th level. This ability has no effect \
                on undead or constructs. Once you use this feature, \
                you must finish a short or long rest before you can use \
                it again."
            }
        ]
    }
]

export default roles;