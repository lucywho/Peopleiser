console.log("script connected", $);
let vehicles = [
    { name: "car", capacity: 5, image: "assets/car.jpg" },
    { name: "bus", capacity: 60, image: "assets/berlinbus.png" },
    { name: "Boeing747", capacity: 500, image: "assets/boeing747.jpg" },
    { name: "OlympiaStadion", capacity: 75000, image: "assets/olympstad.jpg" },
];

function calcCapacity() {
    let people = $("#usernum").val();
    let vehicle = $("#useritem").val();
    let usercapacity = vehicles.find((item) => item.name === vehicle).capacity;
    let vPic = vehicles.find((item) => item.name === vehicle).image;

    $(".display-modal").addClass("vis");

    if (!people || people == 0) {
        $(".results").html(`please choose a number`);
    } else {
        $(".results").html(
            `you chose ` +
                people +
                " " +
                vehicle +
                " which has a capacity of " +
                usercapacity
        );

        let wide = people * 100;
        $(".pic")
            .css("width", wide + "px")
            .html('<img src = "' + vPic + '" />');
    }
}

$(".X").on("click", function(e) {
    $(".display-modal").removeClass("vis");
    location.reload();
});
