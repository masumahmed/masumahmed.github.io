# Computer Theory
This document serves as notes and homework for CSCI 26500 Computer Theory Spring 2022 with professor Eric Schweitzer at CUNY Hunter College. It is in no was a comprehensive text for computational theory. All Homework Problems are taken from ***Automata Theory, Languages, and Computation 3rd Edition*** (ISBN: 0321455363).

Authored by *Masum Ahmed*
Website: https://masumahmed.github.io

Graph Designing Tool: https://markusfeng.com/projects/graph/

Note to self: delete this later
style="background-color: white;"
[Introduction to Automata Theory, Languages, and Computation: Solutions for Chapter 2 (stanford.edu)](http://infolab.stanford.edu/~ullman/ialcsols/sol2.html)

## Table of Contents
[Background](##Background)
[Finite Automata](##Finite\ Automata)
[Deterministic Finite Automata (DFA)](##Deterministic\ Finite\ Automata\ (DFA))
- [Definition](#####Definition)
- [String Processing](#####String\ Processing)
- [Graphical Notation](#####Graphical\ Notation)
- [Homework problems](#####Homework\ Problems)

[Non-Deterministic Finite Automata (NFA)](##Non-Deterministic\ Finite\ Automata\ (NFA))
[ε-Non-Deterministic Finite Automata (εΝFA)](##ε-Non-Deterministic\ Finite\ Automata\ (εΝFA))
[Regular Expressions](##Regular\ Expressions)
[Context Free Grammar](##Context\ Free\ Grammar)
[Pushdown Automata](##Pushdown\ Automata)
[Appendix](##Appendix)

## Background
Theorhetical computer science or computer thoery/computational theory is the theory of computation. It can tell us what computers can do and what they can't do.

The field is divided into three major branches: [automata theory](https://en.wikipedia.org/wiki/Automata_theory "Automata theory") and [formal languages](https://en.wikipedia.org/wiki/Formal_language "Formal language"), [computability theory](https://en.wikipedia.org/wiki/Computability_theory "Computability theory"), and [computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity_theory "Computational complexity theory"), which are linked by the question:  "What are the fundamental capabilities and limitations of computers?"

The subjects disscussed in the document build on each other.

## Finite Automata
A finite-state machine (FSM) or finite-state automaton (FSA, plural: automata), finite automaton, or simply a state machine, is a mathematical model of computation. It is an abstract machine that can be in exactly one or many of a finite number of states at any given time. The FSM can change from one state to another in response to some inputs; the change from one state to another is called a transition. An FSM is defined by a list of its states, its initial state, and the inputs that trigger each transition. Finite-state machines are of two types—deterministic finite-state machines and non-deterministic finite-state machines.

##### Graph Notation
Graph notation for a finite automate consists of nodes, lines connecting those nodes, a start arrow, and a double circled final state.

## Deterministic Finite Automata (DFA)
Deterministic Finite Automata (DFAs) are a type of Finite Automata can only occupy one state at a time. In other words their is only one pointer for the current state and their is only one next state. Inputs can only map to one of either a previous state or a next state. The end of the string needs to be in this state for the DFA to be vlaid.

##### Definition
A DFA is a 5 tuple as follows: 
$$
A = (Q, Σ, δ, q_0, F)
$$
**Q** finite set of states
**Σ** finite alphabet for input
**δ** transition function δ = Q x Σ -> Q
**q<sub>0</sub>** start state
**F** set of final states

##### Homework
**2.2.1**
Fig 2.8 below is a marble-rolling toy. A marble is dropped at A or B. Levers x<sub>1</sub> , x<sub>2</sub> , and x<sub>3</sub> cause the marble to fall either to the left of to the right. Whenever a marbale encounter a lever, it causes the lever to reverse after the marble passes, so the next marble will take the opposite branch.

**a)** Model this toy by a finite automaton. Let the inputs A and B represent the input into which the marble is dropped. Let acceptance correspond to the marble exiting at D, nonacceptance represents a marble exiting at C.

|       |   A  | B    |
|:------:|:----:|------|
| ->000r | 100r | 011r |
|  \*000a | 100r | 011r |
|  \*001a | 101r | 000a |
|  010r  | 110r | 001a |
|  \*010a | 110r | 001a |
|  011r  | 111r | 010a |
|  100r  | 010r | 111r |
|  \*100a | 010r | 111r |
|  101r  | 011r | 100a |
|  \*101a | 011r | 100a |
|  110r  | 000a | 101a |
|  \*110a | 000a | 101a |
|  111r  | 001a | 110a |

**b)** Informally describe the language of the automaton

All strings ending in a 1, where the number of 1s is even.
All strings of length X that either end in a 1 or have an even number of 0s where X mod 4 = 0, or (X-3) mod 4 = 0 (X = 3, 4, 7, 8, 11, 12, ...).

**c)** Suppose that instead the levers switched before allowing pass. How would your answers to parts (a) and (b) change.

Eveyrthing would be inverted. All the 0s would be 1s and all 1s would be 0s.

![[Pasted image 20220407025048.png]]

**2.2.2**
We define δ by breaking the input string into any string followed by a single symbol (in the inductive part, Equation 2.1). However, we informaly think of delta as describing what happens along a path with a certain string of lablels, and if so, then it should not matter how we break the input string in the definition of δ. Show that in fact, δ(q, xy) = δ(δ(q, x), y) for any state q and string z and y. Hint Perform an induction on |y|.

![[Pasted image 20221213023014.png]]
![[Pasted image 20221213023026.png]]


**2.2.4**
Give DFA's accepting the following languages over the alphabet {0, 1}:
a) The set of all string ending in 00

<svg style="background-color: white;" width="400" height="400" version="1.1"  xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="76.5" cy="107.5" rx="30" ry="30"/>
	<text x="68.5" y="113.5" font-family="Times New Roman" font-size="20">q&#8320;</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="308.5" cy="107.5" rx="30" ry="30"/>
	<text x="300.5" y="113.5" font-family="Times New Roman" font-size="20">q&#8322;</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="308.5" cy="107.5" rx="24" ry="24"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="197.5" cy="218.5" rx="30" ry="30"/>
	<text x="189.5" y="224.5" font-family="Times New Roman" font-size="20">q&#8321;</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 103.145,121.249 A 257.788,257.788 0 0 1 181.509,193.137"/>
	<polygon fill="black" stroke-width="1" points="181.509,193.137 180.923,183.721 172.789,189.538"/>
	<text x="151.5" y="144.5" font-family="Times New Roman" font-size="20">0</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 297.678,135.434 A 161.092,161.092 0 0 1 225.434,207.678"/>
	<polygon fill="black" stroke-width="1" points="297.678,135.434 289.633,140.361 298.582,144.824"/>
	<text x="272.5" y="198.5" font-family="Times New Roman" font-size="20">0</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 63.275,80.703 A 22.5,22.5 0 1 1 89.725,80.703"/>
	<text x="71.5" y="31.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon fill="black" stroke-width="1" points="89.725,80.703 98.473,77.17 90.382,71.292"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 169.807,207.037 A 199.022,199.022 0 0 1 90.304,134.104"/>
	<polygon fill="black" stroke-width="1" points="90.304,134.104 90.26,143.538 98.765,138.277"/>
	<text x="109.5" y="196.5" font-family="Times New Roman" font-size="20">1</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 104.194,96.007 A 266.92,266.92 0 0 1 280.806,96.007"/>
	<polygon fill="black" stroke-width="1" points="104.194,96.007 113.398,98.078 110.089,88.641"/>
	<text x="187.5" y="71.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="27.5,107.5 46.5,107.5"/>
	<polygon fill="black" stroke-width="1" points="46.5,107.5 38.5,102.5 38.5,112.5"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 295.275,80.703 A 22.5,22.5 0 1 1 321.725,80.703"/>
	<text x="303.5" y="31.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon fill="black" stroke-width="1" points="321.725,80.703 330.473,77.17 322.382,71.292"/>
</svg>

Transition Table
|       |   0  | 1 |
|:------:|:----:|------|
| -> q0 | q1 | q0 |
| q1 | q2 | q0 |
| \*q2 | q2 | q0 |

b) The set of all strings with three consecutive 0's (not necessarily at the end).

<svg width="400" height="400" version="1.1" style="background-color: white;" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="90.5" cy="120.5" rx="30" ry="30"/>
	<text x="82.5" y="126.5" font-family="Times New Roman" font-size="20">q&#8320;</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="270.5" cy="120.5" rx="30" ry="30"/>
	<text x="262.5" y="126.5" font-family="Times New Roman" font-size="20">q&#8321;</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="90.5" cy="300.5" rx="30" ry="30"/>
	<text x="82.5" y="306.5" font-family="Times New Roman" font-size="20">q&#8322;</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="270.5" cy="300.5" rx="30" ry="30"/>
	<text x="262.5" y="306.5" font-family="Times New Roman" font-size="20">q&#8323;</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="270.5" cy="300.5" rx="24" ry="24"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 119.329,112.254 A 275.276,275.276 0 0 1 241.671,112.254"/>
	<polygon fill="black" stroke-width="1" points="241.671,112.254 234.982,105.602 232.76,115.352"/>
	<text x="175.5" y="96.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="249.287,141.713 111.713,279.287"/>
	<polygon fill="black" stroke-width="1" points="111.713,279.287 120.906,277.165 113.835,270.094"/>
	<text x="185.5" y="231.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="120.5,300.5 240.5,300.5"/>
	<polygon fill="black" stroke-width="1" points="240.5,300.5 232.5,295.5 232.5,305.5"/>
	<text x="175.5" y="291.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="30.5,120.5 60.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,120.5 52.5,115.5 52.5,125.5"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 257.275,273.703 A 22.5,22.5 0 1 1 283.725,273.703"/>
	<text x="255.5" y="224.5" font-family="Times New Roman" font-size="20">0, 1</text>
	<polygon fill="black" stroke-width="1" points="283.725,273.703 292.473,270.17 284.382,264.292"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 77.275,93.703 A 22.5,22.5 0 1 1 103.725,93.703"/>
	<text x="85.5" y="44.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon fill="black" stroke-width="1" points="103.725,93.703 112.473,90.17 104.382,84.292"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 241.576,128.411 A 286.698,286.698 0 0 1 119.424,128.411"/>
	<polygon fill="black" stroke-width="1" points="119.424,128.411 126.175,135.001 128.305,125.231"/>
	<text x="175.5" y="155.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="90.5,270.5 90.5,150.5"/>
	<polygon fill="black" stroke-width="1" points="90.5,150.5 85.5,158.5 95.5,158.5"/>
	<text x="95.5" y="216.5" font-family="Times New Roman" font-size="20">1</text>
</svg>

Transition Table
|       |   0  | 1 |
|:------:|:----:|------|
| -> q0 | q1 | q0 |
| q1 | q2 | q0 |
| q2 | q3 | q0 |
| \*q3 | q3 | q3 |

c) The set of strings with 011 as a substring.

<svg style="background-color: white;" width="400" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="90.5" cy="120.5" rx="30" ry="30"/>
	<text x="80.5" y="126.5" font-family="Times New Roman" font-size="20">q0</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="300.5" cy="120.5" rx="30" ry="30"/>
	<text x="290.5" y="126.5" font-family="Times New Roman" font-size="20">q1</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="90.5" cy="330.5" rx="30" ry="30"/>
	<text x="80.5" y="336.5" font-family="Times New Roman" font-size="20">q2</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="300.5" cy="330.5" rx="30" ry="30"/>
	<text x="290.5" y="336.5" font-family="Times New Roman" font-size="20">q3</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="300.5" cy="330.5" rx="24" ry="24"/>
	<polygon stroke="black" stroke-width="1" points="120.5,120.5 270.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="270.5,120.5 262.5,115.5 262.5,125.5"/>
	<text x="190.5" y="111.5" font-family="Times New Roman" font-size="20">0</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 283.952,145.52 A 670.158,670.158 0 0 1 115.52,313.952"/>
	<polygon fill="black" stroke-width="1" points="115.52,313.952 124.943,313.498 119.241,305.283"/>
	<text x="212.5" y="258.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="120.5,330.5 270.5,330.5"/>
	<polygon fill="black" stroke-width="1" points="270.5,330.5 262.5,325.5 262.5,335.5"/>
	<text x="190.5" y="321.5" font-family="Times New Roman" font-size="20">1</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 77.275,93.703 A 22.5,22.5 0 1 1 103.725,93.703"/>
	<text x="85.5" y="44.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon fill="black" stroke-width="1" points="103.725,93.703 112.473,90.17 104.382,84.292"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 106.339,305.026 A 589.663,589.663 0 0 1 275.026,136.339"/>
	<polygon fill="black" stroke-width="1" points="275.026,136.339 265.594,136.557 271.089,144.912"/>
	<text x="166.5" y="203.5" font-family="Times New Roman" font-size="20">0</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 287.275,93.703 A 22.5,22.5 0 1 1 313.725,93.703"/>
	<text x="295.5" y="44.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon fill="black" stroke-width="1" points="313.725,93.703 322.473,90.17 314.382,84.292"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 287.275,303.703 A 22.5,22.5 0 1 1 313.725,303.703"/>
	<text x="288.5" y="254.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon fill="black" stroke-width="1" points="313.725,303.703 322.473,300.17 314.382,294.292"/>
	<polygon stroke="black" stroke-width="1" points="26.5,120.5 60.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,120.5 52.5,115.5 52.5,125.5"/>
</svg>

Transition Table
|       |   0  | 1 |
|:------:|:----:|------|
| -> q0 | q1 | q0 |
| q1 | q1 | q2 |
| q2 | q1 | q3 |
| \*q3 | q3 | q3 |

**2.2.7**
**Question:** Let A be a DFA and **q** a particular state of A, such that d(q, a) = q for all input symbols a. Show by induction on the length of the input that for all input strings w, δhat(q, a) = q.

**Answer:** By induction over the length of 𝑤w. Assume 𝛿(𝑞,𝑎)=𝑞δ(q,a)=q for all 𝑎a. Take any 𝑤w. There are two cases:

1.  If |𝑤|=0|w|=0 then 𝑤=𝜖w=ϵ (the empty word). Now the definition of 𝛿∗δ∗ has "𝛿∗(𝑞,𝜖)=𝑞δ∗(q,ϵ)=q" without any assumption on 𝛿δ or 𝑞q. We thus have 𝛿∗(𝑞,𝑤)=𝑞δ∗(q,w)=q in this first case.

2.  If |𝑤|>0|w|>0 then 𝑤w is some 𝑤′𝑎w′a and |𝑤′|<|𝑤||w′|<|w|. Now 𝛿∗(𝑞,𝑤)=𝛿∗(𝑞,𝑤′𝑎)=𝛿(𝛿∗(𝑞,𝑤′),𝑎)δ∗(q,w)=δ∗(q,w′a)=δ(δ∗(q,w′),a) by definition of 𝛿∗δ∗. Since |𝑤′|<|𝑤||w′|<|w| we have 𝛿∗(𝑞,𝑤′)=𝑞δ∗(q,w′)=q by induction hypothesis. Finally 𝛿∗(𝑞,𝑤)=𝛿(𝑞,𝑎)δ∗(q,w)=δ(q,a), which is 𝑞q by the assumption. We have proved the required conclusion in this second case too.

All cases have been covered. The proof is complete. Note that the two cases can be considered in any order we like. And that we do not use that |𝑤′|=|𝑤|−1|w′|=|w|−1, just that |𝑤′|<|𝑤||w′|<|w|.

*Credit: https://cs.stackexchange.com/questions/49389/if-deltaq-a-q-for-all-symbols-a-show-that-delta-q-w-q-is-tr*

**2.2.10**
**Question:** Consider the DFA with the following transition table:

|   | 0 | 1 |
|---|---|---|
| -> A | A | B |
| * B | B | A |

Informally describe the language accepted by this DFA, and prove by induction on the length of an input string that your description is correct. *Hint When setting up the inductive hypothesis, it is wise to make a statement about what input get you to each state, not just what inputs get you to the accepting state.*

**Answer:** This DFA excepts strings of `0` and `1` that end with the seqence `1` followed by any number of `0`. For example, `1`, `01`, `010`, `0100000000` are all acepted by this DFA.

Induction: Assume this DFA takes strings of {0,1} that start with any number of `0` followed by a `1`, followed by any number of `0`.

Case 1:  

Case 2:

## Non-Deterministic Finite Automata (NFA)
Non-Deterministic Finite Automata are like Deterministic Finite Automata with the exception that they don't need to obey the rule of only going to one other state at a time. In other words they can have one or more pointer to the current state and next states can be chosen in parallel. Futhurmore, inputs can map to zero or more states. A string is accepted if the strings end with at least one of the states being a final state.

Every DFA is an NFA, but not vice versa. There is also an equivalent DFA for every NFA.

##### Definition
A NFA is a 5 tuple as follows: 
$$
A = (Q, Σ, δ, q_0, F)
$$
**Q** finite set of states
**Σ** finite alphabet for input
**δ** transition function δ = Q x Σ -> 2^Q
**q<sub>0</sub>** start state
**F** set of final states

##### Homework Problems
**2.3.1**
Convert to a DFA the following NFA:
|      | 0     | 1   |
|------|-------|-----|
| -> p | {p,q} | {p} |
| q    | {r}   | {r} |
| r    | {s}   |  ∅  |
| \*s   | {s}   | {s} | \

Solution:
|      | 0     | 1   |
|------|-------|-----|
| -> p | qq | p |
| pq | pqr | pr |
| pqr | pqrs | pr |
| \*pqrs | pqrs | prs |
| pr | pqs | p |
| \*prs | pqs | ps |
| \*pqs | pqrs | prs |
| \*ps | pqs | ps |

**2.3.2**
Convert to a DFA the following NFA:

|      | 0     | 1   |
|------|-------|-----|
| -> p | {p,q} | {p} |
| q    | {r,s}   | {t} |
| r    | {p,r}   |  {t}  |
| \*s   |  ∅  | ∅ | 
| \*t | ∅ | ∅ |

Solution:
|      | 0     | 1   |
|------|-------|-----|
| -> p | pq | p |
| pq | pqrs | pt |
| \*pqrs | pqrs | pt |
| \*pt | pq | p |

**2.3.4**
Give nondeterministic finite automata to accept the following languages. Try to take advantage of nondeterminism as much as possible.

a) The set of strings over alphabet {0,1,...,9} such that the final appeared before digit has digit has appeared before.
![[Pasted image 20221212003500.png]]

b) The set of strings over alphabet {0,1,...,9} such that the final not appeared before.
![[Pasted image 20221213053152.png]]

c) The set of strings of 0's and 1's such that there are two 0's separated by a number of positions that is a multiple of 4. Note that 0 is an allowable multiple of 4.
![[Pasted image 20221213054021.png]]

**2.3.6**
In the box on "Dead States and DFA's Missing Some Transitions," we claim that if N is an NFA that has at most one choice of state for any state and input symbol (i.e., d(q, a) never has size greater than 1), then the DFA D constructed from N by the subset construction has exactly the states and transitions of N plus transitions to a new dead state whenever N is missing a transition for a given state and input symbol. Prove this contention.

**2.4.1**
Design NFA's to recognize the following sets of strings.

a) `abc`, `abd`, and `aacd`. Assume the alphabet is {`a`, `b`, `c`, `d`}. 
<svg style="background-color: white;" width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="180.5" cy="90.5" rx="30" ry="30"/>
	<text x="170.5" y="96.5" font-family="Times New Roman" font-size="20">q1</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="270.5" cy="90.5" rx="30" ry="30"/>
	<text x="260.5" y="96.5" font-family="Times New Roman" font-size="20">q2</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="90.5" rx="30" ry="30"/>
	<text x="350.5" y="96.5" font-family="Times New Roman" font-size="20">q3</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="90.5" rx="24" ry="24"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="180.5" cy="210.5" rx="30" ry="30"/>
	<text x="170.5" y="216.5" font-family="Times New Roman" font-size="20">q4</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="270.5" cy="210.5" rx="30" ry="30"/>
	<text x="260.5" y="216.5" font-family="Times New Roman" font-size="20">q5</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="210.5" rx="30" ry="30"/>
	<text x="350.5" y="216.5" font-family="Times New Roman" font-size="20">q6</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="210.5" rx="24" ry="24"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="90.5" cy="90.5" rx="30" ry="30"/>
	<text x="80.5" y="96.5" font-family="Times New Roman" font-size="20">q0</text>
	<polygon stroke="black" stroke-width="1" points="210.5,90.5 240.5,90.5"/>
	<polygon fill="black" stroke-width="1" points="240.5,90.5 232.5,85.5 232.5,95.5"/>
	<text x="220.5" y="81.5" font-family="Times New Roman" font-size="20">b</text>
	<polygon stroke="black" stroke-width="1" points="300.5,90.5 330.5,90.5"/>
	<polygon fill="black" stroke-width="1" points="330.5,90.5 322.5,85.5 322.5,95.5"/>
	<text x="303.5" y="81.5" font-family="Times New Roman" font-size="20">c,d</text>
	<polygon stroke="black" stroke-width="1" points="180.5,120.5 180.5,180.5"/>
	<polygon fill="black" stroke-width="1" points="180.5,180.5 185.5,172.5 175.5,172.5"/>
	<text x="166.5" y="156.5" font-family="Times New Roman" font-size="20">a</text>
	<polygon stroke="black" stroke-width="1" points="210.5,210.5 240.5,210.5"/>
	<polygon fill="black" stroke-width="1" points="240.5,210.5 232.5,205.5 232.5,215.5"/>
	<text x="221.5" y="201.5" font-family="Times New Roman" font-size="20">c</text>
	<polygon stroke="black" stroke-width="1" points="300.5,210.5 330.5,210.5"/>
	<polygon fill="black" stroke-width="1" points="330.5,210.5 322.5,205.5 322.5,215.5"/>
	<text x="310.5" y="201.5" font-family="Times New Roman" font-size="20">d</text>
	<polygon stroke="black" stroke-width="1" points="120.5,90.5 150.5,90.5"/>
	<polygon fill="black" stroke-width="1" points="150.5,90.5 142.5,85.5 142.5,95.5"/>
	<text x="131.5" y="81.5" font-family="Times New Roman" font-size="20">a</text>
	<polygon stroke="black" stroke-width="1" points="28.5,90.5 60.5,90.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,90.5 52.5,85.5 52.5,95.5"/>
</svg>

b) `0101`, `101`, and `011`.
<svg style="background-color: white;" width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="90.5" cy="90.5" rx="30" ry="30"/>
	<text x="80.5" y="96.5" font-family="Times New Roman" font-size="20">q0</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="210.5" rx="30" ry="30"/>
	<text x="200.5" y="216.5" font-family="Times New Roman" font-size="20">q1</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="90.5" rx="30" ry="30"/>
	<text x="200.5" y="96.5" font-family="Times New Roman" font-size="20">q2</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="330.5" cy="90.5" rx="30" ry="30"/>
	<text x="320.5" y="96.5" font-family="Times New Roman" font-size="20">q3</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="450.5" cy="90.5" rx="30" ry="30"/>
	<text x="440.5" y="96.5" font-family="Times New Roman" font-size="20">q4</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="450.5" cy="90.5" rx="24" ry="24"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="330.5" cy="210.5" rx="30" ry="30"/>
	<text x="320.5" y="216.5" font-family="Times New Roman" font-size="20">q5</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="450.5" cy="210.5" rx="30" ry="30"/>
	<text x="440.5" y="216.5" font-family="Times New Roman" font-size="20">q6</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="450.5" cy="210.5" rx="24" ry="24"/>
	<polygon stroke="black" stroke-width="1" points="19.5,90.5 60.5,90.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,90.5 52.5,85.5 52.5,95.5"/>
	<polygon stroke="black" stroke-width="1" points="120.5,90.5 180.5,90.5"/>
	<polygon fill="black" stroke-width="1" points="180.5,90.5 172.5,85.5 172.5,95.5"/>
	<text x="145.5" y="81.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="210.5,180.5 210.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="210.5,120.5 205.5,128.5 215.5,128.5"/>
	<text x="215.5" y="156.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="111.713,111.713 189.287,189.287"/>
	<polygon fill="black" stroke-width="1" points="189.287,189.287 187.165,180.094 180.094,187.165"/>
	<text x="135.5" y="171.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="240.5,90.5 300.5,90.5"/>
	<polygon fill="black" stroke-width="1" points="300.5,90.5 292.5,85.5 292.5,95.5"/>
	<text x="265.5" y="81.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="360.5,90.5 420.5,90.5"/>
	<polygon fill="black" stroke-width="1" points="420.5,90.5 412.5,85.5 412.5,95.5"/>
	<text x="385.5" y="81.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="240.5,210.5 300.5,210.5"/>
	<polygon fill="black" stroke-width="1" points="300.5,210.5 292.5,205.5 292.5,215.5"/>
	<text x="265.5" y="201.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="360.5,210.5 420.5,210.5"/>
	<polygon fill="black" stroke-width="1" points="420.5,210.5 412.5,205.5 412.5,215.5"/>
	<text x="385.5" y="201.5" font-family="Times New Roman" font-size="20">1</text>
</svg>

c) `ab`, `bc`, and `ca`. Assume the alphabet is {a, b, c}.
<svg style="background-color: white;" width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="90.5" cy="150.5" rx="30" ry="30"/>
	<text x="80.5" y="156.5" font-family="Times New Roman" font-size="20">q0</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="60.5" rx="30" ry="30"/>
	<text x="200.5" y="66.5" font-family="Times New Roman" font-size="20">q1</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="150.5" rx="30" ry="30"/>
	<text x="200.5" y="156.5" font-family="Times New Roman" font-size="20">q2</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="240.5" rx="30" ry="30"/>
	<text x="200.5" y="246.5" font-family="Times New Roman" font-size="20">q3</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="330.5" cy="60.5" rx="30" ry="30"/>
	<text x="320.5" y="66.5" font-family="Times New Roman" font-size="20">q4</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="330.5" cy="60.5" rx="24" ry="24"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="330.5" cy="150.5" rx="30" ry="30"/>
	<text x="320.5" y="156.5" font-family="Times New Roman" font-size="20">q5</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="330.5" cy="150.5" rx="24" ry="24"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="330.5" cy="240.5" rx="30" ry="30"/>
	<text x="320.5" y="246.5" font-family="Times New Roman" font-size="20">q6</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="330.5" cy="240.5" rx="24" ry="24"/>
	<polygon stroke="black" stroke-width="1" points="15.5,150.5 60.5,150.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,150.5 52.5,145.5 52.5,155.5"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 90.56,120.659 A 83.99,83.99 0 0 1 181.836,52.202"/>
	<polygon fill="black" stroke-width="1" points="181.836,52.202 174.394,46.405 173.364,56.351"/>
	<text x="108.5" y="59.5" font-family="Times New Roman" font-size="20">a</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 182.625,251.115 A 80.682,80.682 0 0 1 88.115,180.232"/>
	<polygon fill="black" stroke-width="1" points="182.625,251.115 173.866,247.609 175.636,257.452"/>
	<text x="106.5" y="257.5" font-family="Times New Roman" font-size="20">c</text>
	<polygon stroke="black" stroke-width="1" points="120.5,150.5 180.5,150.5"/>
	<polygon fill="black" stroke-width="1" points="180.5,150.5 172.5,145.5 172.5,155.5"/>
	<text x="145.5" y="141.5" font-family="Times New Roman" font-size="20">b</text>
	<polygon stroke="black" stroke-width="1" points="240.5,60.5 300.5,60.5"/>
	<polygon fill="black" stroke-width="1" points="300.5,60.5 292.5,55.5 292.5,65.5"/>
	<text x="265.5" y="51.5" font-family="Times New Roman" font-size="20">b</text>
	<polygon stroke="black" stroke-width="1" points="240.5,150.5 300.5,150.5"/>
	<polygon fill="black" stroke-width="1" points="300.5,150.5 292.5,145.5 292.5,155.5"/>
	<text x="266.5" y="141.5" font-family="Times New Roman" font-size="20">c</text>
	<polygon stroke="black" stroke-width="1" points="240.5,240.5 300.5,240.5"/>
	<polygon fill="black" stroke-width="1" points="300.5,240.5 292.5,235.5 292.5,245.5"/>
	<text x="266.5" y="231.5" font-family="Times New Roman" font-size="20">a</text>
</svg>

**2.4.2**
Convert each of your NFA's from Exercise 2.4.1 to DFA's.

## ε-Non-Deterministic Finite Automata (εΝFA)
##### Homework Problems
**2.5.1**
![[Pasted image 20221213055941.png]]

a) Compute the ε-closure of each state.
ε-closure(p) = {p}
ε-closure(q) = {q, p}
ε-closure(r) = {r, q, p}

b) Give all the strings of length three or less accepted by the automaton.
aac, abb, bb, bba, c, caa, caa

c) Convert the automaton to a DFA.
|      | ε     | a  | b | c |  
|------|-------|-----|-----|-----|
| -> p | s | p | q | r |
| q | p | q | r | s |
| \*r | q | r | s | p |
| s | s | s | s | s |

