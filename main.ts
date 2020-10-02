// Created by: Mariam Abugamga
// Date; oct 2,2020
// 
// this program calculates distance
let distance = 0
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance)
})
