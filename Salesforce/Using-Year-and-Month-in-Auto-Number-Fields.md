# Using Additional Merge Fields in Auto Number Fields

I'm not sure if this qualifies as a TIL or just a "why didn't I pay more attention to that when I learned it"? When you are creating a new custom object in Salesforce and you create your name field as an Auto Number, you can actually merge in a few more fields besides the auto incrementing integer.

Specifically, you can add the following:

* {YY} or {YYYY} - This will merge in either the two digit or four digit year
* {MM} - This will merge in the two digit month
* {DD} - This will merge in the two digit day

Typically I have done something like:

* G-{0000}

But now I think it will be much more user friendly to consistently use:

* G-{YY}-{MM}-{0000}

This will make the number a little more meaningful and provide a little context to users when they see the number. Obviously you can pull reports by month and year without doing this, but it's an additional touch to show some thought went into it.