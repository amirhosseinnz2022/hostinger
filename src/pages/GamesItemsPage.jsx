
import React from 'react';
import GameCard from '@/components/GameCard';
import { motion } from 'framer-motion';

const gamesData = [
  { id: 'fortnite', name: 'Fortnite', description: 'Battle Royale phenomenon. Get exclusive skins, V-Bucks, and stacked accounts.', items: ["Skins", "V-Bucks", "Accounts"], image_prompt: "Fortnite characters in a vibrant, dynamic battle scene", image_prompt_detail: "Fortnite characters in a vibrant battle scene with the battle bus in background" },
  { id: 'call-of-duty', name: 'Call of Duty', description: 'Engage in intense FPS battles. Trade CoD Points and high-level accounts.', items: ["CP", "Accounts"], image_prompt: "Call of Duty soldier aiming rifle in a warzone setting", image_prompt_detail: "Call of Duty soldier in tactical gear against an explosive backdrop" },
  { id: 'counter-strike-2', name: 'Counter-Strike 2', description: 'The legend reborn. Trade valuable skins and seasoned accounts.', items: ["Skins", "Accounts"], image_prompt: "Counter-Strike 2 intense firefight scene with detailed weapon models", image_prompt_detail: "CS2 CT agent defending a bombsite with neon highlights" },
  { id: 'valorant', name: 'Valorant', description: 'Tactical shooter with unique agents. Find rare skins, Valorant Points, and pro accounts.', items: ["Skins", "VP", "Accounts"], image_prompt: "Valorant agents team lineup with abilities glowing", image_prompt_detail: "Valorant agent Phoenix using his ultimate ability, fiery effects" },
  { id: 'league-of-legends', name: 'League of Legends', description: 'Dominate the Rift. Trade RP, champion skins, and high ELO accounts.', items: ["RP", "Skins", "Accounts"], image_prompt: "League of Legends champions clashing in a dynamic battle scene", image_prompt_detail: "League of Legends champion Jinx firing her rocket launcher, dynamic pose" },
  { id: 'roblox', name: 'Roblox', description: 'Create and play millions of games. Trade Robux, limited items, and established accounts.', items: ["Robux", "Limiteds", "Accounts"], image_prompt: "Diverse group of Roblox avatars exploring a user-created world", image_prompt_detail: "Roblox avatars in a colorful, blocky landscape with creative structures" },
  { id: 'minecraft', name: 'Minecraft', description: 'Build your world. Trade Java/Bedrock accounts, capes, and server access.', items: ["Accounts", "Capes", "Server Access"], image_prompt: "Minecraft player overlooking a vast landscape with intricate structures", image_prompt_detail: "Minecraft player riding a horse through a generated world with diverse biomes" },
  { id: 'gta-v', name: 'GTA V / GTA Online', description: 'Explore Los Santos. Buy in-game cash, modded accounts, and rare vehicles.', items: ["Money", "Accounts", "Vehicles"], image_prompt: "GTA Online characters standing in front of luxury cars with Los Santos skyline", image_prompt_detail: "GTA Online characters in a high-speed car chase through Los Santos streets" },
  { id: 'pubg', name: 'PUBG', description: 'Pioneer of Battle Royale. Trade UC, rare outfits, and experienced accounts.', items: ["UC", "Skins", "Accounts"], image_prompt: "PUBG character in ghillie suit sniping from a grassy hill" },
  { id: 'apex-legends', name: 'Apex Legends', description: 'Squad-based Battle Royale. Get Apex Coins, heirloom shards, and legend skins.', items: ["Coins", "Skins", "Heirlooms", "Accounts"], image_prompt: "Apex Legends heroes mid-action using their abilities" },
  { id: 'dota-2', name: 'Dota 2', description: 'Complex MOBA strategy. Trade rare Arcanas, Immortals, and high MMR accounts.', items: ["Items", "Arcanas", "Accounts"], image_prompt: "Dota 2 heroes in a chaotic team fight with spells flying" },
  { id: 'overwatch-2', name: 'Overwatch 2', description: 'Team-based hero shooter. Find unique skins, Overwatch Coins, and leveled accounts.', items: ["Coins", "Skins", "Accounts"], image_prompt: "Overwatch 2 heroes posing together with iconic weapons" },
  { id: 'mobile-legends', name: 'Mobile Legends', description: 'Popular mobile MOBA. Get Diamonds, epic skins, and mythic accounts.', items: ["Diamonds", "Skins", "Accounts"], image_prompt: "Mobile Legends heroes in dynamic poses ready for battle" },
  { id: 'free-fire', name: 'Free Fire', description: 'Fast-paced mobile Battle Royale. Trade Diamonds, character bundles, and elite passes.', items: ["Diamonds", "Bundles", "Accounts"], image_prompt: "Free Fire characters parachuting onto a tropical island map" },
  { id: 'clash-of-clans', name: 'Clash of Clans', description: 'Build your village and army. Trade Gems, maxed town hall accounts, and clan leadership.', items: ["Gems", "Accounts", "Clans"], image_prompt: "Clash of Clans village overview with various troops and defenses" },
];

const GamesItemsPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Explore Games & <span className="neon-text-primary">Items</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover a wide range of games where you can securely buy or sell accounts, in-game currencies, and valuable items. Click on a game to see more.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {gamesData.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: gamesData.length * 0.07 + 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-xl text-muted-foreground">
          Can't find your game? <a href="/contact" className="text-accent hover:underline font-semibold hover:neon-text-accent transition-all">Contact us</a> to make a request!
        </p>
      </motion.div>
    </div>
  );
};

export default GamesItemsPage;
  