export function run() {
  const user = {
    name: 'Taro',
    age: 25,
    isAdmin: false,
  };

  type User = typeof user;
  // typeof は「変数やオブジェクトなど、値から型を取得する」

  type UserKey = keyof User;
  // keyof は「型（User型）からプロパティ名を取得する」
  // つまり、型UserKey は「‘name’ | ‘age’ | ‘isAdmin’」というユニオン型になり、
  // この3つのプロパティ名のいずれかを指定できる型です。

  function getUserValue(key: UserKey) {
    return user[key];
  }

  console.log(getUserValue('name')); //Taro
  console.log(getUserValue('age')); //25
  console.log(getUserValue('isAdmin')); //false

  // 下記はUser型に存在しない「プロパティ名のemail型」なのでエラーになる
  // console.log(getUserValue('email'));
}
