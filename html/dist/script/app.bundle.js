const icons = ["mobile-alt", "microphone", "broadcast-tower"];

function set(data, value) {
    if (data == "money") {
        document.getElementById("money").innerHTML = value;
    } else if (data == "bankmoney") {
        document.getElementById("bank").innerHTML = value;
    } else if(data == "hunger") {
        document.getElementById("food").innerHTML = value;
    } else if(data == "ammo") {
        document.getElementById("ammo").innerHTML = value;
    } else if(data == "weapon") {
        document.getElementById("weapon-img").src = "../components/weapon/" + value + ".png";
    } else if(data == "thirst") {
        document.getElementById("drink").innerHTML = value;
    } else if(data == "microphone") {
        icons.forEach(
            function(val) {
                document.getElementById(val).innerHTML = "";
            }
        );
        if (value == "2") {
            document.getElementById("mobile-alt").innerHTML = `<i class="fas fa-microphone"></i>`;
            document.getElementById("microphone").innerHTML = `<i class="fas fa-mobile-alt"></i>`;
            document.getElementById("broadcast-tower").innerHTML = `<i class="fas fa-broadcast-tower"></i>`;
        } else if(value == "1") {
            document.getElementById("mobile-alt").innerHTML = `<i class="fas fa-mobile-alt"></i>`;
            document.getElementById("microphone").innerHTML = `<i class="fas fa-microphone"></i>`;
            document.getElementById("broadcast-tower").innerHTML = `<i class="fas fa-broadcast-tower"></i>`;
        } else {
            document.getElementById("mobile-alt").innerHTML = `<i class="fas fa-mobile-alt"></i>`;
            document.getElementById("microphone").innerHTML = `<i class="fas fa-broadcast-tower"></i>`;
            document.getElementById("broadcast-tower").innerHTML = `<i class="fas fa-microphone"></i>`;

        }
     
    }
}

document.addEventListener("DOMContentLoaded", function() {
    mta.triggerEvent('hud.browserReady');
});

function startTime() {
    var localDate = new Date();

    var year = checkTime(localDate.getUTCFullYear());
    var month = checkTime(localDate.getUTCMonth() + 1);
    var day = checkTime(localDate.getUTCDate());
    var hours = checkTime(localDate.getHours());
    var minutes = checkTime(localDate.getMinutes());
    var seconds = checkTime(localDate.getSeconds());

    var timer = setTimeout(startTime, 1000);
}

function checkTime(time) {
    if (time < 10)
        time = "0" + time;

    return time;
}