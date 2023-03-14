let sectionSkill = document.querySelector(".our-skills")
let mySpan = document.querySelectorAll(".our-skills .skills .prog span")


window.onscroll = function () {
    if (window.scrollY >= sectionSkill.offsetTop -300) {
        mySpan.forEach((span) => {
            span.style.width = span.dataset.width
        })
    }
}

let sectionState = document.querySelector(".state")
let num = document.querySelectorAll(".state .container .box h2")
let started = false

window.onscroll = function () {
    if (window.scrollY >= sectionState.offsetTop - 300) {
        if (!started) {
            num.forEach(item => startCount(item))
        }
        started = true
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(count)
        }
    },(2000 / goal))
}
