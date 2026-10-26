import './style.css';

document.querySelector('#app').innerHTML = `
 <section id="center">
    <div class="center" style="margin-bottom: 40px;">
      <h1>JavaScript / TypeScript復習</h1>
    </div>

    <div id="javascript" class="center-area">
      <h2 style="margin-bottom: 40px;">--JavaScript復習</h2>

      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題1</h4>
       <p class="textbox">
        下記の配列から最大値を求めてください。<br>
        ※ Math.max()は使わずにやってみましょう。
      </p>
       <pre class="code-block"><code>const numbers = [12, 5, 23, 8, 17];</code></pre>
        <button data-file="./js/01_array.js">コンソールで実行</button>
      </div>


     <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題2</h4>
       <p class="textbox">
       この配列から、偶数だけを取り出してください。
      </p>
      <pre class="code-block"><code>const numList = [1, 4, 7, 10, 13, 16];</code></pre>
      <button data-file="./js/02_filter.js">コンソールで実行</button>
      </div>


      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題3</h4>
       <p class="textbox">
      filter応用「商品検索」<br>
      productsから、商品名に const keyword = "a" が含まれている商品だけを取り出してください。<br>
      ・大文字・小文字は区別しないものとします。<br><br>
      </p>

<pre class="code-block"><code>const products = [
  { name: 'Apple', price: 150 },
  { name: 'Banana', price: 100 },
  { name: 'Orange', price: 120 },
  { name: 'lemon', price: 120 },
];

const keyword = "a";</code></pre>

      <button data-file="./js/03_filter02.js">コンソールで実行</button>
      </div>



      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題4</h4>
       <p class="textbox">
      mapメソッドを使って、配列の中の数値を全て2倍にしてください。<br>
      </p>
      <pre class="code-block"><code>const numbers = [1, 2, 3, 4, 5];</code></pre>
      <button data-file="./js/04_map.js">コンソールで実行</button>
      </div>



 <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題5</h4>
       <p class="textbox">
      filter() を使って、次の結果になるようにしてください。<br>
      コンソール結果➡️[100, 150, 200]
      </p>
      <pre class="code-block"><code>const prices = [50, 100, 150, 80, 200];
// ここにコードを書く</code></pre>
      <button data-file="./js/05_filter03.js">コンソールで実行</button>
      </div>




 <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題6</h4>
       <p class="textbox">
     問題： 次の配列から、在庫がある商品だけを取り出し、商品名だけの配列を作ってコンソールに表示してください。<br>
      </p>
      <pre class="code-block"><code>export function run() {
  const products = [
    { name: 'Apple', inStock: true },
    { name: 'Banana', inStock: false },
    { name: 'Orange', inStock: true },
    { name: 'Grape', inStock: false },
  ];

  // ここにコードを書いてください
}</code></pre>
      <button data-file="./js/06_filter_map.js">コンソールで実行</button>
      </div>







 <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題7</h4>
       <p class="textbox">
      次の配列にある商品の価格をすべて合計し、コンソールに表示してください。<br>
      </p>
      <pre class="code-block"><code>export function run() {
  const prices = [150, 200, 300, 100];

  // ここにコードを書いてください

}, 0);

console.log(result);
}</code></pre>
      <button data-file="./js/07_reduce.js">コンソールで実行</button>
      </div>






 <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題8</h4>
       <p class="textbox">
      reduce応用問題。(fillterとmapでも解答可能です)<br>
      ・応用例:データのフィルタリングと変換<br>
①特定の条件（ここでは価格が1000円以上の商品）を満たす商品を抽出し、<br>
②抽出された商品に対して税込み価格（10%を加算）を計算します。<br>
③最終的に「新しい配列」を作成し【抽出した商品】をコンソールに表示してください。<br>
      </p>
      <pre class="code-block"><code>const products = [
    { name: 'コーヒーメーカー', category: '家電', price: 3000 },
    { name: 'スニーカー', category: 'ファッション', price: 8000 },
    { name: 'ノートブック', category: '文房具', price: 500 },
    { name: 'タブレット', category: '家電', price: 40000 },
    { name: 'Tシャツ', category: 'ファッション', price: 1500 },
];

//⬇︎コンソール結果の解答
console.log(result);
[
  {
    name: 'コーヒーメーカー',
    category: '家電',
    price: 3000,
    priceWithTax: 3300,
  },
  {
    name: 'スニーカー',
    category: 'ファッション',
    price: 8000,
    priceWithTax: 8800
  },
  {
    name: 'タブレット',
    category: '家電',
    price: 40000,
    priceWithTax: 44000,
  },
  {
    name: 'Tシャツ',
    category: 'ファッション',
    price: 1500,
    priceWithTax: 1650
  }
]

}</code></pre>
      <button data-file="./js/08_reducer02.js">コンソールで実行</button>
      </div>





    </div>




    <div id="typescript" class="center-area">
      <h2 style="margin-bottom: 40px;">--TypeScript復習</h2>

      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題1</h4>
       <p class="textbox">
       1:typeで型定義を作成してください。<br>
       2:次の変数の「???の箇所」に型を定義してください。<br>
      </p>

<pre class="code-block"><code>const product: ??? = {
  name: "Apple",
  price: 150,
  inStock: true,
};</code></pre>

        <button data-file="./ts/01_type.ts">コンソールで実行</button>
        <p class="textbox">‼️yarn tsc --noEmit で型定義が正しいか確認。</p>
        <p class="textbox">‼️型定義のチェックは実際のファイルを参照する ➡️ ts/01_type.ts</p>
      </div>



      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題2</h4>
       <p class="textbox">
      次のオブジェクトに「interface」を使って型を定義してください。<br>
      </p>
      <p class="textbox">
        ■条件<br>
        ・title は文字列<br>
        ・completed は真偽値<br><br>
      </p>

<pre class="code-block"><code>interface Task {
  // ここに型を定義
}

const task: ??? = {
  title: "買い物",
  completed: false,
};</code></pre>

      <button data-file="./ts/02_interface.ts">コンソールで実行</button>
       <p class="textbox">‼️型定義のチェックは実際のファイルを参照する</p>
      </div>


      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題3</h4>
       <p class="textbox">
      関数の引数と戻り値の型<br>
      次のコードの ??? を埋めてください。
      </p>
      <p class="textbox">
        ■条件<br>
        * price は数値<br>
        * quantity は数値<br>
        * 関数の戻り値も数値<br><br>
      </p>

<pre class="code-block"><code>function calculateTotal(
  price: ???,
  quantity: ???
): ??? {
  return price * quantity;
}

console.log(calculateTotal(150, 3)); //結果は450</code></pre>

      <button data-file="./ts/02_interface.ts">コンソールで実行</button>
       <p class="textbox">‼️型定義のチェックは実際のファイルを参照する</p>
      </div>
    </div>





     <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題4</h4>
       <p class="textbox">
      次のコードを完成させてください。
      </p>

<pre class="code-block"><code>type Goods = {
  name: ???;
  price: ???;
};

const product: Goods = {
  name: "Apple",
  price: 150,
};

function getProductName(product: ???): ??? {
  return product.name;
}

console.log(getProductName(product));
// Apple</code></pre>

      <button data-file="./ts/04_object_function.ts">コンソールで実行</button>
       <p class="textbox">‼️型定義のチェックは実際のファイルを参照する</p>
      </div>
    </div>








     <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題5</h4>
       <p class="textbox">
       ・配列の型定義<br>
      次のコードを完成させてください。
      </p>

<pre class="code-block"><code>const prices: ??? = [150, 200, 300];

function calculateTotal(prices: ???): number {
  return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal(prices));
// 650</code></pre>

      <button data-file="./ts/05_array.ts">コンソールで実行</button>
       <p class="textbox">‼️型定義のチェックは実際のファイルを参照する</p>
      </div>
    </div>





     <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題6</h4>
       <p class="textbox">
       ・interfaceと配列の組み合わせ<br>
      次のコードを完成させてください。
      </p>

<pre class="code-block"><code>interface Goods {
  name: ???;
  price: ???;
}

const products: ??? = [
  { name: "Apple", price: 150 },
  { name: "Banana", price: 100 },
  { name: "Orange", price: 120 },
];

function getProductNames(products: ???): ??? {
  return products.map((product) => product);
}

console.log(getProductNames(products));
// 表示結果が[{ name: 'Apple', price: 150 }, { name: 'Banana', price: 100 }, { name: 'Orange', price: 120 }]</code></pre>

      <button data-file="./ts/06_interface_array.ts">コンソールで実行</button>
       <p class="textbox">‼️型定義のチェックは実際のファイルを参照する</p>
      </div>
    </div>










     <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題7</h4>
       <p class="textbox">
       ・ジェネリクスを使って「渡された値をそのまま返す関数identity」を作成してください。<br>
      ※ジェネリクスは「引数の型と、戻り値の型などの関係を保ちながら」さまざまな型に対応できるようにする仕組み。
      </p>

<pre class="code-block"><code>
//ジェネリクスを使った関数の定義
function identity ??? (value: ???): ??? {
 return value;
}

//ここにコード

console.log(fruit); // "Apple"
console.log(price); // 150

</code></pre>

      <button data-file="./ts/07_generics_basic.ts">コンソールで実行</button>
       <p class="textbox">‼️型定義のチェックは実際のファイルを参照する</p>
      </div>
    </div>










     <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題8</h4>
       <p class="textbox">「配列の最初の要素を取得する関数」を作成してください。<br><br>
要件<br>
1. ジェネリクス <T> を使用する。<br>
2. 引数 items は型 T[] とする。<br>
3. 戻り値の型は T | undefined とする。<br>
4. ‼️配列の最初の要素を返す。<br>
5. 元の配列を変更しない。<br>
6. 文字列の配列と数値の配列の両方で使用できること。<br>
</p>
<pre class="code-block"><code>export function run() {
function getFirst???(items: ???): ??? | ??? {
  // ここに処理を書く

}
console.log(getFirst ??? (['Apple', 'Orange'])); // コンソール結果"Apple"
console.log(getFirst ??? ([100, 200, 300])); // コンソール結果100
console.log(getFirst ??? ([])); // コンソール結果undefined
}
</code></pre>

      <button data-file="./ts/08_generics02.ts">コンソールで実行</button>
       <p class="textbox">‼️型定義のチェックは実際のファイルを参照する</p>
      </div>
    </div>











     <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題9</h4>
       <p class="textbox">2つの値を配列にまとめる関数を作成してください。<br><br>
要件<br>
1. ジェネリクス <T> を使用する。<br>
2. 引数 first と second は、どちらも型 T とする。<br>
3. 戻り値の型は T[] とする。<br>
4. ‼️受け取った2つの値を配列にして返す。<br>
5. 文字列と数値の両方で使用できること。<br>
</p>
<pre class="code-block"><code>function makeArray ??? (first:  ??? , second:  ??? ,): ??? {
  // ここに処理を書く
}

console.log(makeArray ??? ('Apple', 'Orange')); // コンソール結果は配列['Apple', 'Orange']
console.log(makeArray ??? (10, 20)); // コンソール結果は配列[10, 20]
</code></pre>

      <button data-file="./ts/09_generics03.ts">コンソールで実行</button>
       <p class="textbox">‼️型定義のチェックは実際のファイルを参照する</p>
      </div>
    </div>








     <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題10</h4>
       <p class="textbox">「ユーザー情報の型、UserData」を定義し、別ファイルからその型を利用してください。<br>
       ■要件<br>
① types/userData.ts<br>
* UserData 型を定義する。<br>
* id は number 型。<br>
* name は string 型。<br>
* email は string 型。<br>
* 別のファイルから利用できるようにする。<br><br>

② api/userApi.ts<br>
* types/userData.ts から UserData 型をインポートする。<br>
* createUserData() 関数を作成する。<br>
* UserData 型のオブジェクトを返す。<br>
* 今回は実際のAPI通信を行わず、オブジェクトを直接返す。<br><br>

③ 10_api_basic.ts<br>
* api/userApi.ts から createUserData() 関数をインポートする。<br>
* 関数を実行して、返されたユーザー情報を変数に格納する。<br>
* ユーザーの名前とメールアドレスをコンソールに出力する。<br><br>

</p>
<pre class="code-block"><code>src/ts/
├── types/
│   └── userData.ts
│
├── api/
│   └── userApi.ts
│
└── 10_api_basic.ts
</code></pre>


<pre class="code-block"><code>
//①types/userData.ts

//■ユーザー情報の型、「type UserData」を定義する。

??? type UserData = {
  id: ???;
  name: ???;
  email: ???;

};
</code></pre>


<pre class="code-block"><code>
//②api/userApi.ts
//types/userData.tsから「UserData型」をインポート。

import ???

// ■「createUserData()関数」を作成し、UserData型のオブジェクトを返してください。
//‼️➡️今回は実際のAPI通信は行わず、「下記のオブジェクト({}の部分)」を直接返すものとします。

??? function createUserData(): ??? {
  return {
    id: 1,
    name: 'Apple',
    email: 'apple@example.com',
  };
}
</code></pre>


<pre class="code-block"><code>
//ts/10_api_basic.ts
//api/userApi.tsからcreateUserData()関数をインポート

import { createUserData } from './api/userApi.js';

export function run() {
  //関数を実行して、ユーザー情報を取得
  const userData = createUserData();

  console.log(userData.id);
  console.log(userData.name);
  console.log(userData.email);
}

}

</code></pre>

      <button data-file="./ts/10_api_basic.ts">コンソールで実行</button>
       <p class="textbox">‼️型定義のチェックは実際のファイルを参照する</p>
      </div>
    </div>















     <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題11</h4>
       <p class="textbox">「ユーザー情報の型、UserData」を定義し、別ファイルからその型を利用してください。<br>
       ■要件<br>
・今回は実際のAPI通信を行います。「jsonplaceholder」のAPIを利用します。

</p>
<pre class="code-block"><code>src/ts/
├── types/
│   └── userData.ts
│
├── api/
│   └── userApi_02.ts
│
└── 11_api02.ts
</code></pre>


<pre class="code-block"><code>
//①types/userData.ts
//■ユーザー情報の型、「type UserData」を定義する。

export type UserData = {
  id: number;
  name: string;
  email: string;
};
</code></pre>




<pre class="code-block"><code>
//②api/userApi_02.ts
//JSONPlaceholderのAPIを利用する

</code></pre>



<pre class="code-block"><code>
//③ts/11_api02.ts
//api/userApi_02.tsからcreateUserData()関数をインポート

import { createUserData } from './api/userApi_02.js';

export async function run() {
  //関数を実行して、ユーザー情報を取得
  const userData = await createUserData();//

  console.log(userData.id);
  console.log(userData.name);
  console.log(userData.email);
}

</code></pre>

      <button data-file="./ts/11_api02.ts">コンソールで実行</button>
       <p class="textbox">‼️型定義のチェックは実際のファイルを参照する</p>
      </div>
    </div>














    </section>
`;

//■Viteに読み込み対象のファイルを認識させる
const modules = {
  ...import.meta.glob('./js/*.js'),
  ...import.meta.glob('./ts/*.ts'),
  //import.meta は、現在のモジュール(今回だったらmain.js)に関する情報を取得する。
  //glob()は「正確にいえばViteの機能。」指定したパターンに一致するファイルを「まとめて読み込み対象にするVite独自の機能です。」
};

//■import.metaは「現在のモジュール（今回なら main.js）に関するメタデータを提供するオブジェクト。」
//モジュールのURLなど、モジュールに関する情報にアクセスできます。
//例えば、import.meta.url で現在のモジュールのURLを取得できます。
console.log(import.meta.url);

//■全てのリンクを取得してクリックイベントを登録する
document.querySelectorAll('[data-file]').forEach((link) => {
  //⬆HTMLの中から data-file が付いている要素を全部探す

  link.addEventListener('click', async (e) => {
    e.preventDefault();

    const filepath = link.dataset.file;
    const loadModule = modules[filepath];

    if (!loadModule) {
      console.error(`読み込み対象のファイルが見つかりません: ${filepath}`);
      return;
    }

    const module = await loadModule();
    module.run();
  });
});
