import { AmbientLight, PointLight, Scene } from "three";
import * as THREE from "three";

function useThreeAmbientLight(
  rgb: THREE.ColorRepresentation = 0xffffff,
  intensity: number = 1
) {
  const light = new AmbientLight(rgb, intensity);

  return light;
}

function useThreePointLight(
  rgb: THREE.ColorRepresentation,
  intensity: number,
  distance: number,
  position: number[] = [0, 0, 0]
) {
  const light = new PointLight(rgb, intensity, distance);

  light.position.set(position[0], position[1], position[2]);

  return light;
}

export { useThreeAmbientLight, useThreePointLight };
