export const storeData = (storageString,data)=>{
    localStorage.setItem(storageString,data)
}
export const retriveData = (storageString)=>{
    return localStorage.getItem(storageString);
}