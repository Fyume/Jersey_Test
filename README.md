# JerseyTest

![例子相关图片](https://github.com/Fyume/Jersey_Test/tree/master/src/main/webapp/img/readme/1.jpg)

官网上的例子：

https://jersey.github.io/documentation/latest/getting-started.html#exploring-jersey-examples

------------

1.假若用grizzly测试rest的接口 直接运行Main类 即刻访问接口

2.假若用tomcat 则按照里面的配置（web.xml）。其中，RestApplication类除了加载资源文件（rest包）之外多注册一个日志以便调试，所以web.xml的配置稍微有点改动：

由：

```java
<init-param>
  <param-name>jersey.config.server.provider.packages</param-name>
  <param-value>zhku.jsj141.rest</param-value>
</init-param>
```

变成

```java
<init-param>
  <param-name>javax.ws.rs.Application</param-name>
  <param-value>zhku.jsj141.config.RestApplication</param-value>
</init-param>
```

访问就localhost:8080/项目名/web.xml中配置的urlpattern/@Path的值/（其他如参数等等）