// var a=prompt('Enter a first number');
// var b=prompt('Enter a second number');
// // console.log(a+b)   //String
// var c =parseInt(a);
// var d=parseInt(b);
// console.log(c+d); //number

// 1.for loop  
// 2.while loop
// 3.Do-while loop


// for(let i=0; i<=100;i++){
//    console.log(i);
// }
// for(intialization ; coundition ; iteration){
   ///code
// }


                                                // while

// var i = 1;
// while (i <=51) {
//    document.write('sno:'+ i+':'+i + '<br/>');
//    i=i+11; //i=i+1
// }
                                                //do-while
// var j = 1;
// do{
//    document.write(j);
//    j=j+11;               
// }while(j<=50);

// for(let i=1; i <=100; i++){
//    console.log('100 *'+ i +'='+(i*100));
//    // console.log(i*100);
//    for(let j=1; j<=10; j++){
      
//    }
// }

                                       //printing tables
// for(let i =1; i<=100; i++){
//    console.log('----'+ i +' table -----')

//    for(let j=1; j<=10; j++){
//       console.log( i+'*'+ j + '='+(i*j));
//    }
// } 


// Switch Coundition

// var  month = 30;
// var monthname;
//  switch(month){
//    case 1: monthname ='Jan';
//    break;
//    case 2: monthname ='Feb';
//    break;
//    case 3: monthname ='mar';
//    break;
//    case 4: monthname ='Apr';
//    break;
//    case 5: monthname ='Mar';
//    break;
//    case 6: monthname ='May';
//    break;
//    case 7: monthname ='jun';
//    break;
//    case 8: monthname ='Jul';
//    break;
//    case 9: monthname ='Aug';
//    break;
//    case 10: monthname ='Feb';
//    break;
//    case 11: monthname ='Feb';
//    break;
//    case 12: monthname ='Feb';
//    break;
//    default : monthname ='invalid Month';
//    break;
//  }
//  console.log(monthname);

const year = 2029;

const isLeapYear = year % 4 === 0;

console.log(`${year} is a leap year: ${isLeapYear}`);

const month = 2; // February 
let daysInMonth;

switch (month) {
  case 1: // January
  case 3: // March
  case 5: // May
  case 7: // July
  case 8: // August
  case 10: // October
  case 12: // December
    daysInMonth = 31;
    break;
  case 4: // April
  case 6: // June
  case 9: // September
  case 11: // November
    daysInMonth = 30;
    break;
  case 2: // February
    daysInMonth = isLeapYear ? 29 : 28; // Use the previously determined leap year status
    break;
  default:
    daysInMonth = -1; // Invalid month
    break;
}

console.log(`Number of days in month ${month}: ${daysInMonth}`);
