import { WebGLRenderer } from "three";

export function useThreeRender(
  alpha: boolean = true,
  canvas: HTMLCanvasElement,
  pixelRatio: number = window.devicePixelRatio,
  size: number[] = [0, 0],
) {
  const renderer = new WebGLRenderer({
    canvas: canvas,
    alpha: alpha,
  });

  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(size[0], size[1]);

  // document.body.appendChild(renderer.domElement);

  return renderer;
}
