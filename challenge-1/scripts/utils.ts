import { TonClient } from 'ton';
import { Address } from 'ton-core';

export const toncenter = new TonClient({
	endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
});

export const nftCollectionAddress = Address.parse('EQA0LSb2VEM-8i2PI1xu0mvluCOwyhUZfBUJaI9Zm2E1Yr3n');
//https://testnet.explorer.tonnft.tools/collection/EQA0LSb2VEM-8i2PI1xu0mvluCOwyhUZfBUJaI9Zm2E1Yr3n



export async function getNextItem() {

	let { stack } = await toncenter.callGetMethod(
		nftCollectionAddress, 
		'get_collection_data'
	);
	let nextItemIndex = stack.readBigNumber();

	return nextItemIndex;
}

