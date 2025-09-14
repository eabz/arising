#![allow(unexpected_cfgs)]

use anchor_lang::prelude::*;

use crate::config::{Config, CONFIG_ACCOUNT_SIZE, CONFIG_PREFIX};

mod config;

declare_id!("8bSdpSLWQudpEXCYvgfATUfEyTUsxyoawpJY14fnZUpd");

#[program]
pub mod arising {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, _bump: u8) -> Result<()> {
        let config = &mut ctx.accounts.config;
        config.initialized = true;
        config.paused = true;
        config.authority = ctx.accounts.authority.unsigned_key().clone();
        config.seconds_between_refreshes = 86_400; // 1 day
        config.seconds_between_paid_refreshes = 86_400; // 1 day
        config.experience_multiplier = 1;
        config.max_characters = 30_000;
        config.forge_recipes = 0;
        config.craft_recipes = 0;
        config.upgrade_recipes = 0;

        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(bump: u8)]
pub struct Initialize<'info> {
    #[account(
        init,
        payer = authority,
        seeds = [CONFIG_PREFIX.as_bytes()],
        bump,
        space = CONFIG_ACCOUNT_SIZE
    )]
    pub config: Account<'info, Config>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}
