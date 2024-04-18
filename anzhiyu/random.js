var posts=["2024/04/18/dfs/","2024/04/14/hello-world/","2024/04/15/set集合/","2024/04/17/字符串String和StringBuilder/","2024/04/16/快速幂/","2024/04/15/测试发布博文与标签/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };