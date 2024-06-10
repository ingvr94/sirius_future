
import moment from 'moment'
 import CalendarHead from './CalendarHead'
 import CalendarGrid from './CalendarGrid'


const Calendar = () => {

moment.updateLocale('ru',{week:{dow:1}})
moment.locale('ru',{
    months:'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split('_'),
    monthsShort:'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')

})
const startDay=moment().startOf('month').startOf('week')
const startMonth=moment().startOf('month')

  return (
    <div className='mt-[31px] ml-8'>
        <CalendarHead />
        <CalendarGrid startDay={startDay} startMonth={startMonth} />
    </div>
  )
}

export default Calendar