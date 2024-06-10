import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../state/UserSlice"


const Register = () => {

    const [email,setEmail]=useState<string>('admin@me.com')
    const [password,setPassword]=useState<string>('admin')

    const dispatch=useDispatch()
    const user=useSelector((state:any)=>state.user)

    const handleLoginEvent=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()   
        dispatch(login(e))
    }

  return (
    <div className='app container flex justify-center'>
        <div className=' flex items-center'>
            <div className='flex flex-col items-center ' >
                <img className='w-[80px] h-[80px] ' src={"../src/assets/Logo.png"} alt="" />
                <div className=' text-dark-grey text-h0 mt-8 mb-4'>
                    Вход в Sirius Future
                </div>
                <form
                 className='w-full' 
                 onSubmit={(e=>handleLoginEvent(e))}>
                        {user.error && <div className="text-red-500 text-body_sm">Неверный пароль и/или почта</div>}
                        <input className='w-full text-body_sm border-[1px] py-[10px] px-[12px] rounded-lg mb-3' 
                        placeholder='E-mail' type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input className='w-full text-body_sm  border-[1px] py-[10px] px-[12px] rounded-lg' 
                        placeholder='Пароль' name='password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>   
                        <div className='flex gap-1 items-center mt-4 mb-8'>
                            <input className='w-6 h-6' type="checkbox" name="remember" id="remember" /> 
                            <label className='text-body_sm text-grey' htmlFor="remember">Запомнить меня</label>
                        </div>
                        <button type="submit" className='w-full flex justify-center py-[10px] bg-light-violet text-white rounded-full'>
                            Войти
                        </button>
                        <div className='flex justify-between py-[10px] mt-[6px]'>
                            <div className='text-primary text-body_md cursor-pointer'>Я забыл пароль</div>
                            <div className='text-primary text-body_md cursor-pointer'>Войти как тренер</div>
                        </div>
                        <div className='text-body_md flex flex-col items-center gap-[10px] mt-16'>
                            <div className=' text-dark-grey'>Нет аккаунта?</div>
                            <div className='text-primary cursor-pointer'>Зарегистрироваться</div>
                        </div>
                </form>
            </div>
        </div>
        <div className='flex items-center absolute bottom-8 gap-2'>
            <span className='text-h3 text-violet cursor-pointer'>RU</span>
            <span className=' text-body_md text-grey cursor-pointer'>EN</span>
        </div>
    </div>

  )
}

export default Register