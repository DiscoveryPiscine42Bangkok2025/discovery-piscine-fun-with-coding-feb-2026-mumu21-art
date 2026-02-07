// กล่อง list
const $list = $("#ft_list");

// เก็บรายการทั้งหมด
let todos = [];

// บันทึก cookie
function saveCookies() {
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

// โหลด cookie
function loadCookies() {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    if (c.startsWith("todos=")) {
      todos = JSON.parse(decodeURIComponent(c.split("=")[1]));
    }
  }
}

// วาดรายการจาก todo
function render() {
  $list.empty();

  todos.forEach(function (text) {
    const $item = $("<div></div>").text(text);

    // คลิกลบ
    $item.click(function () {
      if (confirm("Delete this TO DO?")) {
        todos = todos.filter(function (t) {
          return t !== text;
        });
        saveCookies();
        render();
      }
    });

    // เพิ่มไว้บนสุด
    $list.prepend($item);
  });
}

// กดปุ่ม New
$("#new").click(function () {
  const text = prompt("New TO DO");
  if (!text) return;

  todos.push(text);
  saveCookies();
  render();
});

// โหลดตอนเปิดหน้า
loadCookies();
render();
