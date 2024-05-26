"use client"
import React from "react";
import styles from "./Categor.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { getCatId, setCatId  } from "../../Redux/filterSlice";
function Categor() {
    const dispatch = useDispatch();
    const pathName = usePathname();
    const [isClicked,setIsclicked] = useState(false);
    const categories = [
        { name: "Споживчі кредити", src: "/credit1.png",urlValue:"credit1" },
        { name: "Іпотечні кредити", src: "/credit2.png", urlValue:"credit2" },
        { name: "Автокредити", src: "/credit3.png", urlValue:"credit3" },
        { name: "Бізнес-кредити", src: "/credit4.png", urlValue:"credit4" },
        { name: "Овердрафт", src: "/credit5.png" , urlValue:"credit5" },
        { name: "Кредити на розвиток стартапів", src:"/credit6.png" , urlValue:"credit6" },
        // { name: "ПК", src: "/pc.jpg" , urlValue:"pc" },
        { name: "Кредитні картки", src: "/credit7.png" , urlValue:"credit7" },
        { name: "Рефінансування кредитів", src: "/credit8.png",urlValue:"credit8" },
    ];
    const ar = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            <ul
                className={
                    pathName == "/" ? styles.categories : styles.categories2
                }
            >
                {categories.map((value, i) => (
                    <Link key={value.urlValue}  href={`/home/items/${value.urlValue}`}>
                 <li key={value.urlValue} className={styles.categories_Item}>
                 {value.name}
                        <Image
                            height={100}
                            width={100}
                            src={value.src}
                            alt="img"
                        />
                      
                    </li>
                       </Link> 
                ))}
            </ul>
        
        </>
    );
}
export default Categor;
