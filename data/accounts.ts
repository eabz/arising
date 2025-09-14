import type { Program } from "@coral-xyz/anchor";
import { MPL_TOKEN_METADATA_PROGRAM_ID } from "@metaplex-foundation/mpl-token-metadata";
import {
	type Address,
	getAddressEncoder,
	getProgramDerivedAddress,
	getUtf8Encoder,
	address as toAddress,
} from "@solana/kit";
import type { Arising } from "../target/types/arising";
import { toAnchorFriendlyID } from "./common";
import type { QuestData } from "./quests";
import type { Recipe } from "./recipes";

const CONFIG_PREFIX = "arising_config_account";
const FORGE_RECIPE_PREFIX = "arising_forge_recipe";
const CRAFT_RECIPE_PREFIX = "arsing_craft";
const QUEST_PREFIX = "arising_quest";

const METADATA_PREFIX = "metadata";
const MASTER_EDITION_PREFIX = "edition";

const CHARACTER_PREFIX = "arising_character_account";
const CHARACTER_MATERIAL_PREFIX = "arising_character_materials_account";
const CHARACTER_SLOTS_PREFIX = "arising_character_slots_account";
const CHARACTER_EQUIPMENT_PREFIX = "arising_character_equipment_account";

const utf8 = getUtf8Encoder();
const encodeAddress = getAddressEncoder();

// Returns the program main config account
export const getProgramConfigAddress = async (
	program: Program<Arising>,
): Promise<{ address: Address; bump: number }> => {
	const programAddress = toAddress(program.programId.toBase58());
	const [address, bump] = await getProgramDerivedAddress({
		programAddress,
		seeds: [utf8.encode(CONFIG_PREFIX)],
	});
	return { address, bump };
};

// Returns the program character account from a mint
export const getProgramCharacterAccount = async (
	mint: string,
	program: Program<Arising>,
): Promise<{ account: Address; bump: number }> => {
	const programAddress = toAddress(program.programId.toBase58());

	const [account, bump] = await getProgramDerivedAddress({
		programAddress,
		seeds: [
			utf8.encode(CHARACTER_PREFIX),
			encodeAddress.encode(toAddress(mint)),
		],
	});

	return { account, bump };
};

// Returns the program character material account from a mint
export const getProgramCharacterMaterialsAccount = async (
	mint: string,
	program: Program<Arising>,
): Promise<{ account: Address; bump: number }> => {
	const programAddress = toAddress(program.programId.toBase58());

	const [account, bump] = await getProgramDerivedAddress({
		programAddress,
		seeds: [
			utf8.encode(CHARACTER_MATERIAL_PREFIX),
			encodeAddress.encode(toAddress(mint)),
		],
	});

	return { account, bump };
};

// Returns the program character slots account from a mint
export const getProgramCharacterSlotsAccount = async (
	mint: string,
	program: Program<Arising>,
): Promise<{ account: Address; bump: number }> => {
	const programAddress = toAddress(program.programId.toBase58());

	const [account, bump] = await getProgramDerivedAddress({
		programAddress,
		seeds: [
			utf8.encode(CHARACTER_SLOTS_PREFIX),
			encodeAddress.encode(toAddress(mint)),
		],
	});

	return { account, bump };
};

// Returns the program character equipment account from a mint
export const getProgramCharacterEquipmentAccount = async (
	mint: string,
	program: Program<Arising>,
): Promise<{ account: Address; bump: number }> => {
	const programAddress = toAddress(program.programId.toBase58());

	const [account, bump] = await getProgramDerivedAddress({
		programAddress,
		seeds: [
			utf8.encode(CHARACTER_EQUIPMENT_PREFIX),
			encodeAddress.encode(toAddress(mint)),
		],
	});

	return { account, bump };
};

// Returns the program forge recipe account from a recipe ID
export const getProgramForgeRecipeAccount = async (
	recipe: Recipe,
	program: Program<Arising>,
): Promise<{ account: Address; bump: number }> => {
	const programAddress = toAddress(program.programId.toBase58());

	const [account, bump] = await getProgramDerivedAddress({
		programAddress,
		seeds: [utf8.encode(FORGE_RECIPE_PREFIX), toAnchorFriendlyID(recipe.id)],
	});

	return { account, bump };
};

// Returns the program craft recipe account from a recipe ID
export const getProgramCraftRecipeAccount = async (
	recipe: Recipe,
	program: Program<Arising>,
): Promise<{ account: Address; bump: number }> => {
	const programAddress = toAddress(program.programId.toBase58());

	const [account, bump] = await getProgramDerivedAddress({
		programAddress,
		seeds: [utf8.encode(CRAFT_RECIPE_PREFIX), toAnchorFriendlyID(recipe.id)],
	});

	return { account, bump };
};

// Returns the program quest account from a quest ID
export const getProgramQuestAccount = async (
	quest: QuestData,
	program: Program<Arising>,
): Promise<{ account: Address; bump: number }> => {
	const programAddress = toAddress(program.programId.toBase58());

	const [account, bump] = await getProgramDerivedAddress({
		programAddress,
		seeds: [utf8.encode(QUEST_PREFIX), toAnchorFriendlyID(quest.id)],
	});

	return { account, bump };
};

// Returns the master edition account from a mint
export const getMasterEditionAccount = async (
	mint: string,
): Promise<{ account: Address; bump: number }> => {
	const programAddress = toAddress(MPL_TOKEN_METADATA_PROGRAM_ID);

	const [account, bump] = await getProgramDerivedAddress({
		programAddress,
		seeds: [
			Buffer.from(METADATA_PREFIX),
			programAddress,
			mint,
			Buffer.from(MASTER_EDITION_PREFIX),
		],
	});

	return { account, bump };
};

// Returns the metadata account from a mint
export const getMetadataAccount = async (
	mint: string,
): Promise<{ account: Address; bump: number }> => {
	const programAddress = toAddress(MPL_TOKEN_METADATA_PROGRAM_ID);

	const [account, bump] = await getProgramDerivedAddress({
		programAddress,
		seeds: [Buffer.from(METADATA_PREFIX), programAddress, mint],
	});

	return { account, bump };
};
