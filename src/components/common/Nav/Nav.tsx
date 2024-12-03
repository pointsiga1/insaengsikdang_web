import { PropsWithChildren } from 'react';

export default function Nav({ children }: PropsWithChildren) {
  return (
    <nav className='fixed bottom-0 w-full max-w-[478px] py-[14px] px-4 left-1/2 -translate-x-1/2 shadow-nav z-10 bg-white'>
      {children}
    </nav>
  );
}
