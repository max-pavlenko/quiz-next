import {FC} from 'react';
import Heading from '@/app/shared/ui/atoms/Heading';
import List from '@/app/shared/ui/atoms/List';
import {TEXTS} from '@/app/shared/constants/texts';

const Statistics: FC = () => {
   return (
       <section className="grid gap-4">
          <Heading element="h3">People just like you achieved great results with App!</Heading>
          <List className="shadow-medium" items={TEXTS.STATS}>
             {({text, percentage}) => (
                 <div className="flex gap-3 w-full text-black font-semibold items-center">
                    <span className="text-[32px] basis-[9%] text-end font-detail">{percentage}%</span>
                    <div className="text-sm">{text}</div>
                 </div>
             )}
          </List>
       </section>
   );
};

export default Statistics;
