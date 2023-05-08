import fetch from "cross-fetch";

export const registerWithSeedServer = (uri: string) => {
    return fetch(`${uri}/register`, {
        method: "POST",
        body: JSON.stringify({
            uri: "http://localhost:3000",
            user: "sally"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
}
