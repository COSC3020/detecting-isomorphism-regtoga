//ripped from the first google result
function getPermutations(arr) {
    if (arr.length <= 1) return [arr];
    var permutations = [];
    for (var i = 0; i < arr.length; i++) {
        var first = arr[i];
        var remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        var remainingPerms = getPermutations(remaining);
        for (var perm of remainingPerms) {
            permutations.push([first].concat(perm));
        }
    }
    return permutations;
}

function isEqual(matrix1, matrix2) {
    //compare two matrixes to see if they are identical.
    for (var i = 0; i < matrix1.length; i++) {
        for (var j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] !== matrix2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function are_isomorphic(graph1, graph2) {
    //isomorphic if can be transformed into another by reordering vertices.
    //so generate all of the permutations of one and if it ever matches the other we stay winning
    if (graph1.length !== graph2.length) return false;

    var indices = [];
    for (var i = 0; i < graph1.length; i++) {
        indices.push(i);
    }
    var permutations = getPermutations(indices);

    for (var p = 0; p < permutations.length; p++) {
        var perm = permutations[p];
        var rearranged = [];
        
        for (var i = 0; i < perm.length; i++) {
            rearranged[i] = [];
            for (var j = 0; j < perm.length; j++) {
                rearranged[i][j] = graph1[perm[i]][perm[j]];
            }
        }

        if (isEqual(rearranged, graph2)) {
            return true;
        }
    }

    return false;
}