function checkCashRegister(price, cash, cid) {
  let coins = [
    {name:"ONE HUNDRED",val:100},
    {name:"TWENTY",val:20},
    {name:"TEN",val:10},
    {name:"FIVE",val:5},
    {name:"ONE",val:1},
    {name:"QUARTER",val:0.25},
    {name:"DIME",val:0.1},
    {name:"NICKEL",val:0.05},
    {name:"PENNY",val:0.01}
  ];
  let result = {status: null,change:[]}
  let change = (cash - price) *100;
  let register = cid.reduce((acc, item)=> {
    acc.total += item[1] *100;
    acc[item[0]] = item[1] *100;
    return acc;
  },{total:0});

  if(register.total === change){
    return {status: 'CLOSED',change:cid};
  }

  if(register.total < change){
    return {status: "INSUFFICIENT_FUNDS",change:[]}
  }

  let newArr = coins.reduce((acc,item)=>{
    let value = 0;
    while(register[item.name]>0 && change >= item.val *100){
      change -= item.val *100;
      register[item.name] -= item.val *100;
      value += item.val *100;
    }
    if(value > 0){
      acc.push([item.name,value / 100]);
    }
    return acc;
  },[])

  if(newArr.length < 1 || change > 0){
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  
  result.status = "OPEN";
  result.change = newArr;
  return result;
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
