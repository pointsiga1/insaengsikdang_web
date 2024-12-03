import { FormProvider, useForm } from "react-hook-form";
import AccountRegisterTermsModal from "../AccountRegisterTermsModal/AccountRegisterTermsModal";
import Button from "@components/common/Button/Button";
import TextInput from "@components/common/TextInput/TextInput";
import { useMemo, useState } from "react";
import useModal from "@hooks/useModal";
import Nav from "@components/common/Nav/Nav";

export default function AccountRegisterForm() {
    const methods = useForm({
        defaultValues: {
            accountOwner: '',
            bank: '',
            accountNumber: '',
        }
    });
    const payloadChanged = methods.watch();
    const { isOpen, handleOpen, handleClose } = useModal();
    const [currentStep, setCurrentStep] = useState(1);

    const onSubmit = () => {
        handleOpen()
    };

    const stepLabel = useMemo(() => ['은행', '계좌번호', '예금주'][currentStep - 1], [currentStep]);

    const onClickNext = () => {
        if (currentStep < 3)
            setCurrentStep(currentStep + 1);
        methods.trigger();
    }

    const isBtnDisabled = useMemo(() => {
        if (currentStep == 1)
            return !payloadChanged.accountOwner;
        else if (currentStep == 2)
            return !payloadChanged.bank;
        else if (currentStep == 3)
            return !payloadChanged.accountNumber;
        return false
    }, [payloadChanged, currentStep]);

    return (
        <div>
            <div className='px-4 mt-5 mb-[50px] grid'>
                <span className='text-xl text-[#404040] font-normal leading-snug'>
                    <span className='font-bold'>{stepLabel}</span>를 입력해주세요. <br />
                </span>
                <span className="text-[#666666] text-base font-normal leading-snug">
                    사장님 서비스 이용 전 정산 계좌정보를 등록해주세요.
                </span>
            </div>

            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className='px-4'
                >
                    <div className='flex flex-col gap-5'>
                        {
                            currentStep >= 3 && <TextInput
                                name={`accountNumber`}
                                placeholder='이름을 입력해주세요'
                            >
                                계좌번호
                            </TextInput>
                        }
                        {
                            currentStep >= 2 && <TextInput
                                name={`bank`}
                                placeholder='은행을 입력해주세요'
                            >
                                은행
                            </TextInput>
                        }
                        <TextInput
                            name={`accountOwner`}
                            placeholder='이름을 입력해주세요'
                            message='이름을 입력해주세요'
                        >
                            예금주
                        </TextInput>

                        <Nav>
                            <Button variant={isBtnDisabled ? 'tertiary' : 'secondary'} height={58}
                                type={isBtnDisabled ? 'button' : 'submit'}
                                weight="bold" onClick={onClickNext}>
                                다음
                            </Button>
                        </Nav>
                    </div>
                </form>
            </FormProvider>

            {isOpen && (
                <AccountRegisterTermsModal
                    handleClose={handleClose}
                />
            )}

        </div>
    )
}