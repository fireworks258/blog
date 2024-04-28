var posts=["2024/04/25/Stack/","2024/04/19/dosbox基础指令/","2024/04/18/dfs/","2024/04/14/hello-world/","2024/04/15/set集合/","2024/04/15/二分/","2024/04/17/字符串String和StringBuilder/","2024/04/27/前缀和/","2024/04/21/并查集/","2024/04/16/快速幂/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };