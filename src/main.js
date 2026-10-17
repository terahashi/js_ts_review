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







    </section>
`;

// Viteに読み込み対象のファイルを認識させる
const modules = {
  ...import.meta.glob('./js/*.js'),

  ...import.meta.glob('./ts/*.ts'),
};

//⬇︎全てのリンクを取得してクリックイベントを登録する
document.querySelectorAll('[data-file]').forEach((link) => {
  //⬆︎HTMLの中から data-file が付いている要素を全部探す

  link.addEventListener('click', async (e) => {
    e.preventDefault();

    const file = link.dataset.file;

    const loadModule = modules[file];

    if (!loadModule) {
      console.error(`読み込み対象のファイルが見つかりません: ${file}`);

      return;
    }

    const module = await loadModule();

    module.run();
  });
});
