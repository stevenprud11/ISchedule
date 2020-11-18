var TF;
var MONTH=0;
var DAY=0;
var YEAR=0;
var HOUR=0;
var MINUTE=0;
var MONTH2=0;
var DAY2=0;
var YEAR2=0;
var HOUR2=0;
var MINUTE2=0;
//let's work dates first
function convertMonthToNumber(month){
    month=month.toLowerCase();
    
    var l=month.length;
    if(month.charAt(l-1)=="." || month.charAt(l-1)=="," || month.charAt(l-1)=="!" || month.charAt(l-1)=="?"){//right here we remove any punctuation
        month=month.substr(0, l-1);
    }
    if(month=="january" || month=="jan"){
        return 1;
    }else if(month=="february" || month=="feb"){
        return 2;
    }else if(month=="march" || month=="mar"){
        return 3;
    }else if(month=="april" || month=="apr"){
        return 4;
    }else if(month=="may"){
        return 5;
    }else if(month=="june" || month=="jun"){
        return 6;
    }else if(month=="july" || month=="jul"){
        return 7;
    }else if(month=="august" || month=="aug"){
        return 8;
    }else if(month=="september" || month=="sep"){
        return 9;
    }else if(month=="october" || month=="oct"){
        return 10;
    }else if(month=="november" || month=="nov"){
        return 11;
    }else if(month=="december" || month=="dec"){
        return 12;
    }else{
        return 0; //returning 0 means no month detected
    }
}

function checkForValidDay(day){
    var l=day.length;//punctuation has to go
    if(day.charAt(l-1)=="." || day.charAt(l-1)=="," || day.charAt(l-1)=="!" || day.charAt(l-1)=="?"){
        day=day.substr(0, l-1);
    }
    day=parseInt(day, 10);
    if(day>0 && day<=31){
        return day;
    }else{
        return 0;
    }
}

function checkForValidYear(year){
    var l=year.length;//punctuation has to go
    if(year.charAt(l-1)=="." || year.charAt(l-1)=="," || year.charAt(l-1)=="!" || year.charAt(l-1)=="?"){
        year=year.substr(0, l-1);
    }
    year=parseInt(year, 10);
    if(year>0){
        return year;
    }else{
        return 0;
    }
}

function MMDDYYYY(rawData){
    var noSlash=rawData.split("/");
    if (noSlash[0]>0 && noSlash[0]<13){
        MONTH=parseInt(noSlash[0],10);
    }else{
        DAY=parseInt(noSlash[0],10);
    }if(MONTH==0){
        MONTH=parseInt(noSlash[1],10);
    }else{
        DAY=parseInt(noSlash[1],10);
    }
    YEAR=parseInt(noSlash[2],10);
    return 0;
}

function MMDDYYYY2(rawData){
    var noSlash=rawData.split("/");
    if (noSlash[0]>0 && noSlash[0]<13){
        MONTH2=parseInt(noSlash[0],10);
    }else{
        DAY2=parseInt(noSlash[0],10);
    }if(MONTH2==0){
        MONTH2=parseInt(noSlash[1],10);
    }else{
        DAY2=parseInt(noSlash[1],10);
    }
    YEAR2=parseInt(noSlash[2],10);
    return 0;
}

function colonTimes(rawData, index){
    var noColon=rawData.split(":");
    HOUR=parseInt(noColon[0],10);
    MINUTE=parseInt(noColon[1],10);
    console.log("HOUR parseInt nocolon = "+HOUR);
    if(HOUR<13){
        var possibleAMPM=TF[index+1];
        possibleAMPM=possibleAMPM.toLowerCase();
        var AMPMSplit=possibleAMPM.split(".");
        if(HOUR!=12){
            //console.log("We just entered HOUR!=12 with HOUR="+HOUR);
            if(AMPMSplit[0]=="p" || AMPMSplit[0]=="pm"){
                HOUR+=12;
            }
        }
        if(HOUR==12){
            //console.log("Detected HOUR==12");
            if(AMPMSplit[0]=="a" || AMPMSplit[0]=="am"){
                HOUR=24;
                //console.log("Got HOUR="+HOUR);
            }else{
                HOUR=12;
                //console.log("Got HOUR="+HOUR);
            }
        }
    }
    return 0;
}

