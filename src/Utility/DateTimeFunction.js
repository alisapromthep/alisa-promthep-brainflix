// function to convert timestamp to dates 

export const convertTimeStamp = (timestamp)=> {
const jsDate = new Date(timestamp);
let date = jsDate.getDate();
if (date < 10){
    date = `0${date}`;
}
let month = (jsDate.getMonth()) + 1;
if (month < 10) {
    month = `0${month}`;
}
const year = jsDate.getFullYear();

const formattedDate = `${month}/${date}/${year}`;

    return formattedDate;
}
