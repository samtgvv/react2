import { Btn } from '../Btn/Btn'
import { Reg } from '../Reg/Reg'
import { Logo } from '../Logo/Logo'
import s from './Header.module.css'
import banner from '/banner.png'
import { About } from '../BtnAbout/BtnAbout'

export function Header() {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.header__inner}>
                    <div className={s.nav}>
                        <a href="">О нас</a>
                        <a href="">Каталог</a>
                        <a href="">Где нас найти</a>
                    </div>
                    <Logo/>
                    <div className={s.btns}>
                        <Reg/>
                        <Btn/>
                    </div>
                </div>
            </div>
            <About/>
        </header>
    )
}