import React, { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface MainTemplateProps {
    children: ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainTemplate;
