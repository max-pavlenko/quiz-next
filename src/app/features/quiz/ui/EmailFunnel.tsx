import {ChangeEventHandler, FC, FormEventHandler, useState} from 'react';
import Heading from '@/app/shared/ui/atoms/Heading';
import Input from '@/app/shared/ui/atoms/Input';
import Button from '@/app/shared/ui/atoms/Button';
import {Completable} from '@/app/shared/models/completable';
import {REGEX} from '@/app/shared/constants/regex';

type Props = Completable<string>;

const EmailFunnel: FC<Props> = ({onCompleted}) => {
   const [email, setEmail] = useState('');
   const isValidEmail = REGEX.EMAIL.test(email);
   
   const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      if (!isValidEmail) return;
      onCompleted(email);
   };
   
   const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setEmail(e.target.value);
   };
   
   return (
       <form onSubmit={handleSubmit} className="flex h-[100%] flex-col gap-6">
          <Heading>Enter your email to get your personalised Spiritual Growth Plan</Heading>
          <Input error={!isValidEmail ? 'Invalid email' : ''} value={email} onChange={handleEmailChange} name="email" type="email"/>
          <Button disabled={!isValidEmail} className="mt-auto">Continue</Button>
       </form>
   );
};

export default EmailFunnel;