**2.5.3**
Design ε-NFA's for the following languages. Try to use ε-transitions to simplify your design.

a) The set of strings consisting of zero or more a's followed by zero or more b's, followed by zero or more c's.
<svg style="background-color: white;" width="500" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="90.5" cy="120.5" rx="30" ry="30"/>
	<text x="80.5" y="126.5" font-family="Times New Roman" font-size="20">q0</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="240.5" cy="120.5" rx="30" ry="30"/>
	<text x="230.5" y="126.5" font-family="Times New Roman" font-size="20">q1</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="390.5" cy="120.5" rx="30" ry="30"/>
	<text x="380.5" y="126.5" font-family="Times New Roman" font-size="20">q2</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="390.5" cy="120.5" rx="24" ry="24"/>
	<polygon stroke="black" stroke-width="1" points="22.5,120.5 60.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,120.5 52.5,115.5 52.5,125.5"/>
	<polygon stroke="black" stroke-width="1" points="120.5,120.5 210.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="210.5,120.5 202.5,115.5 202.5,125.5"/>
	<text x="134.5" y="111.5" font-family="Times New Roman" font-size="20">Eplison</text>
	<polygon stroke="black" stroke-width="1" points="270.5,120.5 360.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="360.5,120.5 352.5,115.5 352.5,125.5"/>
	<text x="284.5" y="111.5" font-family="Times New Roman" font-size="20">Eplison</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 77.275,93.703 A 22.5,22.5 0 1 1 103.725,93.703"/>
	<text x="86.5" y="44.5" font-family="Times New Roman" font-size="20">a</text>
	<polygon fill="black" stroke-width="1" points="103.725,93.703 112.473,90.17 104.382,84.292"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 227.275,93.703 A 22.5,22.5 0 1 1 253.725,93.703"/>
	<text x="235.5" y="44.5" font-family="Times New Roman" font-size="20">b</text>
	<polygon fill="black" stroke-width="1" points="253.725,93.703 262.473,90.17 254.382,84.292"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 377.275,93.703 A 22.5,22.5 0 1 1 403.725,93.703"/>
	<text x="386.5" y="44.5" font-family="Times New Roman" font-size="20">c</text>
	<polygon fill="black" stroke-width="1" points="403.725,93.703 412.473,90.17 404.382,84.292"/>
