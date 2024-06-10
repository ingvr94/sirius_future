import * as moment from 'moment'
import lessons from "../../data/lessons.json"
import WalletRed from "../../assets/icons/Wallet_red.png"

type Props = {
   startDay:moment.Moment
   startMonth:moment.Moment
}

const CalendarGrid = ({startDay,startMonth}: Props) => {
    const day=startDay.clone().subtract(1,'day')
    
    const daysArray=[...Array(35)].map(()=>day.add(1,'day').clone())
    const weekDays=['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
  return (
    <>
        <div className='grid grid-cols-7 mt-3'>
            {weekDays.map((weekday)=>(
                <div className='flex justify-end text-[15px] text-[#79747F] pr-0.5'>{weekday}</div>
            ))}
        </div>
        <div className='grid grid-cols-7 gap-[1px] border-[1px] border-[#ECECEC] bg-[#ECECEC]'>
            {daysArray.map((dayItem)=>(
                <div className={`flex flex-col justify-between pt-1 px-0.5  min-w-[153px] min-h-[101px] ${(dayItem.day() === 6 || dayItem.day()===0) && 'bg-[#FBFBFC]'} ${dayItem.isSame(new Date(),'day') && ` text-red-600`}  ${dayItem.isBefore(startMonth) && `text-gray-400`} bg-white`}>
                    <div className='flex gap-1 justify-end text-body_sm font-light'>
                        {dayItem.format('D')}
                        {dayItem.isSame(startMonth,'day') && <span>{startMonth.format('MMM')}</span>}
                    </div>
                
                    {lessons.map((lesson)=>(
                        dayItem.format('YYYY-MM-DD') == lesson.date &&
                        <div className={`${lesson.outer_border && 'border-[1px] border-[#7362BC] rounded-[2px]'}`}>
                            <div
                            style={{backgroundColor:lesson.background}}
                            className={`border-[0.5px] px-1 rounded-[2px] border-[${lesson.inner_border}] text-dark-grey ${lesson.crossed && 'line-through'} flex justify-between`}>
                                <div>
                                    <div className='text-body_sm leading-4'>{lesson.time}</div>
                                    <div className='text-body_xsm'>{lesson.subject}</div>
                                </div>
                                {lesson.wallet &&<img className='w-4 h-4' src={WalletRed} alt="" />}
                            </div>
                        </div>

                    ))}
                </div>
            ))}
        </div>
    </>
    
  )
}

export default CalendarGrid