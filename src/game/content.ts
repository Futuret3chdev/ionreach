export const TILE = 36;
export const COLS = 78;
export const ROWS = 52;
export const WORLD_W = COLS * TILE;
export const WORLD_H = ROWS * TILE;

export const KINDS = [
  "spire",
  "relay",
  "refinery",
  "barracks",
  "bay",
  "turret",
  "silo",
  "rifle",
  "rocket",
  "harvester",
  "lancer",
  "bastion",
] as const;

export type Kind = (typeof KINDS)[number];
export type Team = 0 | 1;
export type Armor = "light" | "heavy" | "structure";
export type ShotKind = "bolt" | "shell" | "rocket" | "none";

export interface Def {
  kind: Kind;
  name: string;
  blurb: string;
  cost: number;
  time: number;
  hp: number;
  speed: number;
  range: number;
  rof: number;
  dmg: number;
  armor: Armor;
  radius: number;
  fw: number;
  fh: number;
  vision: number;
  drain: number;
  power: number;
  cargo: number;
  projectile: ShotKind;
  building: boolean;
  prereq?: Kind;
  builtBy?: Kind;
  hot?: string;
}

export const DEFS: Record<Kind, Def> = {
  spire: {
    kind: "spire",
    name: "Command Spire",
    blurb: "Heart of the base. Lose it and the horizon is gone.",
    cost: 0,
    time: 0,
    hp: 2400,
    speed: 0,
    range: 0,
    rof: 0,
    dmg: 0,
    armor: "structure",
    radius: 54,
    fw: 3,
    fh: 3,
    vision: 380,
    drain: 0,
    power: 16,
    cargo: 0,
    projectile: "none",
    building: true,
  },
  relay: {
    kind: "relay",
    name: "Power Relay",
    blurb: "Feeds the grid. Turrets die in the dark.",
    cost: 300,
    time: 8,
    hp: 520,
    speed: 0,
    range: 0,
    rof: 0,
    dmg: 0,
    armor: "structure",
    radius: 36,
    fw: 2,
    fh: 2,
    vision: 180,
    drain: 0,
    power: 42,
    cargo: 0,
    projectile: "none",
    building: true,
    hot: "Q",
  },
  refinery: {
    kind: "refinery",
    name: "Ion Foundry",
    blurb: "Haulers dock here. Credits hit the ledger.",
    cost: 1200,
    time: 16,
    hp: 980,
    speed: 0,
    range: 0,
    rof: 0,
    dmg: 0,
    armor: "structure",
    radius: 54,
    fw: 3,
    fh: 3,
    vision: 210,
    drain: 14,
    power: 0,
    cargo: 0,
    projectile: "none",
    building: true,
  },
  barracks: {
    kind: "barracks",
    name: "Barracks",
    blurb: "Infantry. Cheap, and they see everything.",
    cost: 400,
    time: 11,
    hp: 760,
    speed: 0,
    range: 0,
    rof: 0,
    dmg: 0,
    armor: "structure",
    radius: 46,
    fw: 3,
    fh: 2,
    vision: 200,
    drain: 10,
    power: 0,
    cargo: 0,
    projectile: "none",
    building: true,
  },
  bay: {
    kind: "bay",
    name: "Vehicle Bay",
    blurb: "Lancers and bastions roll out of the door.",
    cost: 1500,
    time: 18,
    hp: 1100,
    speed: 0,
    range: 0,
    rof: 0,
    dmg: 0,
    armor: "structure",
    radius: 54,
    fw: 3,
    fh: 3,
    vision: 220,
    drain: 16,
    power: 0,
    cargo: 0,
    projectile: "none",
    building: true,
    prereq: "refinery",
  },
  turret: {
    kind: "turret",
    name: "Glass Turret",
    blurb: "Holds a lane. Goes dark if the grid starves.",
    cost: 400,
    time: 9,
    hp: 460,
    speed: 0,
    range: 196,
    rof: 0.62,
    dmg: 15,
    armor: "structure",
    radius: 20,
    fw: 1,
    fh: 1,
    vision: 250,
    drain: 10,
    power: 0,
    cargo: 0,
    projectile: "shell",
    building: true,
    prereq: "barracks",
  },
  silo: {
    kind: "silo",
    name: "Ion Silo",
    blurb: "Raises how much glow you can bank.",
    cost: 250,
    time: 7,
    hp: 420,
    speed: 0,
    range: 0,
    rof: 0,
    dmg: 0,
    armor: "structure",
    radius: 36,
    fw: 2,
    fh: 2,
    vision: 160,
    drain: 4,
    power: 0,
    cargo: 0,
    projectile: "none",
    building: true,
    prereq: "refinery",
  },
  rifle: {
    kind: "rifle",
    name: "Rifle Team",
    blurb: "Fast eyes. Weak against armor.",
    cost: 100,
    time: 5,
    hp: 58,
    speed: 82,
    range: 112,
    rof: 0.68,
    dmg: 9,
    armor: "light",
    radius: 10,
    fw: 0,
    fh: 0,
    vision: 210,
    drain: 0,
    power: 0,
    cargo: 0,
    projectile: "bolt",
    building: false,
    builtBy: "barracks",
  },
  rocket: {
    kind: "rocket",
    name: "Rocket Team",
    blurb: "Slow, and cruel to tanks and walls.",
    cost: 240,
    time: 8,
    hp: 72,
    speed: 66,
    range: 156,
    rof: 1.45,
    dmg: 24,
    armor: "light",
    radius: 11,
    fw: 0,
    fh: 0,
    vision: 220,
    drain: 0,
    power: 0,
    cargo: 0,
    projectile: "rocket",
    building: false,
    builtBy: "barracks",
  },
  harvester: {
    kind: "harvester",
    name: "Hauler",
    blurb: "Pulls ionite and docks at a foundry.",
    cost: 800,
    time: 13,
    hp: 420,
    speed: 54,
    range: 0,
    rof: 0,
    dmg: 0,
    armor: "heavy",
    radius: 15,
    fw: 0,
    fh: 0,
    vision: 190,
    drain: 0,
    power: 0,
    cargo: 700,
    projectile: "none",
    building: false,
    builtBy: "refinery",
  },
  lancer: {
    kind: "lancer",
    name: "Lancer",
    blurb: "Line tank. The spine of a push.",
    cost: 550,
    time: 10,
    hp: 280,
    speed: 72,
    range: 148,
    rof: 1.02,
    dmg: 20,
    armor: "heavy",
    radius: 14,
    fw: 0,
    fh: 0,
    vision: 230,
    drain: 0,
    power: 0,
    cargo: 0,
    projectile: "shell",
    building: false,
    builtBy: "bay",
  },
  bastion: {
    kind: "bastion",
    name: "Bastion",
    blurb: "Siege hull. Slow, and it cracks spires.",
    cost: 1000,
    time: 15,
    hp: 520,
    speed: 46,
    range: 164,
    rof: 1.38,
    dmg: 36,
    armor: "heavy",
    radius: 17,
    fw: 0,
    fh: 0,
    vision: 230,
    drain: 0,
    power: 0,
    cargo: 0,
    projectile: "shell",
    building: false,
    builtBy: "bay",
  },
};

