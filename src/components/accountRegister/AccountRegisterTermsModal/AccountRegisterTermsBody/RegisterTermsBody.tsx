import { useMemo, useState } from 'react';
import Button from '@components/common/Button/Button';
import Nav from '@components/common/Nav/Nav';
import Checkbox from '@components/common/Checkbox/Checkbox';
import AccountRegisterTermsContentModal from '@components/accountRegister/AccountRegisterTermsContentModal/AccountRegisterTermsContentModal';
import useModal from '@hooks/useModal';


export default function AccountRegisterTermsBody() {
  const { isOpen, handleOpen, handleClose } = useModal();
  const [checkedValues, setCheckedValues] = useState<(string | number)[]>([]);

  const handleCheckboxChange = (checked: boolean, pk: number) => {
    if (checked) {
      if (pk == 2) { // for checkbox 2
        if (checkedValues.includes(3)) { // if checkbox 3 is checked then check all checkbox
          setCheckedValues([1, 2, 3]);
        }
        else setCheckedValues([...checkedValues, pk]);
      }
      else { // for checkbox 3
        if (checkedValues.includes(2)) { // if checkbox 2 is checked then check all checkbox
          setCheckedValues([1, 2, 3]);
        }
        else setCheckedValues([...checkedValues, pk]);
      }
    }
    else {
      // for un checked current checkbox and all checkbox
      setCheckedValues([...checkedValues.filter(value => value !== pk && value != 1)]);
    }
  };

  const isBtnDisabled = useMemo(() => !checkedValues.includes(1), [checkedValues])

  return (
    <div className='px-4 pb-[106px]'>
      <div className='flex flex-col gap-[12px]'>
        <Checkbox
          pk={1}
          value={checkedValues}
          handleChange={checked => setCheckedValues(checked ? [1, 2, 3] : [])}
        >
          <p className='text-lg font-bold'>전체동의하기</p>
        </Checkbox>
        <div className='flex flex-col gap-[12px] ml-7'>
          <div className='flex justify-between items-center'>
            <Checkbox
              pk={2}
              value={checkedValues}
              handleChange={checked => handleCheckboxChange(checked, 2)}
            >
              <p className='text-base font-normal'>
                [필수] 개인정보 수집 / 이용동의
              </p>
            </Checkbox>
            <p className='text-[#898989] text-base font-normal underline cursor-pointer' onClick={handleOpen}>
              보기
            </p>
          </div>

          <div className='flex justify-between items-center'>
            <Checkbox
              pk={3}
              value={checkedValues}
              handleChange={checked => handleCheckboxChange(checked, 3)}
            >
              <p className='text-base font-normal'>
                [필수] 개인정보 수집 / 이용동의
              </p>
            </Checkbox>
            <p className='text-[#898989] text-base font-normal underline cursor-pointer' onClick={handleOpen}>
              보기
            </p>
          </div>
        </div>
      </div>
      <Nav>
        <Button variant={isBtnDisabled ? 'tertiary' : 'secondary'} height={58}>
          등록
        </Button>
      </Nav>

      {isOpen && (
        <AccountRegisterTermsContentModal handleClose={() => handleClose()} />
      )}
    </div>
  );
}
