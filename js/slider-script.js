async function getApi(url) {
    // Storing response
    const response = await fetch(url);
    var data = await response.json();
    //console.log(data);
    if (response) {
        // hideloader();
    }
    show(data);
}
getApi("https://api3.qeedagame.com/api/winners/leaderboard");

function hideloader() {
    document.getElementById("loading").style.display = "none";
}

function show(data) {
    console.log("data", data);
    let result = data.allTime;
    let item = "";
    for (let r of result) {
        item += `<div class="wrapper">
        <img class="user-img" src=${
            r.user.profileImg || "http://www.gravatar.com/avatar/?d=mp"
        }>
        <span class="name">${r.user.firstName} <span class="mobile">(${
            r.user.username
        })</span></span>
        <span class="amount">&#x20b9; ${r.amount}</span>
    </div>`;
    }
    document.getElementById("item").innerHTML = item;
    $(".autoplay").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
}
// $(document).ready(function () {

// });
