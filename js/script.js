//VARIABLES
const reviews = [
    {
        userImage: "img/user-photo-rev.png",
        userName: "Alex Stanton",
        userProf: "CEO at Bukalapak",
        date: "21 July 2022",
        textReview: "We are very happy with the service from the MORENT App. " +
            "Morent has a low price and also a large variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/other-user-photo.png",
        userName: "Skylar Dias",
        userProf: "CEO at Amazon",
        date: "20 July 2022",
        textReview: "We are greatly helped by the services of the MORENT Application. " +
            "Morent has low prices and also a wide variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/user-photo-rev.png",
        userName: "Alex Stanton",
        userProf: "CEO at Bukalapak",
        date: "21 July 2022",
        textReview: "We are very happy with the service from the MORENT App. " +
            "Morent has a low price and also a large variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/other-user-photo.png",
        userName: "Skylar Dias",
        userProf: "CEO at Amazon",
        date: "20 July 2022",
        textReview: "We are greatly helped by the services of the MORENT Application. " +
            "Morent has low prices and also a wide variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/user-photo-rev.png",
        userName: "Alex Stanton",
        userProf: "CEO at Bukalapak",
        date: "21 July 2022",
        textReview: "We are very happy with the service from the MORENT App. " +
            "Morent has a low price and also a large variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/other-user-photo.png",
        userName: "Skylar Dias",
        userProf: "CEO at Amazon",
        date: "20 July 2022",
        textReview: "We are greatly helped by the services of the MORENT Application. " +
            "Morent has low prices and also a wide variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/user-photo-rev.png",
        userName: "Alex Stanton",
        userProf: "CEO at Bukalapak",
        date: "21 July 2022",
        textReview: "We are very happy with the service from the MORENT App. " +
            "Morent has a low price and also a large variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/other-user-photo.png",
        userName: "Skylar Dias",
        userProf: "CEO at Amazon",
        date: "20 July 2022",
        textReview: "We are greatly helped by the services of the MORENT Application. " +
            "Morent has low prices and also a wide variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/user-photo-rev.png",
        userName: "Alex Stanton",
        userProf: "CEO at Bukalapak",
        date: "21 July 2022",
        textReview: "We are very happy with the service from the MORENT App. " +
            "Morent has a low price and also a large variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/other-user-photo.png",
        userName: "Skylar Dias",
        userProf: "CEO at Amazon",
        date: "20 July 2022",
        textReview: "We are greatly helped by the services of the MORENT Application. " +
            "Morent has low prices and also a wide variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/user-photo-rev.png",
        userName: "Alex Stanton",
        userProf: "CEO at Bukalapak",
        date: "21 July 2022",
        textReview: "We are very happy with the service from the MORENT App. " +
            "Morent has a low price and also a large variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/other-user-photo.png",
        userName: "Skylar Dias",
        userProf: "CEO at Amazon",
        date: "20 July 2022",
        textReview: "We are greatly helped by the services of the MORENT Application. " +
            "Morent has low prices and also a wide variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
    {
        userImage: "img/user-photo-rev.png",
        userName: "Alex Stanton",
        userProf: "CEO at Bukalapak",
        date: "21 July 2022",
        textReview: "We are very happy with the service from the MORENT App. " +
            "Morent has a low price and also a large variety of cars with good " +
            "and comfortable facilities. In addition, the service provided " +
            "by the officers is also very friendly and very polite.",
    },
];
const recentCar =[
    {
        carName: "Koenigsegg",
        carClass: "Sport",
        imageCar: "img/recent-car-0.png",
        gasoline: "90L",
        steering: "Manual",
        capacity: "2 People",
        priceNow: "99.00",
    },
    {
        carName: "Nissan GT - R",
        carClass: "Sport",
        imageCar: "img/recent-car-1.png",
        gasoline: "80L",
        steering: "Manual",
        capacity: "2 People",
        priceNow: "80.00",
        priceUs: "100.00",
    },
    {
        carName: "Rolls-Royce",
        carClass: "Sport",
        imageCar: "img/recent-car-2.png",
        gasoline: "70L",
        steering: "Manual",
        capacity: "4 People",
        priceNow: "96.00",
    },
];
const recommendCar =[
    {
        carName: "All New Rush",
        carClass: "SUV",
        imageCar: "img/recommend-car-0.png",
        gasoline: "70L",
        steering: "Manual",
        capacity: "6 People",
        priceNow: "72.00",
        priceUs: "100.00",
    },
    {
        carName: "CR  - V",
        carClass: "SUV",
        imageCar: "img/recommend-car-1.png",
        gasoline: "80L",
        steering: "Manual",
        capacity: "6 People",
        priceNow: "80.00",
    },
    {
        carName: "All New Terios",
        carClass: "SUV",
        imageLike: "img/icons/like.png",
        gasoline: "90L",
        steering: "Manual",
        capacity: "6 People",
        priceNow: "74.00",
    },
];
let templateCar = document.querySelector("#car__item").innerHTML;
let templateReview = document.querySelector("#review__item").innerHTML;

//burger
let headerBurger = document.querySelector("#header-burger");
let contentBurger = document.querySelector("#content-burger");
let body = document.body;

headerBurger.addEventListener("click", function() {
    contentBurger.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
})

//notification
let notifImg = document.querySelector(".user__notification-img");
let notifTrue = document.querySelector(".user__notification-true");
if (!notifImg) {
    notifTrue.style.display = "none";
}

//template review
let allReviews = document.querySelector("#all-reviews");

function addReview() {
    for (let i = 0; i < reviews.length; i++) {
        const reviewItem = reviews[i];
        let html = Mustache.render(templateReview, reviewItem);
        allReviews.insertAdjacentHTML("beforeend", html);
    }
}
addReview();

//review count
let countReview = document.querySelector("#reviews-count");
let lengthReview = reviews.length;
countReview.append(lengthReview);


//template recent car
let allRecentCar = document.querySelector(".recent__car_list");
function addRecentCar() {
    for (let i = 0; i < recentCar.length; i++) {
        const recentCarItem = recentCar[i];
        let html = Mustache.render(templateCar, recentCarItem);
        allRecentCar.insertAdjacentHTML("beforeend", html);
    }
}
addRecentCar();

//template recommend car
let allRecommendCar = document.querySelector(".recommend__car_list");
function addRecommendCar() {
    for (let i = 0; i < recommendCar.length; i++) {
        const recentCarItem = recommendCar[i];
        let html = Mustache.render(templateCar, recentCarItem);
        allRecommendCar.insertAdjacentHTML("beforeend", html);
    }
}
addRecommendCar();

//price
let sidebarPriceSlider = document.getElementById("userPrice");
var sidebarPriceValue = document.getElementById("sidebar-price-value");
sidebarPriceValue.innerHTML = sidebarPriceSlider.value;

sidebarPriceSlider.oninput = function() {
    sidebarPriceValue.innerHTML = this.value;
}

//show reviews
let showBtn = document.querySelectorAll(".reviews__show");
let showStart = document.querySelector(".reviews__show-start");
let showEnd =document.querySelector(".reviews__show-end");
showBtn.forEach(showBtnItem => {
    showBtnItem.addEventListener("click", showReviews)
})

function showReviews () {
    if (getComputedStyle(allReviews).maxHeight == "265px") {
        allReviews.style.maxHeight = "100%"
        showStart.style.zIndex = "-2";
        showEnd.style.zIndex = "0";
    }
    else {
        allReviews.style.maxHeight = "265px"
        showStart.style.zIndex = "0";
        showEnd.style.zIndex = "-2";
    }
}

//like
let likeBtn = document.querySelectorAll(".car__item-like");
likeBtn.forEach(likeBtnItem => {
    likeBtnItem.addEventListener("click", function() {
        let likeDef = likeBtnItem.querySelector(".car__item-def-like");
        let likeUser = likeBtnItem.querySelector(".car__item-user-like");
        if (getComputedStyle(likeDef).zIndex == "0") {
            likeDef.style.zIndex = "-2";
            likeUser.style.zIndex = "0";
        }
        else {
            likeDef.style.zIndex = "0";
            likeUser.style.zIndex = "-2";
        }
    });
})
