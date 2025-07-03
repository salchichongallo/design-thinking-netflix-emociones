export class FullScreenService {
  static async enter(element: HTMLElement) {
    if (element.requestFullscreen) {
      await element.requestFullscreen().catch((err) => {
        console.warn("No se pudo activar fullscreen:", err);
      });
    } else {
      console.warn("Fullscreen API no soportada en este navegador.");
    }
  }

  static async exit() {
    if (document.fullscreenElement) {
      await document.exitFullscreen().catch((err) => {
        console.warn("No se pudo salir de fullscreen:", err);
      });
    }
  }
}
