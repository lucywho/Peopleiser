console.log("script connected", $);
let vehicles = [
    { name: "car", capacity: 4, image: "assets/car.jpg" },
    { name: "bus", capacity: 55, image: "assets/berlinbus.png" },
    { name: "Boeing747", capacity: 500, image: "assets/boeing747.jpg" },
    { name: "OlympiaStadion", capacity: 75000, image: "assets/olympstad.jpg" },
];

function calcCapacity() {
    if ($(".display-modal").hasClass("vis")) {
        $(".display-modal").removeClass("vis");
        $("#pic").empty();
    }

    let people = $("#usernum").val();
    let vehicle = $("#useritem").val();
    let vCap = vehicles.find((item) => item.name === vehicle).capacity;
    let vPic = vehicles.find((item) => item.name === vehicle).image;
    let result;
    let pics;
    let seats;

    $(".display-modal").addClass("vis");

    if (!people || people == 0) {
        $(".results").html(`please choose a number`);
    } else {
        let quotient = people / vCap;
        let remainder = people % vCap;
        result = Math.ceil(quotient);

        let leftover = vCap - remainder;

        if (leftover === vCap) {
            space = 0;
        } else {
            space = leftover;
        }

        if (space == 1) {
            seats = "seat";
        } else {
            seats = "seats";
        }

        if (result === 1) {
            if (people == 1) {
                $(".results").html(
                    people +
                        " person will fit into " +
                        result +
                        " " +
                        vehicle +
                        " with " +
                        space +
                        " " +
                        seats +
                        " left over"
                );
            } else {
                $(".results").html(
                    people +
                        " people will fit into " +
                        result +
                        " " +
                        vehicle +
                        " with " +
                        space +
                        " " +
                        seats +
                        " left over"
                );
            }
        } else {
            if (vehicle == "bus") {
                $(".results").html(
                    people +
                        " people will fit into " +
                        result +
                        " " +
                        vehicle +
                        "es with " +
                        space +
                        " " +
                        seats +
                        " left over"
                );
            } else {
                $(".results").html(
                    people +
                        " people will fit into " +
                        result +
                        " " +
                        vehicle +
                        "s with " +
                        space +
                        " " +
                        seats +
                        " left over"
                );
            }
        }

        let number = result;
        for (var i = 0; i < number; i++) {
            pics = "<img src='" + vPic + "'/>";
            $("#pic").append(pics);
        }
    }
}

$(".X").on("click", function(e) {
    $(".display-modal").removeClass("vis");
    location.reload();
});

//variable width
// let wide = remainder from capacity calc ; final pic to have .css("width", wide + "px") /
