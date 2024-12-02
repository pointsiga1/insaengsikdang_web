interface ImageProps {
  rounded: 'full' | 'lg' | 'md' | 'sm';
  src: string | undefined;
}

const roundedClass = {
  full: 'rounded-full',
  lg: 'rounded-[10px]',
  md: 'rounded-[8px]',
  sm: 'rounded-[6px]',
};

export default function Image({ rounded, src }: ImageProps) {
  return (
    <div className={`w-full h-full overflow-hidden ${roundedClass[rounded]}`}>
      <img
        className='w-full h-full object-cover'
        src={src || '/images/no_image.png'}
      />
    </div>
  );
}
