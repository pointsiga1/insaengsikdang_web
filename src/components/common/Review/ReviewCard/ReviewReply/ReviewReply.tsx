import { ReviewItem } from '@src/types/reviews';
import { dateFormat } from '@src/utils/dateFormat';

export default function ReviewReply({ reply }: Pick<ReviewItem, 'reply'>) {
  return (
    <article className='flex flex-col p-3 bg-[#F9F9F9] mt-3 rounded-md'>
      <div className='flex justify-between items-center pb-[10px] border-b border-[#F3F3F3]'>
        <strong className='font-bold text-sm'>사장님</strong>
        <p className='text-xs text-[#898989]'>
          {dateFormat(reply!.created_at)}
        </p>
      </div>
      <div
        className='pt-[10px]'
        dangerouslySetInnerHTML={{ __html: reply!.body }}
      />
    </article>
  );
}
