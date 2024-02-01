import {Unique} from '@/app/shared/models/unique';
import {uniquify} from '@/app/shared/utils/uniquify';
import {Review} from '@/app/features/landing/models/review';

export const TEXTS = {
   PLAN_PROCESSING: [
       'Aligning with your goals',
       'Reviewing your answers',
       'Picking Bible verses and prayers for you',
       'Finalizing your personalized plan'
   ],
   ADVANTAGES: [
      '️You wake up feeling motivated and energized',
      'You start your day in harmony with prayer',
      'Your relationships are stronger than ever',
      'You’re commited to spiritual growth and self-improvement',
      'You grow closer to God through everyday Bible reading',
   ],
   STATS: uniquify([
      {text: 'of users were able to feel the power of prayer after just 6 weeks', percentage: 71},
      {text: 'of users started to have a meaningful daily routine and peaceful mind', percentage: 65},
      {text: 'of users struggled with finding time for daily praying', percentage: 47}
   ]),
} satisfies Record<string, string[] | (Unique & Record<string, unknown>)[]>;

export const REVIEWS = uniquify([
   {
      text: 'All I want to know if you are working on another agent A game or chapters. Loved this game!',
      author: 'Guadalupe Hudson',
      rating: 5,
      date: new Date('2 January 2024')
   },
   {
      text: 'I’ve played this over and over and I love it!',
      author: 'Bobby Wintheiser',
      rating: 5,
      date: new Date('27 December 2023')
   },
   {
      text: 'Soooo fun I recommend. Easy and fun I thought it was a little challenging but if it wasn’t it would not be fun I recommend',
      author: 'Colleen Beahan',
      rating: 5,
      date: new Date('19 December 2023')
   },
]) satisfies Review[];
