// ssr.mjs
import { exec } from "child_process";
import chalk from "chalk";

console.log(chalk.magentaBright("🔁 Restarting SSR server..."));

exec("npm run ssr", (err, stdout, stderr) =>
{
  if (err)
  {
    console.error(chalk.red("❌ Server error:\n"), stderr);
    return;
  }
  console.log(chalk.yellow("🚀 SSR server running"));
});
