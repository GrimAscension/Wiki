
import React from 'react';
import AnimatedCard from './AnimatedCard';
import TabSection from './TabSection';

const GameplaySection: React.FC = () => {
  const combatTabs = [
    {
      id: 'real-time',
      label: 'Real-Time Combat',
      content: (
        <div className="space-y-4">
          <p className="text-balance">
            All combat is fast-paced and real-time. When an enemy attacks, the direction (e.g., top-right) is shown; 
            you must hold the corresponding keys (W + D) and press the parry button (F) within ~0.3 seconds before impact 
            to negate 100% of damage and stagger the attacker.
          </p>
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Directional Parrying System</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Enemy attack direction is visually indicated</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Press corresponding direction keys + parry button</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Timing window: ~0.3 seconds before impact</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Perfect parry: 100% damage negation + attacker stagger</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'block-parry',
      label: 'Blocking & Damage',
      content: (
        <div className="space-y-4">
          <p className="text-balance">
            Dodging provides a 25% evasion boost for 1.5 seconds, and blocking reduces incoming damage by 
            roughly 50% based on your technique or equipment. Some classes may equip items that boost stats 
            during a parry; however, these might still allow a small amount of residual damage. Precision timing is key.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary/50 rounded-md">
              <h4 className="font-semibold mb-2">Defensive Techniques</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                  <span>Dodging: 25% evasion boost for 1.5 seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                  <span>Blocking: ~50% damage reduction</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-secondary/50 rounded-md">
              <h4 className="font-semibold mb-2">Equipment Effects</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                  <span>Class-specific stat boosts during parry</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                  <span>Specialized gear can reduce residual damage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'permadeath',
      label: 'Permadeath',
      content: (
        <div className="space-y-4">
          <p className="text-balance">
            In PvE (Dire Reckoning and The Final Verdict), death wipes your character's progress, requiring you to 
            start over. In PvP (the Colosseum), death results only in a loss of wager money (typically 10% of your funds) 
            and a respawn at your designated point.
          </p>
          <div className="p-4 bg-secondary/50 rounded-md">
            <h4 className="font-semibold mb-2">Pity System</h4>
            <p className="text-sm">
              A pity system reduces boss damage after repeated deaths (15–25% reduction after 50 deaths) to help you learn, 
              though loot quality may decrease.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="gameplay" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gameplay Mechanics</h2>
          <p className="text-lg text-muted-foreground">
            Master real-time combat and navigate the harsh consequences of failure in a world where skill determines survival.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <AnimatedCard className="p-6" delayIndex={0}>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
                <path d="M9 13v-1h6v1"/>
                <path d="M11 18.5l-1-2"/>
                <path d="M14 18.5l-1-2"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Combat</h3>
            <p className="text-muted-foreground">
              Master directional parrying with precise timing to negate damage and stagger enemies.
            </p>
          </AnimatedCard>
          
          <AnimatedCard className="p-6" delayIndex={1}>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
                <rect x="9" y="9" width="6" height="6"/>
                <line x1="9" y1="2" x2="9" y2="4"/>
                <line x1="15" y1="2" x2="15" y2="4"/>
                <line x1="9" y1="20" x2="9" y2="22"/>
                <line x1="15" y1="20" x2="15" y2="22"/>
                <line x1="20" y1="9" x2="22" y2="9"/>
                <line x1="20" y1="14" x2="22" y2="14"/>
                <line x1="2" y1="9" x2="4" y2="9"/>
                <line x1="2" y1="14" x2="4" y2="14"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Defensive Techniques</h3>
            <p className="text-muted-foreground">
              Use dodging and blocking strategically to reduce damage and create counter-attack opportunities.
            </p>
          </AnimatedCard>
          
          <AnimatedCard className="p-6" delayIndex={2}>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Permadeath</h3>
            <p className="text-muted-foreground">
              Navigate the high-stakes reality of permanent death in PvE, with strategic risk management in PvP.
            </p>
          </AnimatedCard>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <TabSection tabs={combatTabs} />
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;
