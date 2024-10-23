// Event handler untuk tombol TAMBAH
let btnTambah = document.getElementById("btn-tambah");
let output = document.getElementById("todo-list");

// Fungsi untuk menandai tugas sebagai selesai
function markAsDone(event) {
   const taskText = event.target
      .closest(".todo-item")
      .querySelector(".task-text");
   taskText.style.textDecoration = "line-through"; // Coret teks
   taskText.style.color = "gray"; // Ubah warna teks
   event.target.disabled = true; // Nonaktifkan tombol selesai setelah diklik
}

// Fungsi untuk menghapus tugas
function deleteTask(event) {
   const taskItem = event.target.closest(".todo-item");
   taskItem.remove(); // Hapus task dari list
}

// Event listener untuk tugas awal
document.querySelectorAll(".btn-selesai").forEach((button) => {
   button.addEventListener("click", markAsDone);
});
document.querySelectorAll(".btn-hapus").forEach((button) => {
   button.addEventListener("click", deleteTask);
});

// Event handler untuk tombol TAMBAH
btnTambah.onclick = (e) => {
   let input = document.getElementById("assignment");
   let title = input.value.trim();

   // Validasi jika input kosong
   if (title === "") {
      alert("Inputan masih kosong");
      return;
   }

   // Membuat div untuk task baru
   let task = document.createElement("li");
   task.className = `todo-item flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300`;

   // Isi dari task yang ditambahkan (SELESAI & HAPUS tombol)
   task.innerHTML = `
      <span class="task-text text-gray-700 font-semibold">${title}</span>
      <div class="flex space-x-3">
         <button class="btn-selesai bg-gradient-to-r from-green-400 to-teal-500 text-white px-5 py-2 rounded-lg hover:from-yellow-400 hover:to-green-500 transition-colors duration-300 shadow-md">SELESAI</button>
         <button class="btn-hapus bg-gradient-to-r from-red-400 to-pink-500 text-white px-5 py-2 rounded-lg hover:from-yellow-400 hover:to-pink-600 transition-colors duration-300 shadow-md">HAPUS</button>
      </div>
   `;

   // Menambahkan task ke output
   output.appendChild(task);

   // Kosongkan input setelah task ditambahkan
   input.value = "";

   // Tambahkan event listener untuk tombol SELESAI dan HAPUS
   task.querySelector(".btn-selesai").addEventListener("click", markAsDone);
   task.querySelector(".btn-hapus").addEventListener("click", deleteTask);

   // Prevent default action
   e.preventDefault();
};
