// @flow

import {Client4} from 'mattermost-redux/client';

const client = new Client4();
client.setUrl('https://your-mattermost-url.com');

async function loginAndGetUser(username: string, password: string): Promise<?mattermost$User>{
    let user;
    try {
        user = await client.login(username, password);
    } catch (e) { // Flow does not support exceptions yet
        const error = (e: mattermost$ResponseError);
        console.error(error.message);
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