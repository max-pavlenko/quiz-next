import {ComponentProps, FC} from 'react';

type Props = {
   name: string;
   error?: string | false;
} & ComponentProps<'input'>;

const Input: FC<Props> = ({name, error, className, ...props}) => {
   return (
       <div>
          <div className={`py-2 flex bg-white-100 rounded-lg flex-col gap-1 px-3 border-2
                          has-[:focus]:bg-white has-[:focus]:border-text ${error ? 'border-red-600' : 'border-transparent'}`}>
             <span className="pointer-events-none capitalize text-xs font-semibold">{name}</span>
             <input className={`outline-0 text-lg font-medium bg-transparent ${className}`} {...props}/>
          </div>
          {error && <span className="text-red-500 mt-2 font-medium text-xs">{error}</span>}
       </div>
   );
};

export default Input;
