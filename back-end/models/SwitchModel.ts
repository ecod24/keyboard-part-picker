import { SwitchType } from "../enums/SwitchType";

export interface SwitchModel {
	id: number;
	name: string;
	type: SwitchType;
	force: number;
	preLubed: boolean;
	travelDistance: number;
	threePin: boolean;
	stem: string;
	topHousing: string;
	bottomHousing: string;
}
