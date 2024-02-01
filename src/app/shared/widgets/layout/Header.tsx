import {FC} from 'react';
import Image from 'next/image';

const Header: FC = () => {
   return (
       <header className="flex bg-white z-10 fixed top-0 right-0 left-0 text-lg font-attention justify-between items-center px-4 py-2">
          <Image src="/icons/back.svg" alt="back" width={24} height={24}/>
          <strong className='font-bold'>App</strong>
          <Image src="/icons/menu.svg" alt="menu" width={24} height={24}/>
       </header>
   );
};

export default Header;