</svg>

b) The set of strings that consist of either 01 repeated one or more times or 010 repeated one or more times.
<svg style="background-color: white;" width="650" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="90.5" cy="180.5" rx="30" ry="30"/>
	<text x="80.5" y="186.5" font-family="Times New Roman" font-size="20">q0</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="120.5" rx="30" ry="30"/>
	<text x="200.5" y="126.5" font-family="Times New Roman" font-size="20">q1</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="240.5" rx="30" ry="30"/>
	<text x="200.5" y="246.5" font-family="Times New Roman" font-size="20">q4</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="330.5" cy="120.5" rx="30" ry="30"/>
	<text x="320.5" y="126.5" font-family="Times New Roman" font-size="20">q2</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="450.5" cy="120.5" rx="30" ry="30"/>
	<text x="440.5" y="126.5" font-family="Times New Roman" font-size="20">q3</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="450.5" cy="120.5" rx="24" ry="24"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="330.5" cy="240.5" rx="30" ry="30"/>
	<text x="320.5" y="246.5" font-family="Times New Roman" font-size="20">q5</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="450.5" cy="240.5" rx="30" ry="30"/>
	<text x="440.5" y="246.5" font-family="Times New Roman" font-size="20">q6</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="570.5" cy="240.5" rx="30" ry="30"/>
	<text x="560.5" y="246.5" font-family="Times New Roman" font-size="20">q7</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="570.5" cy="240.5" rx="24" ry="24"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 107.611,155.964 A 113.882,113.882 0 0 1 180.604,119.468"/>
	<polygon fill="black" stroke-width="1" points="180.604,119.468 172.157,115.268 173.127,125.22"/>
	<text x="74.5" y="121.5" font-family="Times New Roman" font-size="20">Epsilon</text>
	<polygon stroke="black" stroke-width="1" points="24.5,180.5 60.5,180.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,180.5 52.5,175.5 52.5,185.5"/>
	<path stroke="black" stroke-width="1" fill="none" d="M 180.585,239.465 A 129.403,129.403 0 0 1 109.277,203.811"/>
	<polygon fill="black" stroke-width="1" points="180.585,239.465 173.425,233.322 171.926,243.209"/>
	<text x="76.5" y="248.5" font-family="Times New Roman" font-size="20">Epsilon</text>
	<polygon stroke="black" stroke-width="1" points="240.5,120.5 300.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="300.5,120.5 292.5,115.5 292.5,125.5"/>
	<text x="265.5" y="111.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="360.5,120.5 420.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="420.5,120.5 412.5,115.5 412.5,125.5"/>
	<text x="385.5" y="111.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="240.5,240.5 300.5,240.5"/>
	<polygon fill="black" stroke-width="1" points="300.5,240.5 292.5,235.5 292.5,245.5"/>
	<text x="265.5" y="231.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="360.5,240.5 420.5,240.5"/>
	<polygon fill="black" stroke-width="1" points="420.5,240.5 412.5,235.5 412.5,245.5"/>
	<text x="385.5" y="231.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="480.5,240.5 540.5,240.5"/>
	<polygon fill="black" stroke-width="1" points="540.5,240.5 532.5,235.5 532.5,245.5"/>
	<text x="505.5" y="231.5" font-family="Times New Roman" font-size="20">0</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 546.3,258.206 A 284.737,284.737 0 0 1 234.7,258.206"/>
	<polygon fill="black" stroke-width="1" points="234.7,258.206 238.661,266.769 244.132,258.399"/>
	<text x="359.5" y="325.5" font-family="Times New Roman" font-size="20">Epsilon</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 227.815,96.074 A 137.298,137.298 0 0 1 433.185,96.074"/>
	<polygon fill="black" stroke-width="1" points="227.815,96.074 236.865,93.41 229.386,86.772"/>
	<text x="299.5" y="40.5" font-family="Times New Roman" font-size="20">Epsilon</text>
