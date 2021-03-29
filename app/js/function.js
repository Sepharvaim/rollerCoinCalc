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
                slots[i].value = Number(petaHash / 1000).toFixed(21).replace(/\.?0+$/,"")
                break;
            case 7:
                slots[i].value = Number(petaHash / 1000000).toFixed(24).replace(/\.?0+$/,"") 
                break;   
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










let slots=document.querySelectorAll(".slots>input"),kiloConversion=function(e){let t=document.querySelector("._2>input").value;for(let e=0;e<slots.length;e++)switch(e){case 0:slots[e].value=1e3*t;break;case 1:slots[e]=t;break;case 2:slots[e].value=t/1e3;break;case 3:slots[e].value=t/1e6;break;case 4:slots[e].value=Number(t/1e9).toFixed(15).replace(/\.?0+$/,"");break;case 5:slots[e].value=Number(t/1e12).toFixed(15).replace(/\.?0+$/,"");break;case 6:slots[e].value=Number(t/1e15).toFixed(15).replace(/\.?0+$/,"");break;case 7:slots[e].value=Number(t/1e18).toFixed(18).replace(/\.?0+$/,"")}},hashConversion=function(e){let t=document.querySelector("._1>input").value;for(let e=0;e<slots.length;e++)switch(e){case 0:slots[e].value=t;break;case 1:slots[e].value=t/1e3;break;case 2:slots[e].value=t/1e6;break;case 3:slots[e].value=Number(t/1e9).toFixed(12).replace(/\.?0+$/,"");break;case 4:slots[e].value=Number(t/1e12).toFixed(15).replace(/\.?0+$/,"");break;case 5:slots[e].value=Number(t/1e15).toFixed(18).replace(/\.?0+$/,"");break;case 6:slots[e].value=Number(t/1e18).toFixed(18).replace(/\.?0+$/,"");break;case 7:slots[e].value=Number(t/1e21).toFixed(18).replace(/\.?0+$/,"")}},megaConversion=function(e){var t=document.querySelector("._3>input").value;for(let e=0;e<slots.length;e++)switch(e){case 0:slots[e].value=1e6*t;break;case 1:slots[e].value=1e3*t;break;case 2:slots[e].value=t;break;case 3:slots[e].value=Number(t/1e3).toFixed(9).replace(/\.?0+$/,"");break;case 4:slots[e].value=Number(t/1e6).toFixed(15).replace(/\.?0+$/,"");break;case 5:slots[e].value=Number(t/1e9).toFixed(18).replace(/\.?0+$/,"");break;case 6:slots[e].value=Number(t/1e12).toFixed(21).replace(/\.?0+$/,"");break;case 7:slots[e].value=Number(t/1e15).toFixed(24).replace(/\.?0+$/,"")}},gigaConversion=function(e){var t=document.querySelector("._4>input").value;for(let e=0;e<slots.length;e++)switch(e){case 0:slots[e].value=1e9*t;break;case 1:slots[e].value=1e6*t;break;case 2:slots[e].value=1e3*t;break;case 3:slots[e].value=t;break;case 4:slots[e].value=Number(t/1e3).toFixed(15).replace(/\.?0+$/,"");break;case 5:slots[e].value=Number(t/1e6).toFixed(18).replace(/\.?0+$/,"");break;case 6:slots[e].value=Number(t/1e9).toFixed(21).replace(/\.?0+$/,"");break;case 7:slots[e].value=Number(t/1e12).toFixed(24).replace(/\.?0+$/,"")}},teraConversion=function(e){var t=document.querySelector("._5>input").value;for(let e=0;e<slots.length;e++)switch(e){case 0:slots[e].value=1e12*t;break;case 1:slots[e].value=1e9*t;break;case 2:slots[e].value=1e6*t;break;case 3:slots[e].value=1e3*t;break;case 4:slots[e].value=Number(t).toFixed(15).replace(/\.?0+$/,"");break;case 5:slots[e].value=Number(t/1e3).toFixed(18).replace(/\.?0+$/,"");break;case 6:slots[e].value=Number(t/1e6).toFixed(21).replace(/\.?0+$/,"");break;case 7:slots[e].value=Number(t/1e9).toFixed(24).replace(/\.?0+$/,"")}},petaConversion=function(e){var t=document.querySelector("._6>input").value;for(let e=0;e<slots.length;e++)switch(e){case 0:slots[e].value=1e15*t;break;case 1:slots[e].value=1e12*t;break;case 2:slots[e].value=1e9*t;break;case 3:slots[e].value=1e6*t;break;case 4:slots[e].value=Number(1e3*t).toFixed(15).replace(/\.?0+$/,"");break;case 5:slots[e].value=Number(t).toFixed(18).replace(/\.?0+$/,"");break;case 6:slots[e].value=Number(t/1e3).toFixed(21).replace(/\.?0+$/,"");break;case 7:slots[e].value=Number(t/1e6).toFixed(24).replace(/\.?0+$/,"")}},exaConversion=function(e){var t=document.querySelector("._7>input").value;for(let e=0;e<slots.length;e++)switch(e){case 0:slots[e].value=1e18*t;break;case 1:slots[e].value=1e15*t;break;case 2:slots[e].value=1e12*t;break;case 3:slots[e].value=1e9*t;break;case 4:slots[e].value=Number(1e6*t).toFixed(15).replace(/\.?0+$/,"");break;case 5:slots[e].value=Number(1e3*t).toFixed(18).replace(/\.?0+$/,"");break;case 6:slots[e].value=Number(t).toFixed(18).replace(/\.?0+$/,"");break;case 7:slots[e].value=Number(t/1e3).toFixed(18).replace(/\.?0+$/,"")}};function calcEarnings(){let e=[[document.querySelector(".btcPower>input").value,document.querySelector(".btcNetPower>input").value,document.querySelector(".btcBlockReward>input").value],[document.querySelector(".dodgePower>input").value,document.querySelector(".dodgeNetPower>input").value,document.querySelector(".dodgeBlockReward>input").value],[document.querySelector(".ethPower>input").value,document.querySelector(".ethNetPower>input").value,document.querySelector(".ethBlockReward>input").value],[document.querySelector(".rltPower>input").value,document.querySelector(".rltNetPower>input").value,document.querySelector(".rltBlockReward>input").value]];for(let t=0;t<e.length;t++){let l=document.querySelector(`table tr:nth-child(${t+2}) td:nth-child(1)`),a=1e9*+e[t][0]/(1e15*+e[t][1])*+e[t][2];l.innerText=a.toFixed(9).replace(/\.?0+$/,""),document.querySelector(`table tr:nth-child(${t+2}) td:nth-child(2)`).innerText=(12*a).toFixed(9).replace(/\.?0+$/,""),document.querySelector(`table tr:nth-child(${t+2}) td:nth-child(3)`).innerText=(12*a*24).toFixed(9).replace(/\.?0+$/,""),document.querySelector(`table tr:nth-child(${t+2}) td:nth-child(4)`).innerText=(12*a*24*30).toFixed(8).replace(/\.?0+$/,"")}}let calculateButton=document.getElementById("calculate");calculateButton.addEventListener("click",calcEarnings);