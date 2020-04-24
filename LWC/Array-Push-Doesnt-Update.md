# Array.push doesn't refresh the array variable in LWC

This doesn't rebind the data:
```Javascript
this.availableFunds.push({ label: element.Name, value: element.Id });
```
This does
```Javascript
this.availableFunds = [...this.availableFunds, { label: element.Name, value: element.Id }];
```