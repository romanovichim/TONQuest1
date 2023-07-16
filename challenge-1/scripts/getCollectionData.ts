import { TonClient } from 'ton';
import { Address } from 'ton-core';

export const toncenter = new TonClient({
	endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
});

export const nftCollectionAddress = Address.parse('EQA0LSb2VEM-8i2PI1xu0mvluCOwyhUZfBUJaI9Zm2E1Yr3n');
//https://testnet.explorer.tonnft.tools/collection/EQA0LSb2VEM-8i2PI1xu0mvluCOwyhUZfBUJaI9Zm2E1Yr3n





export async function getCollectionData() {

	let { stack } = await toncenter.callGetMethod(
		nftCollectionAddress, 
		'get_collection_data'
	);
	let nextItemIndex = stack.readBigNumber();
	let contentRoot = stack.readCell();
	let owner = stack.readAddress();

	console.log('Collection info, from get_collection_data() method:')	
	console.log('Next item index:', nextItemIndex.toString());
	console.log('Content root cell:', contentRoot);
	console.log('Collection owner adress:', owner);

	return nextItemIndex;
}

getCollectionData();