</svg>

c) The set of strings of 0's and 1's such that at least one of the last ten positions is a 1.
<svg style="background-color: white;" width="450" height="1200" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="120.5" rx="30" ry="30"/>
	<text x="200.5" y="126.5" font-family="Times New Roman" font-size="20">q0</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="180.5" rx="30" ry="30"/>
	<text x="350.5" y="186.5" font-family="Times New Roman" font-size="20">q1</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="1140.5" rx="30" ry="30"/>
	<text x="195.5" y="1146.5" font-family="Times New Roman" font-size="20">q10</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="210.5" cy="1140.5" rx="24" ry="24"/>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="60.5" cy="180.5" rx="30" ry="30"/>
	<text x="45.5" y="186.5" font-family="Times New Roman" font-size="20">q11</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="60.5" cy="300.5" rx="30" ry="30"/>
	<text x="45.5" y="306.5" font-family="Times New Roman" font-size="20">q12</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="60.5" cy="420.5" rx="30" ry="30"/>
	<text x="45.5" y="426.5" font-family="Times New Roman" font-size="20">q13</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="60.5" cy="540.5" rx="30" ry="30"/>
	<text x="45.5" y="546.5" font-family="Times New Roman" font-size="20">q14</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="60.5" cy="660.5" rx="30" ry="30"/>
	<text x="45.5" y="666.5" font-family="Times New Roman" font-size="20">q15</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="60.5" cy="780.5" rx="30" ry="30"/>
	<text x="45.5" y="786.5" font-family="Times New Roman" font-size="20">q16</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="60.5" cy="900.5" rx="30" ry="30"/>
	<text x="45.5" y="906.5" font-family="Times New Roman" font-size="20">q17</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="60.5" cy="1020.5" rx="30" ry="30"/>
	<text x="45.5" y="1026.5" font-family="Times New Roman" font-size="20">q18</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="60.5" cy="1140.5" rx="30" ry="30"/>
	<text x="45.5" y="1146.5" font-family="Times New Roman" font-size="20">q19</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="300.5" rx="30" ry="30"/>
	<text x="350.5" y="306.5" font-family="Times New Roman" font-size="20">q2</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="420.5" rx="30" ry="30"/>
	<text x="350.5" y="426.5" font-family="Times New Roman" font-size="20">q3</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="540.5" rx="30" ry="30"/>
	<text x="350.5" y="546.5" font-family="Times New Roman" font-size="20">q4</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="660.5" rx="30" ry="30"/>
	<text x="350.5" y="666.5" font-family="Times New Roman" font-size="20">q5</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="780.5" rx="30" ry="30"/>
	<text x="350.5" y="786.5" font-family="Times New Roman" font-size="20">q6</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="900.5" rx="30" ry="30"/>
	<text x="350.5" y="906.5" font-family="Times New Roman" font-size="20">q7</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="1020.5" rx="30" ry="30"/>
	<text x="350.5" y="1026.5" font-family="Times New Roman" font-size="20">q8</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="1140.5" rx="30" ry="30"/>
	<text x="350.5" y="1146.5" font-family="Times New Roman" font-size="20">q9</text>
	<polygon stroke="black" stroke-width="1" points="210.5,184.5 210.5,150.5"/>
	<polygon fill="black" stroke-width="1" points="210.5,150.5 205.5,158.5 215.5,158.5"/>
	<polygon stroke="black" stroke-width="1" points="238.354,131.642 332.646,169.358"/>
	<polygon fill="black" stroke-width="1" points="332.646,169.358 327.075,161.745 323.361,171.03"/>
	<text x="290.5" y="141.5" font-family="Times New Roman" font-size="20">1</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 197.275,93.703 A 22.5,22.5 0 1 1 223.725,93.703"/>
	<text x="198.5" y="44.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon fill="black" stroke-width="1" points="223.725,93.703 232.473,90.17 224.382,84.292"/>
	<polygon stroke="black" stroke-width="1" points="182.646,131.642 88.354,169.358"/>
	<polygon fill="black" stroke-width="1" points="88.354,169.358 97.639,171.03 93.925,161.745"/>
	<text x="120.5" y="141.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="60.5,210.5 60.5,270.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,270.5 65.5,262.5 55.5,262.5"/>
	<text x="45.5" y="246.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="60.5,330.5 60.5,390.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,390.5 65.5,382.5 55.5,382.5"/>
	<text x="45.5" y="366.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="60.5,450.5 60.5,510.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,510.5 65.5,502.5 55.5,502.5"/>
	<text x="45.5" y="486.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="60.5,570.5 60.5,630.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,630.5 65.5,622.5 55.5,622.5"/>
	<text x="45.5" y="606.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="60.5,690.5 60.5,750.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,750.5 65.5,742.5 55.5,742.5"/>
	<text x="45.5" y="726.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="60.5,810.5 60.5,870.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,870.5 65.5,862.5 55.5,862.5"/>
	<text x="45.5" y="846.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="60.5,930.5 60.5,990.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,990.5 65.5,982.5 55.5,982.5"/>
	<text x="45.5" y="966.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="60.5,1050.5 60.5,1110.5"/>
	<polygon fill="black" stroke-width="1" points="60.5,1110.5 65.5,1102.5 55.5,1102.5"/>
	<text x="45.5" y="1086.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="90.5,1140.5 180.5,1140.5"/>
	<polygon fill="black" stroke-width="1" points="180.5,1140.5 172.5,1135.5 172.5,1145.5"/>
	<text x="130.5" y="1161.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="360.5,210.5 360.5,270.5"/>
	<polygon fill="black" stroke-width="1" points="360.5,270.5 365.5,262.5 355.5,262.5"/>
	<text x="365.5" y="246.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon stroke="black" stroke-width="1" points="360.5,330.5 360.5,390.5"/>
	<polygon fill="black" stroke-width="1" points="360.5,390.5 365.5,382.5 355.5,382.5"/>
	<text x="330.5" y="366.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon stroke="black" stroke-width="1" points="360.5,450.5 360.5,510.5"/>
	<polygon fill="black" stroke-width="1" points="360.5,510.5 365.5,502.5 355.5,502.5"/>
	<text x="330.5" y="486.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon stroke="black" stroke-width="1" points="360.5,570.5 360.5,630.5"/>
	<polygon fill="black" stroke-width="1" points="360.5,630.5 365.5,622.5 355.5,622.5"/>
	<text x="365.5" y="606.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon stroke="black" stroke-width="1" points="360.5,690.5 360.5,750.5"/>
	<polygon fill="black" stroke-width="1" points="360.5,750.5 365.5,742.5 355.5,742.5"/>
	<text x="365.5" y="726.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon stroke="black" stroke-width="1" points="360.5,810.5 360.5,870.5"/>
	<polygon fill="black" stroke-width="1" points="360.5,870.5 365.5,862.5 355.5,862.5"/>
	<text x="330.5" y="846.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon stroke="black" stroke-width="1" points="360.5,930.5 360.5,990.5"/>
	<polygon fill="black" stroke-width="1" points="360.5,990.5 365.5,982.5 355.5,982.5"/>
	<text x="365.5" y="966.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon stroke="black" stroke-width="1" points="360.5,1050.5 360.5,1110.5"/>
	<polygon fill="black" stroke-width="1" points="360.5,1110.5 365.5,1102.5 355.5,1102.5"/>
	<text x="330.5" y="1086.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon stroke="black" stroke-width="1" points="330.5,1140.5 240.5,1140.5"/>
	<polygon fill="black" stroke-width="1" points="240.5,1140.5 248.5,1145.5 248.5,1135.5"/>
	<text x="273.5" y="1131.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon stroke="black" stroke-width="1" points="88.354,191.642 332.646,289.358"/>
	<polygon fill="black" stroke-width="1" points="332.646,289.358 327.075,281.745 323.361,291.03"/>
	<text x="215.5" y="231.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="88.354,311.642 332.646,409.358"/>
	<polygon fill="black" stroke-width="1" points="332.646,409.358 327.075,401.745 323.361,411.03"/>
	<text x="215.5" y="351.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="88.354,431.642 332.646,529.358"/>
	<polygon fill="black" stroke-width="1" points="332.646,529.358 327.075,521.745 323.361,531.03"/>
	<text x="215.5" y="471.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="88.354,551.642 332.646,649.358"/>
	<polygon fill="black" stroke-width="1" points="332.646,649.358 327.075,641.745 323.361,651.03"/>
	<text x="215.5" y="591.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="88.354,671.642 332.646,769.358"/>
	<polygon fill="black" stroke-width="1" points="332.646,769.358 327.075,761.745 323.361,771.03"/>
	<text x="215.5" y="711.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="88.354,791.642 332.646,889.358"/>
	<polygon fill="black" stroke-width="1" points="332.646,889.358 327.075,881.745 323.361,891.03"/>
	<text x="215.5" y="831.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="88.354,911.642 332.646,1009.358"/>
	<polygon fill="black" stroke-width="1" points="332.646,1009.358 327.075,1001.745 323.361,1011.03"/>
	<text x="215.5" y="951.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon stroke="black" stroke-width="1" points="88.354,1031.642 332.646,1129.358"/>
	<polygon fill="black" stroke-width="1" points="332.646,1129.358 327.075,1121.745 323.361,1131.03"/>
	<text x="215.5" y="1071.5" font-family="Times New Roman" font-size="20">1</text>
