import {ComponentProps, FC, PropsWithChildren} from 'react';

type Props = {
   percentage: number;
   size?: number;
   radius?: number;
   strokeWidth?: number;
} & ComponentProps<'div'>;

const Loader: FC<PropsWithChildren<Props>> = ({percentage, children, className, radius = 100, size = radius * 2, strokeWidth = 12, ...props}) => {
   const strokeDasharray = 2 * Math.PI * radius;
   const strokeDashoffset = strokeDasharray * ((100 - percentage) / 100);
   
   return (
       <div className={`relative w-min ${className}`} {...props}>
          <svg width={size} height={size} className='-rotate-90 overflow-visible' version="1.1" xmlns="http://www.w3.org/2000/svg">
             <circle r={radius} cx={radius} cy={radius} fill="transparent" stroke="#ffffff" strokeWidth={strokeWidth} strokeDasharray={`${strokeDasharray}px`} strokeDashoffset="0"/>
             <circle r={radius} cx={radius} cy={radius} stroke="#0cbd68" strokeWidth={strokeWidth} strokeLinecap="round" strokeDashoffset={`${strokeDashoffset}px`} fill="transparent" strokeDasharray={`${strokeDasharray}px`}/>
          </svg>
          <div className='text-[40px] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
             {children ? children : `${percentage}%`}
          </div>
       </div>
   );
};

export default Loader;
