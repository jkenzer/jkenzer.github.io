# Array.push doesn't refresh the array variable in LWC

This doesn't rebind the data:
```javascript
this.availableFunds.push({ label: element.Name, value: element.Id });
```
This does
```javascript
this.availableFunds = [...this.availableFunds, { label: element.Name, value: element.Id }];
```