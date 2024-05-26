"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Goods from "./components/Goods";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Cart from "./cart/page";
import Categor from "./components/categor";
export default function Home() {
    const scrollRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true); // Додано useState
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);
    
    return (
        <main ref={scrollRef} className={styles.main}>
            {isLoading ? (
                <div className={styles.preloadContainer}>
                    <Image
                        className={styles.logoPreload}
                        width={400}
                        height={350}
                        src="/loader.gif"
                        alt="logo"
                    />
                </div>
            ) : (
                <>
                    <Header />

                    {/* <Goods currentPage={currentPage} setCurrentPage={setCurrentPage}/> */}
                    <h3 className={styles.chooseLoan}>Виберіть для себе тип кредиту: </h3>
                    <Categor />

                    <Footer />
                </>
            )}
        </main>
    );
}
