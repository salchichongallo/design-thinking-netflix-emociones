export interface AppVideo {
  name: string;
  icon: string;
  text: string;
  getUrl: () => string;
  question: string;
}

export const videos: AppVideo[] = [
  {
    name: "pijama_rayas-ira-confusion-amenaza.mp4",
    icon: "🔥",
    text: "Furioso",
    question: "¿Te sentiste furioso? 🔥",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    name: "monja-enojo-frustracion-miedo.mp4",
    icon: "😨",
    text: "Con miedo",
    question: "¿Te sentiste con miedo? 😨",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    name: "lara_croft-curiosidad-confusion-comprension.mp4",
    icon: "🔎",
    text: "Curioso",
    question: "¿Te sentiste curioso? 🔎",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    name: "retorno_guerra-traicion-ira-dolor.mp4",
    icon: "💔",
    text: "Triste",
    question: "¿Te sentiste triste? 💔",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    name: "principe_del_rap-resentimiento-orgullo-determinacion.mp4",
    icon: "💪",
    text: "Motivado",
    question: "¿Te sentiste motivado? 💪",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
];

export const getByName = (name: string) =>
  videos.find((it) => it.name === name)!;
