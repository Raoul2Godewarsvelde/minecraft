import { TextureLoader, NearestFilter, LinearMipMapLinearFilter  } from 'three'

import dirtImg from './Assets/Textures/dirt.jpeg'
import grassImg from './Assets/Textures/grass.jpeg'
import glassImg from './Assets/Textures/glass.png'
import logImg from './Assets/Textures/log.jpeg'
import woodImg from './Assets/Textures/wood.png'

export const dirt = new TextureLoader().load(dirtImg)
export const grass = new TextureLoader().load(grassImg)
export const glass = new TextureLoader().load(glassImg)
export const wood = new TextureLoader().load(woodImg)
export const log = new TextureLoader().load(logImg)

dirt.magFilter = NearestFilter
dirt.minFilter = LinearMipMapLinearFilter
grass.magFilter = NearestFilter
grass.minFilter = LinearMipMapLinearFilter
glass.magFilter = NearestFilter
glass.minFilter = LinearMipMapLinearFilter
wood.magFilter = NearestFilter
wood.minFilter = LinearMipMapLinearFilter
log.magFilter = NearestFilter
log.minFilter = LinearMipMapLinearFilter