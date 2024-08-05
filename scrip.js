const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const siBtn = document.querySelector(".si-btn");
const noBtn = document.querySelector(".no-btn");

siBtn.addEventListener("click", () => {
    question.innerHTML = "Tqm <3, sabía que lo harías. No vuelvo a manifestar cosas así 🙏.";
    gif.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/830572d6-b7d6-4119-a51f-ca38d672a85a/d5voarz-d1c9c7e5-4b9b-48e2-8ab4-eb552a5e422c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgzMDU3MmQ2LWI3ZDYtNDExOS1hNTFmLWNhMzhkNjcyYTg1YVwvZDV2b2Fyei1kMWM5YzdlNS00YjliLTQ4ZTItOGFiNC1lYjU1MmE1ZTQyMmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r1IsyOsUvoRknn5xZCGOxfYg_4yvGqCdARUdQBWUxEQ";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
