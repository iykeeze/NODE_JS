// read_file.js
import fs from "fs";

fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("file content:", data);
  }
});
