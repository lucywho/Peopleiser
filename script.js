console.log("script connected");
let items = [
    { name: "car", capacity: 5, image: "assets/car.jpg" },
    { name: "bus", capacity: 60, image: "assets/berlinbus.png" },
    { name: "boeing747", capacity: 500, image: "assets/boeing747.jpg" },
    { name: "OlympiaStadion", capacity: 75000, image: "🏟️" },
];

function calcCapacity(user_num) {
    if (document.getElementById("usernum").value === "12") {
        document.getElementById("stuff").innerHTML = "you chose 12";
    } else {
        document.getElementById("stuff").innerHTML = "you didn't choose 12";
    }
}
