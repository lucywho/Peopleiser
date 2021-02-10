console.log("script connected", $);
let data = [
    { name: "car", capacity: 4, image: "assets/car.jpg", listAs: "Cars" },
    {
        name: "bus",
        capacity: 55,
        image: "assets/berlinbus.png",
        listAs: "Buses",
    },
    {
        name: "Boeing747",
        capacity: 500,
        image: "assets/boeing747.jpg",
        listAs: "Boeing747s",
    },
    {
        name: "Ferry",
        capacity: 2000,
        image: "assets/ferry.jpg",
        listAs: "Cross Channel Ferries",
    },
    {
        name: "OlympiaStadion",
        capacity: 75000,
        image: "assets/olympstad.jpg",
        listAs: "Olympia Stadions",
    },
];

$(document).ready(function() {
    $("#userInput").html(`<label for="user_item">How many </label>
    <select name="user_item" id="useritem">
    
    </select>
    <p>would I need to fit in</p>
    <input
        type="number"
        id="usernum"
        name="user_num"
        min="0"
        max="100000001"
        oninput="validity.valid||(value='');"
    />
    <label for="user_num">people?</label>

    <input
        type="button"
        value="Submit"
        onclick="calcCapacity('usernum', 'useritem');"
    />`);

    for (let i = 0; i < data.length; i++) {
        $("#useritem").append(
            "<option value=" + data[i].name + ">" + data[i].listAs + "</option>"
        );
    }
});

function calcCapacity() {
    if ($(".display-modal").hasClass("vis")) {
        $(".display-modal").removeClass("vis");
        $("#pic").empty();
    }

    let people = $("#usernum").val();
    let vehicle = $("#useritem").val();
    let vCap = data.find((item) => item.name === vehicle).capacity;
    let vPic = data.find((item) => item.name === vehicle).image;
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
