import { PerspectiveCamera } from "three";

export function useThreePerspectiveCamera(
  fov: number,
  aspect: number = window.innerWidth / window.innerHeight,
  near: number,
  far: number,
  position: number[] = [0, 0, 0],
) {
  const camera = new PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(position[0], position[1], position[2]);

  return camera;
}
