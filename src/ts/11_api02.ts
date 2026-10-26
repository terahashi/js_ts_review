//③ts/11_api02.ts
//api/userApi_02.tsからcreateUserData()関数をインポート

import { createUserData } from './api/userApi_02.js';

export async function run() {
  const userData = await createUserData();
  //⬆︎「await」を忘れずに。
  //awaitを付ける理由は、createUserData()はasync関数なので、戻り値はUserDataそのものではなく、Promise<UserData>になるから。

  console.log(userData.id);
  console.log(userData.name);
  console.log(userData.email);
}
