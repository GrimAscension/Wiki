
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { cn } from '@/lib/utils';

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

interface ClassCardProps {
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
  index: number;
}

const ClassCard: React.FC<ClassCardProps> = ({
  name,
  role,
  stats,
  earlyStage,
  midStage,
  lateStage,
  mobility,
  counter,
  tip,
  index
}) => {
  return (
    <AnimatedCard delayIndex={index} className="overflow-hidden">
      <div className="p-6">
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
        
        <div className="mb-4">
          <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">Mobility Tools</h4>
          <div className="space-y-3">
            <div className="p-3 bg-secondary/30 rounded-md">
              <h5 className="font-medium mb-1">Primary</h5>
              <p className="text-sm text-muted-foreground">{mobility.primary}</p>
            </div>
            <div className="p-3 bg-secondary/30 rounded-md">
              <h5 className="font-medium mb-1">Secondary</h5>
              <p className="text-sm text-muted-foreground">{mobility.secondary}</p>
            </div>
          </div>
        </div>
        
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
    </AnimatedCard>
  );
};

const ClassesSection: React.FC = () => {
  const classes = [
    {
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
    }
  ];

  return (
    <section id="classes" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Classes & Progression</h2>
          <p className="text-lg text-muted-foreground">
            Every class employs real-time combat with unique offensive, defensive, and mobility traits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {classes.map((classData, index) => (
            <ClassCard 
              key={classData.name}
              name={classData.name}
              role={classData.role}
              stats={classData.stats}
              earlyStage={classData.earlyStage}
              midStage={classData.midStage}
              lateStage={classData.lateStage}
              mobility={classData.mobility}
              counter={classData.counter}
              tip={classData.tip}
              index={index}
            />
          ))}
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

export default ClassesSection;
