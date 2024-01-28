import {ComponentProps, FC, PropsWithChildren} from 'react';

type Props = ComponentProps<'input'>

const Radio: FC<PropsWithChildren<Props>> = ({className, value, children, onChange, ...props}) => {
   return (
       <label className="flex w-full cursor-pointer items-center gap-3">
          <input type="radio" value={value} onChange={onChange}
                 className={`appearance-none relative rounded-full w-6 h-6 border-2 ${className} before:absolute before:inset-1 before:rounded-full
                 ${props.checked ? 'before:bg-primary border-primary' : 'before:bg-transparent border-white-200'}`} {...props}/>
          <div className="text-lg font-semibold">{children}</div>
       </label>
   );
};

export default Radio;
