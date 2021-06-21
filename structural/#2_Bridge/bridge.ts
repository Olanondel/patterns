interface Theme {
    getColor(): string
    getColorName(): string
}

class MainPage {
    constructor(public theme: Theme) {}

    getContent() {
        return `MainPage is used with ${this.theme.getColorName()} theme!`
    }

    setTheme(theme) {
        this.theme = theme
    }
}

class WhiteTheme implements Theme {
    getColor(): string {
        return '#fff'
    }

    getColorName() {
        return 'White'
    }
}

class DarkTheme implements Theme {
    getColor(): string {
        return '#000'
    }

    getColorName() {
        return 'Dark'
    }
}

const mainPage = new MainPage(new WhiteTheme())
console.log(mainPage.getContent());

mainPage.setTheme(new DarkTheme())
console.log(mainPage.getContent());