export default class App {
    async addWithBigDelay(x, y) {
        await new Promise(resolve=> setTimeout(resolve, 10000));

        return x + y;
    }
}