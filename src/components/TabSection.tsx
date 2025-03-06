
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp, List, Music } from 'lucide-react';

interface TabProps {
  tabs: {
    id: string;
    label: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
  }[];
  className?: string;
  variant?: 'default' | 'list';
}

const TabSection: React.FC<TabProps> = ({ tabs, className, variant = 'default' }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [expanded, setExpanded] = useState(false);
  
  if (variant === 'list') {
    return (
      <div className={cn("w-full", className)}>
        <div className="relative mb-6">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between bg-secondary/30 p-3 rounded-md border border-border"
          >
            <div className="flex items-center gap-2">
              <List className="w-5 h-5" />
              <span className="font-medium">
                {tabs.find(tab => tab.id === activeTab)?.label || 'Select Item'}
              </span>
            </div>
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {expanded && (
            <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-background border border-border rounded-md shadow-lg animate-fade-in">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setExpanded(false);
                  }}
                  className={cn(
                    "w-full p-3 text-left flex items-center gap-2 hover:bg-secondary/20 transition-colors",
                    activeTab === tab.id && "bg-secondary/30"
                  )}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          )}
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
  }
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-wrap gap-1 mb-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-all duration-300 relative flex items-center gap-2",
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground/70"
            )}
          >
            {tab.icon}
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
