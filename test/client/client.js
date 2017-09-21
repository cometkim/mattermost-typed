// @flow

import {Client4} from 'mattermost-redux/client';

const client = new Client4();
client.setUrl('https://your-mattermost-url.com');

async function loginAndGetUser(username: string, password: string): Promise<?mattermost$User>{
    let user;
    try {
        user = await client.login(username, password);
    } catch (error) {
        console.error(error);
        return null;
    }

    return user;
}

(async () => {
    const user = await loginAndGetUser('user', 'password');
    
    if (user) {
        console.log(user.username);
    }
})();