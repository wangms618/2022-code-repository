var numTrees = function (n) {
  let dp = []
  let m = 0
  dp[0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(i);
      console.log(i - j, j - 1);
      console.log(dp[i - j], dp[j - 1]);
    }
  }
  // console.log(dp[3]);
};

numTrees(2)