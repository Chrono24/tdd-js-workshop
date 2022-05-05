import App from './App';

beforeAll(()=> {
    jest.spyOn(App.prototype, 'delay').mockImplementation(async () => Promise.resolve());
});

describe('test App', ()=> {

    const AppInstance = new App();

    test('addWithBigDelay', async ()=> {
        const result = await AppInstance.addWithBigDelay(1, 2);
        expect(result).toBe(3);
    });
});