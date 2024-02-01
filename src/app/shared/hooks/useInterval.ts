import {useEffect, useRef} from 'react';

export function useInterval(callback: () => unknown, delay: number) {
   const savedCallback = useRef<Function>();
   const id = useRef<NodeJS.Timeout>();
   const cleanUp = () => clearInterval(id.current);
   
   useEffect(() => {
      savedCallback.current = callback;
   }, [callback]);
   
   useEffect(() => {
      const tick = () => savedCallback.current?.();
      if (delay != null) id.current = setInterval(tick, delay);
      
      return cleanUp;
   }, [delay]);
   
   return cleanUp;
}
