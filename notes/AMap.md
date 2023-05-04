# 基础类
1. 经纬度`AMap.LngLat`
2. 像素点`AMap.Pixel`
3. 像素尺寸`AMap.Size`
4. 经纬度矩形边界`AMap.Bounds`

# 地图状态
根据覆盖物范围调整视野

# 自定义地图
在高德地图自定义地图平台取得地图样式ID，设置自定义地图

# 默认点标记
一次性添加多个`Marker`，只需要将每个`Marker`示例放入一个数组`Array`中

# 折现的显示与隐藏
```
// 显示一条已创建的 polyline
polyline.show();

// 隐藏一条已创建的 polyline
polyline.hide();
```

# 信息窗体的打开与关闭
```
// 在指定位置打开已创建的信息窗体
var position = new AMap.LngLat(116.39, 39.9);
infoWindow.open(map, position);

// 关闭信息窗体
infoWindow.close();
```

# 地图和覆盖物事件
对于Map、覆盖物、叠加层对象的鼠标、触屏绑定事件回调时，会返回`MapsEvent`对象。该对象包含触发的对象目标、触发所在经纬度等信息：
```
map.on('click', function(ev) {
  // 触发事件的对象
  var target = ev.target;
  
  // 触发事件的地理坐标，AMap.LngLat 类型
  var lnglat = ev.lnglat;
  
  // 触发事件的像素坐标，AMap.Pixel 类型
  var pixel = ev.pixel;
  
  // 触发事件类型
  var type = ev.type;
});
```

# 路线规划