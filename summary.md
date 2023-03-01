# JavaScriptまとめ

## スクロールした値を取得、スクロール値によってあしらいを変える その2

__スクロール上下であしらいを切り替える__

__html__
```
  <header>
    <a href="#" class="logo">ビブリオ組版</a>
    <ul>
      <li>menu 1</li>
      <li>menu 2</li>
      <li>menu 3</li>
      <li>menu 4</li>
      <li>menu 5</li>
    </ul>
  </header>
  <main>
    <section>section 1</section>
    <section>section 2</section>
    <section>section 3</section>
    <section>section 4</section>
    <section>section 5</section>
  </main>
```

__css__
```
header {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  color: #fff;
  background-color: #333;
  text-transform: uppercase;

  opacity: 1;
  transition: .3s;
}

header.inActive {
  transform: translateY(-100%);
  opacity: 0;
}

header .logo {
  font-size: 1.1rem;
  font-weight: 900;
}

header ul {
  display: flex;

  font-weight: 700;
}

header ul li:not(:first-of-type) {
  margin-left: 2rem;
}

main {
  max-width: 1000px;
  margin: 4rem auto;
  background-color: #eee;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20rem;
  margin-top: 6rem;
  background-color: #ddd;
  font-size: 1.1rem;
  font-weight: 900;
  border-radius: .5rem;
}

section:not(:first-of-type) {
  margin-top: 2rem;
}
```

---
__留意点：以下の三つのメソッドは同じ。__
__let scroll = document.documentElement.scrollTop__
__let scroll = window.pageYOffset__
__let scroll = window.scrollY__

##### 下へスクロールするとヘッダーを隠す。スクロールを上げるとヘッダーを出す。

```
// スクロール・イベントについて　その2
let beforeScrollValue = 0
const headerElm = document.querySelector("header")

window.addEventListener("scroll", () => {
  if (window.scrollY > beforeScrollValue) {
    headerElm.classList.add("inActive")
  } else {
    headerElm.classList.remove("inActive")
  }
  beforeScrollValue = window.scrollY
})
```