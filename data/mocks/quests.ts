import { toFixedArray } from "../common";
import { RAW_MATERIALS } from "../materials";
import { QUEST_TYPE, QUESTS, QUESTS_DATA, type QuestData } from "../quests";

export const MockJobQuest = (): QuestData => {
	const baseQuest = QUESTS_DATA[QUESTS.BEG];

	baseQuest.cooldown = 2;

	baseQuest.statsRequired = { might: 1, speed: 0, intellect: 0 };

	baseQuest.materialsReward = [
		RAW_MATERIALS.GOLD,
		RAW_MATERIALS.WOOD,
		RAW_MATERIALS.IRON,
		RAW_MATERIALS.SILVER,
		RAW_MATERIALS.BONES,
		RAW_MATERIALS.BRONZE,
		RAW_MATERIALS.LEATHER,
		RAW_MATERIALS.COTTON,
		RAW_MATERIALS.WOOL,
		RAW_MATERIALS.SILK,
	];

	baseQuest.materialsAmounts = [
		100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
	];

	return baseQuest;
};

export const MockFarmQuest = (): QuestData => {
	const baseQuest = QUESTS_DATA[QUESTS.FIND_WOOD];
	baseQuest.cooldown = 2;
	baseQuest.statsRequired = { might: 0, speed: 1, intellect: 0 };

	baseQuest.materialsReward = toFixedArray(10, [
		RAW_MATERIALS.WOOD,
		RAW_MATERIALS.BONES,
	]);
	baseQuest.materialsAmounts = toFixedArray(10, [100, 100]);
	return baseQuest;
};

export const MockRaidQuest = (): QuestData => {
	const baseQuest = QUESTS_DATA[QUESTS.FIND_STONE];
	baseQuest.cooldown = 2;
	baseQuest.statsRequired = { might: 0, speed: 0, intellect: 1 };
	baseQuest.questType = QUEST_TYPE.RAID;
	baseQuest.materialsReward = toFixedArray(10, [RAW_MATERIALS.BONES]);
	baseQuest.materialsAmounts = toFixedArray(10, [50]);
	baseQuest.mobExperience = 500;
	baseQuest.mobLevel = 0;
	baseQuest.mobBaseStats = { might: 1, speed: 1, intellect: 0 };
	baseQuest.mobBaseAttributes = {
		atk: 1,
		def: 1,
		range: 1,
		magAtk: 0,
		magDef: 0,
		rate: 1,
	};

	return baseQuest;
};
