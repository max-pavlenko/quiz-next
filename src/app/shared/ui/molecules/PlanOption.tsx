import {ComponentProps, FC} from 'react';
import Radio from '@/app/shared/ui/atoms/Radio';
import PriceTag from '@/app/shared/ui/atoms/PriceTag';
import {Plan} from '@/app/features/landing/models/plan';

type Props = Pick<Plan, 'isPopular'> & ComponentProps<typeof Radio> & ComponentProps<typeof PriceTag>

const PlanOption: FC<Props> = ({isPopular, price, ...props}) => {
   return (
       <div className={`outline overflow-hidden rounded-lg outline-2 ${props.checked ? 'outline-primary' : 'outline-transparent'}`}>
          {isPopular && <div className={`${props.checked ? 'bg-primary' : 'bg-text'} text-center uppercase
                                         py-1 px-3 text-white text-xs font-bold`}>
              Most popular
          </div>}
          <div className={`p-4 bg-white-100 flex`}>
             <Radio {...props}/>
             <PriceTag price={price}/>
          </div>
       </div>
   );
};

export default PlanOption;
