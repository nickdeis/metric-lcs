[![Build Status](https://github.com/nickdeis/metric-lcs/actions/workflows/main.yml/badge.svg)](https://github.com/nickdeis/metric-lcs/actions/workflows/main.yml/badge.svg)

# metric-lcs

Zero dependency [Metric Longest Common Subsequence](http://heim.ifi.uio.no/~danielry/StringMetric.pdf) implementation in js.

## Usage

`npm i metric-lcs`

```typescript
import metriclcs from "metric-lcs";
console.log(metriclcs("ABDEF", "ABDIF")); //.8
```

or

```javascript
const metriclcs = require("metric-lcs");
console.log(metriclcs("ABDEF", "ABDIF")); //.8
```

## Use case

Longest Common Subsequence is used with `diff`, so the metric version of it is suitable for comparing larger strings or for comparing likely subsets of strings since it ignores edit distance and lowers the cost of insertion.

## Thanks

Special thanks to [tdebatty](https://github.com/tdebatty) for [java-string-similarity](https://github.com/tdebatty/java-string-similarity), which I used as a reference implementation.
