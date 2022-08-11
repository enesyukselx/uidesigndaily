const items = document.querySelectorAll(".item");

items.forEach((item) => {
    const itemIcon = item.querySelector(".icon");
    itemIcon.addEventListener("click", function () {
        item.classList.toggle("active");
    });
});
