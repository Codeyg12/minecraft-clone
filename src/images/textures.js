import { TextureLoader } from "three";
import { dirtImg, glassImg, grassImg, logImg, woodImg } from "./index";

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const glassTexture = new TextureLoader().load(glassImg);
const grassTexture = new TextureLoader().load(grassImg);
const woodTexture = new TextureLoader().load(woodImg);
const groundTexture = new TextureLoader().load(grassImg);

export {
  dirtTexture,
  logTexture,
  glassTexture,
  grassTexture,
  woodTexture,
  groundTexture,
};
