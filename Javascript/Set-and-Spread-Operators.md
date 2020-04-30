# Using the Set and Spread operators

## Set
I'm familiar with the idea of creating a set through programming Apex for Salesforce. A set is a unique list of unordered elements. A set can be an easy way of deduplicating an Array. However the returned value of a Set is a set, not an array. But you can easy convert it back to an array.

```javascript
let myList = ['one','two','one','three','one'];
let mySet = new Set(myList);
// returns: Set(3) {"one", "two", "three"}
let myNewArray = [...mySet];
// returns: (3) ["one", "two", "three"]
```

Those three ... in the last line are the spread operator.

## Spread
The spread operator spreads the values contained by the variable after the three dots into the array. In the example above, since a Set is an iterable, it spreads the values into the new array. You can also use this on an array.

```javascript
let myList = ['one','two','one','three','one'];
let myList2 = ['red','blue','green'];
let myNewArray = [...myList,...myList2];
// returns: (8) ["one", "two", "one", "three", "one", "red", "blue", "green"]
```

I used this method in the TIL [Array Push Doesn't Update](https://jkenzer.github.io/LWC/Array-Push-Doesnt-Update.html). In this use case, I used it to tell the Lightning Web Component framework that the availableFunds var data had updated. Basically I reinitiated it with current values, plus the new value I was attempting to "push" onto the array.

```Javascript
this.availableFunds = [...this.availableFunds, { label: element.Name, value: element.Id }];
```