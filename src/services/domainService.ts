import { TransactionBlock } from '@mysten/sui.js/transactions';
import { suiClient, PACKAGE_ID } from '../config/sui-config';

const DEPLOYER_ADDRESS = '0x...'; // <-- Your address that owns the registries

async function getRegistryId(structName: string): Promise<string> {
  const response = await suiClient.getOwnedObjects({
    owner: DEPLOYER_ADDRESS,
    filter: {
      StructType: `${PACKAGE_ID}::domainservice::${structName}`,
    },
    options: {
      showType: true,
    },
  });

  const objectId = response?.data?.[0]?.data?.objectId;
  if (!objectId) {
    throw new Error(`${structName} not found for ${DEPLOYER_ADDRESS}`);
  }
  return objectId;
}

export class DomainService {
  // Check if a domain exists
  static async checkDomain(domainName: string): Promise<boolean> {
    try {
      const domainRegistryId = await getRegistryId('DomainRegistry');
      const tx = new TransactionBlock();

      tx.moveCall({
        target: `${PACKAGE_ID}::domainservice::check_domain`,
        arguments: [
          tx.object(domainRegistryId),
          tx.pure(domainName)
        ],
      });

      const result = await suiClient.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: DEPLOYER_ADDRESS,
      });

      const returnVal = result?.results?.[0]?.returnValues?.[0]?.[0];
      return Boolean(returnVal);
    } catch (error) {
      console.error('Error checking domain:', error);
      return false;
    }
  }

  // Assign a new domain
  static async assignDomain(
    domainName: string,
    ipAddress: string,
    websiteCode: string,
    owner: string
  ): Promise<string> {
    try {
      const domainRegistryId = await getRegistryId('0xa8202c17adc700f25ad0a610a488b4ceaad78deb23e440f2c506e691f0e68242');
      const ipRegistryId = await getRegistryId('0xdbe5b38a2814b8764df4b98ed1812e7978dbbce537b58bb2431a05977aded5a4');

      const tx = new TransactionBlock();

      tx.moveCall({
        target: `${PACKAGE_ID}::domainservice::assign_domain`,
        arguments: [
          tx.object(ipRegistryId),
          tx.object(domainRegistryId),
          tx.pure(domainName),
          tx.pure(ipAddress),
          tx.pure(websiteCode),
          tx.pure(owner)
        ],
      });

      const result = await suiClient.signAndExecuteTransactionBlock({
        transactionBlock: tx,
        options: {
          showEffects: true,
        },
      });

      return result.digest;
    } catch (error) {
      console.error('Error assigning domain:', error);
      throw error;
    }
  }

  // Buy an existing domain
  static async buyDomain(domainName: string): Promise<string> {
    try {
      const domainRegistryId = await getRegistryId('DomainRegistry');
      const tx = new TransactionBlock();

      // Pay 1 SUI = 1_000_000_000 MIST
      const [payment] = tx.splitCoins(tx.gas, [tx.pure(1_000_000_000)]);

      tx.moveCall({
        target: `${PACKAGE_ID}::domainservice::buy_domain`,
        arguments: [
          tx.object(domainRegistryId),
          tx.pure(domainName),
          payment,
        ],
      });

      const result = await suiClient.signAndExecuteTransactionBlock({
        transactionBlock: tx,
        options: {
          showEffects: true,
        },
      });

      return result.digest;
    } catch (error) {
      console.error('Error buying domain:', error);
      throw error;
    }
  }

  // Transfer domain ownership
  static async transferDomain(domainName: string, newOwner: string): Promise<string> {
    try {
      const domainRegistryId = await getRegistryId('DomainRegistry');
      const tx = new TransactionBlock();

      tx.moveCall({
        target: `${PACKAGE_ID}::domainservice::transfer_domain`,
        arguments: [
          tx.object(domainRegistryId),
          tx.pure(domainName),
          tx.pure(newOwner),
        ],
      });

      const result = await suiClient.signAndExecuteTransactionBlock({
        transactionBlock: tx,
        options: {
          showEffects: true,
        },
      });

      return result.digest;
    } catch (error) {
      console.error('Error transferring domain:', error);
      throw error;
    }
  }
}
