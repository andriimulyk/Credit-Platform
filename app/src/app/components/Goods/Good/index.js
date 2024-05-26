"use client"
import Image from 'next/image'
import styles from './Good.module.css'
import { usePathname } from 'next/navigation'
import { useSelector,useDispatch } from "react-redux";
import Link from 'next/link';
import { useState,useEffect } from 'react';
import {addCartItems} from '@/app/Redux/cartSlice';
import { fetchRemoveGoods } from '@/app/Redux/goodsSlice';
import axios from '../../../axios';
export default function Good({isPress, setIsPress, setIdf, good}) {
  const cartItems  = useSelector(state => state.cart.cartItems)
  const cartItem   = useSelector (state => state.cart.cartItems.find((obj) => obj._id === good._id ))
  const pathname = usePathname();
  const dispatch  = useDispatch(); 
  console.log("id" + " " + good._id);
  const isEditing = (pathname.includes("/home/items/") ) ? true : false  ;
const removeGood = async (_id) => {
  const urlToDelete = good.imgmain.replace('http://localhost:4444/uploads', '');
  try {
    // urlsToDelete && await axios.post("/removeImages",{ urls: urlsToDelete }); 
    urlToDelete && await axios.post("/removeImage", { urlToDelete: urlToDelete }); 
    dispatch(fetchRemoveGoods(_id));
  } catch(error) {
    console.error('Помилка видалення файлу:', error);
  }
}
  return (
      <div className={styles.Item}>
         { isEditing ? null :
   <div className={styles.editItems}>
                  <Image onClick={() => removeGood(good._id)}  width={30} height={30} className={styles.delete} src="/trashBox.png" alt="jjk" />
                  <Link href={`/admin/create/${good._id}`}> <Image width={30} height={30} className={styles.edit} src="/edit.png" alt="hjh" /></Link>
                  </div>
                  }
               <Image className={styles.goodPhoto} height={100} width={100} src={good.imgmain} alt='jk'/>
               <div className={styles.mediumBlock}>
               <div className={styles.mediumBlockHeader}>

               <div className={styles.mediumBlockItem}>
               <p className={styles.value}>до {good.firstLoan} грн </p>
               <span className={styles.descr} >Перший кредит</span>
               </div>

               <div className={styles.mediumBlockItem}>
               <p className={styles.value}> до  {good.annualRate} %</p>
               <span className={styles.descr} >Ставка на рік</span>
               </div>

               <div className={styles.mediumBlockItem}>
               <p className={styles.value}> до {good.forTheTerm} місяців</p>
               <span className={styles.descr} >На термін</span>
               </div>

               </div>
               <div className={styles.mediumBlockItem}>
               <p className={styles.value}> {good.realRateMin} —  {good.realRateMax} %</p>
               <span className={styles.descr} >РРПС</span>
               </div>
               </div>
               { (pathname === "/admin") ? null :
                <a href={good.site} className={styles.button} target="blank">Деталі</a>
              }
               </div>
          
   
  )
}
