
import React from 'react';
import TabSection from './TabSection';
import AnimatedCard from './AnimatedCard';

const WorldDetailsSection: React.FC = () => {
  const biomes = [
    {
      id: "forests",
      label: "Forests & Jungles",
      content: (
        <div className="space-y-4">
          <p>Lush, dense areas with hidden clearings; inhabited by agile creatures like giant bears and apes.</p>
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Hazards</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Poisonous plants (5 HP/sec damage)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Hidden pitfalls</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "snowy",
      label: "Snowy Areas",
      content: (
        <div className="space-y-4">
          <p>Icy landscapes with heavy snowfall; enemies include yetis and frost giants.</p>
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Hazards</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Icy patches (20% slip chance)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Falls cause 5% max HP damage</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "deserts",
      label: "Deserts",
      content: (
        <div className="space-y-4">
          <p>Arid zones with sandstorms and stamina drain; enemies include giant scorpions.</p>
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Hazards</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Sandstorms (30% visibility reduction, 10% movement slow)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Stamina drain (5% per minute)</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "mountains",
      label: "Mountains & Cliffs",
      content: (
        <div className="space-y-4">
          <p>Rugged terrain with narrow paths; traversing requires careful navigation.</p>
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Hazards</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Falling rocks (deal 25% max HP damage)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Steep paths with fall damage</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "hell",
      label: "Hell & Infernal Zones",
      content: (
        <div className="space-y-4">
          <p>Fiery regions with lava pools and demonic enemies; home to special event bosses.</p>
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Hazards</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Lava pools (20% max HP damage per second)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Special boss: Giant demon with pitchfork attacks</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    }
  ];

  const weatherEvents = [
    {
      name: "Rain",
      effects: ["Dampens fire attacks by 10%", "10% chance to slip while sprinting"]
    },
    {
      name: "Sandstorms",
      effects: ["Reduces visibility by 30%", "Slows movement by 10%"]
    },
    {
      name: "Snowstorms",
      effects: ["Reduces movement by 15%", "Intensifies ice debuffs"]
    },
    {
      name: "Hell Invasion",
      effects: ["10-minute event where infernal enemies swarm", "Increased drop rates for rare items"]
    }
  ];

  return (
    <section id="world-details" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">World & Environments</h2>
          <p className="text-lg text-muted-foreground">
            Explore diverse regions with unique challenges, dynamic weather, and dangerous terrain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Biomes & Regions</h3>
            <TabSection tabs={biomes.map(biome => ({
              id: biome.id,
              label: biome.label,
              content: biome.content
            }))} />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Dynamic Weather</h3>
            <AnimatedCard delayIndex={0} className="p-6">
              <p className="mb-4">A 48-minute day-night cycle (2 minutes per in-game hour) with increased enemy aggression at night (+15%).</p>
              
              <h4 className="font-medium mb-3">Weather Events</h4>
              <div className="space-y-3">
                {weatherEvents.map((event, index) => (
                  <div key={index} className="p-3 bg-secondary/30 rounded-md">
                    <h5 className="font-medium mb-1">{event.name}</h5>
                    <ul className="space-y-1">
                      {event.effects.map((effect, i) => (
                        <li key={i} className="text-sm flex items-start">
                          <span className="inline-block w-3 h-3 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                          <span className="text-muted-foreground">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Environmental Hazards & Traps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard delayIndex={0} className="p-6">
              <h4 className="font-medium mb-3">Natural Hazards</h4>
              <p className="mb-4">The world contains various natural dangers that can harm unwary adventurers:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                  <span>Poison pits (5-10% max HP damage per second)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                  <span>Fire traps (10-15% max HP damage per second)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                  <span>Thorns (5% max HP damage per second while in contact)</span>
                </li>
              </ul>
            </AnimatedCard>
            
            <AnimatedCard delayIndex={1} className="p-6">
              <h4 className="font-medium mb-3">Player-Created Traps</h4>
              <p className="mb-4">Some classes can create traps to hinder enemies:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                  <span>Deadfall class can create traps dealing up to 100% damage if triggered</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                  <span>Tripwires can temporarily incapacitate enemies</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                  <span>Some traps create area-of-effect damage zones</span>
                </li>
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldDetailsSection;
