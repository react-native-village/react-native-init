export type Nft = {
  imageUrl: string;
};

export function replaceUri(uri?: string) {
  if (!uri) {
    return;
  }
  if (uri.startsWith('ipfs')) {
    // https://ipfs.io/ipfs/bafybeidlkqhddsjrdue7y3dy27pu5d7ydyemcls4z24szlyik3we7vqvam/nft-image.png
    return uri.replace('ipfs://', 'https://ipfs.io/ipfs/');
  }

  return uri;
}

export async function fetchOpenSeaNfts(account: string): Promise<Array<Nft>> {
  const response = await fetch(
    `https://api.opensea.io/api/v1/assets?owner=${account}&order_direction=desc&offset=0&limit=50`,
  );
  const data = await response.json();

  const nftList: Array<Nft> = data.assets.map((nft: {image_url: string}) => {
    const nftNewFormat: Nft = {
      imageUrl: nft.image_url,
    };
    return nftNewFormat;
  });

  return nftList;
}
