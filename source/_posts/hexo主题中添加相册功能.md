---
title: hexo主题中添加相册功能
date: 2020-03-10 20:32:46
tags: hexo
categories: hexo
cover: https://tva3.sinaimg.cn/large/005DJQmOgy1gcp4k92h66j32yo1o01ky.jpg
---

# 新建一个页面
> hexo new page "photo"
- 执行上面命令，会在source文件夹中生成photo文件夹，打开photo文件夹中的index.md文件，修改内容如下：
```java
---
title: photo
date: 2020-03-10 20:32:46
tags: 
---
```
# 使用markdown语法填写照片，如下：
```java
{% gallery %}
![](https://gratisography.com/wp-content/uploads/2019/10/gratisography-scary-pumpkin-hand-900x600.jpg)
![](https://gratisography.com/wp-content/uploads/2019/10/gratisography-fresh-fish-dinner-900x600.jpg)
![](https://gratisography.com/wp-content/uploads/2019/10/gratisography-mountain-cloud-landscape-900x600.jpg)
![](https://picjumbo.com/wp-content/uploads/iphone-free-stock-photos-2210x3315.jpg)
![](https://picjumbo.com/wp-content/uploads/young-millennial-girl-drinking-lemonade-and-overlooking-the-city-2210x1473.jpg)
![](https://picjumbo.com/wp-content/uploads/modern-graphic-designer-essentials_free_stock_photos_picjumbo_HNCK4919-2210x1474.jpg)
{% endgallery %}
```