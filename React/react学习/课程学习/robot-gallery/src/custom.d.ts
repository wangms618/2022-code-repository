// 定义声明
// 只要在import .css的文件时，都会遵循以下的约定
declare module "*.css" {
    const css: { [key: string]: string };
    export default css;
}
