const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const graphA = //A and B are Isomorphic
[ //[0, 1, 2, 3, 4]
    [0, 1, 1, 0, 0], //A, 0
    [1, 0, 0, 1, 0], //B, 1
    [1, 0, 0, 0, 1], //C, 2
    [0, 1, 0, 0, 1], //D, 3
    [0, 0, 1, 1, 0]  //E, 4
] //[0, 1, 2, 3, 4]

const graphB =
[ //[0, 1, 2, 3, 4]
    [0, 0, 0, 1, 1], //A, 0
    [0, 0, 1, 0, 1], //B, 1
    [0, 1, 0, 1, 0], //C, 2
    [1, 0, 1, 0, 0], //D, 3
    [1, 1, 0, 0, 0]  //E, 4
] //[0, 1, 2, 3, 4]


const graphC = //C and D are Isomorphic but not D
[ //[0, 1, 2, 3, 4]
    [0, 1, 1, 1, 1], //A, 0
    [1, 0, 0, 1, 0], //B, 1
    [1, 0, 0, 0, 1], //C, 2
    [1, 1, 0, 0, 1], //D, 3
    [1, 0, 1, 1, 0]  //E, 4
] //[0, 1, 2, 3, 4]

const graphD =
[ //[0, 1, 2, 3, 4]
    [0, 1, 1, 1, 1], //A, 0
    [1, 0, 1, 0, 0], //B, 1
    [1, 1, 0, 1, 0], //C, 2
    [1, 0, 1, 0, 1], //D, 3
    [1, 0, 0, 1, 0]  //E, 4
] //[0, 1, 2, 3, 4]

const graphE =
[ //[0, 1, 2, 3, 4]
    [0, 1, 1, 0, 0], //A, 0
    [1, 0, 0, 0, 1], //B, 1
    [1, 0, 0, 1, 1], //C, 2
    [0, 1, 1, 0, 1], //D, 3
    [0, 0, 1, 1, 0]  //E, 4
] //[0, 1, 2, 3, 4]

const graphF =
[ //[0, 1, 2, 3, 4]
    [0, 0, 1, 0, 1], //A, 0
    [0, 0, 1, 0, 0], //B, 1
    [1, 0, 0, 0, 0], //C, 2
    [0, 1, 0, 0, 0], //D, 3
    [1, 0, 0, 1, 0]  //E, 4
] //[0, 1, 2, 3, 4]

const graphG =
[ //[0, 1, 2, 3, 4]
    [0, 0, 0, 1, 1], //A, 0
    [0, 0, 1, 0, 0], //B, 1
    [0, 0, 0, 0, 1], //C, 2
    [0, 1, 0, 0, 0], //D, 3
    [1, 0, 1, 0, 0]  //E, 4
] //[0, 1, 2, 3, 4]


function allTests() {
    const results = [
        are_isomorphic(graphA, graphB) === true,
        are_isomorphic(graphA, graphC) === false,
        are_isomorphic(graphC, graphD) === true,
        are_isomorphic(graphC, graphE) === false,
        are_isomorphic(graphE, graphD) === false,
        are_isomorphic(graphF, graphG) === true
    ];
    return results.every(Boolean);
}

jsc.check(allTests);