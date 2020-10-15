import { AEnum, BEnum } from './enums'

const a: AEnum = AEnum.A
const b: (keyof typeof BEnum) = BEnum.B // undefined
console.log('a', a)
console.log('b', b)