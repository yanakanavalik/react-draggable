import { ListElementInterface } from "../list";
import { ReactEventHandler } from "react";
interface ListElementProps {
    content: ListElementInterface;
    onDragStart: ReactEventHandler;
    dragOverHandler: ReactEventHandler;
    dropHandler: ReactEventHandler;
    taskCN?: string;
    activeDraggedElCn?: string;
    overDraggedElCn?: string;
}
export declare const ListElement: ({ content, onDragStart, dragOverHandler, dropHandler, taskCN, activeDraggedElCn, overDraggedElCn, }: ListElementProps) => JSX.Element;
export {};
