# UI QUIZ QUESTIONS

## Describe the difference between `<script>`, `<script async>` and `<script defer>`

`<script>` - include javascript on an web page. HTML parsing in blocked and JS is fetched and executed immedietly

`<script async>` - JS is fetched parrallel to HTML parsing. Not executed in the order it is on the HTML page but can potentially be executed before HTML parsing completes.

`<script defer>` - JS is fetched parrallel to HTML but executed after HTML parsing is complete. if multiple each defered script is executed in order that it appears.

Use async for scripts that is not critical to initial rendering and do not depend on each other. User defer for scripts that depend on each other.

## Explain how prototypal inheritance works - this is covered in hard parts v2

All JavaScript objects have a `__proto__` property with the exception of objects created with Object.create(null), that is a reference to another object, which is called the object's "prototype". When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's `__proto__`, and the `__proto__`'s `__proto__` and so on, until it finds the property defined on one of the `__proto__`s or until it reaches the end of the prototype chain.

We need to call Object.create in one of following ways for the prototype methods to be inherited:
Object.create(Parent.prototype)
Object.create(new Parent(null))
Object.create(objLiteral)

## What's the difference between a variable that is: `null`, `undefined` or undeclared?

undeclared variables - created when you assign a value to an identifier that is not previously created using var, let or const. Throws a ReferenceError

undefined variables - been declared but not assigned a value. use strict equality to check for undefined

null variables - explicitly assigned the null value and are defined.
