import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TablePage from "./pages/TablePage";
import NotFoundPage from "./pages/NotFoundPage";
import '@blueprintjs/core/lib/css/blueprint.css';

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TablePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
