
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { Music } from 'lucide-react';

const MusicSection: React.FC = () => {
  const musicTracks = [
    {
      title: "Grim Ascension: Main Track",
      artist: "Nick Hall",
      embedId: "4cfaee51-9af9-ef11-90c9-00224848fea7"
    },
    {
      title: "Battle Piece Experimental Extend",
      artist: "Nick Hall",
      embedId: "90a0b42a-bef0-ef11-90c9-00224848fea7"
    },
    {
      title: "M̵̜̯̳͉̬͕̼̩̯̗͆̉͐̈́̚͠Ạ̸̞͇͎͇̺͉̙͗̀͗̄͊̋͌̚ͅS̸̨͕̞̩̤̗̺̩͆̐̑͋̆̑̚͝Ţ̶̡͓͔͛̓̔̓́͋̉̅̋̿Ę̸̢̝̪̥̥̓̐͝R̸͍͈̦̊̂̏͌͂͐̔̎͑͘",
      artist: "Nick Hall",
      embedId: "a897f33b-48eb-ef11-88f6-6045bd3473c0"
    },
    {
      title: "Weak Random Encounter",
      artist: "Nick Hall",
      embedId: "02feafc8-a2d7-ef11-88f6-6045bd3473c0"
    },
    {
      title: "The Great Escape",
      artist: "Nick Hall",
      embedId: "54e74f5e-dbc4-ef11-88cd-6045bd345b20"
    },
    {
      title: "Battle Theme #02",
      artist: "Nick Hall",
      embedId: "fc731ab7-c8c0-ef11-88cd-6045bd345b20"
    },
    {
      title: "Battle Theme #01",
      artist: "Nick Hall",
      embedId: "16516331-c7c0-ef11-88cd-6045bd345b20"
    },
    {
      title: "Apnea Rush",
      artist: "Nick Hall",
      embedId: "ebbd901b-72be-ef11-88cd-6045bd345b20"
    }
  ];

  return (
    <section id="music" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Music & Sound Effects</h2>
          <p className="text-lg text-muted-foreground">
            The official soundtrack composed by Nick Hall for Grim Ascension.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {musicTracks.map((track, index) => (
            <AnimatedCard 
              key={track.embedId} 
              delayIndex={index} 
              className="p-6 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{track.title}</h3>
                  <p className="text-sm text-muted-foreground">By: {track.artist}</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-md bg-black/5 pt-[56.25%]">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.bandlab.com/embed/?id=${track.embedId}`}
                  allowFullScreen
                ></iframe>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
