"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraggableList = void 0;
var list_element_1 = require("./list_element");
var react_1 = __importStar(require("react"));
exports.DraggableList = (0, react_1.memo)(function (_a) {
    var listElements = _a.listElements, onElementDrag = _a.onElementDrag, listCN = _a.listCN, taskCN = _a.taskCN, activeDraggedElCn = _a.activeDraggedElCn, overDraggedElCn = _a.overDraggedElCn;
    var _b = (0, react_1.useState)([]), childrenList = _b[0], updateChildrenList = _b[1];
    (0, react_1.useEffect)(function () {
        var list = listElements.map(function (c) { return (react_1.default.createElement(list_element_1.ListElement, { key: c.id, content: c, onDragStart: dragStartHandler, dragOverHandler: dragOverHandler, dropHandler: dropHandler, taskCN: taskCN, activeDraggedElCn: activeDraggedElCn, overDraggedElCn: overDraggedElCn })); });
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
    return react_1.default.createElement("ul", { className: listCN }, childrenList);
});
