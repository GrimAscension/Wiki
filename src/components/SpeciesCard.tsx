
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { cn } from '@/lib/utils';

interface SpeciesProps {
  name: string;
  probability: string;
  baseTraits: string[];
  upgradedVariant: {
    name: string;
    traits: string[];
  };
  index: number;
}

const SpeciesCard: React.FC<SpeciesProps> = ({
  name,
  probability,
  baseTraits,
  upgradedVariant,
  index
}) => {
  return (
    <AnimatedCard delayIndex={index} className="p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="badge bg-primary/10 text-primary">{probability}</span>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Base Traits</h4>
        <ul className="space-y-1">
          {baseTraits.map((trait, i) => (
            <li key={i} className="text-sm flex items-start">
              <span className="inline-block w-4 h-4 rounded-full bg-secondary flex-shrink-0 mt-0.5 mr-2"></span>
              <span>{trait}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto">
        <div className={cn(
          "p-4 rounded-md",
          "bg-gradient-to-r from-secondary to-secondary/50"
        )}>
          <h4 className="text-sm uppercase tracking-wider mb-2 font-medium">
            Upgraded Variant: {upgradedVariant.name}
          </h4>
          <ul className="space-y-1">
            {upgradedVariant.traits.map((trait, i) => (
              <li key={i} className="text-sm flex items-start">
                <span className="inline-block w-3 h-3 rounded-full bg-primary/20 flex-shrink-0 mt-0.5 mr-2"></span>
                <span>{trait}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default SpeciesCard;
