import { BN } from "@coral-xyz/anchor";

export enum RESOURCE_TYPE {
	RAW = 1,
	BASIC,
	ITEM,
}

export function toAnchorFriendlyID(id: number): Uint8Array {
	const buf = new BN(id).toBuffer();
	const ab = new ArrayBuffer(4);
	const view = new Uint8Array(ab);
	for (let i = 0; i < buf.length; ++i) {
		view[i] = buf[i];
	}
	return view;
}

export function toFixedArray(
	size: number,
	array: Array<number | null | undefined>,
): number[] {
	const fixed = new Array<number>(size);
	for (let i = 0; i < size; i++) {
		fixed[i] = array[i] ?? 0;
	}
	return fixed;
}
