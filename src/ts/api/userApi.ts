//②api/userApi.ts
//types/userData.tsから「UserData型」をインポート。

import type { UserData } from '../types/userData.js';

// ■「createUserData()関数」を作成し、「戻り値はUserData型のオブジェクトを返してください。」
//‼️➡️今回は実際のAPI通信は行わず、「下記のオブジェクト({}の部分)」を直接返すものとします。
export function createUserData(): UserData {
  return {
    id: 1,
    name: 'Apple',
    email: 'apple@example.com',
  };
}
