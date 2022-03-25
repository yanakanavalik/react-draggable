import { ListElement } from "./list_element";
import React, { ReactNode, memo, useEffect, useState } from "react";

export type onElementDrag = (
  draggableElId: string,
  currentElId: string
) => void;

export interface ListElementInterface {
  id: string;
  node: ReactNode;
}

type DraggableListProps = {
  listElements: Array<ListElementInterface>;
  onElementDrag: onElementDrag;
  listCN?: string;
  taskCN?: string;
  activeDraggedElCn?: string;
  overDraggedElCn?: string;
};

export const DraggableList = memo(
  ({
    listElements,
    onElementDrag,
    listCN,
    taskCN,
    activeDraggedElCn,
    overDraggedElCn,
  }: DraggableListProps) => {
    const [childrenList, updateChildrenList] = useState<JSX.Element[]>([]);

    useEffect(() => {
      const list = listElements.map((c) => (
        <ListElement
          key={c.id}
          content={c}
          onDragStart={dragStartHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
          taskCN={taskCN}
          activeDraggedElCn={activeDraggedElCn}
          overDraggedElCn={overDraggedElCn}
        />
      ));

      updateChildrenList(list);
    }, [listElements]);

    const dragStartHandler = (event: React.DragEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;
      const id = element.id;
      event.dataTransfer.setData("text", id);
    };

    const dragOverHandler = (event: React.DragEvent<HTMLElement>) => {
      event.preventDefault();
    };

    const dropHandler = (event: React.DragEvent<HTMLElement>) => {
      event.preventDefault();

      const elementToInsertId = event.dataTransfer.getData("text");
      const currentElementId = (event.currentTarget as HTMLElement).id;

      onElementDrag(elementToInsertId, currentElementId);
    };

    return <ul className={listCN}>{childrenList}</ul>;
  }
);
