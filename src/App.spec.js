import App from './App';

jest.mock('./App', ()=> {
        return jest.fn().mockImplementation(() => {
            return {
                addWithBigDelay: jest.fn((x, y) => x + y)
            };
        });
    }
);

describe('test App', ()=> {

    const AppInstance = new App();
    test('addWithBigDelay', ()=> {
        expect(AppInstance.addWithBigDelay(1, 2)).toBe(3);
    });
});