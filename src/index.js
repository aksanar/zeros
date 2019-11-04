function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

module.exports = function zeros(expression) {
  const parts = expression.split('*');

  let five = 0;
  let two = 0;

  parts.forEach((part) => {
    const n = parseInt(part);  
    if (part.includes('!!')) {  
      for (let i = n; i > 0; i=i-2) {
 
        if (i % 5 === 0) {
          let myNumber = i;  
          while (myNumber % 5 === 0) {
            myNumber = myNumber / 5; 
            five++
          }

        }
        
        if (i % 2 === 0) {
          let myNumber = i;  
          while (myNumber % 2 === 0) {
            myNumber = myNumber / 2; 
            two++
          }
        }
      }      
    } else {
      for (let i = n; i > 0; i=i-1) {
        let myNumber = i;  
        while (myNumber % 5 === 0) {
          myNumber = myNumber / 5; 
          five++
        }
        if (i % 2 === 0) {
          let myNumber = i;  
          while (myNumber % 2 === 0) {
            myNumber = myNumber / 2; 
            two++
          }
        }
      }
    }  
  })
  return Math.min(two, five);
}
