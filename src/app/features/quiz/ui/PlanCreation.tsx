import {FC, useState} from 'react';
import Loader from '@/app/shared/ui/atoms/Loader';
import List from '@/app/shared/ui/atoms/List';
import {TEXTS} from '@/app/shared/constants/texts';
import {useInterval} from '@/app/shared/hooks/useInterval';
import Heading from '@/app/shared/ui/atoms/Heading';
import {Completable} from '@/app/shared/models/completable';

type Props = Completable;
const CREATION_DURATION_MS = 2000;
const TICKS = 25;

const PlanCreation: FC<Props> = ({onCompleted}) => {
   const [progress, setProgress] = useState(0);
   const id = useInterval(incrementProgress, CREATION_DURATION_MS / TICKS);
   
   function incrementProgress() {
      if (progress >= 100) {
         clearInterval(id);
         onCompleted();
         return;
      }
      setProgress((prev) => prev + 100 / TICKS);
   }
   
   return (
       <div className="flex flex-col items-center gap-6">
          <Heading>We are crafting your spiritual growth plan</Heading>
          <Loader percentage={progress}/>
          <List items={TEXTS.PLAN_PROCESSING}>
             {(item) => (
                 <>
                    <Loader className='mr-3' radius={12} strokeWidth={2} percentage={progress}> </Loader>
                    {item}
                 </>
             )}
          </List>
       </div>
   );
};

export default PlanCreation;
