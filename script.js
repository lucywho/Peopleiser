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

        //Note number to equal output of capacity calculations
        let number = people;
        let pics;

        for (var i = 0; i < number; i++) {
            pics = "<img src='" + vPic + "'/>";
            console.log(pics);
            $("#pic .img").append(pics);
        }
    }
}

$(".X").on("click", function(e) {
    $(".display-modal").removeClass("vis");
    location.reload();
});

//variable width
// let wide = remainder from capacity calc ; final pic to have .css("width", wide + "px") /
