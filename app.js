const filterContainer = document.querySelector(".gallery-filter"),
 allPhoto = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("filter-item")){
        filterContainer.querySelector(".active").classList.remove("active");

        event.target.classList.add("active");
        const filterValue = event.target.getAttribute
       ("data-filter");
       console.log(filterValue)
        allPhoto.forEach((photo) =>{
            if(photo.classList.contains(filterValue) || filterValue === 'all'){
                photo.classList.remove("hide");
                photo.classList.add("show")
            }
            else{
                photo.classList.remove("show");
                photo.classList.add("hide");
            }
        });
    }
});

const hiddenElements = document.querySelectorAll(".hidden, .hidden2");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
})

hiddenElements.forEach((el) => observer.observe(el));




const menuOpen = document.querySelector(".open-btn");
const menuClose = document.querySelector(".close-btn");
const menuList = document.querySelector(".menu-list");

function toggleMenu(){
    menuOpen.classList.toggle("hide")
    menuClose.classList.toggle("open-btn")
    menuList.classList.toggle("open-menu-list");
}