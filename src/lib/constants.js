const areas = [
  { value: "1", label: "S:t Knut, Malmö kommun" },
  { value: "2", label: "Möllevången, Malmö komun" },
  { value: "3", label: "Västra Hamnen, Malmö komun" },
]

export const questions = [
  {
    text: "Ta reda på hur nära du är ditt drömboende",
    description: "Vad vill du köpa?",
    buttons: ["Hus", "Lägenhet"],
  },
  {
    text: "Berätta mer om din framtida bostad",
    description: "Vad kostar den?",
    range: [100000, 10000000],
    defaultValue: [1500000, 2500000],
  },
  {
    text: "Hur stora är dina besparingar?",
    description: "Ditt svar skyddas av banksekretessen",
    range: [0, 1000000],
    defaultValue: 75000,
  },
  {
    text: "Hur mycket sparar du varje månad?",
    description: "Ditt svar skyddas av banksekretessen",
    range: [0, 25000],
    defaultValue: 3500,
  },
  {
    text: "Var är din nya bostad?",
    description: "Skriv vilket område den befinner sig i",
    options: areas,
  },
  {
    text: "Dina kontaktuppgifter",
    description: "Ange din e-post för att se ditt resultat",
  },
]
