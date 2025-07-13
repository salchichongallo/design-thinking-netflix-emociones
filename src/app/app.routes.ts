import { Routes } from "@angular/router";

const routes: Routes = [];

const ONLY_LANDING = true;
if (ONLY_LANDING) {
  routes.push({
    path: "",
    pathMatch: "full",
    loadComponent: () =>
      import("../pages/landing/landing.page").then((m) => m.LandingPage),
  });
} else {
  routes.push(
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
    }
  );
}

export { routes };
