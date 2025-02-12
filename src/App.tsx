import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import TablePage from "./pages/TablePage";
import NotFoundPage from "./pages/NotFoundPage";
import '@blueprintjs/core/lib/css/blueprint.css';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<TablePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
