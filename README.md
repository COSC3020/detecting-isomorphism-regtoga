# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

My new implementation first generates all permutations of a graph, then checks each of the permutations against the other graph. if they ever match the graphs are isomorphic.

Generating all permutations takes |v|! because that is the number of permutations.

checking each permutations has two for loops and each loop runs |v| number of times, so |v|! * |v| * |v| $\in$|v|^2 * |v|!

so in conclusion my implementation takes $|v|^2 * |v|! \in \theta (|v|^2 * |v|!)$ because i am generating every permutations before checking the isomorphism of any of the permutations.


Watched these videos to understand Isomorphism
https://www.youtube.com/watch?v=EwV4Puk2coU
https://www.youtube.com/watch?v=RoDR40UG--s

The generate permutations function was ripped from the first google result.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.