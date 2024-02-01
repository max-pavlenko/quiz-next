import {ComponentProps, useEffect, useRef} from 'react';
import {UniqueNode} from '@/app/shared/models/unique';

type Props<T> = {
   items: T[];
   currentSlide: number;
} & ComponentProps<'div'>;

const Carousel = <T extends UniqueNode>({items, currentSlide, className, ...props}: Props<T>) => {
   const loseFocusRef = useRef<HTMLButtonElement>(null);
   const translateBy = currentSlide / items.length * 100;
   
   useEffect(() => {
      loseFocusRef.current?.focus()
   }, [currentSlide]);
   
   return (
       <div className={`${className} flex flex-col overflow-x-hidden`} {...props}>
          <ul className="flex gap-0.5 relative" style={{translate: `-${translateBy}% 0`, width: `${items.length * 100}%`}}>
             {items.map(({id, node}) => (
                 <li key={id} className="w-full">
                    {node}
                 </li>
             ))}
          </ul>
          <button ref={loseFocusRef} />
       </div>
   );
};

export default Carousel;
