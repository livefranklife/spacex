export type Rocket = {
  id: string;
  name: string;
  family: string;
  role: string;
  heightMeters: number;
  diameterMeters: number;
  massTons: number;
  payloadLeoTons: number;
  payloadGtoTons?: number;
  payloadMarsTons?: number;
  stages: number;
  engines: string;
  thrustKn: number;
  reusable: boolean;
  status: "operational" | "in-development" | "retired";
  firstFlight: string;
  description: string;
  inspiration: string;
};

export const ROCKETS: Rocket[] = [
  {
    id: "starship",
    name: "Starship",
    family: "Starship / Super Heavy",
    role: "Fully reusable super heavy‑lift launch system",
    heightMeters: 120,
    diameterMeters: 9,
    massTons: 5000,
    payloadLeoTons: 150,
    payloadMarsTons: 100,
    stages: 2,
    engines: "33 × Raptor (booster), 6 × Raptor (ship)",
    thrustKn: 75900,
    reusable: true,
    status: "in-development",
    firstFlight: "April 20, 2023",
    description:
      "Starship is designed to be the most powerful launch vehicle ever built, enabling fully reusable transportation to Earth orbit, the Moon, Mars and beyond.",
    inspiration:
      "Every Starship flight test brings the idea of a multiplanetary future a step closer—from rapid reuse on Earth to cargo runs to Mars.",
  },
  {
    id: "falcon-9",
    name: "Falcon 9",
    family: "Falcon",
    role: "Partially reusable medium‑lift launch vehicle",
    heightMeters: 70,
    diameterMeters: 3.7,
    massTons: 549,
    payloadLeoTons: 22.8,
    payloadGtoTons: 8.3,
    stages: 2,
    engines: "9 × Merlin (booster), 1 × Merlin Vacuum (upper stage)",
    thrustKn: 7607,
    reusable: true,
    status: "operational",
    firstFlight: "June 4, 2010",
    description:
      "Falcon 9 is the first orbital‑class rocket capable of reflight. It delivers crew, cargo and constellations like Starlink to orbit with a proven flight record.",
    inspiration:
      "Dozens of Falcon 9 boosters have returned from the edge of space, proving that rockets can land, refuel and fly again—changing access to orbit.",
  },
  {
    id: "falcon-heavy",
    name: "Falcon Heavy",
    family: "Falcon",
    role: "Heavy‑lift launch vehicle",
    heightMeters: 70,
    diameterMeters: 12.2,
    massTons: 1420,
    payloadLeoTons: 63.8,
    payloadGtoTons: 26.7,
    stages: 2,
    engines: "27 × Merlin (cores), 1 × Merlin Vacuum (upper stage)",
    thrustKn: 22819,
    reusable: true,
    status: "operational",
    firstFlight: "February 6, 2018",
    description:
      "Falcon Heavy is one of the most powerful operational rockets in the world by thrust, capable of lifting large payloads to a wide range of orbits.",
    inspiration:
      "From launching sports cars toward Mars to complex national security payloads, Falcon Heavy missions showcase the drama and scale of modern rocketry.",
  },
];


