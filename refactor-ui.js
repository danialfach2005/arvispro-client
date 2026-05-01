const fs = require("fs");
const path = require("path");

const uiDir = path.join(__dirname, "src", "components", "ui");
const stylesDir = path.join(uiDir, "styles");

// Buat folder styles jika belum ada
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
}

const files = fs.readdirSync(uiDir);

for (const file of files) {
  if (file.endsWith(".module.css")) {
    // Pindahkan file CSS ke folder styles
    const oldPath = path.join(uiDir, file);
    const newPath = path.join(stylesDir, file);
    fs.renameSync(oldPath, newPath);
    console.log(`Moved: ${file} -> styles/${file}`);
  } else if (file.endsWith(".tsx")) {
    // Update path import di file tsx
    const tsxPath = path.join(uiDir, file);
    let content = fs.readFileSync(tsxPath, "utf-8");
    const cssFileName = file.replace(".tsx", ".module.css");
    
    // Replace import lokal agar mengarah ke folder styles
    content = content.replace(
      `import styles from "./${cssFileName}";`,
      `import styles from "./styles/${cssFileName}";`
    );
    
    fs.writeFileSync(tsxPath, content, "utf-8");
    console.log(`Updated import in: ${file}`);
  }
}

console.log("✅ Berhasil memisahkan file .tsx dan .module.css!");
