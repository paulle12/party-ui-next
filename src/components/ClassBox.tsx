import React from 'react';
import Image from 'next/image';

export type ClassBoxProps = {
  name: string;
  realm: string;
  role: string;
  className: string;
  activeSpec: string;
  isMainRole: boolean;
  seasonalScore: number;
  previousSeasonalScore: number;
  score: number;
};

//tailwind doesnt play nice with dynamically including 30 here
const classBgColors: Record<string, string> = {
  Warrior: `bg-red-800/30`,
  Mage: `bg-cyan-800/30`,
  Rogue: `bg-yellow-800/30`,
  Paladin: `bg-pink-800/30`,
  Druid: `bg-orange-800/30`,
  Priest: `bg-gray-800/30`,
  Warlock: `bg-purple-800/30`,
  Hunter: `bg-green-800/30`,
  Shaman: `bg-blue-800/30`,
  Monk: `bg-emerald-800/30`,
  DeathKnight: `bg-red-800/30`,
  "Demon Hunter": `bg-fuchsia-800/30`,
};

const classBorderColors: Record<string, string> = {
  Warrior: 'border-red-800',
  Mage: 'border-cyan-700',
  Rogue: 'border-yellow-400',
  Paladin: 'border-pink-700',
  Druid: 'border-orange-700',
  Priest: 'border-gray-200',
  Warlock: 'border-purple-800',
  Hunter: 'border-green-700',
  Shaman: 'border-blue-800',
  Monk: 'border-emerald-700',
  DeathKnight: 'border-red-900',
  "Demon Hunter": 'border-fuchsia-800',
};

export const specIconMap: Record<string, string> = {
  // Warrior
  "Arms": "/images/WowSpecIcons/warrior_arms.png",
  "Fury": "/images/WowSpecIcons/warrior_fury.png",
  "Protection": "/images/WowSpecIcons/warrior_prot.png",

  // Paladin
  "Holy": "/images/WowSpecIcons/paladin_holy.png",
  "Protection Paladin": "/images/WowSpecIcons/paladin_protection.png",
  "Retribution": "/images/WowSpecIcons/paladin_ret.png",

  // Hunter
  "Beast Mastery": "/images/WowSpecIcons/hunter_bm.png",
  "Marksmanship": "/images/WowSpecIcons/hunter_mm.png",
  "Survival": "/images/WowSpecIcons/hunter_survival.png",

  // Rogue
  "Assassination": "/images/WowSpecIcons/rogue_assa.png",
  "Outlaw": "/images/WowSpecIcons/rogue_outlaw.png",
  "Subtlety": "/images/WowSpecIcons/rogue_sub.png",

  // Priest
  "Discipline": "/images/WowSpecIcons/priest_disc.png",
  "Holy Priest": "/images/WowSpecIcons/priest_holy.png",
  "Shadow": "/images/WowSpecIcons/priest_shadow.png",

  // Death Knight
  "Blood": "/images/WowSpecIcons/dk_blood.png",
  "Frost DK": "/images/WowSpecIcons/dk_frost.png",
  "Unholy": "/images/WowSpecIcons/dk_unholy.png",

  // Shaman
  "Elemental": "/images/WowSpecIcons/shaman_elem.png",
  "Enhancement": "/images/WowSpecIcons/shaman_enhancement.png",
  "Restoration": "/images/WowSpecIcons/shaman_resto.png",

  // Mage
  "Arcane": "/images/WowSpecIcons/mage_arcane.png",
  "Fire": "/images/WowSpecIcons/mage_fire.png",
  "Frost": "/images/WowSpecIcons/mage_frost.png",

  // Warlock
  "Affliction": "/images/WowSpecIcons/warlock_affli.png",
  "Demonology": "/images/WowSpecIcons/warlock_demono.png",
  "Destruction": "/images/WowSpecIcons/warlock_destru.png",

  // Monk
  "Brewmaster": "/images/WowSpecIcons/monk_brewmaster.png",
  "Mistweaver": "/images/WowSpecIcons/monk_mistweaver.png",
  "Windwalker": "/images/WowSpecIcons/monk_ww.png",

  // Druid
  "Balance": "/images/WowSpecIcons/druid_balance.png",
  "Feral": "/images/WowSpecIcons/druid_feral.png",
  "Guardian": "/images/WowSpecIcons/druid_guardian.png",
  "Restoration Druid": "/images/WowSpecIcons/druid_restoration.png",

  // Demon Hunter
  "Havoc": "/images/WowSpecIcons/dh_havoc.png",
  "Vengeance": "/images/WowSpecIcons/dh_vengeance.png",

  // Evoker
  "Devastation": "/images/WowSpecIcons/evoker_devastation.png",
  "Preservation": "/images/WowSpecIcons/evoker_preservation.png",
  "Augmentation": "/images/WowSpecIcons/evoker_augmentation.png",
};

export const roleIconMap: Record<string, string> = {
  "HEALING": "/images/roles/healer.jpg",
  "DPS": "/images/roles/dps.jpg",
  "TANK": "/images/roles/tank.jpg",
};

const scoreColor = (score: number) =>
  score >= 7
    ? "text-green-600"
    : score >= 5
      ? "text-yellow-500"
      : "text-red-600";

// think about adding in specific icons and debuffs think about how much screen space this will take
// shift elements up 

const ClassBox = ({ name, realm, className, role, activeSpec, isMainRole, seasonalScore, previousSeasonalScore, score }: ClassBoxProps) => {
  const bgBorder = classBorderColors[className] || 'border-gray-800';
  const bgClass = classBgColors[className] || 'bg-gray-800';
  const WowSpecImage = specIconMap[activeSpec];
  const WowRoleImage = roleIconMap[role];

  return (
    <div className={`w-full p-6 rounded-xl border-2 ${bgBorder} ${bgClass} shadow-md`}>
      <div className="flex items-stretch space-x-6">
        {/* Icons Block */}
        <div className="flex flex-col space-y-4 items-center">
          <div className="relative w-[60px] h-[60px]">
            <Image src={WowRoleImage} alt="Role Icon" fill className="object-contain" />
          </div>
          <div className="relative w-[60px] h-[60px]">
            <Image src={WowSpecImage} alt="Spec Icon" fill className="object-contain" />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] self-stretch bg-cyan-400 rounded" />

        {/* Character Info Block */}
        <div className="flex flex-col justify-center w-full">
          {/* make character name link into IO page */}
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-sm">Realm: {realm}</p>
          <p className="text-sm">Class: {className}</p>
          <p className="text-sm">Spec: {activeSpec}</p>

          {isMainRole ? (
            <span title="Main Role" className="text-green-400 text-xl">Main Role: ✔️</span>
          ) : (
            <span title="Not Main Role" className="text-gray-500 text-xl">❌</span>
          )}
        </div>

        {/* Score Block */}
        <div className={`flex w-1/10 items-center justify-center px-6 py-4 rounded-md border-2 text-6xl font-bold ${scoreColor(score)} ${bgBorder}`}>
          {score}
        </div>
        {/* Vertical Divider */}
        <div className="w-[1px] self-stretch bg-cyan-400 rounded" />
        <div className={`w-1/10 border ${bgBorder} rounded-md px-4 py-2 space-y-1`}>
          <div className={"text-xl"}>
                <span className= 'font-bold text-white'>
                  {`current: ${seasonalScore}`}
                </span>
              </div>
              <span className=  'text-gray-300'>
                 {`previous: ${previousSeasonalScore}`}
                </span>
        </div>

      </div>
    </div>
  );
};

export default ClassBox;
