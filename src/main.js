import './style.css';

document.querySelector('#app').innerHTML = `
 <section id="center">
    <div class="center" style="margin-bottom: 40px;">
      <h1>JavaScript / TypeScript復習</h1>
    </div>

    <div id="javascript" style="margin-bottom: 80px;">
      <h2 style="margin-bottom: 40px;">--JavaScript復習</h2>

      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題1</h4>
      <p style="margin-bottom: 10px;">
        下記の配列から最大値を求めてください。
        ※ Math.max()は使わずにやってみましょう。
      </p>
      <p style="margin-bottom: 10px;">
        const numbers = [12, 5, 23, 8, 17];
      </p>
        <button data-file="./js/01_array.js">コンソールで実行</button>
      </div>


     <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題2</h4>
      <p style="margin-bottom: 10px;">
       この配列から、偶数だけを取り出してください。
      </p>
      <p style="margin-bottom: 10px;">
       const numList = [1, 4, 7, 10, 13, 16];
      </p>
        <button data-file="./js/02_filter.js">コンソールで実行</button>
      </div>


      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題3</h4>
      <p style="margin-bottom: 10px;">
      filter応用「商品検索」<br>
      productsから、商品名に const keyword = "a" が含まれている商品だけを取り出してください。
      <br>大文字・小文字は区別しないものとします。
      </p>
      <p style="margin-bottom: 10px;">
        const products = [
          { name: 'Apple', price: 150 },
          { name: 'Banana', price: 100 },
          { name: 'Orange', price: 120 },
          { name: 'lemon', price: 120 },
        ];
        <br><br>
        const keyword = "a";
      </p>
        <button data-file="./js/03_filter02.js">コンソールで実行</button>
      </div>



      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題4</h4>
      <p style="margin-bottom: 10px;">
      mapメソッドを使って、配列の中の数値を全て2倍にしてください。<br>
      const numbers = [1, 2, 3, 4, 5];
      </p>
      </div>

    </div>




    <div id="typescript" style="margin-bottom: 80px;">
      <h2 style="margin-bottom: 40px;">--TypeScript復習</h2>

      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題1</h4>
      <p style="margin-bottom: 10px;">
        下記の型定義を完成させてください。
      </p>
      <p style="margin-bottom: 10px;">
       下記ss
      </p>
        <button data-file="./ts/01_type.ts">コンソールで実行</button>
      </div>
    </div>


    </section>
`;

//⬇︎全てのリンクを取得してクリックイベントを登録する
document.querySelectorAll('[data-file]').forEach((link) => {
  //⬆︎HTMLの中から data-file が付いている要素を全部探す
  link.addEventListener('click', async (e) => {
    e.preventDefault();

    const file = link.dataset.file;
    const module = await import(file);

    module.run();
  });
});
