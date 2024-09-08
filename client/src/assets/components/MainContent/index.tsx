import React from "react";
import "./css/MainContent.css";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "../../pages/AboutUs";
import { Contacts } from "../../pages/Contacts";
import { Learning } from "../../pages/Learning";
import { Services } from "../../pages/Services";
import { Shop } from "../../pages/Shop";
import { OurWorks } from "../../pages/OurWorks";
import { AdminPage } from "../../pages/Admin";

// Основной контент
export function MainContent() {

    return (
        <>
            <div className="main-content">
                <Routes>
                    <Route path={"/"} element={<AboutUs/>}></Route>
                    <Route path={"/servises"} element={<Services/>}></Route>
                    <Route path={"/shop"} element={<Shop/>}></Route>
                    <Route path={"/learning"} element={<Learning/>}></Route>
                    <Route path={"/ourWorks"} element={<OurWorks/>}></Route>
                    <Route path={"/contacts"} element={<Contacts/>}></Route>
                    <Route path={"/admin"} element={<AdminPage/>}></Route>
                </Routes>
            </div>
        </>
    )
}