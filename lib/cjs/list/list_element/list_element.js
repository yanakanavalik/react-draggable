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
exports.ListElement = void 0;
var react_1 = __importStar(require("react"));
var ListElement = function (_a) {
    var content = _a.content, onDragStart = _a.onDragStart, dragOverHandler = _a.dragOverHandler, dropHandler = _a.dropHandler, taskCN = _a.taskCN, activeDraggedElCn = _a.activeDraggedElCn, overDraggedElCn = _a.overDraggedElCn;
    var _b = (0, react_1.useState)(taskCN !== null && taskCN !== void 0 ? taskCN : ""), cn = _b[0], changeCN = _b[1];
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
    return (react_1.default.createElement("li", { onDragStart: handleDragStart, onDragOver: dragOverHandler, onDrop: handleDrop, onDragEnd: handleDragEnd, onDragEnter: handleDragEnter, onDragLeave: handleDragEnd, id: content.id, key: content.id, className: cn, draggable: true }, content.node));
};
exports.ListElement = ListElement;
