import { createUserData } from './api/userApi.js';

export function run() {
  // 関数を実行して、ユーザー情報を取得
  const userData = createUserData();

  // コンソールに出力
  console.log(userData.id);
  console.log(userData.name);
  console.log(userData.email);
}
