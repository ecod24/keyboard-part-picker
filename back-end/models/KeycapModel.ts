import { LayoutType } from "../enums/LayoutType";
import { KeycapProfileType } from "../enums/KeycapProfileType";

export interface KeycapModel {
    id: number;
    name: string;
    brand: string;
    price: number;
    colors: string[];
    profile: KeycapProfileType;
    layout_compatibility: LayoutType[];
}