import React from "react";
import {Link} from "react-router-dom";
import MainTemplate from "../components/MainTemplate";

const NotFound: React.FC = () => {
    return (
        <>
            <MainTemplate>
                <div style={{textAlign: "center", display: "grid", placeItems: "center", minHeight: "88vh"}}>
                    <div>
                        <h1>404 - Страница не найдена</h1>
                        <p>Такой страницы не существует. Вернитесь на <Link to="/">главную</Link>.</p>
                    </div>
                </div>
            </MainTemplate>
        </>
    );
};

export default NotFound;