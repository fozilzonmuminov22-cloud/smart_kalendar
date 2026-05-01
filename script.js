// 1. Real vaqt funksiyasi (3-vazifa)
function updateClock() {
    const now = new Date();
    document.getElementById('live-clock').innerText = now.toLocaleTimeString('uz-UZ');
}
setInterval(updateClock, 1000);

// 2. Vazifa qo'shish funksiyasi (4 va 5-vazifa)
function addTask() {
    const date = document.getElementById('calendar-input').value;
    const desc = document.getElementById('task-desc').value;
    const time = document.getElementById('task-time').value;

    if (!date || !desc || !time) {
        alert("Iltimos, hamma maydonlarni to'ldiring!");
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
    
    // Tozalash
    document.getElementById('task-desc').value = "";
    document.getElementById('task-time').value = "";
}

// 3. O'chirish funksiyasi
function deleteTask(btn) {
    if(confirm("Haqiqatdan ham o'chirmoqchimisiz?")) {
        btn.parentElement.parentElement.remove();
    }
}

// 4. O'zgartirish funksiyasi (6-vazifa)
function editTask(btn) {
    const row = btn.parentElement.parentElement;
    const dateCell = row.querySelector('.task-date');
    const timeCell = row.querySelector('.task-time');
    const textCell = row.querySelector('.task-text');

    const newDesc = prompt("Yangi shartni kiriting:", textCell.innerText);
    const newTime = prompt("Yangi vaqtni kiriting (masalan 14:00):", timeCell.innerText);

    if (newDesc !== null) textCell.innerText = newDesc;
    if (newTime !== null) timeCell.innerText = newTime;
}

// Kalendar tanlanganda sanani ko'rsatish (2-vazifa)
document.getElementById('calendar-input').addEventListener('change', function() {
    document.getElementById('selected-date-display').innerText = "Tanlangan sana: " + this.value;
});