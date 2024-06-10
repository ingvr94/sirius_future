import { useState } from 'react'
import { ProfileType } from '../../types/Types'
import {useDispatch} from 'react-redux'
import { logout } from '../../state/UserSlice'
import XMark from '../../assets/icons/X.png'
import Exit from '../../assets/icons/Exit.png'


function Header() {
   
    const [modal,openModal]=useState<boolean>(false)
    const [userIndex,setUserIndex]=useState<number>(0)
    const currentUser=JSON.parse(localStorage.getItem('user') || '"')

    const dispatch=useDispatch()

    const exitToLogin=()=>{
        dispatch(logout())
    }

  return (
    <>
        <div className='w-full rounded-b-2xl shadow-lg h-[68px] flex items-center justify-between pl-8 pr-[62px]'>
            <div className='text-h3'>Добро пожаловать, <span className=' text-[#7362BC]'>{currentUser.profiles[userIndex].name}</span>!</div>
            <div className='flex gap-4'>
                <div className='relative rounded-full w-[42px] h-[42px] border-[1px] border-[#7362BC] bg-message bg-center bg-no-repeat'>
                    <div className='absolute rounded-full bg-red-600 w-4 h-4 text-white text-body_xsm flex items-center justify-center right-0 top-[-3px] font-bold'>2</div>
                </div>
            <div
            onClick={()=>openModal(!modal)} 
            style={{backgroundImage:`${currentUser.profiles[userIndex].icon}`}}
            className={`relative cursor-pointer rounded-full w-[42px] h-[42px] border-[1px] border-[#7362BC] after:content-arrow_down after:absolute after:w-6 after:h-6 after:-right-[30px] after:top-[6px] bg-cover bg-center`}></div>
            </div>
        </div>
        {modal &&
            <div className='w-[250px] border-[1px] border-[#7362BC] rounded-xl absolute top-[68px] right-[290px] bg-white p-[30px] after:absolute after:-top-2 after:right-6 after:w-0 after:h-0 after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-b-8 after:border-b-[#7362BC]' >
                <img
                onClick={()=>openModal(false)} 
                className='absolute z-10 right-3 top-3 w-6 h-6 cursor-pointer' src={XMark} alt="" />
                <div className='text-h5 text-dark-grey mb-3'>Смена пользователя</div>
                <ul  className='gap-2 border-b pb-1'>
                {currentUser.profiles.map((e:ProfileType,i:number)=>(
                    <li 
                    onClick={()=>setUserIndex(i)}
                    key={i} 
                    className={`flex items-center gap-2 p-2 cursor-pointer rounded-xl ${i==userIndex && 'bg-extra-light-violet'}`}>
                        <img className={`w-8 h-8 rounded-full border-[1px] border-[#7362BC]`} src={e.icon} />
                        <div>
                            <div className='text-body_sm text-dark-grey'>{e.name}</div>
                            {i==userIndex && <div className=' text-body_xsm text-dark-grey font-thin'>Это Вы</div>}
                        </div>
                    </li>
                ))}
                </ul>
                <div
                onClick={()=>exitToLogin()}
                 className='flex justify-between text-primary mt-3 py-3 cursor-pointer'>
                    <div className='text-body_md'>Выход</div>
                    <img className='w-6 h-6' src={Exit} alt="" />
                </div>
            </div>
        }
    </>
  )
}

export default Header