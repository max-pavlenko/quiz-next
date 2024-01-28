import {useMemo, useState} from 'react';
import Carousel from '@/app/shared/ui/atoms/Carousel';
import PlanCreation from '@/app/features/quiz/ui/PlanCreation';
import EmailFunnel from '@/app/features/quiz/ui/EmailFunnel';
import ProgressStats from '@/app/features/quiz/ui/ProgressStats';
import {useRouter} from 'next/router';
import {UniqueNode} from '@/app/shared/models/unique';
import {AuthService} from '@/app/shared/services/auth';
import {uniquify} from '@/app/shared/utils/uniquify';

export default function IndexPage() {
   const [currentSlide, setCurrentSlide] = useState(0);
   const router = useRouter();
   
   const incrementSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % quizSlides.length);
   };
   
   const completeQuiz = () => {
      router.push('/home');
   };
   
   const handleEmailFunnelComplete = async (email: string) => {
      incrementSlide();
      await AuthService.register(email);
   };
   
   const quizSlides = useMemo<UniqueNode[]>(() => uniquify([
      {node: <PlanCreation onCompleted={incrementSlide}/>,},
      {node: <EmailFunnel onCompleted={handleEmailFunnelComplete}/>,},
      {node: <ProgressStats onCompleted={completeQuiz}/>,},
   ]), []);
   
   return (
       <Carousel items={quizSlides} currentSlide={currentSlide}/>
   );
}
