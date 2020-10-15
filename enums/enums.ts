// https://github.com/microsoft/TypeScript/issues/17592

export enum BaseEnum {
  DEFAULT = 'DEFAULT',
}
export enum NewEnum {
  A = 'A',
  B = 'B',
  C = 'C',
}

//----------------------------------------------------------------
export type AEnum = BaseEnum | NewEnum;
export const AEnum = {...BaseEnum, ...NewEnum};

//----------------------------------------------------------------
enum E {}
function enumerate<T1 extends typeof E, T2 extends typeof E>(e1: T1, e2: T2) {
  enum Events {}
  return Events as typeof Events & T1 & T2;
}

export const BEnum = enumerate(BaseEnum, NewEnum);

enum BasicEvents {
  Start = 'Start',
  Finish = 'Finish'
}
enum AdvEvents {
  Pause = 'Pause',
  Resume = 'Resume'
}
type Events = BasicEvents | AdvEvents;
const Events = {...BasicEvents, ...AdvEvents};

let e: Events = Events.Pause;
console.log(e)