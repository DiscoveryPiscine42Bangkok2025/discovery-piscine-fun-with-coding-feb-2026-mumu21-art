const button = document.getElementById("btn"); // หาelementปุ่ม จากHTML//

button.addEventListener("click", function () //คลิกแล้วจะ run code ข้างใน //
{
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256); //สุ่มเลข 0–255 (สี RGB) //

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // เปลี่ยนสีพื้นหลังทั้งหน้า//
});

