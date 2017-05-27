import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

import s from './style.css'

import Logo from './logo.svg'
import PhoneIcon from './phone.svg'
import MailIcon from './mail.svg'
import ArrowIcon from './arrow.svg'

export default class Header extends PureComponent {

  callMe() {
    alert('Скоро позвоним вам')
  }

  render() {
    return (
      <div className={s.header}>
        <div className={s.wrapper}>
          <div className={s.content}>
            <div className={s.center}>
              <div className={s.logo}>
                <NavLink to='/'>
                  <Logo/>
                </NavLink>
              </div>
              <div className={s.contact}>
                <div className={s.item}>
                  <div className={s.headElement}>
                    <span className={s.phone} onClick={::this.callMe}>
                      <PhoneIcon/>
                      Перезвоните мне
                    </span>
                  </div>
                  <div className={s.block}>
                    <a href='tel:+79640095553'>
                      <small>8 964</small>
                      <strong>009-55-53</strong>
                    </a>
                    <p>Служба приема заказов</p>
                  </div>
                </div>
                <div className={s.item}>
                  <div className={s.headElement}>
                    <span onClick={this.callMe}>
                      <MailIcon/>
                      hello@monte05.ru
                    </span>
                  </div>
                  <div className={s.block}>
                    <a href='tel:+79640095553'>
                      <small>8 928</small>
                      <strong>883-55-53</strong>
                    </a>
                    <p>Бронь столов и кабин</p>
                  </div>
                </div>
              </div>
              <div className={s.cart}></div>
            </div>
          </div>
          <div className={s.menu}>
            <div className={s.center}>
              <div className={s.nav}>
                <div className={s.item}>
                  <strong>Меню доставки</strong>
                  <ArrowIcon/>
                </div>
                <div className={s.item}>
                  <NavLink className={s.link} to='/'>Ресторан</NavLink>
                </div>
                <div className={s.item}>
                  <NavLink className={s.link} to='/'>Оплата и доставка</NavLink>
                </div>
                <div className={s.item}>
                  <NavLink className={s.link} to='/'>Акции</NavLink>
                </div>
                <div className={s.item}>
                  <NavLink className={s.link} to='/'>Отзывы</NavLink>
                </div>
                <div className={s.item}>
                  <NavLink className={s.link} to='/'>Контакты</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}