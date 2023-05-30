input.onButtonPressed(Button.A, function () {
    if (stop == 0) {
        if (bar1x > 0) {
            led.unplot(bar1x, bar1y)
            led.unplot(bar2x, bar2y)
            led.unplot(bar3x, bar3y)
            bar1x += -1
            bar2x += -1
            bar3x += -1
            led.plot(bar1x, bar1y)
            led.plot(bar2x, bar2y)
            led.plot(bar3x, bar3y)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (stop == 0) {
        if (bar3x < 4) {
            led.unplot(bar1x, bar1y)
            led.unplot(bar2x, bar2y)
            led.unplot(bar3x, bar3y)
            bar1x += 1
            bar2x += 1
            bar3x += 1
            led.plot(bar1x, bar1y)
            led.plot(bar2x, bar2y)
            led.plot(bar3x, bar3y)
        }
    }
})
let resttime1 = 0
let time1 = 0
let y1 = 0
let x1 = 0
let stop = 0
let bar3y = 0
let bar3x = 0
let bar2y = 0
let bar2x = 0
let bar1y = 0
let bar1x = 0
bar1x = 1
bar1y += 4
bar2x += 2
bar2y += 4
bar3x += 3
bar3y += 4
led.plot(bar1x, bar1y)
led.plot(bar2x, bar2y)
led.plot(bar3x, bar3y)
stop = 0
let score = 0
basic.forever(function () {
    if (stop == 0) {
    	
    }
})
basic.forever(function () {
    if (stop == 0) {
        x1 = randint(0, 4)
        y1 = 0
        time1 = randint(5, 10)
        resttime1 = time1 * 100
        for (let index = 0; index <= 4; index++) {
            if (stop == 0) {
                led.plot(x1, y1)
                basic.pause(resttime1)
                led.unplot(x1, y1)
                led.plot(bar1x, bar1y)
                led.plot(bar2x, bar2y)
                led.plot(bar3x, bar3y)
                y1 += 1
                if (y1 == 4) {
                    if (x1 == bar1x || (x1 == bar2x || x1 == bar3x)) {
                        score += 1
                    } else {
                        stop = 1
                    }
                }
            }
        }
    } else {
        if (stop == 1) {
            basic.showNumber(score)
            basic.pause(400)
            basic.showIcon(IconNames.Sad)
            basic.pause(1000)
            stop = 2
        }
    }
})
