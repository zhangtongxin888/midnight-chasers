export const canonicalBase = "https://midnight-chasers.wiki";

export const pages = [
  { route: "/", file: "index.html" },
  { route: "/beginner-guide/", file: "beginner-guide/index.html" },
  { route: "/codes/", file: "codes/index.html" },
  { route: "/cash-boosts/", file: "cash-boosts/index.html" },
  { route: "/gamepasses/", file: "gamepasses/index.html" },
  { route: "/maps/", file: "maps/index.html" },
  { route: "/vehicles/", file: "vehicles/index.html" },
  { route: "/faq/", file: "faq/index.html" },
];

export const canonicalFor = (route) => `${canonicalBase}${route}`;
