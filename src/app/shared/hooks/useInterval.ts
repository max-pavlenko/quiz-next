import {useEffect, useRef} from 'react';

export function useInterval(callback: () => unknown, delay: number) {
   const savedCallback = useRef<Function>();
   const id = useRef<NodeJS.Timeout>();
   
   useEffect(() => {
      savedCallback.current = callback;
   }, [callback]);
   
   useEffect(() => {
      function tick() {
         savedCallback.current?.();
      }
      
      if (delay != null) {
         id.current = setInterval(tick, delay);
         return () => clearInterval(id.current);
      }
   }, [delay]);
   
   return id.current;
}
