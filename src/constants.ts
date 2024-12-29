export const totalMovies: string[] = [
  "Frozen II",
  "Raya and the Last Dragon",
  "Encanto",
  "Turning Red",
  "Luca",
  "Strange World",
  "Cruella",
  "Lightyear",
  "The Little Mermaid",
  "Wish"
];

export const eventDefinitions: Record<string, string[]> = {
    "🎓 📚\nCharacter learns a valuable lesson": ["Frozen II", "Encanto", "Turning Red", "Luca", "Wish"],

    "💃 🕺\nDance or ball scene": ["Encanto", "The Little Mermaid", "Wish"],

    "🐾 🦮\nFunny animal sidekick": ["Frozen II", "Encanto", "Strange World", "Luca", "Wish"],

    "✨ 🎭\nMagical item": ["Frozen II", "Raya and the Last Dragon", "Wish"],

    "🍽️ 🍖\nBig feast or banquet": ["Encanto", "Luca"],

    "🎭 👥\nSecret identity revealed": ["Cruella", "Encanto"],

    "😈 👿\nPowerful villain": ["Frozen II", "Strange World", "Lightyear", "Cruella"],

    "👨‍👩‍👧‍👦 🤗\nHeartwarming family reunion": ["Encanto", "Turning Red", "Wish"],

    "🗺️ 🎯\nCharacter embarks on a quest": ["Frozen II", "Raya and the Last Dragon", "Lightyear"],

    "🌊 🚣\nWater-based adventure": ["The Little Mermaid", "Luca", "Wish"],

    "🎵 🎤\nMusical performance": ["Encanto", "The Little Mermaid", "Frozen II"],

    "🔧 🤖\nHigh-tech gadget": ["Strange World", "Lightyear"],

    "🌙 ⚡\nMagical curse": ["Frozen II", "Wish"],

    "🗣️ 🐾\nTalking animal": ["Frozen II", "Strange World", "Luca", "Wish"],

    "💘 💔\nForbidden love": ["Luca", "The Little Mermaid"],

    "👑 ⚔️\nKingdom in peril": ["Frozen II", "Raya and the Last Dragon", "Encanto"],

    "😅 🤦\nComedic misunderstanding": ["Turning Red", "Luca", "Strange World"],

    "💝 💖\nSacrifice for a loved one": ["Wish", "Frozen II"],

    "⏰ ⚡\nRace against time": ["Lightyear", "Strange World", "Raya and the Last Dragon"],

    "🦸 🆘\nDramatic rescue": ["Encanto", "Lightyear", "The Little Mermaid"],

    "✨ 🔮\nMagical transformation": ["Wish", "Frozen II", "The Little Mermaid"],

    "👨‍🏫 🌟\nMentor figure guides the hero": ["Raya and the Last Dragon", "Wish", "Turning Red"],

    "🦸 💫\nHeroic sacrifice": ["Lightyear", "Frozen II", "Strange World"],

    "🧠 🎯\nBattle of wits": ["Encanto", "Cruella"],

    "💎 🗺️\nTreasure hunt": ["Luca", "Raya and the Last Dragon"],

    "👥 😄\nComedic duo": ["Frozen II", "Strange World", "Luca"],

    "🎉 🎊\nCelebration or festival": ["Encanto", "Luca"],

    "📖 💔\nTragic backstory revealed": ["Cruella", "Lightyear", "Encanto"],

    "🗺️ 🧭\nMagical map": ["Raya and the Last Dragon", "Frozen II"],

    "🚢 💥\nShipwreck scene": ["The Little Mermaid", "Strange World"],

    "💪 🌟\nCharacter overcomes self-doubt": ["Frozen II", "Turning Red", "Luca", "Wish"],

    "🗡️ 💔\nSurprising betrayal": ["Raya and the Last Dragon", "Cruella", "Lightyear"],

    "💭 🌙\nDream sequence": ["Encanto", "Frozen II"],

    "😈 💔\nVillain with a tragic past": ["Cruella", "Frozen II"],

    "🔮 📜\nMysterious prophecy": ["Frozen II", "Wish"],

    "🌳 ✨\nMagical forest": ["Frozen II", "Strange World"],

    "🏃 💨\nThrilling chase scene": ["Lightyear", "Raya and the Last Dragon", "Turning Red"],

    "🌟 💫\nCharacter breaks tradition": ["Turning Red", "Encanto", "Luca"],

    "🙏 💝\nHeartfelt apology": ["Encanto", "Luca", "Turning Red"],

    "🐉 ✨\nMagical creature": ["Frozen II", "Strange World", "Wish"],

    "🏺 ⚔️\nDangerous artifact": ["Raya and the Last Dragon", "Lightyear", "Wish"],

    "😰 💪\nCharacter faces their fears": ["Frozen II", "Encanto", "Turning Red"],

    "🤝 🌟\nSurprising ally": ["Strange World", "Lightyear", "Raya and the Last Dragon"],

    "💑 💕\nHeartwarming romance": ["The Little Mermaid", "Luca"],

    "🕊️ 🤝\nMessage of forgiveness": ["Encanto", "Turning Red"],

    "🎯 ⭐\nCharacter finds their purpose": ["Wish", "Frozen II", "Encanto"],

    "💔 😢\nTragic loss": ["Cruella", "Lightyear", "Encanto"],

    "🤝 🌟\nCharacter learns teamwork": ["Frozen II", "Turning Red", "Luca"],

    "⚔️ 🔥\nDramatic standoff": ["Lightyear", "Raya and the Last Dragon", "Strange World"],

    "🌟 🌙\nStarry night scene": ["Wish", "Encanto", "Frozen II"],

    "🧙 🌟\nMysterious guide": ["Raya and the Last Dragon", "Wish", "Frozen II"],

    "📷 💭\nNostalgic flashback": ["Lightyear", "Encanto", "Cruella"],

    "🚫 🗝️\nForbidden place explored": ["Frozen II", "The Little Mermaid"],

    "✈️ 🚀\nThrilling flight": ["Lightyear", "Strange World"],

    "🎤 💫\nPowerful speech": ["Encanto", "Luca", "Turning Red"],

    "🎭 ✨\nSymbolic object": ["Frozen II", "Wish", "Encanto"],

    "⛈️ 🌊\nDramatic storm": ["The Little Mermaid", "Frozen II", "Strange World"],

    "🤺 🤝\nRival turned friend": ["Lightyear", "Raya and the Last Dragon"],

    "✨ 🌟\nMoment of redemption": ["Cruella", "Frozen II"],

    "💫 🌟\nCharacter defies expectations": ["Turning Red", "Luca", "Encanto"],

    "🏪 🛍️\nVibrant market scene": ["Encanto", "Raya and the Last Dragon"],

    "💡 ⚡\nLife-changing revelation": ["Frozen II", "Wish", "Lightyear"],

    "🗺️ ✈️\nJourney to a far-off land": ["Raya and the Last Dragon", "Frozen II", "Lightyear"],

    "🏆 🎯\nCompetition or contest": ["Encanto", "Turning Red"],

    "🤗 💝\nTheme of self-acceptance": ["Turning Red", "Luca", "Encanto"],

    "🌈 ✨\nMagical land": ["Wish", "Frozen II"],

    "⚔️ 🌟\nConfrontation with destiny": ["Frozen II", "Wish"],

    "💪 🦁\nTest of courage": ["Strange World", "Lightyear", "Luca"],

    "🌺 🎭\nCelebration of culture": ["Encanto", "Raya and the Last Dragon"],

    "🗺️ ⚔️\nPerilous journey": ["Frozen II", "Raya and the Last Dragon", "Wish"],

    "🔄 💫\nPivotal choice": ["Lightyear", "Wish"],

    "💃 🎭\nSymbolic dance": ["The Little Mermaid", "Encanto"],

    "🏰 👑\nMajestic castle": ["Frozen II", "Wish", "Raya and the Last Dragon"],

    "👯 💕\nBond between siblings": ["Encanto", "Frozen II"],

    "🌟 💫\nTheme of hope": ["Wish", "Frozen II"],

    "🏃 💨\nDaring escape": ["Raya and the Last Dragon", "Lightyear", "Strange World"],

    "🎆 ✨\nSpectacular fireworks display": ["Encanto", "Frozen II"],

    "💪 🌟\nMessage of resilience": ["Wish", "Turning Red"],

    "🌌 🚀\nCharacter faces the unknown": ["Frozen II", "Strange World"],

    "🕊️ 💝\nTheme of forgiveness": ["Encanto", "Turning Red"],

    "🤝 💫\nSymbol of unity": ["Wish", "Encanto"],

    "🌍 ⚡\nWorld-changing event": ["Strange World", "Lightyear"],

    "🧙 💫\nSurprising mentor": ["Raya and the Last Dragon", "Turning Red"],

    "👋 💔\nHeartfelt farewell": ["Encanto", "Frozen II"],

    "🏰 🔒\nSecret lair": ["Strange World", "Lightyear"],

    "✨ 🌟\nTheme of redemption": ["Cruella", "Encanto"],

    "🏖️ 🌊\nScenic beach setting": ["The Little Mermaid", "Luca"],

    "🌳 ✨\nMagical tree": ["Frozen II", "Wish"],

    "🌿 🍃\nCharacter reconnects with nature": ["Luca", "Turning Red", "Wish"],

    "🎵 🎶\nWhimsical musical number": ["Encanto", "The Little Mermaid"],

    "🦅 ⭐\nDaring leap of faith": ["Frozen II", "Luca"],

    "🐉 ✨\nBond with a mystical animal": ["Strange World", "Wish"],

    "⚔️ 🤝\nChallenge of loyalty": ["Encanto", "Raya and the Last Dragon"],

    "🤝 💫\nHeartfelt promise": ["Frozen II", "Encanto", "Turning Red"],

    "🌆 🚀\nFuturistic cityscape": ["Lightyear", "Strange World"],

    "🦹 💎\nDaring heist": ["Cruella", "Raya and the Last Dragon"],

    "🤗 💫\nReunion of old friends": ["Frozen II", "Encanto"],

    "⚖️ ✨\nTheme of justice": ["Encanto", "Raya and the Last Dragon"],

    "😅 ⚔️\nMoment of levity in danger": ["Frozen II", "Strange World", "Lightyear"],

    "💝 💫\nHeartfelt confession": ["Turning Red", "Encanto", "Wish"]
}; 