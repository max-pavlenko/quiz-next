import {ReactNode} from 'react';

export interface Unique {
   id: string | number;
}
export type UniqueNode = Unique & {node: ReactNode}

export function isUnique(arg: unknown): arg is Unique {
   return !!arg && typeof arg === 'object' && 'id' in arg;
}
