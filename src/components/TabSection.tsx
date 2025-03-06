
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TabProps {
  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

const TabSection: React.FC<TabProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-wrap gap-1 mb-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all duration-300 relative",
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground/70"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-foreground animate-scale-up" />
            )}
          </button>
        ))}
      </div>
      <div className="animate-fade-in">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "transition-opacity duration-300 ease-in-out",
              activeTab === tab.id ? "block" : "hidden"
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSection;
