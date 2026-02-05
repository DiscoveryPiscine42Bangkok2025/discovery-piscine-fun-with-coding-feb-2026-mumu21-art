// ปุ่มNew และกล่องlist
const newButton = document.getElementById("new");
const list = document.getElementById("ft_list");

// เก็บรายการ TO DO total
let todos = [];

// บันทึกข้อมูลลง cookie
function saveCookies() {
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

// โหลดข้อมูลจาก cookie ตอนเปิดหน้า
function loadCookies() {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    if (c.startsWith("todos=")) {
      todos = JSON.parse(decodeURIComponent(c.split("=")[1]));
    }
  }
}

// วาดรายการทั้งหมดจากข้อมูลใน todo
function render() {
  list.innerHTML = "";

  todos.forEach(function (text) {
    const item = document.createElement("div");
    item.textContent = text;

    // คลิกรายการเพื่อลบ
    item.addEventListener("click", function () {
      if (confirm("Delete this TO DO?")) {
        todos = todos.filter(function (t) {
          return t !== text;
        });
        saveCookies();
        render();
      }
    });

    // เพิ่มรายการใหม่ไว้ข้างบนสุบ
    list.prepend(item);
  });
}

// กดปุ่มNew เพื่อเพิ่ม TO DO
newButton.addEventListener("click", function () {
  const text = prompt("New TO DO");
  if (!text) return;

  todos.push(text);
  saveCookies();
  render();
});

// โหลดข้อมูลตอนเปิดหน้า
loadCookies();
render();
