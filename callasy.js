async function callcat() {
    setTimeout(async () => {
        try {
            const response = await fetch("https://catfact.ninja/fact");
            
            if (response.ok) {
                const data = await response.json();
                    console.log(data)
                }
            }
         catch (error) {
            console.log("An error occurred:", error.message);
        }
    }, 1000);
}

callcat();
