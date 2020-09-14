import web3 from 'web3';

const Web3 = new web3();

console.log('web3:', Web3.eth.estimateGas);
