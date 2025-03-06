
import React from 'react';
import AnimatedCard from './AnimatedCard';
import TabSection from './TabSection';

const WorldSection: React.FC = () => {
  const worldTabs = [
    {
      id: 'biomes',
      label: 'Biomes & Regions',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Forests & Jungles</h4>
            <p className="text-sm mb-2">Lush, dense areas with hidden clearings; home to agile creatures (giant bears, apes).</p>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Hazards:</span> Poisonous plants (5 HP/sec) and pitfalls.
            </div>
          </div>
          
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Snowy Areas</h4>
            <p className="text-sm mb-2">Icy landscapes with heavy snowfall; enemies include yetis and frost giants.</p>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Hazards:</span> Icy patches (20% slip chance, 5% max HP damage per fall).
            </div>
          </div>
          
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Deserts</h4>
            <p className="text-sm mb-2">Arid zones with sandstorms and stamina drain; enemies include giant scorpions.</p>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Hazards:</span> Sandstorms (30% visibility reduction, 10% movement slow), stamina drain (5% per minute).
            </div>
          </div>
          
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Hell & Infernal Zones</h4>
            <p className="text-sm mb-2">Fiery regions with demonic enemies and a special event boss—a giant demon with a pitchfork.</p>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Hazards:</span> Lava pools (20% max HP damage per second).
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'weather',
      label: 'Weather & Cycles',
      content: (
        <div className="space-y-4">
          <p>
            A dynamic 48-minute day-night cycle (2 minutes per in-game hour) affects gameplay with increased enemy aggression at night (+15%).
          </p>
          
          <h4 className="font-semibold mb-2">Weather Events</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/50 rounded-md">
              <h5 className="font-medium mb-1">Rain</h5>
              <p className="text-sm">Dampens fire attacks by 10%; 10% chance to slip while sprinting.</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-md">
              <h5 className="font-medium mb-1">Sandstorms</h5>
              <p className="text-sm">In deserts, reduce visibility by 30% and slow movement by 10%.</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-md">
              <h5 className="font-medium mb-1">Snowstorms</h5>
              <p className="text-sm">In snowy areas, reduce movement by 15% and intensify ice debuffs.</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-md">
              <h5 className="font-medium mb-1">Hell Invasion</h5>
              <p className="text-sm">A 10-minute event where infernal enemies swarm.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'structures',
      label: 'Structures & Settlements',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="p-4 bg-secondary/50 rounded-md">
              <h4 className="font-semibold mb-2">Settlements</h4>
              <p className="text-sm">
                Approximately 10 settlements (one per major region) serve as safe zones with crafting stations and quest givers. 
                Settlements remain static throughout the game.
              </p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-md">
              <h4 className="font-semibold mb-2">Dungeons & Abandoned Ruins</h4>
              <p className="text-sm">
                Fixed-layout dungeons with themed puzzles, lore glyphs, and crafting stations. 
                Abandoned ruins provide rich lore and exclusive crafting materials.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/50 rounded-md">
              <h4 className="font-semibold mb-2">Caves</h4>
              <p className="text-sm">
                Serve as resource hubs for ores, cobwebs (for silk), moss, and hidden chests; 
                may occasionally feature a mini-boss tied to a quest.
              </p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-md">
              <h4 className="font-semibold mb-2">Wilderness</h4>
              <p className="text-sm">
                Dynamic open areas with random mob groups spawning 60–120 studs away and various 
                environmental challenges.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="world" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">World & Environments</h2>
          <p className="text-lg text-muted-foreground">
            Explore a vast world with diverse regions, dynamic weather, and challenging terrain.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <TabSection tabs={worldTabs} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard className="p-6" delayIndex={0}>
            <h3 className="text-xl font-semibold mb-4">Mobs</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Common Mobs</h4>
                <p className="text-sm text-muted-foreground">
                  Realistic creatures fitting each biome (giant bears, yetis, giant scorpions, etc.).
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Elite Enemies & Mini-Bosses</h4>
                <p className="text-sm text-muted-foreground">
                  Tougher variants with unique AI, pack tactics, ambushes, and elemental affinities.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Event Bosses</h4>
                <p className="text-sm text-muted-foreground">
                  Special bosses during events (e.g., a giant demon in Hell Invasion, a massive mantis shrimp in the ocean).
                </p>
              </div>
            </div>
          </AnimatedCard>
          
          <AnimatedCard className="p-6" delayIndex={1}>
            <h3 className="text-xl font-semibold mb-4">Environmental Hazards</h3>
            <p className="mb-4">
              Navigate various hazards that can damage, slow, or otherwise impede your progress.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span className="text-sm">Natural hazards like poison pits, fire traps, and thorns deal 5–15% max HP damage per second</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span className="text-sm">Player-created traps (e.g., by Deadfall) can deal up to 100% damage if triggered</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span className="text-sm">Hazards combine with weather effects to create increased difficulty in certain scenarios</span>
              </li>
            </ul>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default WorldSection;
