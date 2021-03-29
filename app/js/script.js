

let btc = 4906
let dodge = 7124
let eth = 1646
let rlt = 2900

let myPower = 404207

// 999 hash 
// 1 kH/s is 1,000 (one thousand) hashes per second
// 1 MH/s is 1,000,000 (one million) hashes per second.
// 1 GH/s is 1,000,000,000 (one billion) hashes per second.
// 1 TH/s is 1,000,000,000,000 (one trillion) hashes per second.
// 1 PH/s is 1,000,000,000,000,000 (one quadrillion) hashes per second.
// 1 EH/s is 1,000,000,000,000,000,000 (one quintillion) hashes per second.
// 1 ZH/s is 1,000,000,000,000,000,000,000 (one sextillion) hashes per second.
let zeta = 1_000_000_000_000_000_000_000n;




function calcolo(moneta, rewardBlock, mypower) {
    let monetaEh = moneta * 1000000000000000
    let myPowerN = mypower * 1000000000
    return (((rewardBlock * (myPowerN / monetaEh)) * 12) * 24);
}