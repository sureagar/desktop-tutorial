//hook Sample
import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });
test.describe('Hooks Sample', () => {

    test.beforeAll(async ({  }) => {
        console.log("This will run before all tests");
    });

    test.afterAll(async ({  }) => {
        console.log("This will run after all tests");
    });

    test.beforeEach(async ({  }) => {
        let testTitle = test.info().title;
        console.log("This is running before test"+ testTitle);
    });
    test.afterEach(async ({  }) => {
        console.log("This will run after each test");
    });

    test('Test 1', async ({  }) => {
        console.log("This is Test 1");
    });
    test('Test 2', async ({  }) => {
        console.log("This is Test 2");
    });
    test('Test 3', async ({  }) => {
        console.log("This is Test 3");
    });
})