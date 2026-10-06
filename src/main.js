import './style.css';

document.querySelector('#app').innerHTML = `
 <section id="center">
    <div class="center" style="margin-bottom: 40px;">
      <h1>JavaScript / TypeScript復習</h1>
    </div>

    <div id="javascript" style="margin-bottom: 80px;">
      <h2 style="margin-bottom: 40px;">--JavaScript復習</h2>

      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題1：配列の最大値</h4>
      <p style="margin-bottom: 10px;">
        下記の配列から最大値を求めてください。
      </p>
      <p style="margin-bottom: 10px;">
        const numbers = [3, 7, 2, 9, 1];
      </p>
        <button data-file="./js/array.js">コンソールで実行</button>
      </div>
    </div>


    <div id="typescript" style="margin-bottom: 80px;">
      <h2 style="margin-bottom: 40px;">--TypeScript復習</h2>

      <div class="question">
      <h4 style="margin-bottom: 10px;">✅問題1：型定義</h4>
      <p style="margin-bottom: 10px;">
        下記
      </p>
      <p style="margin-bottom: 10px;">
       下記
      </p>
        <button data-file="./ts/type.ts">コンソールで実行</button>
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
