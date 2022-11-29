import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import { CardList } from "../components/CardList";

export function TrashCan({
    id,
    deleteCard
}: {
    id: number;
    deleteCard: (id: number) => void;
}): JSX.Element {
    //Handles the dropping of things onto the corkboard
    const [, drop] = useDrop({
        accept: ItemTypes.Card,
        drop: () => deleteCard(id)
    });
    return (
        <div>
            ref={drop}
            <img src="Trash.png"></img>
        </div>
    );
}
