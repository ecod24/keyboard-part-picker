import { SwitchType } from "../enums/SwitchType";

export interface SwitchModel {
	id: number;
	name: string;
	type: SwitchType;
	force: number;
	pre_lubed: boolean;
	travel_distance: number;
	three_pin: boolean;
	stem: string;
	top_housing: string;
	bottom_housing: string;
}
