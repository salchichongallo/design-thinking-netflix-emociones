export interface AppVideo {
  id: string;
  name: string;
  icon: string;
  text: string;
  emotion: string;
  getUrl: () => string;
  question: string;
  thumbnail: string;
  movieName: string;
  netflixUrl: string;
}

export const videos: AppVideo[] = [
  {
    id: "furia",
    name: "pijama_rayas-ira-confusion-amenaza.mp4",
    icon: "🔥",
    emotion: "Furia",
    text: "Furioso",
    movieName: "El niño con el pijama de rayas",
    question: "¿Te sentiste furioso? 🔥",
    thumbnail: "/thumbnails/el-nino-con-el-pijama-de-rayas.avif",
    netflixUrl: "https://www.netflix.com/co/title/70101375",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    id: "intriga",
    name: "lara_croft-curiosidad-confusion-comprension.mp4",
    icon: "🧐",
    text: "Intrigado",
    emotion: "Intriga",
    question: "¿Te sentiste curioso? 🧐",
    movieName: "Tomb Raider: Las aventuras de Lara Croft",
    thumbnail: "/thumbnails/tomb-raider.avif",
    netflixUrl: "https://www.netflix.com/co/title/81361105",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    id: "miedo",
    name: "monja-enojo-frustracion-miedo.mp4",
    icon: "😨",
    emotion: "Miedo",
    text: "Con miedo",
    question: "¿Sentiste miedo? 😨",
    movieName: "Serie: 1923",
    thumbnail: "/thumbnails/1923.avif",
    netflixUrl: "https://www.netflix.com/co/title/81660279",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    id: "triste",
    name: "retorno_guerra-traicion-ira-dolor.mp4",
    icon: "😢",
    text: "Triste",
    emotion: "Triste",
    question: "¿Te sentiste triste? 😢",
    movieName: "Hermanos",
    netflixUrl: "https://www.netflix.com/co",
    thumbnail: "/thumbnails/brothers.avif",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
  {
    id: "motivado",
    name: "principe_del_rap-resentimiento-orgullo-determinacion.mp4",
    icon: "💪",
    text: "Motivado",
    emotion: "Motivado",
    question: "¿Te sentiste motivado? 💪",
    movieName: "Serie: El príncipe de Bel-Air",
    netflixUrl: "https://www.netflix.com/co/title/70143818",
    thumbnail: "/thumbnails/the-fresh-prince-of-bel-air.avif",
    getUrl() {
      return `/videos/${this.name}`;
    },
  },
];

export const getByName = (name: string) =>
  videos.find((it) => it.name === name)!;

export const getById = (id: string) => videos.find((it) => it.id === id)!;
