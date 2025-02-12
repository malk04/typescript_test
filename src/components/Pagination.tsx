import React from "react";
import {Button, ButtonGroup, NumericInput} from "@blueprintjs/core";

// Компонент пролистывания страниц
interface PaginationProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage, totalPages }) => {

    return (
        <div style={{marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
            <ButtonGroup>
                <Button
                    icon="arrow-left"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                />
                <NumericInput
                    min={1}
                    max={totalPages}
                    value={page}
                    onValueChange={(value) => setPage(Math.max(1, Math.min(value, totalPages)))}
                    style={{width: "50px"}}
                />
                <Button
                    icon="arrow-right"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                />
            </ButtonGroup>
            <span>из {totalPages} страниц</span>
        </div>
    );
};

export default Pagination;
