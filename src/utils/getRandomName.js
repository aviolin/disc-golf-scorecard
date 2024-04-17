const firstNames = [
    "Ace",
    "Acey",
    "Airshot",
    "Backhand",
    "Basket",
    "Birdie",
    "Blitz",
    "Bogey",
    "Caddy",
    "Cannon",
    "Chains",
    "Corkscrew",
    "Dasher",
    "Disc",
    "Discus",
    "Driver",
    "Eagle",
    "Fairway",
    "Flick",
    "Flare",
    "Forehand",
    "Frisbee",
    "Glide",
    "Grip",
    "Harmony",
    "Huck",
    "Hyzer",
    "Juke",
    "Laser",
    "Launch",
    "Launchpad",
    "Magnet",
    "Mulligan",
    "Putter",
    "Putt",
    "Raptor",
    "Ripper",
    "Roc",
    "Skip",
    "Stall",
    "Steady",
    "Tee",
    "Throw",
    "Zephyr"
];
  
const lastNames = [
    "Driver",
    "Woods",
    "Putterman",
    "Putterson",
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Mulligan",
    "Robinson"
];

export default () => {
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}