export const BUILD_MENU: Kind[] = ["relay", "refinery", "barracks", "bay", "turret", "silo"];
export const UNIT_MENU: Kind[] = ["rifle", "rocket", "harvester", "lancer", "bastion"];

export function scaledDamage(from: Kind, armor: Armor): number {
  const d = DEFS[from].dmg;
  if (from === "rifle" && armor === "heavy") return d * 0.42;
  if (from === "rifle" && armor === "structure") return d * 0.38;
  if (from === "rocket" && (armor === "heavy" || armor === "structure")) return d * 1.65;
  if (from === "rocket" && armor === "light") return d * 0.7;
  if (from === "lancer" && armor === "light") return d * 0.85;
  if (from === "bastion" && armor === "structure") return d * 1.35;
  if (from === "turret" && armor === "light") return d * 1.15;
  return d;
}

export function onlineLine(kind: Kind): string {
  switch (kind) {
    case "relay":
      return "Relay is on the grid.";
    case "refinery":
      return "Foundry online. Send the haulers.";
    case "barracks":
      return "Barracks lit. Boots on the glass.";
    case "bay":
      return "Vehicle bay accepts steel.";
    case "turret":
      return "Turret has a lane.";
    case "silo":
      return "Silo will hold the glow.";
    case "rifle":
      return "Rifle team out.";
    case "rocket":
      return "Rocket team out.";
    case "harvester":
      return "Hauler rolling.";
    case "lancer":
      return "Lancer crew mounted.";
    case "bastion":
      return "Bastion heavy, on the line.";
    default:
      return DEFS[kind].name + " ready.";
  }
}
