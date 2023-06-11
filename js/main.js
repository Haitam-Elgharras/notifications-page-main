const items = document.querySelectorAll(".item");
const counter = document.querySelector(".counter");

window.onload = () => {
  count();
  counter.addEventListener("click", count);
};

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.currentTarget.style.backgroundColor = "white";
    const after = e.currentTarget.querySelector(".after");
    after.classList.remove("active");
    after.style.display = "none";
    count();
  });
});

const markAll = document.querySelector(".mark-read");
markAll.addEventListener("click", (e) => {
  items.forEach((item) => {
    item.style.backgroundColor = "white";
    const after = item.querySelector(".after");
    after.classList.remove("active");
    after.style.display = "none";
    count();
  });
});

function count() {
  actives = 0;
  items.forEach((item) => {
    const after = item.querySelector(".after");
    if (after.classList.contains("active")) {
      actives++;
    } else {
      item.style.backgroundColor = "white";
      const after = item.querySelector(".after");
      after.style.display = "none";
    }
  });
  counter.innerHTML = actives;
}
