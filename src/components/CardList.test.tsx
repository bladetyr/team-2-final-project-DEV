import React from "react";
import { render } from "@testing-library/react";
import { CardList } from "./CardList";

describe("CardList Component tests", () => {
    test("CardList Exists", () => {
        render(<CardList></CardList>);
        expect(<CardList></CardList>).toBeInTheDocument;
    });
});
