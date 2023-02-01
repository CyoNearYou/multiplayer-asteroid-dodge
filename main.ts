namespace SpriteKind {
    export const Player1 = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const Player$ = SpriteKind.create()
    export const Player4 = SpriteKind.create()
    export const Player3 = SpriteKind.create()
    export const PlayerProjectile = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Repeated, function () {
    PlayerProjectile2 = sprites.createProjectileFromSprite(assets.image`Bullet2`, Player2, 50, 0)
    PlayerProjectile2.setKind(SpriteKind.PlayerProjectile)
    pause(500)
})
controller.player4.onEvent(ControllerEvent.Connected, function () {
    players += 1
    player4 = sprites.create(assets.image`Player4`, SpriteKind.Player4)
    controller.player4.moveSprite(player4, 0, 100)
    player4.setPosition(15, 30)
    player4.setStayInScreen(true)
    info.player4.setLife(3)
})
controller.player3.onEvent(ControllerEvent.Disconnected, function () {
    sprites.destroy(player3)
})
controller.player4.onEvent(ControllerEvent.Disconnected, function () {
    sprites.destroy(player4)
})
sprites.onOverlap(SpriteKind.Player1, SpriteKind.Projectile, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        player1.y = randint(0, 120)
    }
    info.player1.changeLifeBy(-1)
})
controller.player1.onEvent(ControllerEvent.Disconnected, function () {
    sprites.destroy(player1)
})
info.player4.onLifeZero(function () {
    sprites.destroy(player4)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Repeated, function () {
    PlayerProjectile3 = sprites.createProjectileFromSprite(assets.image`Bullet3`, player3, 50, 0)
    PlayerProjectile3.setKind(SpriteKind.PlayerProjectile)
    pause(500)
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    players += 1
    player3 = sprites.create(assets.image`Player3`, SpriteKind.Player3)
    controller.player3.moveSprite(player3, 0, 100)
    player3.setPosition(15, 90)
    player3.setStayInScreen(true)
    info.player3.setLife(3)
})
sprites.onOverlap(SpriteKind.Player4, SpriteKind.Projectile, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        player4.y = randint(0, 120)
    }
    info.player4.changeLifeBy(-1)
})
info.player3.onLifeZero(function () {
    sprites.destroy(player3)
})
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    sprites.destroy(Player2)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Repeated, function () {
    PlayerProjectile4 = sprites.createProjectileFromSprite(assets.image`Bullet4`, player4, 50, 0)
    PlayerProjectile4.setKind(SpriteKind.PlayerProjectile)
    pause(500)
})
info.player1.onLifeZero(function () {
    sprites.destroy(player1)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Repeated, function () {
    PlayerProjectile1 = sprites.createProjectileFromSprite(assets.image`Bullet1`, player1, 50, 0)
    PlayerProjectile1.setKind(SpriteKind.PlayerProjectile)
    pause(500)
})
info.player2.onLifeZero(function () {
    sprites.destroy(Player2)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Projectile, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        Player2.y = randint(0, 120)
    }
    info.player2.changeLifeBy(-1)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    players += 1
    Player2 = sprites.create(assets.image`Player2`, SpriteKind.Player2)
    controller.player2.moveSprite(Player2, 0, 100)
    Player2.setPosition(15, 70)
    Player2.setStayInScreen(true)
    info.player2.setLife(3)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    players += 1
    player1 = sprites.create(assets.image`Player1`, SpriteKind.Player1)
    controller.player1.moveSprite(player1, 0, 100)
    player1.setPosition(15, 50)
    player1.setStayInScreen(true)
    info.player1.setLife(3)
})
sprites.onOverlap(SpriteKind.Player3, SpriteKind.Projectile, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        player3.y = randint(0, 120)
    }
    info.player3.changeLifeBy(-1)
})
let Asteroid: Sprite = null
let PlayerProjectile1: Sprite = null
let PlayerProjectile4: Sprite = null
let PlayerProjectile3: Sprite = null
let player1: Sprite = null
let player3: Sprite = null
let player4: Sprite = null
let players = 0
let Player2: Sprite = null
let PlayerProjectile2: Sprite = null
let max = 15
let min = 2.5
let started = 0
scene.setBackgroundImage(assets.image`Stars`)
game.splash("PRESS \"A\" TO SHOOT")
pause(200)
game.splash("PRESS ANY BUTTON TO JOIN")
scroller.scrollBackgroundWithSpeed(-50, 0)
started = 1
forever(function () {
    if (min < 0.5) {
        min = 0.5
    }
    if (max < 6) {
        max = 6
    }
})
forever(function () {
    pauseUntil(() => started == 1)
    pause(1000)
    if (info.player1.hasLife()) {
        info.player1.changeScoreBy(1)
    }
    if (info.player2.hasLife()) {
        info.player2.changeScoreBy(1)
    }
    if (info.player3.hasLife()) {
        info.player3.changeScoreBy(1)
    }
    if (info.player4.hasLife()) {
        info.player4.changeScoreBy(1)
    }
})
forever(function () {
    pauseUntil(() => started == 1)
    pause(randint(100 * min, 100 * max))
    Asteroid = sprites.createProjectileFromSide(assets.image`asteroid`, randint(-50, -150), 0)
    Asteroid.y = randint(0, 120)
    Asteroid.setScale(randint(0.5, 1.5), ScaleAnchor.Middle)
    Asteroid.setKind(SpriteKind.Projectile)
})
forever(function () {
    pauseUntil(() => started == 1)
    pause(randint(5000, 7500))
    min += -0.5
    max += -0.5
})
forever(function () {
    pauseUntil(() => started == 1)
    if (players < 2) {
        if (!(info.player1.hasLife())) {
            game.gameOver(false)
        }
    } else if (players < 3) {
        if (!(info.player1.hasLife()) && !(info.player2.hasLife())) {
            game.gameOver(false)
        }
    } else if (players < 4) {
        if (!(info.player1.hasLife()) && (!(info.player2.hasLife()) && !(info.player3.hasLife()))) {
            game.gameOver(false)
        }
    } else if (players < 5) {
        if (!(info.player1.hasLife()) && (!(info.player2.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife())))) {
            game.gameOver(false)
        }
    }
})
