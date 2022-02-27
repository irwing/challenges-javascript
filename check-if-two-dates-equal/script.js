const checkIfTwoDatesEqual = (date1, date2) => {
    
    const date1Date = new Date(date1);
    const date2Date = new Date(date2);

    if (date1Date.getTime() === date2Date.getTime()) {
        return true;
    } else {
        return false;
    }
}

module.exports = checkIfTwoDatesEqual;
