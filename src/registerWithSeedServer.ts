import fetch from "cross-fetch";

export const registerWithSeedServer = (uri: string) => {
    return fetch(`${uri}/register`, {
        method: "POST",
        body: JSON.stringify({
            uri: `http://localhost:${process.env.PORT}`,
            user: process.env.USER_NAME
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json()).catch(e => console.log(e))
}
