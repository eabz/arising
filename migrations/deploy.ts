import * as anchor from "@coral-xyz/anchor";

module.exports = async (provider: anchor.AnchorProvider) => {
	anchor.setProvider(provider);
};
