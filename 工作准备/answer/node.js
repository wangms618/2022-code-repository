import {
    readdir,
    stat
} from 'node:fs/promises';
import {
    extname
} from "node:path"
const fileList = {}
// 传入文件列表和初始目录
const search = async (files, basePath) => {
    await files.forEach(async item => {
        const data = await stat(`${basePath}/${item}`)
        // 如果是目录，继续遍历
        if (data.isDirectory()) {
            const path = `${basePath}/${item}`
            const file = await readdir(path)
            await search(file, path)
        }
        // // 如果是文件,取到文件的后缀查看
        if (data.isFile()) {
            const type = extname(item)
            if (fileList[type]) {
                fileList[type] = ++fileList[type]
            } else {
                fileList[type] = 1
            }
        }
    })
}


// 如果一个文件有"."说明不是目录
const searchFileType = async () => {
    try {
        const files = await readdir("./")
        // 等search执行完就可以得到fileList
        await search(files, "./")
        setTimeout(() => {
            console.log(fileList);
        }, 300)

    } catch (err) {
        console.error(err);
    }
}

searchFileType()