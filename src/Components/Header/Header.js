import React from 'react';
import s from './Header.module.css'
import HeaderForm from './HeaderForm';
import Ava from './img/ava.jpg';

const Header = () => {
    return <header className={s.header}>
    <div className={s.logo}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7wjBbM2LrBsbf9SrqN3OFOXLZIQ_2BAf3A&usqp=CAU" />
    </div>
    <div className={s.headerForm}>
        <HeaderForm />
    </div>
    <div className={s.headerAva}>
        <img src={Ava} alt="Avatar" />
        <li>Online</li>
    </div>
    </header>
}

export default Header;