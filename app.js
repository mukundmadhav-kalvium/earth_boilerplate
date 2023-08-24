var bodyvar = document.body

var consumption = document.getElementById("consumption")
console.log("consumption", consumption)

var climate = document.getElementById("climate")
console.log("climate", climate )

var consumption = document.getElementById("consumption")
console.log("resources", resources)

var people = document.getElementById("people")
console.log("people", people)

var saveText = document.getElementById("save")
console.log("saveText", saveText)

var frame = document.getElementById("frame")
console.log("frame", frame)

consumption.onclick=()=>{
    //background
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"
    //frames
    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    //text
    saveText.innerHTML=" Do your bit! Shop only what you need,eat only what you need and always save the leftovers."
    //button_color
    consumption.style.background="#27AE60"
    resources.style.background="none"
    people.style.background="none"
    climate.style.background="none"
}

resources.onclick=()=>{
    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"
    //frames
    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    //text
    saveText.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle."
    //button_color
    resources.style.background="#F2994A"
    consumption.style.background="none"
    people.style.background="none"
    climate.style.background="none"
}

people.onclick=()=>{
    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"
    //frames
    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    //text
    saveText.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."
    //button_color
    people.style.background="#EB5757"
    consumption.style.background="none"
    resources.style.background="none"
    climate.style.background="none"
}

climate.onclick=()=>{
    //background
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize= "100% 100%"
    //frames
    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    //text
    saveText.innerHTML=" Do your bit! Save trees, use renewable energy sources and prefer to travel green."
    //button_color
    climate.style.background="#2F80ED"
    consumption.style.background="none"
    resources.style.background="none"
    people.style.background="none"
}

