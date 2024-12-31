import { BingoConfiguration, BingoEvent } from './types';

// Reference lists - DO NOT USE directly, for sanity checking only
const disneyMoviesSample = [
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

export const disneyMoviesEventDefinitions: Record<string, string[]> = {
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

// Reference lists for party bingo - DO NOT USE directly
export const gayestPartyEventsEnglish = [
  "First gay joke of the day",
  "Fifth gay joke of the day", 
  "Someone mentions ChatGPT",
  "Someone is complained about",
  "Someone is called a slut",
  "Someone is called a derogatory slur (not a slut)",
  "A kiss",
  "Third kiss of the day",
  "Stripdance",
  "Talking behind someone's back",
  "Unknown TikTok word is used",
  "Sex topic discussion",
  "Return of the STDs",
  "Gay sex discussion",
  "Trump bashing",
  "Straight people called straight",
  "Someone is slow to sexually identify",
  "Immigration topic",
  "Putin is mentioned",
  "Someone drinking too early",
  "Vomiting starts",
  "Karaoke suggestion",
  "Musical instruments mentioned",
  "Pig joke requested",
  "Crying",
  "Singing",
  "Very punny joke",
  "War mention",
  "Travel plans discussion",
  "IT nerds belittled",
  "Remember when we...",
  "I hate America moment",
  "Cat mention",
  "Someone showing their tits (any gender)"
];

export const gayestPartyEventsRussian = [
  "Первая гейская шутка дня",
  "Пятая гейская шутка дня", 
  "Кто-то упоминает ChatGPT",
  "На кого-то жалуются",
  "Кого-то называют шлюхой",
  "Кто-то назвал себя шлюхой",
  "Обзываются опять! (не шлюха)",
  "Поцелуй",
  "Третий поцелуй дня",
  "Стриптиз",
  "Сплетничают или обсуждают кого-то за спиной",
  "Используется слово из тиктока, которое я не знаю",
  "Обсуждается тема секса",
  "Возвращение ЗППП",
  "Обсуждается гей-секс",
  "Гнобят Трампа",
  "Натуралов называют натуралами",
  "Кто-то слишком медленно определяется с сексуальной ориентацией",
  "Ха хуя мы заговорили про иммиграцию?",
  "Путин упоминается, а должен поминаться",
  "Кто-то пьёт слишком рано",
  "Кто-то плохо себя чувствует из-за алкоголя",
  "Предлагают караоке",
  "Упоминаются музыкальные инструменты",
  "Просят рассказать шутку про свинью",
  "Плач",
  "Пение",
  "Очень каламбурная шутка",
  "Упоминается война",
  "Обсуждаются планы путешествий",
  "Унижают айтишников",
  "Помнишь как мы...",
  "Момент ненависти к Америке",
  "Упоминается кот",
  "Кто-то показывает свои сиськи (любой гендер)",
  "Смеются над нормисами",
  "Налоговый сезон... бляяя",
];

// Actual configurations used in the app
function createDisneyEvents(): BingoEvent[] {
  return Object.entries(disneyMoviesEventDefinitions).map(([name, movies]) => ({
    name,
    weight: movies.length / disneyMoviesSample.length
  }));
}

function createPartyEvents(): BingoEvent[] {
  // All events have equal weight in the party version
  return gayestPartyEventsRussian.map(name => ({
    name,
    weight: 1
  }));
}

export const disneyMovieConfig: BingoConfiguration = {
  title: "🎄 Disney Movie Bingo",
  description: "A fun bingo game to play while watching Disney movies together!",
  events: createDisneyEvents(),
  storageKey: "disney-bingo-state"
};

export const gayPartyConfig: BingoConfiguration = {
  title: "🎉 Gayest Party of the Year",
  description: "A spicy bingo game for your New Year's party!",
  events: createPartyEvents(),
  storageKey: "gay-party-bingo-state",
  backgroundImages: Array.from({length: 11}, (_, i) => `/gay/${i + 1}.png`)
};