</svg>

## Regular Expressions

Regular expressions or regex, is a syntax that defined a language using formal lanaguage theory in regards. 

A language is regular, if and only if, some regular expression describes it. For a language to be regular a finite automata has to recognize it.

Rules for regular expressions

1) Any terminal symbol ie 
2) The Union of two regular expressions is also a regular expression
3) The concatenation of two regular expressions is a regular expression
4) The iteration (closure) of a regular expression is also a regular expression
5) The regular expression over Σ are precisely those obtained recursively by the application of the above rules once or several times.

Identities of regular expressions
1) φ + R = R
2) φR + Rφ = φ
3) εR = Rε = R
4) ε* = ε and φ* = ε
5) R + R = R
6) R\* R\* = R\* 
7) RR* = R\*R
8) (R*)* = R*
9) ε + RR* = ε + R\*R = R*
10) (PQ)*P = P(QP)*
11) (P + Q)* = (P* Q*)* = (P* + Q*)*
12) (P+Q) R = PR + QR and R(P + Q) = RP + RQ

##### Homework
**3.1.1**
Write regular expressions for the following languages:

a) The set of strings over alphabet {`a`, `b`, `c`} containing at least one `a` and at least one `b`.
$$
R = (a+b+c)^* (a(a+b+c)^*b + b(a+b+c)^*a)(a+b+c)^*
$$
b) The set of strings of `0`'s and `1`'s whose tenth symbol from the right end is `1`.
$$
R = (0+1)^* 1(0+1)^9
$$
c) The set of strings of `0`'s and `1`'s with at most one pair of consecutive `1`'s.
$$
R = (0+10)^*(11+ε)(0+10)^*
$$
**3.1.2**
Write regular expressions for the following languages:

