function recoverSecret(trigrams) {
    const graphDescription = new Map();
    for (const [a, b, c] of trigrams) {
        addEdge(graphDescription, [a, b]);
        addEdge(graphDescription, [b, c]);
    }
    let leafKey;
    const answer = [];
    for (leafKey of graphDescription.keys()) {
        if (graphDescription.get(leafKey).childrenCount === 0)
            break;
    }
    while (graphDescription.size) {
        answer.push(leafKey);
        const leaf = graphDescription.get(leafKey);
        graphDescription.delete(leafKey);
        for (const parentKey of leaf.parents.values()) {
            const parent = graphDescription.get(parentKey);
            parent.childrenCount -= 1;
            if (parent.childrenCount === 0)
                leafKey = parentKey;
        }
    }
    return answer.reverse().join("");
}
function addEdge(graphDescription, [a, b]) {
    if (!graphDescription.get(a))
        graphDescription.set(a, { parents: new Set(), childrenCount: 0 });
    if (!graphDescription.get(b))
        graphDescription.set(b, { parents: new Set(), childrenCount: 0 });
    const bInfo = graphDescription.get(b);
    if (bInfo.parents.has(a))
        return;
    bInfo.parents.add(a);
    graphDescription.get(a).childrenCount += 1;
}
export { recoverSecret };
