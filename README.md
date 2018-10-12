# General notes

The following example dispays the transitive dependencies between letters of the alphabet. If A depends on B and B depends on C, then A also depends on C.

If this is input:

A BC  
B CE  
C G  
D AF  
E F  
F H  

Then this is output:

A BCEFGH  
B CEFGH  
C G  
D ABCEFGH  
E FH  
D H  

## Assessment

* Retrieve the inputs from the backend (implement C# controller that will generate random set of inputs)
* Display the inputs nicely in the frontend
* Calculate and display results in the frontend

## Criteria

* Code quality and structure - how easy to read and understand code
* Algorithm implementation
* Bugs

## Bonus

* Unit tests
