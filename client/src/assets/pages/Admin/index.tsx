import React from "react";
import { Authorization } from "../../components/Authorization";

export function AdminPage(){

    return(
        <>
            <div className="admin-page-container">
                <h1>Страница администратора</h1>
                <Authorization/>
            </div>
        </>
    );
}