import {FC, useState} from 'react';
import SubscriptionPlans from '@/app/features/landing/ui/SubscriptionPlans';
import Advantages from '@/app/features/landing/ui/Advantages';
import Statistics from '@/app/features/landing/ui/Statistics';
import Reviews from '@/app/features/landing/ui/Reviews';
import {Handler} from '@/app/shared/models/utils';

const HomePage: FC = () => {
   const [planName, setPlanName] = useState('');
   
   const handlePlanChange: Handler<string> = (newPlanName) => {
      setPlanName(newPlanName);
   };
   
   return (
       <div className="grid gap-12">
          <SubscriptionPlans onChange={handlePlanChange} planName={planName}/>
          <Advantages/>
          <Statistics/>
          <Reviews/>
          <SubscriptionPlans onChange={handlePlanChange} planName={planName}/>
       </div>
   );
};

export default HomePage;
