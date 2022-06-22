## package-lock.json
里面存储的是锁定好的版本，别人下载也是下载原来的依赖版本 


# --save 
--save -S 开发使用
--save-dev -D 上线使用

## 命令
npm list 当前目录下的安装包 
npm i xxx@1.1.1 下载1.1.1的版本
npm outdated 是否过时

## nrm 
nrm是npm的镜像管理工具，使用它进行npm源的切换
- nrm ls 查看可选的源
- nrm use taobao 切换到淘宝源

## yarn
- yarn add [package]
- yarn add [package]@[version]
- yarn add [package] --dev
- yarn upgrade [package]@[version]
- yarn remove [package]