function downFourTimes(){
down()
down()
down()
down()
}

function getSetUnlockDoorAndProgress() {
right()
var currentColor = getColor()
down()
setColor (currentColor)
right()
right()
}

downFourTimes()
getSetUnlockDoorAndProgress()
up()
getSetUnlockDoorAndProgress()
