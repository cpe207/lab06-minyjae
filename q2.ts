// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
interface userIdentity {
  name : string;
}

interface TODO {
  owner: string;
  title: string;
  completed: boolean;
}

const getTodo = async (todoId: number) => {
  try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
      const todo = res.data; // รับ data จาก todo มา ซึ่งมี userId อยู่ในนั้นด้วย


      const ownerTODO = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
      const owner : userIdentity = ownerTODO.data; // จึงเอา userId จาก todo มาหาข้อมูลคน แล้ว set owner ให้เป็น interface ตาม q1 พร้อมดึง data ออกมา


      const output : TODO = {
        owner: owner.name, // ดึงเอาเฉพาะ name มาโชว์
        title: todo.title,
        completed: todo.completed,
      };
      return output;
  }catch (err) {
      return "INVALID TODO ID"
  }

};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
