let isBadVersion = 5, n = 4


const solution = function(isBadVersion) {
  return function(n) {
    /*
    # Description for array v:
    #   - v[0] = left pointer
    #   - v[1] = n the versions of the application and also the left pointer
    #   - v[2] = middle element of the versions (v[1] - v[0]) / 2)
    */
    let v = [1, n, 0]
    while (v[0] < v[1]) {
      v[2] = v[0] + Math.floor((v[1] - v[0]) / 2)
      if (isBadVersion(v[2])) {
        v[1] = v[2]
      } else {
        v[0] = v[2] + 1
      }
    }
    return v[0]
  };
};

console.log(solution(isBadVersion))