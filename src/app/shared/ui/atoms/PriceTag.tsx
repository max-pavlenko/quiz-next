import {FC} from 'react';

type Props = {
   price: number
};

const PriceTag: FC<Props> = ({price}) => {
   return (
       <b className="py-2 font-bold px-3 bg-white-200 rounded-[4px] w-min flex gap-1">
          <span>$</span>
          <span className='text-[40px] leading-10 font-extrabold'>{price}</span>
       </b>
   );
};

export default PriceTag;