function colonTimes2(rawData, index){
    var noColon=rawData.split(":");
    HOUR2=parseInt(noColon[0],10);
    MINUTE2=parseInt(noColon[1],10);
    console.log("HOUR parseInt nocolon = "+HOUR2);
    if(HOUR<13){
        var possibleAMPM=TF[index+1];
        possibleAMPM=possibleAMPM.toLowerCase();
        var AMPMSplit=possibleAMPM.split(".");
        if(HOUR2!=12){
            //console.log("We just entered HOUR!=12 with HOUR="+HOUR);
            if(AMPMSplit[0]=="p" || AMPMSplit[0]=="pm"){
                HOUR2+=12;
            }
        }
        if(HOUR2==12){
            //console.log("Detected HOUR2==12");
            if(AMPMSplit[0]=="a" || AMPMSplit[0]=="am"){
                HOUR2=24;
                //console.log("Got HOUR2="+HOUR2);
            }else{
                HOUR2=12;
                //console.log("Got HOUR2="+HOUR2);
            }
        }
    }
    return 0;
}

function milTimeConvert(milTime){
    HOUR+=parseInt(milTime.charAt(0),10);
    HOUR*=10;
    HOUR+=parseInt(milTime.charAt(1),10);

    MINUTE+=parseInt(milTime.charAt(2),10);
    MINUTE*=10;
    MINUTE+=parseInt(milTime.charAt(3),10);
}

function milTimeConvert2(milTime){
    HOUR2+=parseInt(milTime.charAt(0),10);
    HOUR2*=10;
    HOUR2+=parseInt(milTime.charAt(1),10);

    MINUTE2+=parseInt(milTime.charAt(2),10);
    MINUTE2*=10;
    MINUTE2+=parseInt(milTime.charAt(3),10);
}

function hourAMPM(posTime, index){
    HOUR=posTime;
    var possibleAMPM=TF[index+1];
    possibleAMPM=possibleAMPM.toLowerCase();
    var AMPMSplit=possibleAMPM.split(".");
    //console.log(AMPMSplit);
    if(HOUR!=12){
        if(AMPMSplit[0]=="p" || AMPMSplit[0]=="pm"){
            HOUR+=12;
        }else{ 
            if(AMPMSplit[0]!="a" && AMPMSplit[0]!="am"){//if it wasn't pm and it isnt am, then we made a mistake this isn't our format that we're after
                HOUR=0;
            }
        }
    }if(HOUR==12){
        if(AMPMSplit[0]=="a" || AMPMSplit[0]=="am"){
            HOUR+=12;
       }
    }

    if(HOUR>24 || HOUR<0){//there must be a mistake in this case
        HOUR=0;
    }
}

function hourAMPM2(posTime, index){
    HOUR2=posTime;
    var possibleAMPM=TF[index+1];
    possibleAMPM=possibleAMPM.toLowerCase();
    var AMPMSplit=possibleAMPM.split(".");
    //console.log(AMPMSplit);
    if(HOUR2!=12){
        if(AMPMSplit[0]=="p" || AMPMSplit[0]=="pm"){
            HOUR2+=12;
        }else{ 
            if(AMPMSplit[0]!="a" && AMPMSplit[0]!="am"){//if it wasn't pm and it isnt am, then we made a mistake this isn't our format that we're after
                HOUR2=0;
            }
        }
    }if(HOUR2==12){
        if(AMPMSplit[0]=="a" || AMPMSplit[0]=="am"){
            HOUR2+=12;
       }
    }

    if(HOUR2>24 || HOUR2<0){//there must be a mistake in this case
        HOUR2=0;
    }
}

