var posts=["2024/04/14/hello-world/","2024/04/15/test/","2024/04/15/测试发布博文与标签/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };