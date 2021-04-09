export const getCurrentDate = () => {
    const today = new Date();
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${weekdays[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
};

export const getCurrentTime = () => {
    const today = new Date();
    return `${today.getHours()}:${today.getMinutes()}`;
};

export const getAmPm = () => {
    const today = new Date();
    return today.getHours() >= 12 ? 'PM' : 'AM';
}

export const getCurrentLocation = () => {
    return 'Munchen';  
};

export const convertMonthToText = (month: number) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
};

export const convertCelciusToFahrenheit = (celcius: number) => {
    return celcius * 1.8 + 32;
};

export const convertFahrenheitToCelcius = (farhenheit: number) => {
    return (farhenheit- 32) / 1.8;
};