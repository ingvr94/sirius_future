import Navbar from "../scenes/navbar/Navbar"
import Header from "../scenes/header/Header"
import Calendar from "../scenes/calendar/Calendar"

const Schedule = () => {
  return (
    <div className='flex'>
        <Navbar />
        <div className="flex flex-col w-full">
            <Header />
            <div className="mt-5 ml-8">
                <div className="flex justify-between ">
                    <div className="flex relative">
                        <select name="" id="" className=" appearance-none w-[253px] leading-4 text-body_sm flex py-3 px-[10px] border-[1px] border-[#ECECEC] items-center text-[#79747F]">
                            <option selected disabled>Выбрать предмет</option>
                        </select>
                        <img className="absolute right-[10px] top-[10px]" src='../src/assets/icons/Arrow_sm.png' />
                    </div>

                    <button className="w-[344px] text-body_md text-dark-grey leading-5 bg-purple-200 flex items-center justify-center rounded-full py-[10px] ">Изменить расписание</button>
                </div>
            </div>
        <Calendar />
        </div>

    </div>
  )
}

export default Schedule