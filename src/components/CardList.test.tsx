import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import { CardList } from "./CardList";

const testList = [
    {
        task: {
            title: "CISC450",
            description: "Study packet loss",
            priority: "medium",
            thumbColor: "Coral",
            assigned: ["Blade"]
        }
    },
    {
        task: {
            title: "CISC450",
            description: "Networks HW 4a, Question P16",
            priority: "high",
            thumbColor: "Coral",
            assigned: ["Blade"]
        }
    },
    {
        task: {
            title: "Walk Stella and Bella",
            description: "They were very good today :]",
            priority: "low",
            thumbColor: "Plum",
            assigned: ["Mom", "Brother"]
        }
    }
];

describe("CardList Component tests", () => {
    test("CardList Exists", () => {
        render(<CardList></CardList>);
        expect(<CardList></CardList>).toBeInTheDocument;
    });
    test("CardList Sorts Cards", () => {
        //I want to call a sorting function here
        //and use it on my test list
        const sortColorButton = screen.getByRole("button", {
            name: "Sort by Color"
        });
        sortColorButton.click();
    });
});
