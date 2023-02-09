const colors = ["green", "red", "yellow", "blue", "gray", "rgba(133, 122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.queryCommandValue(".color")

btn.addEventListener("click", function(){
    // console.log(document.body)
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}