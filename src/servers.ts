export type Node = {
    uri: string,
    user: string
}

const servers: Node[] = []

export function addNode(node: Node) {
    const isAlreadyAdded = servers.find(node => node.user === node.user)
    if (isAlreadyAdded) return
    servers.push(node)
}
