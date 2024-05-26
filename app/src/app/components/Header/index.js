"use client"
import styles from "./Header.module.css";
import React from "react"
import Image from "next/image";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setInputValue} from "../../Redux/searchSlice"
import { usePathname } from "next/navigation";
import axios from 'axios';
import Link from "next/link";
function Header() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const inputValue = useSelector(state => state.search.inputValue)
  const count = useSelector((state) => state.cart.totalCount)
    let  [open,setOpen] = React.useState("true")
    const [usdToUah, setUsdToUah] =React. useState(null);
    const [eurToUah, setEurToUah] = React.useState(null);
    let openHandler = () => {
        setOpen(!open);
      }
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
            const currencies = response.data;
            const euroCurrency = currencies.find(currency => currency.r030 === 978 );
            const usdCurrency = currencies.find(currency => currency.r030 === 840);
            setEurToUah(euroCurrency.rate);
            setUsdToUah(usdCurrency.rate);
          } catch (error) {
            console.error('Помилка отримання даних:', error);
          }
        };
    
        fetchData();
      }, []);
    
    return (
    <header className={styles.header}>
      
     
        <div className={styles.leftHeader}>
        {/* { pathname.includes("/description/descr") ? 
        <Link href={"/"}><Image className={styles.arrow} width={35} height={35} src={"/arrowLeft.png"} alt="left" /></Link>
        :
        <Image width={60} height={60} src={"/logo.png"} alt="logo" />
      } */}
        <div className={(pathname === "/" || pathname.includes("/description/descr") ) ? styles.store_title1 :  styles.store_title  }>
                <h3 className={styles.title_store}>LoanAdvisor</h3>
                {/* <p>Порівняй, обери, зеконом</p> */}
        </div>
        </div>
        {/* {(pathname === "/" || pathname.includes("/description/descr") ) ? null :
        <div className={styles.inpc}>
<svg alt="img"  className={styles.zoom}  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
  <path d="M10 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm10.71 2.29l-2.5-2.5a1 1 0 1 0-1.42 1.42l2.5 2.5a1 1 0 0 0 1.42-1.42z" fill="white"/>
</svg>
        
        <input  id="search" name="search" onChange={(event) => dispatch(setInputValue(event.target.value))} value={inputValue} placeholder=" пошук..." className={styles.input} type="text" />
        </div>
        } */}
        {/* <div className={styles.iconCart}>
        <Link href="/cart"><Image width={30}  height={30} src={"/ct.png"} alt="icon"/></Link>
        <span className={styles.badge}>{count}</span>
</div> */}
<div className={styles.excur}>
      <p className={styles.excurItem}>USD: <span className={styles.exvalue}>{usdToUah}</span></p>
      <p className={styles.excurItem}>EUR: <span className={styles.exvalue}>  {eurToUah}</span></p>
    </div>
      {(pathname === "/" || pathname.includes("/description/descr") ) ? 
    <a href="https://t.me/+380968336006" className={styles.buttonContact} target="blank">
    Зв'язок з нами
  </a>:
     <Link href="/"><button className={styles.buttonContact}>Тип кредиту</button></Link>
}
    </header>
    );
}

export default Header;
