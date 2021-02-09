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
    let vCap = vehicles.find((item) => item.name === vehicle).capacity;
    let vPic = vehicles.find((item) => item.name === vehicle).image;
    let result;

    let pics;

    $(".display-modal").addClass("vis");

    if (!people || people == 0) {
        $(".results").html(`please choose a number`);
    } else {
        let quotient = Math.floor(people / vCap);
        let remainder = people % vCap;
        //result = +(people / vCap).toFixed(2);
        result = quotient;

        let space = vCap - remainder;

        $(".results").html(
            people +
                " people will fit into " +
                result +
                " " +
                vehicle +
                "(s)" +
                " with " +
                space +
                " space(s) left over"
        );

        //Note number to equal output of capacity calculations
        let number = result;
        for (var i = 0; i < number; i++) {
            pics = "<img src='" + vPic + "'/>";
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
