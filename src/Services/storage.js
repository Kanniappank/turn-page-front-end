const storeData = (storageString,data)=>{
    localStorage.setItem(storageString,data)
}
const retriveData = (storageString)=>{
    localStorage.getItem(storageString);
}