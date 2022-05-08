import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Squires,
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Transfer
} from "../generated/Squires/Squires"
import { Squire } from "../generated/schema"

export function handleTransfer(event: Transfer): void {
  let squire = Squire.load(event.params.tokenId.toString());

  if(!squire) {
    squire = new Squire(event.params.tokenId.toString());
  }

  let contract = Squires.bind(event.address);

  let tokenId = event.params.tokenId;

  let faith = contract.faithByTokenId(tokenId);
  let luck = contract.luckByTokenId(tokenId);
  let strength = contract.strengthByTokenId(tokenId);
  let type = contract.squireTypeByTokenId(tokenId);
  let wisdom = contract.wisdomByTokenId(tokenId);
  let genesis = contract.genesisByTokenId(tokenId);
  
  squire.faith = faith;
  squire.luck = luck;
  squire.strength = strength;
  squire.type = type;
  squire.wisdom = wisdom;
  squire.genesis = genesis;

  squire.owner = event.params.to.toHexString();

  squire.save();
}
