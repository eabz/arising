import type { Program } from "@coral-xyz/anchor";
import * as anchor from "@coral-xyz/anchor";
import type { Arising } from "../target/types/arising";

describe("arising", () => {
	// Configure the client to use the local cluster.
	anchor.setProvider(anchor.AnchorProvider.env());

	const program = anchor.workspace.arising as Program<Arising>;
});
