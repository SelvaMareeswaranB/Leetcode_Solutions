/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let mergeIntervals = [];
  
    for (let i = 0; i < intervals.length; i++) {
      let start = intervals[i][0];
      let end = intervals[i][1];
      let length = mergeIntervals.length;
  
      if (length === 0 || mergeIntervals[length - 1][1] < start) {
        mergeIntervals.push(intervals[i]);
      } else {
        mergeIntervals[length - 1][1] = Math.max(mergeIntervals[length - 1][1], end);
      }
    }
    return mergeIntervals;
  };
  