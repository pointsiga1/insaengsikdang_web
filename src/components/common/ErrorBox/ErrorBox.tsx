import Button from '../Button/Button';

interface ErrorBoxProps {
  resetErrorBoundary: () => void;
}

export default function ErrorBox({ resetErrorBoundary }: ErrorBoxProps) {
  return (
    <main className='min-h-screen flex flex-col items-center pt-[50px] px-4 pb-[80px]'>
      <div className='text-center m-auto'>
        <p className='text-lg text-secondary font-bold mt-2 mb-10'>
          에러가 발생했습니다. 다시 시도해주세요.
        </p>
        <div className='w-[150px] mx-auto'>
          <Button variant='primary' onClick={resetErrorBoundary}>
            다시 시도
          </Button>
        </div>
      </div>
    </main>
  );
}
