// const axios = require("axios");
import axios from "axios";

  /* assign interface/type to the function definition properly */
   interface userIdentity {
     name : string;
   }

const getUser = async (userId: number) => {
  try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`); // สร้าง res มารับ api จากเว็บตาม userId
      const user = res.data; // สร้าง user มารับ resposed พร้อม data ออกมา
      const output : userIdentity = user.name; // สร้าง output ที่ output เป็น interface userIdentity มารับ name
      return output;
    }catch (err) {
    return "INVALID USER ID";
  };
}

//test case
const input1 = 1;
const input2 = 100;

//run
getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

// module.exports = getUser;
export default getUser;
