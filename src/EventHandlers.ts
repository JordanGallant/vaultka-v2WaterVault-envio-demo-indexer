/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxy_AdminChanged,
  TransparentUpgradeableProxy_AllowedVault,
  TransparentUpgradeableProxy_Approval,
  TransparentUpgradeableProxy_BeaconUpgraded,
  TransparentUpgradeableProxy_Deposit,
  TransparentUpgradeableProxy_Deposited,
  TransparentUpgradeableProxy_Initialized,
  TransparentUpgradeableProxy_Lend,
  TransparentUpgradeableProxy_LockTimeChanged,
  TransparentUpgradeableProxy_OwnershipTransferred,
  TransparentUpgradeableProxy_ProtocolFeeChanged,
  TransparentUpgradeableProxy_ProtocolFeeReceiverChanged,
  TransparentUpgradeableProxy_RepayDebt,
  TransparentUpgradeableProxy_SetUtilsRate,
  TransparentUpgradeableProxy_Transfer,
  TransparentUpgradeableProxy_USDCGifterAllowed,
  TransparentUpgradeableProxy_Upgraded,
  TransparentUpgradeableProxy_Withdraw,
  TransparentUpgradeableProxy_Withdrawn,
} from "generated";

TransparentUpgradeableProxy.AdminChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.TransparentUpgradeableProxy_AdminChanged.set(entity);
});

TransparentUpgradeableProxy.AllowedVault.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_AllowedVault = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    vault: event.params.vault,
    status: event.params.status,
  };

  context.TransparentUpgradeableProxy_AllowedVault.set(entity);
});

TransparentUpgradeableProxy.Approval.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.TransparentUpgradeableProxy_Approval.set(entity);
});

TransparentUpgradeableProxy.BeaconUpgraded.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_BeaconUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beacon: event.params.beacon,
  };

  context.TransparentUpgradeableProxy_BeaconUpgraded.set(entity);
});

TransparentUpgradeableProxy.Deposit.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.TransparentUpgradeableProxy_Deposit.set(entity);
});

TransparentUpgradeableProxy.Deposited.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Deposited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    receiver: event.params.receiver,
    assets: event.params.assets,
    shares: event.params.shares,
    timestamp: event.params.timestamp,
    utilRate: event.params.utilRate,
  };

  context.TransparentUpgradeableProxy_Deposited.set(entity);
});

TransparentUpgradeableProxy.Initialized.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.TransparentUpgradeableProxy_Initialized.set(entity);
});

TransparentUpgradeableProxy.Lend.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Lend = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.TransparentUpgradeableProxy_Lend.set(entity);
});

TransparentUpgradeableProxy.LockTimeChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_LockTimeChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lockTime: event.params.lockTime,
  };

  context.TransparentUpgradeableProxy_LockTimeChanged.set(entity);
});

TransparentUpgradeableProxy.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.TransparentUpgradeableProxy_OwnershipTransferred.set(entity);
});

TransparentUpgradeableProxy.ProtocolFeeChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_ProtocolFeeChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newwithdrawalFees: event.params.newwithdrawalFees,
  };

  context.TransparentUpgradeableProxy_ProtocolFeeChanged.set(entity);
});

TransparentUpgradeableProxy.ProtocolFeeReceiverChanged.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_ProtocolFeeReceiverChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newFeeReceiver: event.params.newFeeReceiver,
  };

  context.TransparentUpgradeableProxy_ProtocolFeeReceiverChanged.set(entity);
});

TransparentUpgradeableProxy.RepayDebt.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_RepayDebt = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    debtAmount: event.params.debtAmount,
    amountPaid: event.params.amountPaid,
  };

  context.TransparentUpgradeableProxy_RepayDebt.set(entity);
});

TransparentUpgradeableProxy.SetUtilsRate.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_SetUtilsRate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    utilRate: event.params.utilRate,
  };

  context.TransparentUpgradeableProxy_SetUtilsRate.set(entity);
});

TransparentUpgradeableProxy.Transfer.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.TransparentUpgradeableProxy_Transfer.set(entity);
});

TransparentUpgradeableProxy.USDCGifterAllowed.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_USDCGifterAllowed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    gifter: event.params.gifter,
    status: event.params.status,
  };

  context.TransparentUpgradeableProxy_USDCGifterAllowed.set(entity);
});

TransparentUpgradeableProxy.Upgraded.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.TransparentUpgradeableProxy_Upgraded.set(entity);
});

TransparentUpgradeableProxy.Withdraw.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.TransparentUpgradeableProxy_Withdraw.set(entity);
});

TransparentUpgradeableProxy.Withdrawn.handler(async ({ event, context }) => {
  const entity: TransparentUpgradeableProxy_Withdrawn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    receiver: event.params.receiver,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
    timestamp: event.params.timestamp,
    utilRate: event.params.utilRate,
  };

  context.TransparentUpgradeableProxy_Withdrawn.set(entity);
});
