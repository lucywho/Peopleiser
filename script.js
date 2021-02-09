console.log("script connected", $);
let items = [
    { name: "car", capacity: 5, image: "assets/car.jpg" },
    { name: "bus", capacity: 60, image: "assets/berlinbus.png" },
    { name: "boeing747", capacity: 500, image: "assets/boeing747.jpg" },
    { name: "OlympiaStadion", capacity: 75000, image: "🏟️" },
];

function calcCapacity(usernum) {
    let user_num = $("#usernum").val();

    $(".display-modal").addClass("vis");

    if (!user_num || user_num == 0) {
        $(".results").html(`please choose a number`);
    } else {
        $(".results").html(`you chose ` + user_num);
    }
}

$(".X").on("click", function(e) {
    $(".display-modal").removeClass("vis");
    location.reload();
});
