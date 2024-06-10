import Navbar from '../scenes/navbar/Navbar'
import Header from '../scenes/header/Header'
import Homework from '../assets/icons/Homework.png'
import Report from '../assets/icons/Report.png'
import Teacher from '../assets/icons/Teacher.png'
import Discount from '../assets/Discount.png'

function Home() {
  return (

    <div className='flex'>
      <Navbar />
      <div className='flex flex-col w-full'>
      <Header />
        <div className='grid grid-cols-[526px_344px_162px] gap-5 h-[248px] ml-8 mt-5'>
          <div className={`bg-[#7362BC] rounded-[30px] py-[56px] pl-10 bg-[${Discount}] bg-right bg-no-repeat `}>
            <div className='text-white text-h2 leading-8 mb-3'>
              До 31 декабря любой <br/>курс со скидкой 20%
            </div>
            <div className='text-white text-body_md font-light leading-5'>
            До конца года у вас есть уникальная <br /> возможность воспользоваться нашей <br />новогодней скидкой 20% на любой курс!
            </div>
          </div>
          <div className='bg-[#FFF1CB] rounded-[30px] py-8 flex flex-col items-center text-dark-grey gap-3'>
            <div className='text-h4 leading-5 text-center'>Следующее занятие<br /> начнется через:</div>
            <div className='flex text-[15px] gap-3'>
              <div ><span className='text-h1 mr-1'>6</span>д</div>
              <div ><span className='text-h1 mr-1'>12</span>ч</div>
              <div ><span className='text-h1 mr-1'>24</span>мин</div>
            </div>
            <button className='py-[10px] px-[70px] flex items-center justify-center bg-none border-[1px] border-[#323854] border-dashed rounded-full'>Button</button>
          </div>
          <div className='grid grid-row-2 gap-5'>
              <div className='bg-[#D8ECFF] rounded-[20px] px-4'>
                <div className='leading-5 text-h4  pt-4'>Домашние <br/>задания</div>
                <img className='w-10 h-10 rounded-full mt-[6px] ml-[94px]' src={Homework}  />
              </div>
              <div className='bg-[#E8CBFF] rounded-[20px] px-4'>
                <div className='leading-5 text-h4 pt-4'>Отчеты<br/>от учителей</div>
                <img className='w-10 h-10 rounded-full mt-[6px] ml-[94px]' src={Report}  />
              </div>
          </div>
        </div>
        <div className='grid grid-cols-[344px_708px] h-[372px] gap-5 mt-5 ml-8'>
          <div className='border-[1px] border-[#7362BC] rounded-[30px] pl-7 pr-7 pt-7 pb-[30px]'>
            <div className=' leading-6 text-h3 mb-4'>Баланс занятий</div>
            <ul>
              <li className='py-[10px] flex justify-between items-center border-b'>
                <div className='text-body_md leading-5'>Ментальная арифметика</div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full text-h4 bg-extra-light-violet'>32</div>
              </li>
              <li className='py-[10px] flex justify-between items-center border-b'>
                <div className='text-body_md leading-5'>Программирование</div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full text-h4 bg-extra-light-violet'>0</div>
              </li>
              <li className='py-[10px] flex justify-between items-center '>
                <div className='text-body_md leading-5'>Скорочтение</div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full text-h4 bg-extra-light-violet'>4</div>
              </li>
            </ul>
            <button className='py-[10px] px-10 w-full rounded-full bg-purple-200 flex items-center justify-center mt-9'>Button</button>
          </div>
          <div className='border-[1px] border-[#7362BC] rounded-[30px] pl-7 pr-7 pt-7 pb-[30px]'>
            <div className=' leading-6 text-h3 mb-4'>Ближайшие уроки</div>
            <ul>
              <li className='py-[6px] flex items-center justify-between border-b'>
                <div className='flex items-center'>
                  <div className='flex flex-col items-center w-[42px] mr-4'>
                    <span className='text-h2 leading-8'>1</span>
                    <span className='text-body_sm leading-[16.2px]'>мая</span>
                  </div>
                  <div className='text-body_md leading-5 w-[180px]'>Ментальная арифметика</div>
                  <div className='text-body_sm leading-[16.2px] w-[70px]'>14:00-14:25</div>
                  <div className='flex items-center'>
                    <img className='w-4 h-4' src={Teacher} />
                    <div className=' leading-3 text-body_sm font-light'>Белкина Инна</div>
                  </div>
                </div>
                <div className='flex gap-1 mr-10'>
                  <button className='border-[1px] py-2 px-[10px] rounded-full border-extra-light-violet'>Button</button>
                  <button className='border-[1px] py-2 px-[10px] rounded-full bg-violet'>Button</button>
                </div>
              </li>
              <li className='py-[6px] flex items-center justify-between border-b'>
                <div className='flex items-center'>
                  <div className='flex flex-col items-center w-[42px] mr-4'>
                    <span className='text-h2 leading-8'>30</span>
                    <span className='text-body_sm leading-[16.2px]'>октября</span>
                  </div>
                  <div className='text-body_md leading-5 w-[180px]'>Программирование</div>
                  <div className='text-body_sm leading-[16.2px] w-[70px] '>11:00-11:11</div>
                  <div className='flex items-center'>
                    <img className='w-4 h-4' src={Teacher} />
                    <div className=' leading-3 text-body_sm font-light'>Животновская Оксана</div>
                  </div>
                </div>
                <div className='flex gap-1 mr-10'>
                  <button className='border-[1px] py-2 px-[10px] rounded-full border-extra-light-violet'>Button</button>
                  <button className='border-[1px] py-2 px-[10px] rounded-full bg-violet'>Button</button>
                </div>
              </li>
              <li className='py-[6px] flex items-center justify-between '>
                <div className='flex items-center '>
                  <div className='flex flex-col items-center w-[42px] mr-4'>
                    <span className='text-h2 leading-8'>16</span>
                    <span className='text-body_sm leading-[16.2px]'>ноября</span>
                  </div>
                  <div className='text-body_md leading-5 w-[180px]'>Скорочтение</div>
                  <div className='text-body_sm leading-[16.2px] w-[70px]'>09:00-09:45</div>
                  <div className='flex items-center'>
                    <img className='w-4 h-4' src={Teacher}/>
                    <div className=' leading-3 text-body_sm font-light'>Мин Елена</div>
                  </div>
                </div>
                <div className='flex gap-1 mr-10'>
                  <button className='border-[1px] py-2 px-[10px] rounded-full border-extra-light-violet'>Button</button>
                  <button className='border-[1px] py-2 px-[10px] rounded-full bg-violet'>Button</button>
                </div>
              </li>
            </ul>
            <div className='flex justify-center'>
            <button className='py-[10px] px-10 rounded-full bg-purple-200 flex items-center w-[344px]  justify-center mt-9'>Button</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home