import {FC} from 'react';
import Image from 'next/image';
import {Review} from '@/app/features/landing/models/review';
import {getFormattedDate} from '@/app/shared/constants/date';

type Props = {
   review: Review;
};

const Review: FC<Props> = ({review: {rating, text, date, author}}) => {
   return (
       <figure className="p-3 text-sm grid gap-2 text-black shadow-medium rounded-lg">
          <div className="flex flex-col">
             <div className='flex justify-between'>
                <div className="font-bold">
                   {author}
                </div>
                <div className="flex gap-0.5">
                   {[...new Array(rating)].map((_, i) => (
                       <Image src="/icons/star.svg" key={i} alt="star" width={10} height={11}/>
                   ))}
                </div>
             </div>
             <div className="text-xs text-[rgba(0,_0,_0,_0.48)] ">
                {getFormattedDate()}
             </div>
          </div>
          <figcaption>
             {text}
          </figcaption>
       </figure>
   );
};

export default Review;
