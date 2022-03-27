import { MyStruct } from './myStruct';
import data from './text';

const text = "Privet-TS!";
(async () => {
  const test: MyStruct = {
    text: text,
    num: 3
  };
  console.log(test, data);
})();