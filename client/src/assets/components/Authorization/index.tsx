import React from "react";
import "./css/style.css";

export function Authorization() {

    return (
        <>
            <div className="authorization-container">
                <label htmlFor="login">Логин</label>
                <input type="text" id="login"/>
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password"/>
                <input type="submit" value={"Войти"} className="button-submit"/>
            </div>
        </>
    );
}