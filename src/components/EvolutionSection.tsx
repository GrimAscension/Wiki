
import React from 'react';
import SpeciesCard from './SpeciesCard';
import AnimatedCard from './AnimatedCard';

const EvolutionSection: React.FC = () => {
  const species = [
    {
      name: "Human",
      probability: "25%",
      baseTraits: [
        "Balanced; no inherent bonuses.",
      ],
      upgradedVariant: {
        name: "Ascended Human",
        traits: [
          "+5% to all stats immediately",
          "+2% additional damage resistance",
        ],
      },
    },
    {
      name: "Half-Giant",
      probability: "20%",
      baseTraits: [
        "+50% Health",
        "+25% Strength",
        "-100% Agility",
      ],
      upgradedVariant: {
        name: "Titan Giant",
        traits: [
          "+75% Health, +50% Strength",
          "Reduced Agility penalty (-50%)",
          "Knockback immunity",
          "+20% melee range",
        ],
      },
    },
    {
      name: "Dwarf",
      probability: "15%",
      baseTraits: [
        "+30% Endurance",
        "+20% Crafting Efficiency",
        "-15% Height (affects movement speed, jump height, dash length: -10%)",
      ],
      upgradedVariant: {
        name: "Master Dwarf / Ironblood",
        traits: [
          "+40% Endurance, +25% Crafting Efficiency",
          "+10% poison/bleed resistance",
          "Mining/smithing speed increased by 20%",
        ],
      },
    },
    {
      name: "Draconian",
      probability: "1%",
      baseTraits: [
        "+25% Health, +20% Defense, +15% Fire Resistance",
        "1% lifesteal per attack",
        "Applies a 5% speed debuff on nearby enemies",
      ],
      upgradedVariant: {
        name: "Ancient Draconian",
        traits: [
          "+35% Health, +40% Defense",
          "+45% Fire Resistance, +55% Earth Resistance",
          "Lifesteal increases to 2% per hit",
          "Unlocks elemental bending (30-second cooldown; deals 150% base damage in an area)",
        ],
      },
    },
    {
      name: "Half-Elf",
      probability: "15%",
      baseTraits: [
        "+20% Agility",
        "+15% Perception",
        "+5% Mana Efficiency",
      ],
      upgradedVariant: {
        name: "Eldritch Elf / Elvenborn",
        traits: [
          "+30% Agility, +20% Perception",
          "Unlocks night vision (25% improved accuracy in low light)",
          "+10% movement speed in forested areas",
        ],
      },
    },
    {
      name: "Half-Orc",
      probability: "10%",
      baseTraits: [
        "+35% Strength",
        "+20% Endurance",
        "-10% Agility",
      ],
      upgradedVariant: {
        name: "Berserker Orc / Berserker's Lineage",
        traits: [
          "+50% Strength, +25% Endurance",
          "Unlocks rage mode (when health <50%, +30% damage and -10% damage taken for 10 seconds)",
        ],
      },
    },
  ];

  return (
    <section id="evolution" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Evolution Stone System</h2>
          <p className="text-lg text-muted-foreground">
            Transform your character permanently through species-specific evolution, unlocking powerful traits and abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <AnimatedCard className="p-6" delayIndex={0}>
            <h3 className="text-xl font-semibold mb-4">Stone Acquisition</h3>
            <p className="mb-4">
              Evolution Stones are primarily obtained in The Final Verdict by defeating enemies specific to your species.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Hell Giants drop a Giant Evolution Stone</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Draconians must defeat the Old Draconian Lord in the Colosseum</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Typical drop rates are 5–10%, with higher chances during special events</span>
              </li>
            </ul>
          </AnimatedCard>
          
          <AnimatedCard className="p-6" delayIndex={1}>
            <h3 className="text-xl font-semibold mb-4">Evolution Effects</h3>
            <p className="mb-4">
              Each character can evolve only once, permanently changing appearance, stats, and abilities.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Evolution is triggered by obtaining the species-specific Evolution Stone</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Some evolutions add active abilities (e.g., elemental bending)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>Others provide passive stat boosts that affect gameplay mechanics</span>
              </li>
            </ul>
          </AnimatedCard>
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-center">Species & Numerical Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {species.map((species, index) => (
            <SpeciesCard 
              key={species.name}
              name={species.name}
              probability={species.probability}
              baseTraits={species.baseTraits}
              upgradedVariant={species.upgradedVariant}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;
