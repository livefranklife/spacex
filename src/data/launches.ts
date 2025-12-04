export type Launch = {
  id: string;
  name: string;
  vehicle: string;
  missionType: string;
  site: string;
  date: string;
  unix: number;
  status: "upcoming" | "success" | "failure";
  webcast?: string;
};

const base = (partial: Partial<Launch>): Launch => ({
  id: "",
  name: "",
  vehicle: "",
  missionType: "",
  site: "",
  date: "",
  unix: 0,
  status: "upcoming",
  ...partial,
});

export const UPCOMING_LAUNCHES: Launch[] = [
  base({
    id: "starship-orbital-2",
    name: "Starship Flight Test 2",
    vehicle: "Starship",
    missionType: "Flight Test",
    site: "Starbase, Texas",
    date: "NET Jan 2026",
    unix: 1764547200,
    status: "upcoming",
  }),
  base({
    id: "falcon9-starlink-50",
    name: "Starlink Group 10‑50",
    vehicle: "Falcon 9",
    missionType: "Communications",
    site: "LC‑40, Cape Canaveral",
    date: "Dec 2025",
    unix: 1761782400,
    status: "upcoming",
  }),
];

export const PAST_LAUNCHES: Launch[] = [
  base({
    id: "starship-orbital-1",
    name: "Starship Integrated Flight Test 1",
    vehicle: "Starship",
    missionType: "Flight Test",
    site: "Starbase, Texas",
    date: "Apr 20, 2023",
    unix: 1681987200,
    status: "failure",
    webcast: "https://www.youtube.com/watch?v=0t2xwATzXqE",
  }),
  base({
    id: "f9-crew-7",
    name: "Crew‑7",
    vehicle: "Falcon 9",
    missionType: "Crewed",
    site: "LC‑39A, Kennedy Space Center",
    date: "Aug 26, 2023",
    unix: 1693027200,
    status: "success",
    webcast: "https://www.youtube.com/watch?v=J7ehQd6mTpw",
  }),
];

export const ALL_LAUNCHES: Launch[] = [...UPCOMING_LAUNCHES, ...PAST_LAUNCHES].sort(
  (a, b) => b.unix - a.unix
);