a) The set of all strings o f `0`'s and `1`'s such that every pair of adjacent `0`'s appears before any pair of adjacent `1`'s.
$$
???
$$
b) The set of strings of `0`'s and `1`'s whose number of `0`'s is divisible by five.
$$
R = (1^*01^*01^*01^*01^*0)^* +1^*
$$
**3.1.4**
Give English descriptions of the languages of the following regular expressions.

a) (1+ε) (00\*1) \*0\*   
The lanugage that contains no two consectuive `1`'s.

b) (0\*1\*)\*000(0 + 1)\*
The language that contains all three consectuive `0`'s. 

c) (0 + 10)\*1\*
The language that contains no two consecutive `1`'s, except for in the end of the string.

**3.1.5**
In Example 3.1 we pointed out that φ is one of two languages whose closure is finite. What is the other?

ε* = ε

explaination: empty set and empty string are two different languages.

**3.2.1**
![[Pasted image 20221214050726.png]]

a)
$$
\begin{align*}
R^{(0)}_{11} = 1 + ε \\
R^{(0)}_{12} = 0 \\
R^{(0)}_{13} = \emptyset \\
R^{(0)}_{21} = 1 \\
R^{(0)}_{22} = ε \\
R^{(0)}_{23} = 0 \\
R^{(0)}_{31} = \emptyset \\
R^{(0)}_{32} = 1 \\
R^{(0)}_{33} = 0 + ε \\
\end{align*}
$$
b)
$$
\begin{align}
R^{(1)}_{11} = R^{(0)}_{11}+R^{(0)}_{11}(R^{(0)}_{11})^*R^{(0)}_{11}\\
= (1+ε)+(1+ε)(1+ε)^*(1+ε)\\
= 1^* \\\\
R^{(1)}_{12} = R^{(0)}_{11}+R^{(0)}_{11}(R^{(0)}_{11})^*R^{(0)}_{11}\\\\
R^{(1)}_{13} = R^{(0)}_{11}+R^{(0)}_{11}(R^{(0)}_{11})^*R^{(0)}_{11}\\\\
R^{(1)}_{21} = R^{(0)}_{11}+R^{(0)}_{11}(R^{(0)}_{11})^*R^{(0)}_{11}\\\\
R^{(1)}_{22} = R^{(0)}_{11}+R^{(0)}_{11}(R^{(0)}_{11})^*R^{(0)}_{11}\\\\
R^{(1)}_{23} = R^{(0)}_{11}+R^{(0)}_{11}(R^{(0)}_{11})^*R^{(0)}_{11}\\\\
R^{(1)}_{31} = R^{(0)}_{11}+R^{(0)}_{11}(R^{(0)}_{11})^*R^{(0)}_{11}\\\\
R^{(1)}_{32} = R^{(0)}_{11}+R^{(0)}_{11}(R^{(0)}_{11})^*R^{(0)}_{11}\\\\
R^{(1)}_{33} = R^{(0)}_{11}+R^{(0)}_{11}(R^{(0)}_{11})^*R^{(0)}_{11}\\\\
\end{align}
$$
c)
d)
e)

**3.2.2**
**3.2.3**
**3.2.4**
Convert the following regular expressions to NFA’s with ε-transitions.

a) 01*
<svg style="background-color: white;" width="450" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="120.5" cy="120.5" rx="30" ry="30"/>
	<text x="110.5" y="126.5" font-family="Times New Roman" font-size="20">q0</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="270.5" cy="120.5" rx="30" ry="30"/>
	<text x="260.5" y="126.5" font-family="Times New Roman" font-size="20">q1</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="270.5" cy="120.5" rx="24" ry="24"/>
	<polygon stroke="black" stroke-width="1" points="49.5,120.5 90.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="90.5,120.5 82.5,115.5 82.5,125.5"/>
	<polygon stroke="black" stroke-width="1" points="150.5,120.5 240.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="240.5,120.5 232.5,115.5 232.5,125.5"/>
	<text x="190.5" y="111.5" font-family="Times New Roman" font-size="20">0</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 257.275,93.703 A 22.5,22.5 0 1 1 283.725,93.703"/>
	<text x="265.5" y="44.5" font-family="Times New Roman" font-size="20">1</text>
	<polygon fill="black" stroke-width="1" points="283.725,93.703 292.473,90.17 284.382,84.292"/>
</svg>

b) (0 + 1)01
<svg style="background-color: white;" width="550" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="120.5" cy="120.5" rx="30" ry="30"/>
	<text x="110.5" y="126.5" font-family="Times New Roman" font-size="20">q0</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="240.5" cy="120.5" rx="30" ry="30"/>
	<text x="230.5" y="126.5" font-family="Times New Roman" font-size="20">q1</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="120.5" rx="30" ry="30"/>
	<text x="350.5" y="126.5" font-family="Times New Roman" font-size="20">q2</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="480.5" cy="120.5" rx="30" ry="30"/>
	<text x="470.5" y="126.5" font-family="Times New Roman" font-size="20">q3</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="480.5" cy="120.5" rx="24" ry="24"/>
	<polygon stroke="black" stroke-width="1" points="42.5,120.5 90.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="90.5,120.5 82.5,115.5 82.5,125.5"/>
	<polygon stroke="black" stroke-width="1" points="150.5,120.5 210.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="210.5,120.5 202.5,115.5 202.5,125.5"/>
	<text x="168.5" y="111.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon stroke="black" stroke-width="1" points="270.5,120.5 330.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="330.5,120.5 322.5,115.5 322.5,125.5"/>
	<text x="295.5" y="111.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="390.5,120.5 450.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="450.5,120.5 442.5,115.5 442.5,125.5"/>
	<text x="415.5" y="111.5" font-family="Times New Roman" font-size="20">1</text>
