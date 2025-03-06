
import React from 'react';
import AnimatedCard from './AnimatedCard';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How do I evolve my species?",
      answer: "Collect your species-specific Evolution Stone from designated enemies and use it to trigger your one-time evolution upgrade."
    },
    {
      question: "What happens when I die?",
      answer: "In PvE, death wipes your character's progress, forcing a restart. In PvP (the Colosseum), death results in a loss of wagered money (typically 10%) and a respawn at your designated point."
    },
    {
      question: "How are class abilities unlocked?",
      answer: "Abilities are automatically unlocked with each boss you defeat, gradually increasing your combat capabilities."
    },
    {
      question: "Can I fight bosses solo or do I need a team?",
      answer: "While every boss can be tackled solo, teamwork is highly recommended. You can team up on any boss encounter to coordinate abilities, share strategies, and trade gear for mutual benefit."
    },
    {
      question: "How do I maximize my effectiveness in combat?",
      answer: "Synergize your class abilities, exploit environmental advantages, and communicate effectively with teammates in multiplayer encounters."
    }
  ];

  const tips = [
    "Synergize Your Abilities: Coordinate class skills (e.g., pairing Lifebinder's healing with Thornfist's melee strikes) for a balanced offense and defense.",
    "Exploit Environmental Advantages: Learn each biome's layout and hazards; use natural obstacles and traps (e.g., narrow paths or ledges) to your advantage.",
    "Communicate Effectively: In multiplayer encounters, use in-game signals to coordinate attacks, retreats, and regrouping to maximize boss credit."
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs & Player Tips</h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions and learn valuable strategies to master Grim Ascension.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <AnimatedCard key={index} delayIndex={index} className="p-6">
                  <h4 className="font-semibold mb-2">Q: {faq.question}</h4>
                  <p className="text-muted-foreground">A: {faq.answer}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Pro Tips</h3>
            <AnimatedCard delayIndex={0} className="p-6">
              <ul className="space-y-4">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 mt-1 mr-3 flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
