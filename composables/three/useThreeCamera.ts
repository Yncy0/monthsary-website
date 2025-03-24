import { PerspectiveCamera, Scene } from "three";

function useThreePerspectiveCamera(
  fov: number,
  aspect: number,
  near: number,
  far: number,
  position: number[] = [0, 0, 0]
) {
  const camera = new PerspectiveCamera(fov, aspect, near, far);
  const scene = new Scene();

  camera.position.set(position[0], position[1], position[2]);

  scene.add(camera);

  return camera;
}

export default useThreePerspectiveCamera;
