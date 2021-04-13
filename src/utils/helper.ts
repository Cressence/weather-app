export const getCurrentDate = () => {
    const today = new Date();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${weekdays[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
};

export const getCurrentTime = () => {
    const today = new Date();
    return `${pad(today.getHours())}:${pad(today.getMinutes())}`;
};

export const getAmPm = () => {
    const today = new Date();
    return today.getHours() >= 12 ? 'PM' : 'AM';
}

export const convertMonthToText = (month: number) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
};

export const convertkelvinToFahrenheit = (kelvin: number) => {
    return round((((kelvin - 273.15) * 1.8) + 32), 1);
};

export const convertKelvinToCelcius = (kelvin: number) => {    
    return round((kelvin - 273.15), 1);
};

export const formatDate = (date: string) => {
    const formatedDate = new Date(date);
    return `${formatedDate.getDate()} ${convertMonthToText(formatedDate.getMonth())} ${formatedDate.getUTCFullYear()}`;
};

export const calculateAverageData = (arrTemps: number[], type:string) => {
    let sum:number = 0;
    arrTemps.forEach((temp:any) => {
        if (type === 'temperature') {
            sum += temp.main.temp;
        }
        if (type === 'pressure') {
            sum += temp.main.pressure;
        }
        if (type === 'humidity') {
            sum += temp.main.humidity;
        }
    });
    return round((sum / arrTemps.length), 1);
};

const round = (value:number, precision:number) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};

const pad = (time:number) =>  time < 10 ? '0' + time : time;
