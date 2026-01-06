const x = 10;
console.log(x);
// console.log(r);//reference error
// consoole.log(r); syntax error

function abc() {
  consoole.log(r);
}
/* execution context


1.js engine(v8) finds the script tag
-if anythng written there it reads
- else if file is attached it read
2.after read it converts it into the preedfined strucure(AST)
AST-Abstract Syntax Tree
3. along with AST checks for syntax  errors and
- if found then code does not execute
- if not found then move ahead;
4.Enters ececution context
- 2 phases -> i)creation phase ii) execution phase
- creation phase -> memory is allocated/created
- execution phase -> code executes
5.EC has 2 types
 i. Global Eecution Context(GEC)
 ii.Function Eecution Context(FEC)
 iii.Eval Execution Context(EEC) (not imp)
     eval used for evaluation
*/

/* Call Stack 
  
 call stack

  |    |
  |EC2 | EC1,EC2 are stack frames - instead of functions contexts 
  |EC1 | are pushed and popped from call stack
  |GEC |
  |____|


types of EC
1.GEC -> memory allocation,function declaration
  -> variable are created and undefined is assigned
  -> function declaration are copy pasted into memory as it is
  -> global object(window) is created
  -> this is decided @this time

*/
var a = 20;
function multiply() {
  var x = 50;
  var y = 20;
  return x * y;
}
console.log(a);

//GEC-> |creation phase |
//  variale enviornment
/* phase 1 -> memory creation 
 a: undefined
multiply(){....}

phase2
execution phase
 first log a
*/

console.log(multiply());
/* function execution context
first phase
  -> x:undefined
  -> y:undedined
second phase
x:50
y:20
 calculate 50*20=1000
 then send to parent and then it logs 1000

 */

/* when funcrttion exectution happpens inside gec we have
  another fEC is created and it has above 2 phases


function abc(x,y,z){
console.log(arguments)
}
abc(1,2,3);

arguments is  special type 
it exist only in normal functions not in arrow functions
 
*/

/* EC in case of let const */
let a;
const b=5;
a=7;
var c = 10;
console.log(a+b+c);

/* call stack
  GEC->              |a:uninitiated| it is a state 
                     |b:uninitiated| 
                     |c:undefined|


    until we reach let a , a is TDZ
    when we reach let a , it becomes undefined
 */

