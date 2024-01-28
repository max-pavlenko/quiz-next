import {FC} from 'react';
import Heading from '@/app/shared/ui/atoms/Heading';
import Image from 'next/image';
import Button from '@/app/shared/ui/atoms/Button';
import {Completable} from '@/app/shared/models/completable';
import {getFormattedDate} from '@/app/shared/constants/date';

type Props = Completable;

const ProgressStats: FC<Props> = ({onCompleted}) => {
   const handleContinue = () => {
      onCompleted();
   };
   
   return (
       <div className="flex flex-col gap-6">
          <Heading>See your Spiritual Growth progress by {getFormattedDate('short')}</Heading>
          <Image className="mx-auto" src="/icons/chart.svg" alt="progress chart" width={414} height={431}/>
          <Button onClick={handleContinue} className="mt-auto">Continue</Button>
       </div>
   );
};

export default ProgressStats;
