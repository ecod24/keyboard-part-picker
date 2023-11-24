import { KeyboardModel } from "./KeyboardModel";
import { KeycapModel } from "./KeycapModel";
import { SwitchModel } from "./SwitchModel";

export interface BuildModel {
    id: number;
    title: string;
    price: number;
    description: string;
    builder: number;
    switches: SwitchModel;
    keyboard: KeyboardModel;
    keycaps: KeycapModel;
}