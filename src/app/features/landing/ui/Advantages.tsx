import {FC} from 'react';
import Heading from '@/app/shared/ui/atoms/Heading';
import List from '@/app/shared/ui/atoms/List';
import {TEXTS} from '@/app/shared/constants/texts';
import Image from 'next/image';

const Advantages: FC = () => {
   return (
       <section className="grid gap-3">
          <Heading element="h3">What you get</Heading>
          <List className='shadow-medium' items={TEXTS.ADVANTAGES}>
             {(item) => (
                 <div className="flex gap-3 items-start">
                    <Image src="/icons/check.svg" alt="check" width={24} height={24}/>
                    <span className='font-medium'>{item}</span>
                 </div>
             )}
          </List>
       </section>
   );
};

export default Advantages;
