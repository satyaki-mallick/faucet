export default {
    env: process.env.NODE_ENV || 'development',
    server: {
        port: process.env.SERVER_PORT || 3001,
        faucetEth: process.env.FAUCET_ETH || 3,
        faucetTimeSpan: process.env.FAUCET_TIMESPAN || 24,
        faucetAddress: '0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e',
        faucetPassword: 'node0'
    },
    database: {
        uri: process.env.MONGO_URL || 'mongodb://localhost:27017/faucetdb'
    },
    oceanConfig: {
        nodeUri: process.env.KEEPER_URI || 'http://localhost:8545',
        aquariusUri: process.env.AQUARIUS_URI || 'http://localhost:5000',
        brizoUri: process.env.BRIZO_URI || 'http://localhost:8030',
        parityUri: process.env.PARITY_URI || 'http://localhost:8545',
        secretStoreUri: process.env.SECRETSTORE_URI || 'http://localhost:12001',
        threshold: process.env.SECRETSTORE_THRESHOLD || 0,
        password: process.env.ACCOUNT_PWD || 'node0',
        address:
            process.env.ADDRESS || '0x00bd138abd70e2f00903268f3db08f2d25677c9e'
    }
}
