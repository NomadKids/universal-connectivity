export const CHAT_TOPIC = 'universal-connectivity'
export const CHAT_FILE_TOPIC = 'universal-connectivity-file'
export const PUBSUB_PEER_DISCOVERY = 'universal-connectivity-browser-peer-discovery'
export const FILE_EXCHANGE_PROTOCOL = '/universal-connectivity-file/1'
export const DIRECT_MESSAGE_PROTOCOL = '/universal-connectivity/dm/1.0.0'

export const CIRCUIT_RELAY_CODE = 290

export const MIME_TEXT_PLAIN = 'text/plain'

export const BOOTSTRAP_MULTIADDRS = [
  '/dns4/burden-sphere-chuckle-fever.2n6.me/tcp/443/tls/ws/p2p/16Uiu2HAm2BG1xBWz8YyqFiERC7vJzUX2mpyF1vNyVMJajQcebVeB',
  '/dns6/burden-sphere-chuckle-fever.2n6.me/tcp/443/tls/ws/p2p/16Uiu2HAm2BG1xBWz8YyqFiERC7vJzUX2mpyF1vNyVMJajQcebVeB',
  '/ip4/37.114.50.44/udp/24204/quic-v1/webtransport/p2p/16Uiu2HAm2BG1xBWz8YyqFiERC7vJzUX2mpyF1vNyVMJajQcebVeB',
  '/ip6/2a0e:97c0:3e3:54b:3:1e9a:2ca2:2ab1/udp/24204/quic-v1/webtransport/p2p/16Uiu2HAm2BG1xBWz8YyqFiERC7vJzUX2mpyF1vNyVMJajQcebVeB',
  '/ip4/37.114.50.44/udp/24204/webrtc-direct/p2p/16Uiu2HAm2BG1xBWz8YyqFiERC7vJzUX2mpyF1vNyVMJajQcebVeB',
  '/ip6/2a0e:97c0:3e3:54b:3:1e9a:2ca2:2ab1/udp/24204/webrtc-direct/p2p/16Uiu2HAm2BG1xBWz8YyqFiERC7vJzUX2mpyF1vNyVMJajQcebVeB',
] as const
