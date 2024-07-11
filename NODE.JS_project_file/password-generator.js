import generator from "generate-password";
var password = generator.generate({
  length: 10,
  numbers: false,
  uppercase: true,
  symbols: true,
  strict: true,
});

// 'uEyMTw32v9'
console.log(password);
