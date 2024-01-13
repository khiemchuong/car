

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.start-button');
    const resetButton = document.querySelector('.reset-button');
    const circles = document.querySelectorAll('.circle');
    const carImages = document.querySelectorAll('.anhxe');
    const finishLine = document.querySelector('.vachdich');

    let gameStarted = false; // Biến để kiểm tra trạng thái bắt đầu của trò chơi

    function moveCar(event, index) {
        const car = cars[index];
        let carPosition = carPositions[index];

        if (isMoving && !destinationReached) {
            if (event.keyCode === 37 && carPosition > 0) {
                carPosition -= carSpeed;
            }

            if (event.keyCode === 39 && carPosition < gameContainer.offsetWidth - car.offsetWidth) {
                carPosition += carSpeed;
            }

            car.style.left = carPosition + '%';
            carPositions[index] = carPosition;

            // Kiểm tra khi xe đạt đến vị trí đích
            if (carPosition >= destinationPosition) {
                destinationReached = true;
                console.log(`Car ${index + 1} has reached the destination!`);
                // Thực hiện các hành động khi xe đến đích, trong trường hợp này là dừng xe và tắt đèn xanh.
                stopCar(index);
            }
        }
    }

    const xang = document.getElementById('xang');
    const car = document.getElementById('car');

    document.getElementById('startButton').addEventListener('click', () => {
        isMoving = true;
        destinationReached = false;
        startAnimation();
    });

    car.addEventListener('click', () => {
        isMoving = !isMoving;

        if (isMoving) {
            xang.style.height = '10px';
        } else {
            xang.style.height = '100px';
        }
    });

    

    function stopCar(index) {
        // Tắt di chuyển của xe khi đến đích
        isMoving = false;
        // Thực hiện các hành động khác cần thiết khi xe đến đích
        // Đối với mục đích thử nghiệm, ở đây chúng ta chỉ log thông báo
        console.log(`Car ${index + 1} has stopped at the destination!`);
    }

    // Hàm thực hiện chuyển động cho hình ảnh xe về đích với tốc độ ngẫu nhiên
    
});

function startAnimation() {
    const lights = document.querySelectorAll('.circle');

    lights.forEach(light => {
        light.classList.remove('stop-animation');
        light.style.animation = 'none';
        void light.offsetWidth;
    });

    lights[0].classList.add('do');
    lights[1].classList.add('vang');
    lights[2].classList.add('xanh');

    setTimeout(() => {
        lights[0].style.animation = 'doLight 2s 1';
        lights[0].classList.remove('stop-animation');
    }, 0);

    setTimeout(() => {
        lights[0].classList.add('stop-animation');
        lights[1].style.animation = 'vangLight 2s 1';
        lights[1].classList.remove('stop-animation');
    }, 2000);

    setTimeout(() => {
        lights[1].classList.add('stop-animation');
        lights[2].style.animation = 'xanhLight 2s 1';
        lights[2].classList.remove('stop-animation');
    }, 4000);

    // Tắt mờ cho tất cả các đèn khi kết thúc
    setTimeout(() => {
        lights.forEach(light => {
            light.classList.add('stop-animation');
        });
    }, 6000);
}


var run1 = 0
var run2 = 0
var move = document.getElementById('car1')
function moveFirstCar() {
    run1 += 5
    console.log('move first car')
    var move = document.getElementById('car1')
    move.style.marginLeft = run1 + 'px'
    var fuel1 = document.getElementById('fuel1')
    fuel1.style.width = run1 * (200 / 1030) + 'px'
}
function moveSecondCar() {
    run2 += 5
    console.log('move second car')
    var move = document.getElementById('car2')
    move.style.marginLeft = run2 + 'px'
    var fuel2 = document.getElementById('fuel2')
    fuel2.style.width = run2 * (200 / 1030) + 'px'
}
const myTimeout = setTimeout(start, 30000)
function start() {
    var car1 = document.getElementById("car1")
    var car2 = document.getElementById("car2")
    var red = document.getElementById("red");
    var yellow = document.getElementById("yellow");
    var green = document.getElementById("green");
    var go = document.getElementById('go');
    car1.classList.add('car_runing')
    car2.classList.add('car_runing')
    setTimeout(function () {
        red.style.backgroundColor = 'red';
    }, 1000)
    setTimeout(function () {
        yellow.style.backgroundColor = 'yellow';
    }, 2000)
    setTimeout(function () {
        green.style.backgroundColor = 'green';
        go.innerHTML = 'GO!!!';
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case 'ArrowRight':
                    moveFirstCar()
                    break;
                case 'd':
                    moveSecondCar()
                    break;
            }
        });
        checkwinner()
    }, 3000)
    function checkwinner() {
        var check = setInterval(function () {
            if (parseInt(car1.style.marginLeft) >= 1030) {
                alert("Yellow car wins!");
                clearInterval(check);
            }
            if (parseInt(car2.style.marginLeft) >= 1030) {
                alert("Red car wins!");
                clearInterval(check);
            }
        }, 100);
    }
}
function again() {
    location.reload()
}

