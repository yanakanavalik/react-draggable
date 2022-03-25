import { ListElementInterface } from "../list";
import React, { ReactEventHandler, useState } from "react";

interface ListElementProps {
  content: ListElementInterface;
  onDragStart: ReactEventHandler;
  dragOverHandler: ReactEventHandler;
  dropHandler: ReactEventHandler;
  taskCN?: string;
  activeDraggedElCn?: string;
  overDraggedElCn?: string;
}

export const ListElement = ({
  content,
  onDragStart,
  dragOverHandler,
  dropHandler,
  taskCN,
  activeDraggedElCn,
  overDraggedElCn,
}: ListElementProps) => {
  const [cn, changeCN] = useState<string>(taskCN ?? "");

  const handleDragStart = (event: React.DragEvent<HTMLElement>) => {
    onDragStart(event);

    if (activeDraggedElCn) {
      changeCN(activeDraggedElCn);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLElement>) => {
    dropHandler(event);

    handleDragEnd();
  };

  const handleDragEnter = () => {
    if (overDraggedElCn) {
      changeCN(overDraggedElCn);
    }
  };

  const handleDragEnd = () => {
    changeCN(taskCN ?? "");
  };

  return (
    <li
      onDragStart={handleDragStart}
      onDragOver={dragOverHandler}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragEnd}
      id={content.id}
      key={content.id}
      className={cn}
      draggable
    >
      {content.node}
    </li>
  );
};
