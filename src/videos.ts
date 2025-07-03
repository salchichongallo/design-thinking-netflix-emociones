export interface AppVideo {
  name: string;
  icon: string;
  text: string;
  getUrl: () => string;
}

export const videos: AppVideo[] = [
  {
    name: "pijama_rayas-ira-confusion-amenaza.mp4",
    icon: "🔥",
    text: "Ira",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    name: "monja-enojo-frustracion-miedo.mp4",
    icon: "😨",
    text: "Miedo",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    name: "lara_croft-curiosidad-confusion-comprension.mp4",
    icon: "🔎",
    text: "Curiosidad",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    name: "retorno_guerra-traicion-ira-dolor.mp4",
    icon: "💔",
    text: "Dolor",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    name: "principe_del_rap-resentimiento-orgullo-determinacion.mp4",
    icon: "💪",
    text: "Determinación",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
];

export const getByName = (name: string) =>
  videos.find((it) => it.name === name)!;
