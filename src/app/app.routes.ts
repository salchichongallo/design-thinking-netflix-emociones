import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () =>
      import("../pages/home/home.page").then((m) => m.HomePage),
  },
  {
    path: "video/:videoName",
    pathMatch: "full",
    loadComponent: () =>
      import("../pages/video/video.page").then((m) => m.VideoPage),
  },
];
