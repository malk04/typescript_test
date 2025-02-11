import React from "react";
import { Icon } from "@blueprintjs/core";
import "./Header.css";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="my-header">
            <div className="header-container">
                <Link
                    to="/"
                    className="header-link"
                >
                    <Icon icon="th" size={30} className="heder-icon" />
                </Link>
                <div className="flex-between">
                    <div className="header-title" >User Actions</div>
                    <div className="header-title" >Малькова Анастасия</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
