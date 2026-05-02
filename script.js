// 1. Soatni har soniyada yangilab turish
function updateClock() {
    const now = new Date();
    const clock = document.getElementById('live-clock');
    if(clock) clock.innerText = now.toLocaleTimeString('uz-UZ');
}
setInterval(updateClock, 1000);

// 2. Yangi vazifa qo'shish funksiyasi
function addTask() {
    const date = document.getElementById('calendar-input').value;
    const desc = document.getElementById('task-desc').value;
    const time = document.getElementById('task-time').value;

    if (!date || !desc || !time) {
        alert("Iltimos, hamma ma'lumotlarni kiriting!");
        return;
    }

    const tableBody = document.getElementById('table-body');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td class="task-date">${date}</td>
        <td class="task-time">${time}</td>
        <td class="task-text">${desc}</td>
        <td>
            <button class="edit-btn" onclick="editTask(this)">O'zgartirish</button>
            <button class="delete-btn" onclick="deleteTask(this)">O'chirish</button>
        </td>
    `;

    tableBody.appendChild(row);
    
    // Yozish joylarini tozalash
    document.getElementById('task-desc').value = "";
    document.getElementById('task-time').value = "";
}

// 3. Vazifani o'chirish funksiyasi
function deleteTask(btn) {
    if(confirm("Ushbu rejangizni o'chirib tashlamoqchimisiz?")) {
        btn.closest('tr').remove();
    }
}

// 4. Vazifani tahrirlash (6-vazifa)
function editTask(btn) {
    const row = btn.closest('tr');
    const timeCell = row.querySelector('.task-time');
    const textCell = row.querySelector('.task-text');

    const newDesc = prompt("Vazifani tahrirlang:", textCell.innerText);
    const newTime = prompt("Vaqtni o'zgartiring (masalan, 15:30):", timeCell.innerText);

    if (newDesc !== null && newDesc.trim() !== "") {
        textCell.innerText = newDesc;
    }
    if (newTime !== null && newTime.trim() !== "") {
        timeCell.innerText = newTime;
    }
}
