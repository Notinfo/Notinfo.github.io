self.addEventListener("install", () => {
    console.log("ServiceWorker: Installed")
})

self.addEventListener("fetch", event =>{
    //console.log("service Worker: fetch", event);
})