</svg>


c) 00(0 + 1)*
<svg style="background-color: white;" width="550" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<ellipse stroke="black" stroke-width="1" fill="none" cx="120.5" cy="120.5" rx="30" ry="30"/>
	<text x="110.5" y="126.5" font-family="Times New Roman" font-size="20">q0</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="240.5" cy="120.5" rx="30" ry="30"/>
	<text x="230.5" y="126.5" font-family="Times New Roman" font-size="20">q1</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="120.5" rx="30" ry="30"/>
	<text x="350.5" y="126.5" font-family="Times New Roman" font-size="20">q2</text>
	<ellipse stroke="black" stroke-width="1" fill="none" cx="360.5" cy="120.5" rx="24" ry="24"/>
	<polygon stroke="black" stroke-width="1" points="48.5,120.5 90.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="90.5,120.5 82.5,115.5 82.5,125.5"/>
	<polygon stroke="black" stroke-width="1" points="150.5,120.5 210.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="210.5,120.5 202.5,115.5 202.5,125.5"/>
	<text x="175.5" y="111.5" font-family="Times New Roman" font-size="20">0</text>
	<polygon stroke="black" stroke-width="1" points="270.5,120.5 330.5,120.5"/>
	<polygon fill="black" stroke-width="1" points="330.5,120.5 322.5,115.5 322.5,125.5"/>
	<text x="295.5" y="111.5" font-family="Times New Roman" font-size="20">0</text>
	<path stroke="black" stroke-width="1" fill="none" d="M 347.275,93.703 A 22.5,22.5 0 1 1 373.725,93.703"/>
	<text x="348.5" y="44.5" font-family="Times New Roman" font-size="20">0,1</text>
	<polygon fill="black" stroke-width="1" points="373.725,93.703 382.473,90.17 374.382,84.292"/>
</svg>

**3.4.2**
Prove or disprove each of the following statements about regular expressions.  

a) (R + S)* = R* + S*

Let: R = {a} and S = {b}
Assume: (R + S)* = R* + S*
ab =/= aa
The statement is false.

b) (RS + R)* R = R(SR + R)*
c) (RS + R)* RS = (RR* S)*
d) (R+S)\*S = (R\*S)*
e) S(RSS)\*R = RR*S(RR\*S)\*

**3.4.3**
In Example 3.6, we developed the regular expression 
$$
\begin{align*}
(0 + 1)^*1(0 + 1) + (0 + 1)^*1(0 + 1)(0 + 1)
\end{align*}
$$
Use the distributive laws to develop two different, simpler, equivalent expressions.

Solution: $$
\begin{align*}
(0 + 1)^*1(0 + 1)(ε + 0 + 1)
\end{align*}
$$
**3.4.4**
Exercise 3.4.4: At the beginning of Section 3.4.6, we gave part of a proof that (L\*M\*)* = (L+M)\*. Complete the proof by showing that strings in (L\*M*)* are also in (L+M)\*.

## Properties of Regular Expressions
There are properties of regular expressions. Write more.

### Minimizing Finite Automata
Steps:
1. FInd all input equalilants
2. 

### Myhile Nerode Theorem
The myhill nerode theorem (table filling method) is a way to minimize DFAs.

Steps:
1) Draw the table for all pairs of states (P,Q)
2) Mark all pairs where P is a final state and Q is not a final state. (Think of XOR operations).
3) If there are any unmarked pairs (P,Q) such that [δ(P, x), δ(Q, x)] is marked, then mark [P,Q] where x is an input symbol from Σ. Repeat until no more marked pairs can be made.
4) Combine all the unmarked pairs and make them a single state in the minimized DFA.

### Pumping Lemma
The pumping lemma is a proof for proving that a language is not regular. A language is not regular if it can not be represented by a finite automata ( DFA, NFA, and εNFA). It does **NOT** prove a language is regular.

The proof is done by proof by contradiction following the steps:
1. Declare statement you are trying to proof to be true, in this case assume A to be regular
2. It has the 

**4.1.1**
![[Pasted image 20221215000850.png]]
b)



c)
f)

**4.1.2**
a)
d)
f)

**4.1.3**

**4.2.1**
**4.2.3**
**4.2.3**
**4.2.7**
**4.2.13**

**4.3.1**
**4.3.3**
**4.3.4**
**4.3.5**

**4.4.1**
**4.4.2**

## Context Free Grammars and Languages
A context-free grammar (CFG) is a formal grammar in which every production rule is of the form `V -> w`, where `V` is a single nonterminal symbol, and `w` is a string of terminals and/or nonterminals. In other words, the left-hand side of each production rule must consist of a single nonterminal symbol, and the right-hand side can consist of any number of terminals and/or nonterminals.

Context-free grammars are important because they can be used to describe the structure of many different types of languages, including programming languages, natural languages, and markup languages. They are called "context-free" because the production rules do not depend on the context in which the symbols appear. This means that the same production rule can be applied to any instance of the nonterminal symbol, regardless of its position within the overall string being generated.

For example, consider the following context-free grammar:

```
S -> NP VP 
NP -> Det N 
VP -> V NP 
Det -> "a" | "the" 
N -> "man" | "woman" | "dog" 
V -> "sees" | "likes"
```

This grammar specifies that a sentence (`S`) consists of a noun phrase (`NP`) followed by a verb phrase (`VP`). A noun phrase consists of a determiner (`Det`) followed by a noun (`N`), and a verb phrase consists of a verb (`V`) followed by a noun phrase. This grammar generates sentences such as "the man sees a woman" and "the dog likes the woman".

#### Definition
Context free gramars are four tuples described as G = {V, Σ, S, P} where
	V is a finite set of varaibles or non-terminal symbols
	Σ is the finite set of terminal symbols
	S is the start symbol
	P is the proudction rule

#### Production Rule
A production rule is a variable that goes into another. The starting rule for the production is always `S`.

#### Chomsky Normal Forms of CFGs
In Chomsky Normal Form (CNF) we have a restriction on the length of RHS. Which is, elements in RHS should either be two variables or a Terminal. A CFG is in CNF if the productions are in the following form:
$$
\begin{align}
A\rightarrow a \\
A\rightarrow BC
\end{align}
$$
where `A`, `B` and `C` are non-terminals and a is a terminal.

To convert a context-free grammar to Chomsky normal form, you can follow these steps: Remove any rules that have a variable on the right-hand side and replace them with two rules that have a terminal on the right-hand side. For example, if you have a rule `A -> BC`, you can replace it with two rules: `A -> BX` and `X -> C`. Remove any rules that have two terminals on the right-hand side and replace them with a single rule that has a variable on the right-hand side. For example, if you have a rule `A -> ab`, you can replace it with a rule `A -> X` and a new rule `X -> ab`. Repeat steps 1 and 2 until all of the rules in the grammar have exactly two symbols on the right-hand side, and one of those symbols is a terminal. 

For example, consider the following context-free grammar: 
```
S -> AB | BC 
A -> BA | a 
B -> CC | b 
C -> AB | a 
```
To convert this grammar to Chomsky normal form, we can follow these steps: 
1) Remove the rule S -> BC and replace it with two rules: S -> BX and X -> C. 
2) Remove the rule A -> BA and replace it with two rules: A -> BX and X -> A. 
3) Remove the rule B -> CC and replace it with two rules: B -> CX and X -> C. 
4) Remove the rule C -> AB and replace it with two rules: C -> AX and X -> B. 

After applying these steps, the grammar is now in Chomsky normal form:
```
S -> BX | AX 
A -> BX | a 
B -> CX | b 
C -> AX | a 
X -> C | A 
```

Note that in this example, we had to introduce a new variable X in order to convert the grammar to Chomsky normal form. This is a common technique when converting a context-free grammar to Chomsky normal form.

##### Homework
**5.1.1**
a) The set {0^n 1^n | n >= 1} that is, the set of all strings of one or more 0's followed by an equal numb er of 1's.

S -> 0S1
A -> ε

b) The set {a^ib^jc^k | i =/= j or j =/= k} that is, the set of strings of a's followed by b's followed by c's, such that there are either a different number of a's and b's or a different number of b's and c's, or both.

P -> ε

**5.1.2**
**5.1.3**
**5.1.4**

**5.2.1**
**5.2.2**

**5.3.1** Prove that if a string of parentheses is balanced, in the sense given in Example 5.19, then it is generated by the grammar B -> BB | (B) | ε 

*Hint*: Perform an induction on the length of the string.
**5.3.2**

**5.4.1**
**5.4.2**
**5.4.7**

## Pushdown Automata
A pushdown automaton (PDA) is a type of abstract machine used in computer science and mathematical logic to model computation. It is similar to a finite state machine, but it can also use a stack to store and retrieve data. This additional memory allows a pushdown automaton to recognize a larger class of languages than a finite state machine.

