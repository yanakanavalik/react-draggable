import React, { useState } from "react";
export var ListElement = function (_a) {
    var content = _a.content, onDragStart = _a.onDragStart, dragOverHandler = _a.dragOverHandler, dropHandler = _a.dropHandler, taskCN = _a.taskCN, activeDraggedElCn = _a.activeDraggedElCn, overDraggedElCn = _a.overDraggedElCn;
    var _b = useState(taskCN !== null && taskCN !== void 0 ? taskCN : ""), cn = _b[0], changeCN = _b[1];
    var handleDragStart = function (event) {
        onDragStart(event);
        if (activeDraggedElCn) {
            changeCN(activeDraggedElCn);
        }
    };
    var handleDrop = function (event) {
        dropHandler(event);
        handleDragEnd();
    };
    var handleDragEnter = function () {
        if (overDraggedElCn) {
            changeCN(overDraggedElCn);
        }
    };
    var handleDragEnd = function () {
        changeCN(taskCN !== null && taskCN !== void 0 ? taskCN : "");
    };
    return (React.createElement("li", { onDragStart: handleDragStart, onDragOver: dragOverHandler, onDrop: handleDrop, onDragEnd: handleDragEnd, onDragEnter: handleDragEnter, onDragLeave: handleDragEnd, id: content.id, key: content.id, className: cn, draggable: true }, content.node));
};
