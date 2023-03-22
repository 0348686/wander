namespace SpriteKind {
    export const small_scarf = SpriteKind.create()
    export const chirp = SpriteKind.create()
}
function scarf () {
    if (maxscarf > 0) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
            tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`scarf leftright2`)
            scarf_positions_x.push(mySprite.tilemapLocation().column)
            scarf_positions_y.push(mySprite.tilemapLocation().row)
            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x.shift(), scarf_positions_y.shift()), assets.tile`transparency16`)
            counter = 0
            scarf_prev = 0
            scarf_next = 0
            for (let index = 0; index < scarf_positions_x.length; index++) {
                if (counter == 0) {
                    scarf_prev = -1
                } else if (scarf_positions_x[counter - 1] == scarf_positions_x[counter] - 1) {
                    scarf_prev = 0
                } else if (scarf_positions_x[counter - 1] == scarf_positions_x[counter] + 1) {
                    scarf_prev = 2
                } else if (scarf_positions_y[counter - 1] == scarf_positions_y[counter] - 1) {
                    scarf_prev = 1
                } else if (scarf_positions_y[counter - 1] == scarf_positions_y[counter] + 1) {
                    scarf_prev = 3
                } else {
                    scarf_prev = 0
                }
                if (counter == scarf_positions_x.length - 1) {
                    scarf_next = -1
                } else if (scarf_positions_x[counter + 1] == scarf_positions_x[counter] - 1) {
                    scarf_next = 2
                } else if (scarf_positions_x[counter + 1] == scarf_positions_x[counter] + 1) {
                    scarf_next = 0
                } else if (scarf_positions_y[counter + 1] == scarf_positions_y[counter] - 1) {
                    scarf_next = 3
                } else if (scarf_positions_y[counter + 1] == scarf_positions_y[counter] + 1) {
                    scarf_next = 1
                } else {
                    scarf_next = 2
                }
                if (scarf_prev == 0) {
                    if (scarf_next == 0) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftright2`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftright charged`)
                        }
                    } else if (scarf_next == 1) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf downleft`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf downleft charged`)
                        }
                    } else if (scarf_next == 2) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftrightend`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftrightend charged`)
                        }
                    } else if (scarf_next == 3) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftup0`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftup charged`)
                        }
                    } else {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftrightend`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftrightend charged`)
                        }
                    }
                } else if (scarf_prev == 1) {
                    if (scarf_next == 0) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf upright0`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf upright charged`)
                        }
                    } else if (scarf_next == 1) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf updown2`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf updown charged`)
                        }
                    } else if (scarf_next == 2) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftup0`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftup charged`)
                        }
                    } else if (scarf_next == 3) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf updownend`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf updownend charged`)
                        }
                    } else {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf updownend`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf updownend charged`)
                        }
                    }
                } else if (scarf_prev == 2) {
                    if (scarf_next == 0) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftendright`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftendright charged`)
                        }
                    } else if (scarf_next == 1) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf downright0`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf downright charged`)
                        }
                    } else if (scarf_next == 2) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftright2`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftright charged`)
                        }
                    } else if (scarf_next == 3) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf upright0`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf upright charged`)
                        }
                    } else {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftendright`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftendright charged`)
                        }
                    }
                } else if (scarf_prev == 3) {
                    if (scarf_next == 0) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf downright0`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf downright charged`)
                        }
                    } else if (scarf_next == 1) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf upenddown`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf upenddown charged`)
                        }
                    } else if (scarf_next == 2) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf downleft`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf downleft charged`)
                        }
                    } else if (scarf_next == 3) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf updown2`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf updown charged`)
                        }
                    } else {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf upenddown`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf upenddown charged`)
                        }
                    }
                } else {
                    if (scarf_next == 0) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftendright`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftendright charged`)
                        }
                    } else if (scarf_next == 1) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf upenddown`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf upenddown charged`)
                        }
                    } else if (scarf_next == 2) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftrightend`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf leftrightend charged`)
                        }
                    } else if (scarf_next == 3) {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf updownend`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf updownend charged`)
                        }
                    } else {
                        if (counter < maxscarf - scarf_charge) {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf none0`)
                        } else {
                            tiles.setTileAt(tiles.getTileLocation(scarf_positions_x[counter], scarf_positions_y[counter]), assets.tile`scarf none charged`)
                        }
                    }
                }
                counter += 1
                scarf_prev = 0
                scarf_next = 0
            }
        }
    }
}
function chirp2 () {
    if (controller.A.isPressed() && !(controller.B.isPressed() && (controller.left.isPressed() && (controller.right.isPressed() && (controller.up.isPressed() && controller.down.isPressed()))))) {
        mySprite3 = sprites.create(assets.image`chirp`, SpriteKind.chirp)
        mySprite3.setPosition(mySprite.x, mySprite.y)
        for (let index = 0; index < 6; index++) {
            mySprite3.changeScale(1, ScaleAnchor.Middle)
            pause(100)
        }
        sprites.destroy(mySprite3)
    }
    if (controller.A.isPressed() && (controller.B.isPressed() && (controller.left.isPressed() && (controller.right.isPressed() && (controller.up.isPressed() && controller.down.isPressed()))))) {
        vendor.follow(mySprite, 100000000000000)
        pause(200)
        vendor.follow(mySprite, 0)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (scarf_charge > 0) {
        mySprite.vy = Math.min(mySprite.vy, -315)
        decrease_scarf_charge()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hole`, function (sprite, location) {
    maxscarf = 1
    scarf_charge = 1
    scene.setBackgroundImage(assets.image`pyramid backdrop`)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 52.6))
    mySprite.setScale(1, ScaleAnchor.Middle)
    scene.cameraFollowSprite(mySprite)
    mySprite.ay = 500
    controller.moveSprite(mySprite, 100, 0)
    scarf_positions_x = []
    scarf_positions_y = []
    vendor = sprites.create(assets.image`vendor`, SpriteKind.Player)
    vendor.setPosition(155, 115)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`giant scarf`, function (sprite, location) {
    scarf_charge = maxscarf
    tiles.setTileAt(location, assets.tile`giant scarf charged`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`giant scarf charged`, function (sprite, location) {
    scarf_charge = maxscarf
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`hill`, function (sprite, location) {
    mySprite.vy = -25
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Scarf upgrade`, function (sprite, location) {
    maxscarf += 1
    scarf_charge = maxscarf
    tiles.setTileAt(location, assets.tile`transparency16`)
    scarf_positions_x.push(mySprite.tilemapLocation().column)
    scarf_positions_y.push(mySprite.tilemapLocation().row)
})
function decrease_scarf_charge () {
    scarf_charge += -1
}
scene.onOverlapTile(SpriteKind.chirp, assets.tile`small scarf`, function (sprite, location) {
    scarf_charge = maxscarf
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`prayer spot`, function (sprite, location) {
    prayer_spot = sprites.create(assets.image`prayer spot`, SpriteKind.Player)
    prayer_spot.setPosition(location.x, location.y)
    mySprite.follow(prayer_spot, 100)
    pause(500)
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 30.5))
    } else {
        tiles.setCurrentTilemap(tilemap`win`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    }
    level += 1
    sprites.destroy(prayer_spot)
})
function bridge_check () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 35), assets.tile`giant scarf charged`) && !(var1 == 1)) {
        var1 = 1
        scene.centerCameraAt(160, 400)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(5, 32), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(5, 31), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(6, 30), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(6, 29), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(7, 28), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(8, 27), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(9, 26), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(10, 25), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(11, 24), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(12, 23), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(13, 22), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(14, 21), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(15, 20), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(16, 19), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(17, 18), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(18, 17), assets.tile`giant scarf`)
        pause(100)
        scene.cameraFollowSprite(mySprite)
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(45, 41), assets.tile`giant scarf charged`) && !(var2 == 1)) {
        var2 = 1
        scene.centerCameraAt(704, 256)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(34, 17), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(35, 17), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(36, 17), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(37, 17), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(38, 17), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(39, 17), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(40, 17), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(41, 16), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(42, 16), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(43, 16), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(44, 16), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(45, 16), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(46, 16), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(47, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(48, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(49, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(50, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(51, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(52, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(53, 15), assets.tile`giant scarf`)
        pause(100)
        scene.cameraFollowSprite(mySprite)
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(78, 47), assets.tile`giant scarf charged`) && !(var3 == 1)) {
        var3 = 1
        scene.centerCameraAt(1264, 256)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(73, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(74, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(75, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(76, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(77, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(78, 15), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(79, 14), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(80, 14), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(81, 14), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(82, 14), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(83, 14), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(84, 14), assets.tile`giant scarf`)
        pause(100)
        scene.cameraFollowSprite(mySprite)
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(101, 50), assets.tile`giant scarf charged`) && !(var4 == 1)) {
        var4 = 1
        scene.centerCameraAt(1664, 224)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(100, 14), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(101, 14), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(102, 14), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(103, 13), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(104, 13), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(105, 12), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(106, 12), assets.tile`giant scarf`)
        pause(100)
        tiles.setTileAt(tiles.getTileLocation(107, 12), assets.tile`giant scarf`)
        pause(100)
        scene.cameraFollowSprite(mySprite)
    }
}
let prayer_spot: Sprite = null
let mySprite3: Sprite = null
let scarf_next = 0
let scarf_prev = 0
let counter = 0
let vendor: Sprite = null
let scarf_positions_y: number[] = []
let scarf_positions_x: number[] = []
let mySprite: Sprite = null
let level = 0
let scarf_charge = 0
let maxscarf = 0
let var4 = 0
let var3 = 0
let var2 = 0
let var1 = 0
var1 = 0
var2 = 0
var3 = 0
var4 = 0
maxscarf = 1
scarf_charge = 1
level = 1
scene.setBackgroundImage(assets.image`pyramid backdrop`)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`wandererleft`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 52.6))
mySprite.setScale(1, ScaleAnchor.Middle)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 500
controller.moveSprite(mySprite, 100, 0)
scarf_positions_x = []
scarf_positions_y = []
vendor = sprites.create(assets.image`vendor`, SpriteKind.Player)
vendor.setPosition(155, 115)
game.splash("these small scarves recharge your scarf if you chirp next to them!")
game.splash("press a (or space on keyboard) to chirp!")
game.splash("if you see a yellow floating square, then you should collect it, as it upgrades your scarf so you can store more scarf power at one time!")
game.splash("use the power stored in your scarf to jump!")
forever(function () {
    scarf()
    chirp2()
    bridge_check()
    info.setScore(scarf_charge)
})
