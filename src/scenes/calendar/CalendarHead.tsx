
import moment from 'moment'
import ArrowLeft from '../../assets/icons/Arrow-Left.png'
import ArrowRight from '../../assets/icons/Arrow-Right.png'


const CalendarHead = () => {
  return (
    <div className='flex items-center'>
        <div className='flex items-center gap-4 mr-8'>
            <img className='cursor-pointer' src={ArrowLeft} alt="" />
            <div className='font-bold text-body_md leading-5 text-dark-grey'>{moment().format('MMMM YYYY')}</div>
            <img className='cursor-pointer' src={ArrowRight} alt="" />
        </div>
        <button className='py-2 px-4 rounded-full border-[1px] text-body_sm text-dark-grey border-[#8D7FC7] mr-4'>
            Cегодня
        </button>
        <button className='w-6 h-6 rounded-full border-[1.5px] text-body_sm text-dark-grey border-[#7362BC] flex items-center justify-center'>?</button>
    </div>
  )
}

export default CalendarHead