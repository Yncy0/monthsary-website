import { AmbientLight, DirectionalLight, PointLight } from "three";
import * as THREE from "three";

export function useThreeAmbientLight(
  rgb: THREE.ColorRepresentation,
  intensity: number = 1,
) {
  const light = new AmbientLight(rgb, intensity);

  return light;
}

export function useThreeDirectionalLight(
  rgb: THREE.ColorRepresentation,
  intensity: number,
  position: number[] = [0, 0, 0],
) {
  const light = new DirectionalLight(rgb, intensity);
  light.position.set(position[0], position[1], position[2]);

  return light;
}

export function useThreePointLight(
  rgb: THREE.ColorRepresentation,
  intensity: number,
  distance: number,
  position: number[] = [0, 0, 0],
) {
  const light = new PointLight(rgb, intensity, distance);

  light.position.set(position[0], position[1], position[2]);

  return light;
}
