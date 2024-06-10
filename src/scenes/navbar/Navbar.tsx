import { Link } from "react-router-dom"
import Home from '../../assets/icons/Home.png'
import WhiteHome from '../../assets/icons/Home_white.png'
import Logo from '../../assets/Logo.png'
import Text from '../../assets/Text.png'
import Calendar from '../../assets/icons/Calendar,Schedule.png'
import WhiteCalendar from '../../assets/icons/Calendar_white.png'
import Wallet from '../../assets/icons/Wallet.png'
import Cup from '../../assets/icons/Сup.png'
import Puzzle from '../../assets/icons/puzzle-1.png'
import Folder from '../../assets/icons/folder-open.png'
import HeadPhones from '../../assets/icons/Headphones, Customer, support.png'
import Settings from '../../assets/icons/Settings.png'
import Questions from '../../assets/icons/Questions.png'
import Gift from '../../assets/gift illustration.png'

const Navbar = () => {

const currentUrl=window.location.href

console.log(currentUrl)

  return (
    <div className="ml-[50px] mt-6">
        <div className='flex flex-col items-center bg-extra-light-violet w-[236px] pt-11 pb-6 rounded-[30px]'>
            <div className='flex items-center gap-2 mx-11'>
                <img className='w-[59px] h-[58px] ' src={Logo} alt="" />
                <img src={Text} alt="" />

            </div>
            <ul className="mt-10  w-full">
                <Link to='/home'>
                    <li className={`${currentUrl.includes('/home') && 'bg-[#8D7FC7] text-white'} rounded-r-full pl-11 mr-5 flex items-center cursor-pointer gap-2 py-2 text-dark-grey-text`}>
                        {
                           currentUrl.includes('/home')
                           ? <img className='w-6 h-6 ' src={WhiteHome} alt="" />
                           : <img className='w-6 h-6 ' src={Home} alt="" />
                        }
                        <span className=' text-body_md leading-5'>Главная</span>
                    </li>
                </Link>
                <Link to='/schedule'>
                    <li className={`${currentUrl.includes('/schedule') && 'bg-[#8D7FC7] text-white'} rounded-r-full pl-11 mr-5 flex items-center cursor-pointer gap-2 py-2 text-dark-grey-text`}>
                        {
                            currentUrl.includes('/schedule')
                            ?<img className='w-6 h-6' src={WhiteCalendar} alt="" />
                            : <img className='w-6 h-6' src={Calendar} alt="" />
                        }
                        
                        <span className=' text-body_md leading-5'>Расписание</span>
                    </li>
                </Link>
                <li className='pl-11 flex items-center cursor-pointer gap-2 py-2 text-dark-grey-text'>
                    <img className='w-6 h-6' src={Wallet} alt="" />
                    <span className=' text-body_md leading-5'>Оплата</span>
                </li>
                <li className='pl-11 flex items-center cursor-pointer gap-2 py-2 text-dark-grey-text'>
                    <img className='w-6 h-6' src={Cup} alt="" />
                    <span className=' text-body_md leading-5'>Достижения</span>
                </li>
                <li className='pl-11 flex items-center cursor-pointer gap-2 py-2 text-dark-grey-text'>
                    <img className='w-6 h-6' src={Puzzle} alt="" />
                    <span className=' text-body_md leading-5'>Тренажеры</span>
                </li>
                <li className='pl-11 flex items-center cursor-pointer gap-2 py-2 text-dark-grey-text'>
                    <img className='w-6 h-6' src={Folder} alt="" />
                    <span className=' text-body_md leading-5'>Библиотека</span>
                </li>
                <li className='pl-11 flex items-center cursor-pointer gap-2 py-2 text-dark-grey-text'>
                    <img className='w-6 h-6' src={HeadPhones} alt="" />
                    <span className=' text-body_md leading-5'>Проверка связи</span>
                </li>
                <li className='pl-11 flex items-center cursor-pointer gap-2 py-2 text-dark-grey-text'>
                    <img className='w-6 h-6' src={Settings} alt="" />
                    <span className=' text-body_md leading-5'>Настройка</span>
                </li>
                <li className='pl-11 flex items-center cursor-pointer gap-2 py-2 text-dark-grey-text'>
                    <img className='w-6 h-6' src={Questions} alt="" />
                    <span className=' text-body_md leading-5'>Вопросы</span>
                </li>
                
            </ul>
            <div className={`bg-white relative w-[calc(100%-40px)] mt-[50px] rounded-[15px] pt-4 pb-[10px] pl-4 text-dark-grey bg-gift bg-no-repeat bg-right-bottom`}>
                <div className="text-body_md">Учитесь бесплатно</div>
                <div className="text-body_xsm">
                Приводите друзей с детьми <br/>заниматься в Sirius Future <br/>
                и получайте подарки!
                </div>
                <button className=" bg-light-blue py-2 px-4 text-body_sm mt-[10px] rounded-full">Узнать</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar