import React, { ReactNode } from "react";
export declare type onElementDrag = (draggableElId: string, currentElId: string) => void;
export interface ListElementInterface {
    id: string;
    node: ReactNode;
}
declare type DraggableListProps = {
    listElements: Array<ListElementInterface>;
    onElementDrag: onElementDrag;
    listCN?: string;
    taskCN?: string;
    activeDraggedElCn?: string;
    overDraggedElCn?: string;
};
export declare const DraggableList: React.MemoExoticComponent<({ listElements, onElementDrag, listCN, taskCN, activeDraggedElCn, overDraggedElCn, }: DraggableListProps) => JSX.Element>;
export {};
