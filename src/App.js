export default class App {
    async delay(time) {
        return new Promise(resolve=> setTimeout(resolve, time));
    }

    async addWithBigDelay(x, y) {
        await this.delay(100000);

        return x + y;
    }
}