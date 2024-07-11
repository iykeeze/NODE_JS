// create_file.js
import fs from "fs";

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log('File "welcome.txt" has been created successfully.');
  }
});
