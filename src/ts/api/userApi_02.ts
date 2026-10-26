//②api/userApi_02.ts
//JSONPlaceholderのAPIを利用する

import type { UserData } from '../types/userData.js';

export async function createUserData(): Promise<UserData> {
  //1:JsonPlaceholderのAPIのデータを取得
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  //2:エラー処理
  if (!response.ok) {
    throw new Error('APIの取得に失敗');
  }

  //3:responseをjsonに変換して、変数dataに格納
  const data: UserData = await response.json();

  //4:dataを返す
  return data;
}
