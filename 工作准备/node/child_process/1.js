const {
    spawn
} = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

// 默认情况下，会在父 Node.js 进程和衍生的子进程之间建立 stdin、stdout 和 stderr 的管道。
// 这些管道的容量有限（且特定于平台）。
// 如果子进程在没有捕获输出的情况下写入标准输出超过该限制，则子进程会阻塞等待管道缓冲区接受更多数据。
//  这与 shell 中管道的行为相同。 如果不消费输出，则使用 { stdio: 'ignore' } 选项。