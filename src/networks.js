import { getNetworkType, isLocalOrUnknownNetwork } from './lib/web3-utils'
import { getDefaultChain } from './local-settings'

const networks = {
  mainnet: {
    chainId: 1,
    ensRegistry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    name: 'Mainnet',
    type: 'main',
  },
  rinkeby: {
    chainId: 4,
    ensRegistry: '0x98df287b6c145399aaa709692c8d308357bc085d',
    name: 'Rinkeby',
    type: 'rinkeby',
  },
  xdai: {
    chainId: 100,
    ensRegistry: '0xaafca6b0c89521752e559650206d7c925fd0e530',
    name: 'xDai',
    type: 'xdai',
    clientUrl: 'https://aragon.1hive.org/#/',
  },
  polygon: {
    chainId: 137,
    ensRegistry: '0x7EdE100965B1E870d726cD480dD41F2af1Ca0130',
    name: 'Polygon',
    type: 'matic',
    clientUrl: 'https://aragon.1hive.org/#/',
  },
}

function getNetworkInternalName(chainId) {
  return isLocalOrUnknownNetwork(chainId) ? 'local' : getNetworkType(chainId)
}

export function getNetwork(chainId = getDefaultChain()) {
  return networks[getNetworkInternalName(chainId)]
}

export function getAvailableNetworks() {
  return Object.entries(networks).map(([key, { chainId, name, type }]) => ({
    chainId,
    name,
    type,
  }))
}
