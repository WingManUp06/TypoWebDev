let valueDisplays = document.querySelectorAll(".stat-num")
let interval = 2050;

let options = {
    root: null,
    rootMargin: "0px",
    threshold: .1,
};

let target = document.querySelector(".why-us")
let observer = new IntersectionObserver(observeCount, options);

observer.observe(target)

function observeCount(entries, observer){
    entries.forEach((entry) => {
        if(!entry.isIntersecting){
            return;
        }
        startCount()
        observer.unobserve(entry.target)
    })

    // console.log(observer)
    // console.log("count is starting")
}

function startCount(){
    valueDisplays.forEach((valueDisplay) => {
        let startNum = 0
        let endNum = parseInt(valueDisplay.getAttribute("data-count"))

        // console.log(endNum)
        let duration = Math.floor(interval / endNum)
        // console.log(duration)
        let counter = setInterval(() => {
            startNum += 1
            valueDisplay.textContent = `${startNum}+`
            if(startNum == endNum){
                clearInterval(counter)
            }
        }, duration)
    })
}