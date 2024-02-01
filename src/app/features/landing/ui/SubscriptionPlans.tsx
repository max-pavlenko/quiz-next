import {ChangeEventHandler, FC} from 'react';
import Heading from '@/app/shared/ui/atoms/Heading';
import Button from '@/app/shared/ui/atoms/Button';
import Link from 'next/link';
import {Handler} from '@/app/shared/models/utils';
import {PLANS} from '@/app/features/landing/constants/plans';
import PlanOption from '@/app/shared/ui/molecules/PlanOption';

type Props = {
   onChange: Handler<string>;
   planName: string;
};

const SubscriptionPlans: FC<Props> = ({onChange, planName}) => {
   const handlePlanChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      onChange(e.target.value);
   }
   
   return (
       <section className="grid gap-4">
          <Heading element="h3">Choose your plan</Heading>
          <div className="grid gap-2">
             {PLANS.map(({text, price, isPopular}) => (
                 <PlanOption key={text} onChange={handlePlanChange} checked={text === planName} isPopular={isPopular} price={price} value={text}>
                    {text}
                 </PlanOption>
             ))}
          </div>
          <Button>Get my plan</Button>
          <p className="text-[10px] text-center text-white-800">
             You are enrolling in a {planName} subscription to
             &nbsp;<Link className="font-medium text-text" href="/">https://awesomeapp.com/subscription</Link> with the discount price
             $29.99.You agree that the plan you selected will automatically be extended at
             the full price for successive renewal periods and you will be charged $99.99 every 3 months until you cancel the subscription. Payments
             will be charged from the card you specified here. You can cancel your subscription by contacting our customer support team via email at
             support@awesomeapp.com Subscription Policy. The charge will appear on your bill as "awesomeapp"
          </p>
       </section>
   );
};

export default SubscriptionPlans;
