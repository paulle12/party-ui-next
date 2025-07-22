'use client';
import ClassBox from '@/components/ClassBox';
import DiceRoll from '@/components/DiceRoll';
import {useState } from 'react';

type PartyResponse = {
  partySuccessRate: number;
  party: RaiderIOProfile[];
};

type RaiderIOProfile = {
  name: string;
  realm: string;
  region: string;
  characterClass: string;
  role: string;
  activeSpecRole: string;
  isMainRole: boolean;
  currentSeasonScore: number;
  previousSeasonScore: number;
  score: number;
  mythic_plus_scores_by_season: {
    season: string;
    scores: {
      all: number;
      dps: number;
    };
  }[];
  mythic_plus_recent_runs: {
    dungeon: string;
    short_name: string;
    mythic_level: number;
    completed_at: string;
    num_keystone_upgrades: number;
    score: number;
    url: string;
    time_ms: number;
    affixes: {
      id: number;
      name: string;
      description: string;
    }[];
  }[];
};

// type MemberWithScore = Member & { score: number; mythic_plus_scores_by_season: any[] };
const Home = () => {
  const [targetLevel, setTargetLevel] = useState(10); // default +10
  const [realmName, setRealmName] = useState("");
  const [characterName,  setCharacterName] = useState("");
  // will need to update this new endpoint for success service
  const [partyData, setPartyData] = useState<PartyResponse | null>(null); // Replace with actual data
  const [isCalculating, setIsCalculating] = useState(false);

  //"https://successservice.onrender.com/api/success?targetLevel=10&name=Bedoof&realm=Azralon"
const fetchPartyWithHydration = async () => {
  setIsCalculating(true);

  try {
    const res = await fetch(`https://successservice.onrender.com/api/success?targetLevel=10&name=${characterName}&realm=${realmName}`);
    
    const hydratedPartyData = await res.json();
    
    console.log(characterName);
    console.log(realmName);
    console.log(targetLevel);
    console.log(hydratedPartyData);

    setPartyData(hydratedPartyData);
  } catch (error) {
    console.error("Error fetching party data:", error);
  } finally {
    setIsCalculating(false);
  }
};

  // useEffect(() => {
  //   fetchPartyWithHydration().then(setPartyData);
  // }, [])


  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <main className="space-y-6">
        <div className="flex-col items-center gap-6">
          <div className='flex justify-center'>
            <label className="flex items-center gap-2 text-white text-lg pr-2.5">
              Character Name:
              <input
                type="text"
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
                className="p-2 bg-white text-black rounded-md w-40"
              />
            </label>
            <label className="flex items-center gap-2 text-white text-lg pr-2.5">
              Realm:

              <input
                type="text"
                value={realmName}
                onChange={(e) => setRealmName(e.target.value)}
                className="p-2 bg-white text-black rounded-md w-40"
              />
            </label>
            <label className="flex items-center gap-2 text-white text-lg">
              Target Key Level:
              <input
                type="number"
                value={targetLevel}
                onChange={(e) => setTargetLevel(Number(e.target.value))}
                className="p-2 bg-white text-black rounded-md w-20"
                min={0}
                max={20}
              />
            </label>
          </div>
          {/* Calculate Button */}
          <div className='flex justify-center'>
            <button
              onClick={fetchPartyWithHydration}
              className="bg-green-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Calculate Score
            </button>
          </div>
          {/* Score Box - todo make this a bar instead */}
          <div className="flex items-center justify-center">
            <DiceRoll/>
            <div className="w-40 h-40 rounded-full border-2 border-cyan-400 flex items-center justify-center text-2xl font-bold text-white">
              {isCalculating ? (
                <img
                  src="/images/gifs/favorite-facts.gif"
                  alt="Calculating..."
                  className="h-3/4 w-3/4 object-contain"
                />
              ) : (
                 partyData?.partySuccessRate ? `${Number(partyData?.partySuccessRate).toFixed(2)}%` : "0.00%"
              )}
            </div>
          </div>
          <div>
            {partyData?.party?.length ? partyData?.party.map((member) => {
              
              return (
                <div
                  key={`${member.name}`}
                  className="flex h-full items-stretch items-center rounded-lg px-4"
                >
                  {/* Character info — takes ~2/3 */}

                  <ClassBox
                    name={member.name}
                    realm={member.realm}
                    className={member.characterClass}
                    role={member.role}
                    activeSpec={member.activeSpecRole}
                    isMainRole={member.isMainRole}
                    seasonalScore={member?.currentSeasonScore}
                    previousSeasonalScore={member?.previousSeasonScore}
                    score={member.score}
                  />
                </div>
              )
            })
              :
              null
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;