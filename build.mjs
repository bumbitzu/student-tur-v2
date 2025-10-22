// build.mjs
import { exec } from "child_process";
import chalk from "chalk";

console.log(chalk.blueBright("🔍 Watching frontend (src/)..."));

exec("npm run build", (err, stdout, stderr) =>
{
  if (err)
  {
    console.error(chalk.red("❌ Build failed:\n"), stderr);
    return;
  }
  console.log(chalk.green("✅ Build complete"));
});
