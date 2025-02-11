import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import VKIcon from "../../icons/VKIcon";
import TGIcon from "../../icons/TGIcon";

const Footer: React.FC = () => {
    return (
        <footer className="my-footer">
            <div>
                <Link to="https://vk.com/malkova_as" target="_blank">
                    <VKIcon/>
                </Link>
                <Link to="https://t.me/malkova_as" target="_blank">
                    <TGIcon/>
                </Link>
            </div>
            <div>
                <span>email:  </span>
                <span><i>nastena.malkova.04@mail.ru</i></span>
            </div>
        </footer>
    );
};

export default Footer;
