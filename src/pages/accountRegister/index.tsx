import AccountRegisterForm from '@components/accountRegister/AccountRegisterForm/AccountRegisterForm';
import useHeaderText from '@hooks/useHeaderText';
import { useEffect } from 'react';

export default function AccountRegisterPage() {
    const { handleHeaderText } = useHeaderText();

    useEffect(() => {
        handleHeaderText('계좌정보 등록');
    }, []);

    return (
        <main className='pt-[50px] pb-[90px] h-screen bg-[#f3f3f347]'>
            <AccountRegisterForm />
        </main>
    );
}
