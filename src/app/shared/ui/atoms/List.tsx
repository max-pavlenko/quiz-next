import {ComponentProps, ReactNode} from 'react';
import {isUnique, Unique} from '@/app/shared/models/unique';

type Props<T> = {
   items: T[],
   children: (item: T, i: number) => ReactNode,
} & Omit<ComponentProps<'ul'>, 'children'>;

const List = <T extends Unique | string>({items, children, className, ...props}: Props<T>) => {
   return (
       <ul className={`flex rounded-xl w-full flex-col border border-[#DFE5EF] ${className}`} {...props}>
          {items.map((item, i) => {
             const id = isUnique(item) ? item.id : `${item}`;
             return (
                 <li key={id} className="flex last:border-none font-medium items-center border-b border-[#DFE5EF] p-3">
                    {children(item, i)}
                 </li>
             );
          })}
       </ul>
   );
};

export default List;
