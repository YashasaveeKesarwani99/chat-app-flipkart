export const getDataFormat = (timestamp) => {

    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits for day
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    
    return `${day}/${month}/${year}`;

}
