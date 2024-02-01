import {ComponentProps, ElementType, FC, PropsWithChildren} from 'react';

type Props = {
   element?: ElementType
} & ComponentProps<'h1'>;

const Heading: FC<PropsWithChildren<Props>> = ({children, element: Element = 'h2', className, ...props}) => {
   return (
       <Element className={`text-center text-black text-2xl font-semibold font-attention ${className}`} {...props}>
          {children}
       </Element>
   );
};

export default Heading;
