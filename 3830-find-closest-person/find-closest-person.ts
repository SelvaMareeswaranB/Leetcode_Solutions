function findClosest(x: number, y: number, z: number): number {
  let result : number;
  let xdiff = Math.abs(x-z)
  let ydiff = Math.abs(y-z)
  xdiff === ydiff ? result = 0 : xdiff>ydiff ? result =2 : result =1
  return result
};