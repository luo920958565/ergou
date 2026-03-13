// 这是 OpenClaw 自动生成的第一个示例代码
console.log("🎉 我的第一个 OpenClaw 项目上线啦！");
console.log("仓库地址：https://github.com/luo920958565/ergou");

// 简单的加法函数
function add(a, b) {
  return a + b;
}

console.log("1 + 2 =", add(1, 2));

// 更多示例功能
console.log("\n🚀 更多功能演示：");

// 字符串处理
function greet(name) {
  return `你好，${name}！欢迎使用OpenClaw自动生成的项目。`;
}
console.log(greet("开发者"));

// 数组操作
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(`数组 ${numbers} 的总和是：${sum}`);

// 当前时间
const now = new Date();
console.log(`当前时间：${now.toLocaleString()}`);

// 项目信息
const projectInfo = {
  name: "ergou",
  author: "luo920958565",
  generatedBy: "OpenClaw Auto Developer",
  timestamp: now.toISOString(),
  version: "1.0.0"
};

console.log("\n📋 项目信息：");
console.log(JSON.stringify(projectInfo, null, 2));

// 运行说明
console.log("\n📖 运行说明：");
console.log("1. 安装Node.js：https://nodejs.org/");
console.log("2. 运行命令：node app.js");
console.log("3. 查看输出结果");

// 退出提示
console.log("\n✅ 代码执行完成！");
console.log("💡 提示：你可以修改这个文件，添加更多功能。");
console.log("🔗 GitHub仓库：https://github.com/luo920958565/ergou");