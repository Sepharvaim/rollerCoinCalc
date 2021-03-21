let slots = document.querySelectorAll('.slots>input')

let kiloConversion = function(e) {
    // se evento e' 
    let kiloHas = document.querySelector('._2>input').value;
    for (let i = 0; i< slots.length; i++) {
        switch (i) {
            case 0:
                slots[i].value = kiloHas * 1000;
                break;
            case 1:
                slots[i] = kiloHas;
                break;
            case 2: 
                slots[i].value = kiloHas / 1000;
                break;
            case 3: 
                slots[i].value = kiloHas / 1000000;
                break;     
            case 4: 
            slots[i].value = Number(kiloHas / 1000000000).toFixed(15).replace(/\.?0+$/,"")
                break;
            case 5:
                slots[i].value = Number(kiloHas / 1000000000000).toFixed(15).replace(/\.?0+$/,"")
                break;
            case 6: 
                slots[i].value = Number(kiloHas / 1000000000000000).toFixed(15).replace(/\.?0+$/,"")
                break;
            case 7:
                slots[i].value = Number(kiloHas / 1000000000000000000).toFixed(18).replace(/\.?0+$/,"") 
                break;   
        }
    }
}

let hashConversion = function(e) {
    // se evento e' 
    let hash = document.querySelector('._1>input').value;
    for (let i = 0; i< slots.length; i++) {
        switch (i) {
            case 0:
                slots[i].value = hash;
                break;
            case 1:
                slots[i].value = hash / 1000
                break;
            case 2: 
                slots[i].value = hash / 1000000;
                break;
            case 3: 
                slots[i].value = Number(hash / 1000000000).toFixed(12).replace(/\.?0+$/,"")
                break;     
            case 4: 
                slots[i].value = Number(hash / 1000000000000).toFixed(15).replace(/\.?0+$/,"")
                break;
            case 5:
                slots[i].value = Number(hash / 1000000000000000).toFixed(18).replace(/\.?0+$/,"")
                break;
            case 6: 
                slots[i].value = Number(hash / 1000000000000000000).toFixed(18).replace(/\.?0+$/,"")
                break;
            case 7:
                slots[i].value = Number(hash / 1000000000000000000000).toFixed(18).replace(/\.?0+$/,"") 
                break;   
        }
    }
}


let megaConversion = function(e) {
    // se evento e' 
    var megaHash = document.querySelector('._3>input').value;
    for (let i = 0; i< slots.length; i++) {
        switch (i) {
            case 0:
                slots[i].value = megaHash * 1000000;
                break;
            case 1:
                slots[i].value = megaHash * 1000
                break;
            case 2: 
                slots[i].value = megaHash;
                break;
            case 3: 
                slots[i].value = Number(megaHash / 1000).toFixed(9).replace(/\.?0+$/,"")
                break;     
            case 4: 
                slots[i].value = Number(megaHash / 1000000).toFixed(15).replace(/\.?0+$/,"")
                break;
            case 5:
                slots[i].value = Number(megaHash / 1000000000).toFixed(18).replace(/\.?0+$/,"")
                break;
            case 6: 
                slots[i].value = Number(megaHash / 1000000000000).toFixed(21).replace(/\.?0+$/,"")
                break;
            case 7:
                slots[i].value = Number(megaHash / 1000000000000000).toFixed(24).replace(/\.?0+$/,"") 
                break;   
        }
    }
}

let gigaConversion = function(e) {
    // se evento e' 
    var gigaHash = document.querySelector('._4>input').value;
    for (let i = 0; i< slots.length; i++) {
        switch (i) {
            case 0:
                slots[i].value = gigaHash * 1000000000;
                break;
            case 1:
                slots[i].value = gigaHash * 1000000
                break;
            case 2: 
                slots[i].value = gigaHash * 1000;
                break;
            case 3: 
                slots[i].value = gigaHash;
                break;     
            case 4: 
                slots[i].value = Number(gigaHash / 1000).toFixed(15).replace(/\.?0+$/,"")
                break;
            case 5:
                slots[i].value = Number(gigaHash / 1000000).toFixed(18).replace(/\.?0+$/,"")
                break;
            case 6: 
                slots[i].value = Number(gigaHash / 1000000000).toFixed(21).replace(/\.?0+$/,"")
                break;
            case 7:
                slots[i].value = Number(gigaHash / 1000000000000).toFixed(24).replace(/\.?0+$/,"") 
                break;   
        }
    }
}