A pushdown automaton consists of a finite set of states, a stack, a set of input symbols, and a set of production rules. The automaton reads input symbols one at a time, and it uses the production rules to update its current state and the contents of the stack. The automaton accepts an input string if it reaches an accept state after reading the entire input.

Pushdown automata are important in computational theory because they can be used to recognize a subclass of context-free languages known as deterministic context-free languages. These are the languages that can be recognized by a pushdown automaton with a single stack and no nondeterminism.

A PDA has three components:
- Input tape
- control unit
- finite stack

Stack has two operatations: 
- `push` - a new symbol is added to the top
- `pop` - the top symbol is read and removed

![[Pasted image 20220411192346.png]]

##### Definition
A PDA is a 7 tuple as follows:
$$
A =(Q, Σ, S, δ, q_0, I, F)
$$
**Q** is the finite number of states
**∑** is input alphabet
**S** is stack symbols
**δ** is the transition function: Q × (∑ ∪ {ε}) × S × Q × S*
**q<sub>0</sub>** is the initial state (q0 ∈ Q)
**I** is the initial stack top symbol (I ∈ S)
**F** is a set of accepting states (F ∈ Q)

##### Instantaneous Description (ID)
Instantaneous Description (ID) is an informal notation of how a PDA “computes” a input string and make a decision that string is accepted or rejected. 

A ID is a triple (q, w, α), where:
1. q is the current state.   
2. w is the remaining input.   
3. α is the stack contents, top at the left.

##### Turnstile notation
⊢ sign is called a “turnstile notation” and represents   
one move.   
⊢* sign represents a sequence of moves.   
Eg- (p, b, T) ⊢ (q, w, α)   
This implies that while taking a transition from state p to state q, the input symbol ‘b’ is consumed, and the top of the stack ‘T’ is replaced by a new string ‘α’

For example, consider the following pushdown automaton:
```
States: q0, q1, q2, q3, q4 
Stack: Z0 
Input symbols: 0, 1 
Production rules:   
	q0, 0, Z0 -> q0, Z0   
	q0, 1, Z0 -> q1, Z1   
	q1, 0, Z1 -> q1, Z1   
	q1, 1, Z1 -> q2, Z1Z1   
	q2, 0, Z1Z1 -> q2, Z1Z1   
	q2, 1, Z1Z1 -> q3, Z1Z1Z1   
	q3, 0, Z1Z1Z1 -> q3, Z1Z1Z1   
	q3, 1, Z1Z1Z1 -> q4, Z1Z1Z1Z1   
	q4, 0, Z1Z1Z1Z1 -> q4, Z1Z1Z1Z1   
	q4, 1, Z1Z1Z1Z1 -> q4, Z1Z1Z1Z1
```

This pushdown automaton recognizes the language of all strings consisting of three or more consecutive 1s. It does this by starting in state `q0` with an empty stack, `Z0`. When it reads a `0`, it stays in the same state and does not change the stack. When it reads a `1`, it pushes a `Z1` onto the stack. When it reads a second `1`, it pushes a second `Z1` onto the stack, and so on. If it reads three consecutive `1`s, it enters state `q3`, and if it reads a fourth `1`, it enters state `q4` and accepts the input.

##### Homework Problems
**6.1.1** 
Suppose the PDA P = ({q,p},{0,1},{Z<sub>0</sub>,X}, δ, q, Z<sub>0</sub>,{p}) has the following transition function:

1. δ(q, 0, Z_0)={(q, XZ_0)}
2. δ(q, 0, X)={(q, XX)}
3. δ(q, 1, X)={(q, X)}
4. δ(q, ε, X)={(p, ε)}
5. δ( p, ε, X)={(p, ε)}
6.  δ(p,1,X)={(p,XX)}
7. δ(p,1,Z_0)={(p, ε)}

Starting from the inital ID (q, w, Z<sub>0</sub>), show all the reachable ID's when the input *w* is:

a) 01
b) 0011
c) 010

**6.2.1**
Design a PDA to accept each of the following languages. You may accept either by final state or by empty stack, whichever is more convenient.

a) {0<sup>n</sup>1<sup>n</sup> | n ≥  1}
b)  
c) 
**6.2.2**
**6.2.5**
**6.2.7**

**6.3.1**
**6.3.2**
**6.3.3**
**6.3.6**

### The Pumping Lemma for Context Free Languages
The pumping lemma for context-free languages is a theoretical result that can be used to show that certain languages are not context-free. It states that, for any context-free language `L`, there exists a constant `p` (the "pumping length") such that all strings `w` in `L` with length greater than or equal to `p` can be written as `w = xyz`, where `|xy| <= p`, `|y| > 0`, and `xy^iz` is in `L` for all non-negative integers `i`.

In other words, the pumping lemma says that, for any context-free language `L`, there is a specific length `p` such that any string `w` in `L` that is at least as long as `p` can be divided into three parts `x`, `y`, and `z` in such a way that repeating the middle part `y` zero or more times will always result in a string that is also in `L`.

To use the pumping lemma to show that a language `L` is not context-free, we must assume that `L` is context-free and try to find a string `w` in `L` that cannot be written in the form `w = xyz` as required by the pumping lemma. If we can do this, it means that `L` cannot be a context-free language, because it violates the conditions of the pumping lemma.

For example, consider the language `L = {0^n 1^n | n >= 0}`, which consists of all strings of 0s and 1s such that the number of 0s is equal to the number of 1s. We can use the pumping lemma to show that this language is not context-free as follows:

1.  Assume that `L` is context-free and that the pumping length `p` exists.
2.  Let `w = 0^p 1^p` be a string in `L` with length at least `p`. By the pumping lemma, `w` can be written as `w = xyz`, where `|xy| <= p`, `|y| > 0`, and `xy^iz` is in `L` for all non-negative integers `i`.
3.  Let `i = 2`. Then `xy^iz = xyyz = 0^p y 1^p`. Since `|y| > 0`, the string `0^p y 1^p` must have more 0s than 1s, so it cannot be in `L`. This contradicts the assumption that `L` is context-free, so `L` must not be context-free.

In this example, we showed that the language `L = {0^n 1^n | n >= 0}` is not context-free by assuming that it is context-free and constructing a string that cannot be written in the form required by the pumping lemma. Because this contradicts our assumption, we can conclude that `L` is not context-free.

### Closure Properties of Context Free Languages
The closure properties of context-free languages refer to the ways in which context-free languages can be combined to form new languages. These properties are important because they provide a way to reason about the expressive power of context-free languages and to determine whether a given language can be recognized by a pushdown automaton.

There are three closure properties that are commonly considered for context-free languages:

1.  Closure under union: The class of context-free languages is closed under union, which means that if `L1` and `L2` are context-free languages, then their union `L1 U L2` is also a context-free language. In other words, we can form a new context-free language by taking the set of all strings that are in either `L1` or `L2`.

2.  Closure under concatenation: The class of context-free languages is not closed under concatenation, which means that there exist context-free languages that cannot be formed by concatenating two context-free languages. In other words, not all languages that can be formed by concatenating two context-free languages are necessarily context-free.

3.  Closure under Kleene star: The class of context-free languages is closed under Kleene star, which means that if `L` is a context-free language, then its Kleene star `L*` is also a context-free language. In other words, we can form a new context-free language by taking the set of all strings that can be formed by concatenating zero or more copies of a string in `L`.

For example, suppose we have the following two context-free languages:

-   `L1 = {a^n b^n | n >= 0}`: This language consists of all strings of `a`s and `b`s such that the number of `a`s is equal to the number of `b`s.
-   `L2 = {a^n | n >= 0}`: This language consists of all strings of `a`s.

Then `L1 U L2 = {a^n b^n | n >= 0} U {a^n | n >= 0}` is a context-free language, because it is the union of two context-free languages. However, `L1 L2 = {a^n b^n a^m | n >= 0, m >= 0}` is not a context-free language, because it cannot be formed by concatenating two context-free languages. Finally, `L1* = {a^n b^n | n >= 0}*` is a context-free language, because it is the Kleene star of a context-free language.

**7.1.1**
**7.1.2**
**7.1.3**
**7.1.6**

**7.2.1**
**7.2.2**

**7.3.1**
**7.3.2**
**7.3.5**
**7.3.6**

## Τuring Machines

**8.1.1**

## Appendix
**Alphabet**: finite set of characters
**Determinism**
**Language**
**Machine**
**Non-Determinism**
**States**
**Symbol**
**Transition Function**

**Tuple**: In mathematics, a tuple is a finite ordered list of elements. An n-tuple is a sequence of n elements, where n is a non-negative integer. There is only one 0-tuple, referred to as the empty tuple. An n-tuple is defined inductively using the construction of an ordered pair.Í