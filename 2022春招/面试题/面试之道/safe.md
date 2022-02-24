# XSS攻击
XSS 全称是 Cross Site Scripting(即跨站脚本)，为了和 CSS 区分，故叫它XSS。XSS 攻击是指浏览器中执行恶意脚本(无论是跨域还是同域)，从而拿到用户的信息并进行操作。
持久型：写数据库
非持久型： http://www.test.com?name=<script>alett('诱导连接')</script>
## 如何防范




# CSRF
CSRF(Cross-site request forgery), 即**跨站请求伪造**，指的是黑客诱导用户点击链接，打开黑客的网站，然后黑客利用用户目前的登录状态发起跨站请求。
防御：
1. 用post接口
2. get请求不对数据进行修改
3. 不要让第三方网站访问到用户cookie
4. 阻止第三方网站请求接口
5. 请求时附带验证信息，比如token