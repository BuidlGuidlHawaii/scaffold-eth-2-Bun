const path = require("path");

const buildEslintCommand = (files, cwd) => {
  const relativePaths = files.map((f) =>
    path.relative(cwd, f).split(path.sep).join("/"),
  );
  // Use PowerShell commands for Windows
  return `powershell -Command "Set-Location '${cwd}'; bun lint --fix ${relativePaths.map((f) => `'${f}'`).join(" ")}"`;
};

module.exports = {
  "packages/nextjs/**/*.{ts,tsx}": (filenames) => [
    `prettier --write ${filenames.map((f) => `'${f}'`).join(" ")}`,
    buildEslintCommand(
      filenames,
      path.resolve(process.cwd(), "packages/nextjs"),
    ),
  ],
  "packages/hardhat/**/*.{ts,tsx}": (filenames) => [
    `prettier --write ${filenames.map((f) => `'${f}'`).join(" ")}`,
    buildEslintCommand(
      filenames,
      path.resolve(process.cwd(), "packages/hardhat"),
    ),
  ],
  "**/*.{md,json}": (filenames) =>
    `prettier --write ${filenames.map((f) => `'${f}'`).join(" ")}`,
};
