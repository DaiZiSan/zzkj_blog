var posts=["2024/11/07/hello-world/","2024/11/10/秋思/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };