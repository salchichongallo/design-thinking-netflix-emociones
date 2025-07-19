import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () =>
      import("../landing/landing.page").then((m) => m.LandingPage),
  },
  {
    path: "inicio",
    pathMatch: "full",
    loadComponent: () =>
      import("../prototype/pages/home/home.page").then((m) => m.HomePage),
  },
  {
    // TODO: remove page
    path: "video/:videoName",
    pathMatch: "full",
    loadComponent: () =>
      import("../prototype/pages/video/video.page").then((m) => m.VideoPage),
  },
];