let teraConversion = function(e) {
    // se evento e' 
    var teraHash = document.querySelector('._5>input').value;
    for (let i = 0; i< slots.length; i++) {
        switch (i) {
            case 0:
                slots[i].value = teraHash * 1000000000000;
                break;
            case 1:
                slots[i].value = teraHash * 1000000000;
                break;
            case 2: 
                slots[i].value = teraHash * 1000000;
                break;
            case 3: 
                slots[i].value = teraHash * 1000;
                break;     
            case 4: 
                slots[i].value = Number(teraHash).toFixed(15).replace(/\.?0+$/,"")
                break;
            case 5:
                slots[i].value = Number(teraHash / 1000).toFixed(18).replace(/\.?0+$/,"")
                break;
            case 6: 
                slots[i].value = Number(teraHash / 1000000).toFixed(21).replace(/\.?0+$/,"")
                break;
            case 7:
                slots[i].value = Number(teraHash / 1000000000).toFixed(24).replace(/\.?0+$/,"") 
                break;   
        }
    }
}

let petaConversion = function(e) {
    // se evento e' 
    var petaHash = document.querySelector('._6>input').value;
    for (let i = 0; i< slots.length; i++) {
        switch (i) {
            case 0:
                slots[i].value = petaHash * 1000000000000000;
                break;
            case 1:
                slots[i].value = petaHash * 1000000000000;
                break;
            case 2: 
                slots[i].value = petaHash * 1000000000;
                break;
            case 3: 
                slots[i].value = petaHash * 1000000;
                break;     
            case 4: 
                slots[i].value = Number(petaHash * 1000).toFixed(15).replace(/\.?0+$/,"")
                break;
            case 5:
                slots[i].value = Number(petaHash).toFixed(18).replace(/\.?0+$/,"")
                break;
            case 6: 
                slots[i].value = Number(petaHash / 1000).toFixed(18).replace(/\.?0+$/,"")
                break;
            // case 7:
            //     slots[i].value = Number(petaHash / 1000000).toFixed(21).replace(/\.?0+$/,"") 
            //     break;   
        }
    }
}

let exaConversion = function(e) {
    // se evento e' 
    var exaHash = document.querySelector('._7>input').value;
    for (let i = 0; i< slots.length; i++) {
        switch (i) {
            case 0:
                slots[i].value = exaHash * 1000000000000000000;
                break;
            case 1:
                slots[i].value = exaHash * 1000000000000000;
                break;
            case 2: 
                slots[i].value = exaHash * 1000000000000;
                break;
            case 3: 
                slots[i].value = exaHash * 1000000000;
                break;     
            case 4: 
                slots[i].value = Number(exaHash * 1000000).toFixed(15).replace(/\.?0+$/,"")
                break;
            case 5:
                slots[i].value = Number(exaHash *1000).toFixed(18).replace(/\.?0+$/,"")
                break;
            case 6: 
                slots[i].value = Number(exaHash).toFixed(18).replace(/\.?0+$/,"")
                break;
            case 7:
                slots[i].value = Number(exaHash / 1000).toFixed(18).replace(/\.?0+$/,"") 
                break;   
        }
    }
}



function calcEarnings() {
    let btcData = [document.querySelector('.btcPower>input').value,document.querySelector('.btcNetPower>input').value,document.querySelector('.btcBlockReward>input').value];
    let dodgeData = [document.querySelector('.dodgePower>input').value,document.querySelector('.dodgeNetPower>input').value, document.querySelector('.dodgeBlockReward>input').value];
    let ethData = [document.querySelector('.ethPower>input').value,document.querySelector('.ethNetPower>input').value, document.querySelector('.ethBlockReward>input').value];
    let rltData = [document.querySelector('.rltPower>input').value,document.querySelector('.rltNetPower>input').value, document.querySelector('.rltBlockReward>input').value];
    
    let data = [btcData,dodgeData,ethData,rltData];

    for (let i = 0; i<data.length; i++) {
        let currentEarningBlock = document.querySelector(`table tr:nth-child(${i+2}) td:nth-child(1)`)
        let blockReward = (((+data[i][0] * 1000000000 ) / (+data[i][1] * 1000000000000000)) * +data[i][2])

        currentEarningBlock.innerText = blockReward.toFixed(9).replace(/\.?0+$/,"")

        let currentHourBlock = document.querySelector(`table tr:nth-child(${i+2}) td:nth-child(2)`);
        currentHourBlock.innerText = (blockReward * 12).toFixed(9).replace(/\.?0+$/,"")

        let currentDayBlock = document.querySelector(`table tr:nth-child(${i+2}) td:nth-child(3)`);
        currentDayBlock.innerText = (blockReward * 12 * 24).toFixed(9).replace(/\.?0+$/,"")

        let currentMonthBlock = document.querySelector(`table tr:nth-child(${i+2}) td:nth-child(4)`);
        currentMonthBlock.innerText = (blockReward* 12 * 24 * 30).toFixed(8).replace(/\.?0+$/,"")
    }

    
}


let calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click',calcEarnings);
