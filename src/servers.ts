export type Node = {
    uri: string,
    user: string
}

const servers: Node[] = []

export function addNode(node: Node) {
    const isAlreadyAdded = servers.find(node => node.user === node.user)
    if (isAlreadyAdded) return
    console.log(`${node.user} registered uri: ${node.uri}`)
    servers.push(node)
}
