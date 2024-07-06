let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-1");
let eyeR = document.querySelector(".eyeball-2");
let handL = document.querySelector(".hand-2");
let handR = document.querySelector(".hand-2");

let normalEyeStyle = () => {
    eyeL.style.cssText = "left: 0.6em; top 0.6em"
    eyeR.style.cssText = "right: 0.6em; top 0.6em"
};

let normalHandStyle = () => {
handL.style.cssText = "left: 7.5em; top: 8.4em; height: 2.81em; transform: rotate(0deg);";
handR.style.cssText = "right: 7.5em; top: 8.4em; height: 2.81em; transform: rotate(0deg)";
// normalHandStyle();
}
usernameRef.addEventListener("focus",()=>{
    eyeL.style.cssText = "left: 0.75em; top: 1.12em"; 
    eyeR.style.cssText = "right: 0.75em; top: 1.12em";
    normalEyeStyle(); 
})

passwordRef.addEventListener("focus",()=>{
    handL.style.cssText = "left: 0.75em; top: 1.12em"; 
    handR.style.cssText = "right: 0.75em; top: 1.12em";
    normalEyeStyle(); 
})
