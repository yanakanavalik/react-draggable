import { ListElement } from "./list_element";
import React, { memo, useEffect, useState } from "react";
export var DraggableList = memo(function (_a) {
    var listElements = _a.listElements, onElementDrag = _a.onElementDrag, listCN = _a.listCN, taskCN = _a.taskCN, activeDraggedElCn = _a.activeDraggedElCn, overDraggedElCn = _a.overDraggedElCn;
    var _b = useState([]), childrenList = _b[0], updateChildrenList = _b[1];
    useEffect(function () {
        var list = listElements.map(function (c) { return (React.createElement(ListElement, { key: c.id, content: c, onDragStart: dragStartHandler, dragOverHandler: dragOverHandler, dropHandler: dropHandler, taskCN: taskCN, activeDraggedElCn: activeDraggedElCn, overDraggedElCn: overDraggedElCn })); });
        updateChildrenList(list);
    }, [listElements]);
    var dragStartHandler = function (event) {
        var element = event.target;
        var id = element.id;
        event.dataTransfer.setData("text", id);
    };
    var dragOverHandler = function (event) {
        event.preventDefault();
    };
    var dropHandler = function (event) {
        event.preventDefault();
        var elementToInsertId = event.dataTransfer.getData("text");
        var currentElementId = event.currentTarget.id;
        onElementDrag(elementToInsertId, currentElementId);
    };
    return React.createElement("ul", { className: listCN }, childrenList);
});
