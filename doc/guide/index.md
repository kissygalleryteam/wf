
## 介绍

Wf是瀑布流布局组件，原waterfall的加强版，使用简单，支持1.4.x版的kissy。

请勿使用旧版的waterfall组件。

最新支持kissy5。

## 初始化组件

```html
<div id='J_Wf' style="position: relative;">
    <div class="ks-waterfall"><img src="http://img03.taobaocdn.com/imgextra/i3/180084418/TB2YaeFapXXXXbwXXXXXXXXXXXX_!!180084418-0-big.jpg" width="275" height="288">
    </div>
    <div class="ks-waterfall"><img src="http://img01.taobaocdn.com/imgextra/i1/2132010817/TB2utKHapXXXXaGXXXXXXXXXXXX_!!2132010817-0-big.jpg" width="275" height="239">
    </div>
    <div class="ks-waterfall"><img src="http://img01.taobaocdn.com/imgextra/i1/52234185/TB2s5OyapXXXXbqXpXXXXXXXXXX_!!52234185-0-big.jpg" width="275" height="249">
    </div>
</div>
```

```javascript
    require('kg/wf/5.0.0/index', function (Wf) {
        new Wf({
            container: "#J_Wf",    //节点容器
            minColCount: 2,             //最小列数
            colWidth: 290               //每列的宽度
        });
    });
```