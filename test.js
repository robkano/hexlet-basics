const evenNumber = (num) => {
    const firstNum = Math.floor(Math.random() * 40 / 2) * 2;
    let queue = firstNum;
    let i = 1;
    let finelResult = '';
    let hidedNum = '';
    while(i < 8) {
      if(i === 2) {
        hidedNum = queue;
        finelResult += '..';
      }
      finelResult += queue + " ";
      queue += 2;
      i++;
    }
    console.log(hidedNum);
    return finelResult;
  };
  evenNumber();