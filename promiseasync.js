function promisefetch(){
    return new Promise((resolve,reject)=>{
        setTimeout(async () => {
            const response = await fetch("https://catfact.ninja/fact");
            if (response.ok) {
                const data = await response.json();
                resolve(data)
            }
            else{
                reject("error occured")
            }
        }, 1000);
        
    })
}
promisefetch()
   .then((message)=>{
        console.log(message)
    })
    .catch((error)=>{
        console.log(error)
    })