interface SwiperPaginationProps {
  className: string;
}

export default function SwiperPagination({ className }: SwiperPaginationProps) {
  return (
    <div
      id='custom-pagination'
      className={`flex justify-center gap-[5px] ${className}`}
    ></div>
  );
}
