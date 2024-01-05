// authService.js
import dummyUser from './dummy';

export const DummySignin = async (username: any, password: any) => {
    // Simulate a delay (optional)
    console.log('User name input is', username, 'Password is ', password);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Dummy authentication logic (replace with actual logic)
    if (username === 'admin' && password === 'admin') {
        return {
            token: dummyUser.token,
            useDetails: {
                id: 1,
                email: 'abc@email.com',
                username: 'admin',
                firstName: 'admin',
                lastname: 'kumar',
            }
        };
    } else {
        throw new Error('Invalid username or password');
    }
};
