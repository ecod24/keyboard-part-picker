import { LayoutType } from "../enums/LayoutType";

export interface KeyboardModel {
    id: number;
    name: string;
    layout: LayoutType;
    price: number;
    color: string;
}