import {ComponentProps, FC, PropsWithChildren} from 'react';

type Props = ComponentProps<'button'>;

const Button: FC<PropsWithChildren<Props>> = ({children, className, ...props}) => {
   return (
       <button className={`px-6 text-lg first-letter:capitalize font-semibold border-transparent border-2 text-center
                           disabled:border-[#E4E7EB] disabled:bg-white disabled:text-[#A7A7A7]
                           text-white bg-primary py-4 w-full rounded-xl shadow-sm ${className}`} {...props}>
          {children}
       </button>
   );
};

export default Button;
