import {FC} from 'react';
import Heading from '@/app/shared/ui/atoms/Heading';
import {REVIEWS} from '@/app/shared/constants/texts';
import Review from '@/app/shared/ui/atoms/Review';

const Reviews: FC = () => {
   return (
       <section className="grid gap-3">
          <Heading element="h3">Users love App!</Heading>
          {REVIEWS.map((review) => (
              <Review key={review.id} review={review}/>
          ))}
       </section>
   );
};

export default Reviews;