function findDateAndTime(img_text: String){
    TF = img_text.split(" ");
    var i=0;
    while(i<TF.length){
        
        //The code for this if block is devoted to recognizing month day year and month day formatting. EX: January 2, 2019.
        if(MONTH==0){
            MONTH=convertMonthToNumber(TF[i]);
            if(MONTH!=0){
                i++;//we can safely do an i++ here because if we just found the month there's no way the word we're on currently can be anything else that we need
                if(DAY==0){
                    DAY=checkForValidDay(TF[i]); //our day is probably right after the month we just found, most likely.
                    if(DAY!=0){
                        i++;
                        YEAR=checkForValidYear(TF[i]);
                        if(YEAR!=0){
                            i++;
                        }
                    }else{//We look now for day month year
                        DAY=checkForValidDay(TF[i-2]);
                        if(DAY!=0){
                            YEAR=checkForValidYear(TF[i]);
                        }
                        if(YEAR!=0){
                            i++;
                        }
                    }
                }
            }
            //Get MM/DD/YYYY and DD/MM/YYYY
            if(TF[i].charAt(1)=="/" || TF[i].charAt(2)=="/"){
                MMDDYYYY(TF[i]);
                i++;
            }
        }else if(MONTH2==0){
            MONTH2=convertMonthToNumber(TF[i]);
            if(MONTH2!=0){
                i++;//we can safely do an i++ here because if we just found the month there's no way the word we're on currently can be anything else that we need
                if(DAY2==0){
                    DAY2=checkForValidDay(TF[i]); //our day is probably right after the month we just found, most likely.
                    if(DAY2!=0){
                        i++;
                        YEAR2=checkForValidYear(TF[i]);
                        if(YEAR2!=0){
                            i++;
                        }
                    }else{//We look now for day month year
                        DAY2=checkForValidDay(TF[i-2]);
                        if(DAY2!=0){
                            YEAR2=checkForValidYear(TF[i]);
                        }
                        if(YEAR2!=0){
                            i++;
                        }
                    }
                }
            }
            //Get MM/DD/YYYY and DD/MM/YYYY
            if(TF[i].charAt(1)=="/" || TF[i].charAt(2)=="/"){
                MMDDYYYY2(TF[i]);
                i++;
            }
        }
        //looking for times
        if(HOUR==0){
            //Try to get HH:MM times (colontimes)
            if(TF[i].charAt(1)==":" || TF[i].charAt(2)==":"){
                colonTimes(TF[i], i);
                //console.log("Now exited colonTimes");
            }
            //trying to get HHMM times (military time format)
            else if(TF[i].length==5){
                var possibleTime=parseInt(TF[i],10);
                if(possibleTime>0 && possibleTime<=2400){
                    milTimeConvert(TF[i]);
                }
            }
            //check for HOUR AM/PM
            else if(TF[i].length==1 || TF[i].length==2){
                //console.log("suspected HOUR AM/PM");
                var possibleTime=parseInt(TF[i],10);
                //console.log("possibleTime="+possibleTime);
                if(possibleTime>0 && possibleTime<=12){
                    hourAMPM(possibleTime, i);
                }
            }
        }else if(HOUR2==0){
            //Try to get HH:MM times (colontimes)
            if(TF[i].charAt(1)==":" || TF[i].charAt(2)==":"){
                colonTimes2(TF[i], i);
                //console.log("Now exited colonTimes");
            }
            //trying to get HHMM times (military time format)
            else if(TF[i].length==5){
                var possibleTime=parseInt(TF[i],10);
                if(possibleTime>0 && possibleTime<=2400){
                    milTimeConvert2(TF[i]);
                }
            }
            //check for HOUR AM/PM
            else if(TF[i].length==1 || TF[i].length==2){
                //console.log("suspected HOUR AM/PM");
                var possibleTime=parseInt(TF[i],10);
                //console.log("possibleTime="+possibleTime);
                if(possibleTime>0 && possibleTime<=12){
                    hourAMPM2(possibleTime, i);
                }
            }
        }
        i++;
    }
}