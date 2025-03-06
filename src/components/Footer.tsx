
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Grim Ascension</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A 3D Roblox action RPG that challenges you to survive in a brutal, immersive world through realistic, 
              skill-based combat, species evolution, and balanced class progression.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#gameplay" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Gameplay Mechanics
                </a>
              </li>
              <li>
                <a href="#evolution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Evolution System
                </a>
              </li>
              <li>
                <a href="#classes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Classes & Progression
                </a>
              </li>
              <li>
                <a href="#world" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  World & Environments
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground mb-2">
              For questions, feedback, or support:
            </p>
            <a href="#" className="text-sm text-primary hover:underline">
              support@grimascension.com
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Grim Ascension. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This document is periodically updated as new content is added and community feedback is incorporated.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
