import React from "react";
import { render } from "@testing-library/react";
import { DeleteNote } from "./DeleteNote";

describe("DeleteNote Component tests", () => {
    test("Delete Note Button Exists", () => {
        render(<DeleteNote></DeleteNote>);
        expect(<DeleteNote></DeleteNote>).toBeInTheDocument;
    });
});
