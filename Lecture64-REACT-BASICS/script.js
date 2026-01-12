import { sub, add } from "./calculator.js";
import print from "./print.js";

print("addition", add(2, 3));
print("subtraction", sub(2, 3));

axios
  .get("https://picsum.photos/seed/picsum/200/300")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
