abstract class HouseTemplate {
    buildFoundation(): void { console.log('Foundations build!') }

    buildWindows(): void { console.log('Windows build!') }

    abstract buildPillars(): void
    abstract buildWalls(): void
}

class WoodenHouse extends HouseTemplate {
    buildPillars(): void { console.log('Pillars for Wooden House was build!') }

    buildWalls(): void { console.log('Walls for Wooden House was build!') }
}

class BrickHouse extends HouseTemplate {
    buildPillars(): void { console.log('Pillars for Brick House was build!') }

    buildWalls(): void { console.log('Walls for Brick House was build!') }
}