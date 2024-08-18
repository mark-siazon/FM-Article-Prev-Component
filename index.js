let sbtn = document.querySelector(".socials-btn");
let socials = document.querySelector(".socials");
let profile = document.querySelector(".profile");
let author = document.querySelector(".author");

// function socmed_btn(){
//     profile.classList.toggle("d-none");
//     socials.classList.toggle("d-none");
//     author.classList.toggle("author-active");
//     if (profile.classList.contains("d-none")){
//             profile.classList.toggle("d-none");
//     }
// }

function socmed_btn(){
    author.classList.toggle("author-active");

    if (window.innerWidth <= 768) {
        // On mobile, toggle profile and socials visibility
        profile.classList.toggle("d-none");
        socials.classList.toggle("d-none");
    } else {
        // On desktop, ensure profile is visible and socials hidden
        profile.classList.remove("d-none");
        socials.classList.toggle("d-none");
        author.classList.toggle("author-active");
    }


}