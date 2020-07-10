//---------FUNCTION THAT TAKES A DATE AS A STRING AND CONVERTS IT TO A MORE READABLE DATE---------
const talkingCalendar = function(date) {
    
    const months = {
        January: '01',
        February: '02',
        March: '03',
        April: '04',
        May: '05',
        June: '06',
        July: '07',
        August: '08',
        September: '09',
        October: '10',
        November: '11',
        December: '12'
    };

    const days = {
        '1st': '01',
        '2nd': '02',
        '3rd': '03',
        '4th': '04',
        '5th': '05',
        '6th': '06',
        '7th': '07',
        '8th': '08',
        '9th': '09',
        '10th': '10',
        '11th': '11',
        '12th': '12',
        '13th': '13',
        '14th': '14',
        '15th': '15',
        '16th': '16',
        '17th': '17',
        '18th': '18',
        '19th': '19',
        '20th': '20',
        '21st': '21',
        '22nd': '22',
        '23rd': '23',
        '24th': '24',
        '25th': '25',
        '26th': '26',
        '27th': '27',
        '28th': '28',
        '29th': '29',
        '30th': '30',
        '31st': '31'
    };

    let splitDate = date.split("/");
    
    //Making the month readable
    const key = Object.keys(months).find(key => months[key] === splitDate[1]);
    
    //Making day readable
    const day = Object.keys(days).find(key => days[key] === splitDate[2]);

    let formatDate = `${key} ${day}, ${splitDate[0]}`;
    
    return formatDate;

  };
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));