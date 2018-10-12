# Assignment

The following example dispays the example of the transitive dependencies between letters of the alphabet. If A depends on B and B depends on C, then A also depends on C.

If this is input:

A B C
B C E
C G
D A F
E F
F H

Then this is output

A BCEFGH
B CEFGH
C G
D ABCEFGH
E FH
D H
