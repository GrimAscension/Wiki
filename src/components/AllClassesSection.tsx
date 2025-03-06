
import React from 'react';
import TabSection from './TabSection';
import AnimatedCard from './AnimatedCard';
import { List, Music } from 'lucide-react';

interface ClassStageProps {
  title: string;
  abilities: {
    name: string;
    description: string;
  }[];
}

const ClassStage: React.FC<ClassStageProps> = ({ title, abilities }) => {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">{title}</h4>
      <div className="space-y-3">
        {abilities.map((ability, index) => (
          <div key={index} className="p-3 bg-secondary/30 rounded-md">
            <h5 className="font-medium mb-1">{ability.name}</h5>
            <p className="text-sm text-muted-foreground">{ability.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface MobilityProps {
  primary: string;
  secondary: string;
}

const ClassMobility: React.FC<MobilityProps> = ({ primary, secondary }) => {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">Mobility Tools</h4>
      <div className="space-y-3">
        <div className="p-3 bg-secondary/30 rounded-md">
          <h5 className="font-medium mb-1">Primary</h5>
          <p className="text-sm text-muted-foreground">{primary}</p>
        </div>
        <div className="p-3 bg-secondary/30 rounded-md">
          <h5 className="font-medium mb-1">Secondary</h5>
          <p className="text-sm text-muted-foreground">{secondary}</p>
        </div>
      </div>
    </div>
  );
};

interface ClassDetailProps {
  name: string;
  role: string;
  stats: string[];
  earlyStage: {
    name: string;
    description: string;
  }[];
  midStage: {
    name: string;
    description: string;
  }[];
  lateStage: {
    name: string;
    description: string;
  }[];
  mobility: {
    primary: string;
    secondary: string;
  };
  counter: string;
  tip: string;
}

const ClassDetail: React.FC<ClassDetailProps> = ({
  name,
  role,
  stats,
  earlyStage,
  midStage,
  lateStage,
  mobility,
  counter,
  tip
}) => {
  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <div className="flex flex-col mb-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">Base Stats</h4>
        <ul className="space-y-1">
          {stats.map((stat, i) => (
            <li key={i} className="text-sm flex items-start">
              <span className="inline-block w-3 h-3 rounded-full bg-primary/20 flex-shrink-0 mt-1 mr-2"></span>
              <span>{stat}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <ClassStage title="Early Stage" abilities={earlyStage} />
      <ClassStage title="Mid Stage" abilities={midStage} />
      <ClassStage title="Late Stage" abilities={lateStage} />
      
      <ClassMobility primary={mobility.primary} secondary={mobility.secondary} />
      
      <div className="mt-6 p-4 border-t border-border pt-4">
        <div className="mb-3">
          <h4 className="text-sm font-medium">Countered By</h4>
          <p className="text-sm text-muted-foreground">{counter}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium">Pro Tip</h4>
          <p className="text-sm text-muted-foreground">{tip}</p>
        </div>
      </div>
    </div>
  );
};

const AllClassesSection: React.FC = () => {
  const allClasses = [
    {
      id: "conflagrator",
      name: "The Conflagrator",
      role: "Ranged fire specialist with area-control abilities",
      stats: [
        "+20% Fire Damage",
        "+15% Range",
        "-5% Defense"
      ],
      earlyStage: [
        {
          name: "Firebomb",
          description: "Deals 5% of enemy max HP damage; applies a burn of 1% per second for 5 seconds; 10-second cooldown."
        },
        {
          name: "Tar Flask",
          description: "Slows enemy movement by 10% for 3 seconds; 10-second cooldown."
        }
      ],
      midStage: [
        {
          name: "Greek Fire",
          description: "Deals a total of 6% enemy max HP over 6 seconds (1% per second burn); 10-second cooldown."
        },
        {
          name: "Area Control",
          description: "Creates a fire zone reducing enemy speed by 20% for 4 seconds; 10-second cooldown."
        }
      ],
      lateStage: [
        {
          name: "Naptha Bomb",
          description: "Explodes for 5% enemy max HP damage within a 3-stud radius; includes significant recoil; 10-second cooldown."
        },
        {
          name: "Thermic Gel",
          description: "Applies a stacking burn effect (each stack deals ~1.7% enemy max HP damage over 10 seconds, up to 3 stacks for ~5% total damage); 10-second cooldown."
        }
      ],
      mobility: {
        primary: "Firebound Boots – Increase movement speed by 20% and leave a fire trail (dealing 5 HP damage per second for 3 seconds).",
        secondary: "Ignition Thrusters – Enable double jumps and inflict 5% enemy max HP damage on dash impact."
      },
      counter: "Thornfist's melee strength and Edgewielder's swift strikes.",
      tip: "Use wide-range fire attacks for crowd control, but avoid friendly fire with precise positioning."
    },
    {
      id: "thornfist",
      name: "Thornfist",
      role: "Durable, close-range bruiser",
      stats: [
        "+40% Health",
        "+30% Melee Damage",
        "-10% Speed"
      ],
      earlyStage: [
        {
          name: "Poison Jab",
          description: "Deals 5% enemy max HP damage; applies poison (1% per second for 5 seconds); 10-second cooldown."
        }
      ],
      midStage: [
        {
          name: "Toxic Smash",
          description: "Deals 7% enemy max HP damage; applies a bleed effect (1% per second for 10 seconds); 10-second cooldown."
        }
      ],
      lateStage: [
        {
          name: "Barbed Assault",
          description: "Deals 5% area damage; stuns for 1 second; applies poison (1% per second for 15 seconds); 10-second cooldown."
        }
      ],
      mobility: {
        primary: "Chain Grapple – Rapid dash up to 10 studs in 0.5 seconds.",
        secondary: "Relentless Charge – Delivers 5% enemy max HP damage and knocks back enemies 5 studs; 10-second cooldown."
      },
      counter: "Trap setups from Deadfall and support from Lifebinder.",
      tip: "Engage quickly and time your dashes to avoid enemy counters."
    },
    {
      id: "edgewielder",
      name: "Edgewielder",
      role: "Agile assassin specializing in precise strikes and poison",
      stats: [
        "+25% Agility",
        "+20% Critical Chance",
        "+10% Poison Damage"
      ],
      earlyStage: [
        {
          name: "Quick Stab",
          description: "Deals 5% enemy max HP damage; 15% chance to apply poison (reducing speed by 10% for 5 seconds); 10-second cooldown."
        }
      ],
      midStage: [
        {
          name: "Rapid Slash",
          description: "Multi-hit attack totaling 6% enemy max HP damage; applies stacking poison (1% per second per stack for 5 seconds, up to 3 stacks); 10-second cooldown."
        }
      ],
      lateStage: [
        {
          name: "Deadly Thrust",
          description: "Deals 5% enemy max HP damage; applies heavy poison (1.5% per second for 10 seconds and reduces enemy speed by 20%); 10-second cooldown."
        }
      ],
      mobility: {
        primary: "Shadowstep Boots – Teleport up to 5 studs (0.5-second cooldown).",
        secondary: "Glider Cloak – Provides controlled descent and a 15% evasion boost for 3 seconds."
      },
      counter: "Conflagrator's area attacks and Contriver's gadgets.",
      tip: "Strike quickly using agility, then retreat; rely on poison to weaken tougher foes."
    },
    {
      id: "deadfall",
      name: "The Deadfall",
      role: "Expert in traps and stealth-based control",
      stats: [
        "+20% Stealth",
        "+15% Trap Damage",
        "-10% Direct Combat Damage"
      ],
      earlyStage: [
        {
          name: "Snare Trap",
          description: "Immobilizes enemy for 3 seconds; deals 5% enemy max HP damage over 5 seconds; 10-second cooldown."
        }
      ],
      midStage: [
        {
          name: "Explosive Tripwire",
          description: "Deals 6% enemy max HP damage; stuns for 0.5 seconds; 10-second cooldown."
        }
      ],
      lateStage: [
        {
          name: "Death Trap",
          description: "Area trap dealing 5% enemy max HP damage; reduces enemy defense by 10% for 10 seconds; 10-second cooldown."
        }
      ],
      mobility: {
        primary: "Wirebound Grapple – Traverse up to 8 studs in 0.4 seconds.",
        secondary: "Tripcaster Launcher – Deploys tripwires that detonate for 5% enemy max HP damage; 10-second cooldown."
      },
      counter: "Fast-moving enemies and ranged attacks.",
      tip: "Set traps in choke points to maximize effectiveness."
    },
    {
      id: "lifebinder",
      name: "The Lifebinder",
      role: "Provides healing and defensive buffs",
      stats: [
        "+30% Healing Efficiency",
        "+15% Stamina Recovery",
        "+10% Magic Resistance"
      ],
      earlyStage: [
        {
          name: "Healing Aura",
          description: "Restores 5% max HP per second (within a 5-stud radius) for 5 seconds; 10-second cooldown."
        }
      ],
      midStage: [
        {
          name: "Revitalizing Strike",
          description: "Heals self for 5% damage dealt and boosts ally recovery by 5% for 10 seconds; 10-second cooldown."
        }
      ],
      lateStage: [
        {
          name: "Sanctuary Shield",
          description: "Absorbs 10% incoming damage for 8 seconds and regenerates 5% max HP over 10 seconds; 10-second cooldown."
        }
      ],
      mobility: {
        primary: "Vitality Surge – Increases speed by 15% and regenerates 5% max HP per second for 5 seconds.",
        secondary: "Angelic Ascent – Provides a vertical jump covering 10 studs and boosts healing radius by 25% for 4 seconds."
      },
      counter: "Aggressive melee classes.",
      tip: "Maintain a safe distance while healing and reposition quickly when needed."
    },
    {
      id: "contriver",
      name: "The Contriver",
      role: "Versatile fighter using gadgets for both ranged and melee combat",
      stats: [
        "+20% Gadget Damage",
        "+15% Range",
        "+10% Cooldown Reduction"
      ],
      earlyStage: [
        {
          name: "Shooting Grappling Hook",
          description: "Deals 5% enemy max HP damage; 50% chance to knock back enemy 3 studs; 10-second cooldown."
        }
      ],
      midStage: [
        {
          name: "Subsonic Kick",
          description: "Deals 5% enemy max HP damage with 5% self-damage recoil; 10-second cooldown."
        }
      ],
      lateStage: [
        {
          name: "Overload Burst",
          description: "Area attack dealing 5% enemy max HP damage within a 5-stud radius; 10-second cooldown."
        }
      ],
      mobility: {
        primary: "Launchable Grappling Hook – Traverses up to 12 studs in 0.6 seconds.",
        secondary: "Mechanized Roller Boots – Boosts speed by 25% and adds a dash attack dealing 5% enemy max HP damage; 10-second cooldown."
      },
      counter: "High-burst melee classes.",
      tip: "Control space with your gadgets and manage recoil; timing is critical."
    },
    {
      id: "mendicant",
      name: "The Mendicant",
      role: "A hybrid support/defensive class that blends healing with damage mitigation",
      stats: [
        "+25% Damage Mitigation",
        "+20% Magic Resistance",
        "+15% Evasion"
      ],
      earlyStage: [
        {
          name: "Healing Touch",
          description: "Restores 5% max HP over 5 seconds and provides a shield absorbing 5% damage; 10-second cooldown."
        }
      ],
      midStage: [
        {
          name: "Sacred Barrier",
          description: "Blocks 10% incoming damage for 6 seconds and heals 5% max HP per second; 10-second cooldown."
        }
      ],
      lateStage: [
        {
          name: "Divine Intervention",
          description: "Creates a zone that boosts ally damage resistance by 10% and regenerates 5% max HP per second for 8 seconds; 10-second cooldown."
        }
      ],
      mobility: {
        primary: "Blessed Sandals – Grants immunity to traps and increases speed by 15%.",
        secondary: "Celestial Blink – Short-range teleport up to 7 studs with a 20% chance to negate damage for 2 seconds; 10-second cooldown."
      },
      counter: "Fast, burst-damage classes.",
      tip: "Position yourself to support teammates while staying agile."
    },
    {
      id: "shadowblade",
      name: "The Shadowblade",
      role: "An elusive assassin who relies on critical strikes and rapid disengagement",
      stats: [
        "+30% Stealth",
        "+25% Critical Chance",
        "+15% Evasion"
      ],
      earlyStage: [
        {
          name: "Assassination Strike",
          description: "Deals 5% enemy max HP as a critical hit; 20% chance to silence the target for 3 seconds; 10-second cooldown."
        },
        {
          name: "Smoke Bomb",
          description: "Creates a 5-stud obscurity zone and reduces enemy accuracy by 25% for 4 seconds; 10-second cooldown."
        }
      ],
      midStage: [
        {
          name: "Shadow Strike",
          description: "Double-hit attack totaling 5% enemy max HP damage; applies stacking poison (1% per second per stack, up to 3 stacks over 10 seconds); 10-second cooldown."
        }
      ],
      lateStage: [
        {
          name: "Deathstrike",
          description: "Deals 5% enemy max HP damage; guarantees a critical hit and reduces enemy defenses by 10% for 8 seconds; 10-second cooldown."
        }
      ],
      mobility: {
        primary: "Silent Step – Boosts evasion by 40% for 3 seconds and enables instantaneous repositioning up to 6 studs.",
        secondary: "Shadowcloak – Grants 4 seconds of invisibility with a 30% speed boost upon exiting; 10-second cooldown."
      },
      counter: "Defensive setups and area-of-effect attacks.",
      tip: "Use stealth to launch surprise attacks and always have an escape route planned."
    }
  ];

  const classTabs = allClasses.map(classData => ({
    id: classData.id,
    label: classData.name,
    icon: <List className="w-4 h-4" />,
    content: (
      <ClassDetail
        name={classData.name}
        role={classData.role}
        stats={classData.stats}
        earlyStage={classData.earlyStage}
        midStage={classData.midStage}
        lateStage={classData.lateStage}
        mobility={classData.mobility}
        counter={classData.counter}
        tip={classData.tip}
      />
    )
  }));

  return (
    <section id="all-classes" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Classes & Progression</h2>
          <p className="text-lg text-muted-foreground">
            Every class employs real-time combat with unique offensive, defensive, and mobility traits.
            Select a class below to view its details.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <TabSection tabs={classTabs} variant="list" />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            Abilities are unlocked automatically via boss progression. All abilities offer marginal improvements 
            with lower damage percentages, longer cooldowns, and additional drawbacks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AllClassesSection;
