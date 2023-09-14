const scrollables = Array.from(document.querySelectorAll(".scrollable"));

checkScroll();

window.addEventListener("resize", checkScroll)

function checkScroll(){
    scrollables?.forEach(container => {
        if (container.scrollHeight > container.clientHeight) {
            container.classList.add('overflown');
        } else {
            container.classList.remove('overflown');
        }
    });
}

