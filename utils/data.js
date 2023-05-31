const username = [
  "surfguy909",
  "TubularTANK",
  // "Aaren",
  // "Aarez",
  // "Aarman",
  // "Aaron",
  // "Aaron-James",
  // "Aarron",
  // "Aaryan",
  // "Aaryn",
  // "Aayan",
  // "Aazaan",
  // "Abaan",
  // "Abbas",
  // "Abdallah",
  // "Abdalroof",
  // "Abdihakim",
  // "Abdirahman",
  // "Abdisalam",
  // "Abdul",
  // "Abdul-Aziz",
  // "Abdulbasir",
  // "Abdulkadir",
  // "Abdulkarem",
  // "Smith",
  // "Jones",
  // "Coollastname",
  // "enter_name_here",
  // "Ze",
  // "Zechariah",
  // "Zeek",
  // "Zeeshan",
  // "Zeid",
  // "Zein",
  // "Zen",
  // "Zendel",
  // "Zenith",
  // "Zennon",
];

const thoughtText = [
  "I like it here",
  "This was the best experience",
  // "Find My Phone",
  // "Learn Piano",
  // "Starbase Defender",
  // "Tower Defense",
  // "Monopoly Money Manager",
  // "Movie trailers",
  // "Hello world",
  // "Stupid Social Media App",
  // "Notes",
  // "Messages",
  // "Email",
  // "Compass",
  // "Firefox",
  // "Running app",
  // "Cooking app",
  // "Poker",
  // "Deliveries",
];

const reactionBody = [
  "Eager",
  "Gnarly",
  // "html",
  // "css",
  // "javascript",
  // "typescript",
  // "go",
  // "cpp",
  // "python",
  // "rust",
  // "React",
  // "React Native",
  // "NextJS",
  // "Tailwind",
  // "Vue",
  // "mongodb",
  // "sql",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUsername = () =>
  `${getRandomArrItem(username)} ${getRandomArrItem(username)}`;

// Function to generate random thoughts that we can add to the database. Includes thought tags.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(thoughtText),
      buildSuccess: Math.random() < 0.5,
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

// Create the tags that will be added to each thought
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(reactionBody);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactionBody),
      username: getRandomUsername(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThoughts };
