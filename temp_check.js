
    // ==================== DATA 18 MINGGU ====================
    const weekData = [
        { title: "Pengenalan HTML & Struktur Dasar", kd: "3.1 Memahami struktur dokumen HTML", materi: "Tag html, head, title, body, heading (h1-h6), paragraph (p)", code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>Halaman Pertamaku</title>\n</head>\n<body>\n    <h1>Selamat Datang di WebDev</h1>\n    <p>Ini adalah halaman web pertamaku.</p>\n</body>\n</html>", quizQ: "Tag HTML yang digunakan untuk membuat paragraf adalah...", quizOpt: ["&lt;h1&gt;", "&lt;p&gt;", "&lt;div&gt;", "&lt;span&gt;"], quizAns: 1 },
        { title: "Text Formatting & Hyperlink", kd: "3.2 Menerapkan elemen teks dan hyperlink", materi: "Tag bold (b), italic (i), anchor (a) untuk link", code: "<!DOCTYPE html>\n<html>\n<body>\n    <h1>Belajar Format Teks</h1>\n    <p><b>Teks tebal</b> dan <i>teks miring</i></p>\n    <a href='https://www.google.com'>Kunjungi Google</a>\n</body>\n</html>", quizQ: "Tag untuk membuat teks tebal adalah...", quizOpt: ["&lt;i&gt;", "&lt;u&gt;", "&lt;b&gt;", "&lt;em&gt;"], quizAns: 2 },
        { title: "List & Table", kd: "3.3 Membuat list dan tabel dalam HTML", materi: "Ordered list (ol), unordered list (ul), table, tr, td", code: "<!DOCTYPE html>\n<html>\n<body>\n    <h2>Daftar Belanja</h2>\n    <ul>\n        <li>Beras</li>\n        <li>Gula</li>\n    </ul>\n    <h2>Jadwal</h2>\n    <table border='1'>\n        <tr><td>Senin</td><td>Web</td></tr>\n    </table>\n</body>\n</html>", quizQ: "Tag untuk membuat tabel adalah...", quizOpt: ["&lt;tbl&gt;", "&lt;table&gt;", "&lt;tab&gt;", "&lt;tr&gt;"], quizAns: 1 },
        { title: "Form & Input", kd: "3.4 Membuat form input data", materi: "Form, input text, radio, checkbox, submit button", code: "<!DOCTYPE html>\n<html>\n<body>\n    <h2>Form Pendaftaran</h2>\n    <form>\n        Nama: <input type='text'><br>\n        <input type='submit' value='Daftar'>\n    </form>\n</body>\n</html>", quizQ: "Untuk input teks satu baris menggunakan type...", quizOpt: ["password", "email", "text", "number"], quizAns: 2 },
        { title: "CSS Dasar (Pengenalan)", kd: "3.5 Menerapkan CSS pada elemen HTML", materi: "Inline CSS, Internal CSS, selector dasar", code: "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        h1 { color: blue; }\n        p { font-size: 20px; }\n    </style>\n</head>\n<body>\n    <h1>Teks Biru</h1>\n    <p>Ukuran font 20px</p>\n</body>\n</html>", quizQ: "CSS inline ditulis menggunakan atribut...", quizOpt: ["class", "id", "style", "css"], quizAns: 2 },
        { title: "CSS Selector & Properties", kd: "3.6 Menggunakan selector CSS", materi: "Class selector (.), ID selector (#), properti warna, margin", code: "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        .kotak { background: yellow; padding: 10px; }\n        #judul { color: red; }\n    </style>\n</head>\n<body>\n    <h1 id='judul'>Judul Merah</h1>\n    <div class='kotak'>Kotak Kuning</div>\n</body>\n</html>", quizQ: "Selector untuk class adalah...", quizOpt: ["#", ".", "*", " "], quizAns: 1 },
        { title: "CSS Box Model", kd: "3.7 Memahami konsep box model CSS", materi: "Margin, border, padding, content", code: "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        div {\n            margin: 20px;\n            border: 2px solid black;\n            padding: 15px;\n        }\n    </style>\n</head>\n<body>\n    <div>Konten dengan margin, border, padding</div>\n</body>\n</html>", quizQ: "Urutan box model dari dalam ke luar...", quizOpt: ["content-padding-border-margin", "margin-border-padding-content", "content-border-padding-margin", "padding-content-margin-border"], quizAns: 0 },
        { title: "CSS Layout (Flexbox)", kd: "3.8 Menerapkan layout dengan flexbox", materi: "display flex, justify-content, align-items", code: "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        .container { display: flex; justify-content: space-between; }\n        .item { background: orange; padding: 20px; }\n    </style>\n</head>\n<body>\n    <div class='container'>\n        <div class='item'>Item 1</div>\n        <div class='item'>Item 2</div>\n    </div>\n</body>\n</html>", quizQ: "Properti untuk mengatur posisi horizontal pada flexbox...", quizOpt: ["align-items", "flex-direction", "justify-content", "flex-wrap"], quizAns: 2 },
        { title: "UTS (Evaluasi Tengah Semester)", kd: "Evaluasi Kompetensi 1-8", materi: "Review materi HTML & CSS dasar", code: "<!DOCTYPE html>\n<html>\n<body>\n    <h1>UTS Pemrograman Web</h1>\n    <p>Kerjakan soal yang diberikan guru.</p>\n</body>\n</html>", quizQ: "Apa kepanjangan dari CSS?", quizOpt: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], quizAns: 2 },
        { title: "JavaScript Dasar (Variabel)", kd: "3.9 Memahami variabel dan tipe data", materi: "Variabel let/const, tipe data string, number", code: "<!DOCTYPE html>\n<html>\n<body>\n    <h1 id='demo'></h1>\n    <script>\n        let nama = 'Asep';\n        let umur = 30;\n        document.getElementById('demo').innerHTML = nama + ', umur ' + umur;\n    </script>\n</body>\n</html>", quizQ: "Keyword variabel pada JavaScript ES6...", quizOpt: ["var", "let", "const", "semua benar"], quizAns: 3 },
        { title: "JavaScript Function & Event", kd: "3.10 Membuat fungsi dan event handler", materi: "Function, onclick, alert", code: "<!DOCTYPE html>\n<html>\n<body>\n    <button onclick='tampilkanPesan()'>Klik Saya</button>\n    <script>\n        function tampilkanPesan() {\n            alert('Halo! Tombol diklik');\n        }\n    </script>\n</body>\n</html>", quizQ: "Event ketika tombol diklik adalah...", quizOpt: ["onhover", "onclick", "onchange", "onsubmit"], quizAns: 1 },
        { title: "JavaScript DOM Manipulation", kd: "3.11 Memanipulasi DOM dengan JavaScript", materi: "getElementById, innerHTML, style", code: "<!DOCTYPE html>\n<html>\n<body>\n    <p id='teks'>Teks awal</p>\n    <button onclick='ubahTeks()'>Ubah</button>\n    <script>\n        function ubahTeks() {\n            document.getElementById('teks').innerHTML = 'Teks berubah!';\n        }\n    </script>\n</body>\n</html>", quizQ: "Method mengambil elemen berdasarkan id...", quizOpt: ["getElementByClass", "getElementById", "querySelector", "getElementsByTagName"], quizAns: 1 },
        { title: "Form Validation with JS", kd: "3.12 Membuat validasi form sederhana", materi: "Validasi input, alert error", code: "<!DOCTYPE html>\n<html>\n<body>\n    <form onsubmit='return validasi()'>\n        Nama: <input id='nama' type='text'>\n        <input type='submit' value='Kirim'>\n    </form>\n    <script>\n        function validasi() {\n            let nama = document.getElementById('nama').value;\n            if(nama == '') {\n                alert('Nama harus diisi!');\n                return false;\n            }\n            return true;\n        }\n    </script>\n</body>\n</html>", quizQ: "Properti untuk mengambil nilai input...", quizOpt: ["innerHTML", "value", "textContent", "innerText"], quizAns: 1 },
        { title: "Array & Loop", kd: "3.13 Mengelola data array dengan perulangan", materi: "Array, for loop, forEach", code: "<!DOCTYPE html>\n<html>\n<body>\n    <ul id='list'></ul>\n    <script>\n        let buah = ['Apel', 'Mangga', 'Jeruk'];\n        let html = '';\n        for(let i=0; i<buah.length; i++) {\n            html += '<li>' + buah[i] + '</li>';\n        }\n        document.getElementById('list').innerHTML = html;\n    </script>\n</body>\n</html>", quizQ: "Method menambah elemen di akhir array...", quizOpt: ["push()", "pop()", "shift()", "unshift()"], quizAns: 0 },
        { title: "Object & JSON", kd: "3.14 Memahami object dan JSON", materi: "Object literals, properti", code: "<!DOCTYPE html>\n<html>\n<body>\n    <p id='output'></p>\n    <script>\n        let siswa = { nama: 'Budi', kelas: 'XI RPL' };\n        document.getElementById('output').innerHTML = siswa.nama + ' - ' + siswa.kelas;\n    </script>\n</body>\n</html>", quizQ: "Mengakses properti object bisa dengan...", quizOpt: ["dot notation", "bracket notation", "keduanya benar", "tidak ada"], quizAns: 2 },
        { title: "Integrasi HTML, CSS, JS", kd: "3.15 Menggabungkan ketiganya", materi: "Membuat halaman web interaktif", code: "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        body { font-family: Arial; text-align: center; }\n        button { background: green; color: white; padding: 10px; border: none; border-radius: 10px; }\n    </style>\n</head>\n<body>\n    <h1>Web Interaktif</h1>\n    <button onclick='ubahWarna()'>Ubah Warna</button>\n    <script>\n        function ubahWarna() {\n            document.body.style.backgroundColor = 'lightblue';\n        }\n    </script>\n</body>\n</html>", quizQ: "Tag untuk menulis CSS internal...", quizOpt: ["&lt;css&gt;", "&lt;style&gt;", "&lt;script&gt;", "&lt;link&gt;"], quizAns: 1 },
        { title: "Mini Project: Personal Website", kd: "4.1 Membuat website personal", materi: "Website portofolio sederhana", code: "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        body { font-family: Arial; margin: 0; padding: 20px; background: #f0f0f0; }\n        .header { background: #333; color: white; padding: 20px; text-align: center; }\n        .content { padding: 20px; }\n    </style>\n</head>\n<body>\n    <div class='header'>\n        <h1>Portofolio Saya</h1>\n    </div>\n    <div class='content'>\n        <h2>Tentang Saya</h2>\n        <p>Saya siswa RPL yang sedang belajar web development.</p>\n    </div>\n</body>\n</html>", quizQ: "Properti CSS untuk warna latar belakang...", quizOpt: ["color", "background-color", "bgcolor", "background"], quizAns: 1 },
        { title: "UAS (Evaluasi Akhir Semester)", kd: "Evaluasi Kompetensi Akhir", materi: "Seluruh materi semester 1 (HTML, CSS, JS)", code: "<!DOCTYPE html>\n<html>\n<body>\n    <h1>UAS Pemrograman Web</h1>\n    <p>Seluruh materi HTML, CSS, dan JavaScript.</p>\n</body>\n</html>", quizQ: "Kerangka dasar HTML yang benar...", quizOpt: ["&lt;html&gt;&lt;head&gt;&lt;body&gt;", "&lt;html&gt;&lt;body&gt;&lt;head&gt;", "&lt;head&gt;&lt;html&gt;&lt;body&gt;", "&lt;body&gt;&lt;html&gt;&lt;head&gt;"], quizAns: 0 }
    ];

    // STATE
    let currentWeek = 0;
    let completed = new Array(18).fill(false);
    let totalPoints = 0;
    let selectedAnswer = null;

    // Load from localStorage
    try {
        let savedWeek = localStorage.getItem('webdev_currentWeek');
        let savedCompleted = localStorage.getItem('webdev_completed');
        let savedPoints = localStorage.getItem('webdev_points');
        if (savedWeek !== null) currentWeek = parseInt(savedWeek);
        if (savedCompleted !== null) completed = JSON.parse(savedCompleted);
        if (savedPoints !== null) totalPoints = parseInt(savedPoints);
    } catch(e) { console.log("LocalStorage error:", e); }

    // DOM Elements
    const weekNav = document.getElementById('weekNav');
    const materiTitle = document.getElementById('materiTitle');
    const materiDesc = document.getElementById('materiDesc');
    const codeEditor = document.getElementById('codeEditor');
    const previewFrame = document.getElementById('previewFrame');
    const runBtn = document.getElementById('runBtn');
    const quizContainer = document.getElementById('quizContainer');
    const submitQuizBtn = document.getElementById('submitQuizBtn');
    const quizFeedback = document.getElementById('quizFeedback');
    const progressText = document.getElementById('progressText');
    const scoreText = document.getElementById('scoreText');

    function updateUI() {
        let completedCount = completed.filter(v => v === true).length;
        let percent = Math.round((completedCount / 18) * 100);
        progressText.innerHTML = `ðŸ“Š Progres: ${percent}% (${completedCount}/18 minggu)`;
        scoreText.innerHTML = `ðŸ† Poin: ${totalPoints}`;
        localStorage.setItem('webdev_points', totalPoints);
        localStorage.setItem('webdev_completed', JSON.stringify(completed));
    }

    function renderWeekNav() {
        weekNav.innerHTML = '';
        for (let i = 0; i < 18; i++) {
            let btn = document.createElement('button');
            btn.textContent = `Mgg ${i+1}`;
            btn.className = 'week-btn';
            if (i === currentWeek) btn.classList.add('active');
            if (completed[i]) btn.classList.add('completed');
            if (i > currentWeek && !completed[currentWeek]) btn.classList.add('locked');
            btn.onclick = (function(idx) { 
                return function() { 
                    if (idx > currentWeek && !completed[currentWeek]) {
                        alert(`Selesaikan minggu ${currentWeek+1} terlebih dahulu!`);
                        return;
                    }
                    currentWeek = idx;
                    localStorage.setItem('webdev_currentWeek', currentWeek);
                    renderWeekNav();
                    loadWeek();
                };
            })(i);
            weekNav.appendChild(btn);
        }
    }

    function loadWeek() {
        let w = weekData[currentWeek];
        materiTitle.innerHTML = `ðŸ“– Minggu ${currentWeek+1}: ${w.title}`;
        materiDesc.innerHTML = `<p><strong>KD:</strong> ${w.kd}</p><p><strong>Materi:</strong> ${w.materi}</p>`;
        codeEditor.value = w.code;
        runCode();
        
        // Render quiz
        let quizHtml = `<p><strong>Soal:</strong> ${w.quizQ}</p>`;
        w.quizOpt.forEach((opt, idx) => {
            let selectedClass = (selectedAnswer === idx) ? 'selected' : '';
            quizHtml += `<div class="quiz-option ${selectedClass}" data-opt="${idx}">${String.fromCharCode(65+idx)}. ${opt}</div>`;
        });
        quizContainer.innerHTML = quizHtml;
        
        // Attach quiz click handlers
        document.querySelectorAll('.quiz-option').forEach(el => {
            el.onclick = function() {
                document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                selectedAnswer = parseInt(this.dataset.opt);
            };
        });
        
        // Update quiz title
        document.getElementById('quizTitle').innerHTML = `ðŸ“ Kuis Minggu ${currentWeek+1}`;
        
        // Reset feedback if already completed
        if (completed[currentWeek]) {
            quizFeedback.innerHTML = "âœ… Minggu ini sudah selesai! +10 poin sudah didapatkan.";
            quizFeedback.style.background = "#1f7a5a";
            submitQuizBtn.disabled = true;
            submitQuizBtn.style.opacity = "0.5";
        } else {
            quizFeedback.innerHTML = "";
            submitQuizBtn.disabled = false;
            submitQuizBtn.style.opacity = "1";
        }
    }

    function runCode() {
        let code = codeEditor.value;
        let doc = previewFrame.contentWindow.document;
        doc.open();
        doc.write(code);
        doc.close();
    }

    function submitQuiz() {
        if (completed[currentWeek]) {
            quizFeedback.innerHTML = "Minggu ini sudah terselesaikan sebelumnya.";
            return;
        }
        
        if (selectedAnswer === null) {
            quizFeedback.innerHTML = "âŒ Pilih jawaban terlebih dahulu!";
            quizFeedback.style.background = "#6b2e2e";
            return;
        }
        
        let w = weekData[currentWeek];
        let isCorrect = (selectedAnswer === w.quizAns);
        
        if (isCorrect) {
            completed[currentWeek] = true;
            totalPoints += 10;
            updateUI();
            quizFeedback.innerHTML = "ðŸŽ‰ SELAMAT! Jawaban benar! +10 poin. Minggu ini selesai! ðŸŽ‰";
            quizFeedback.style.background = "#1f7a5a";
            submitQuizBtn.disabled = true;
            submitQuizBtn.style.opacity = "0.5";
            renderWeekNav();
            localStorage.setItem('webdev_completed', JSON.stringify(completed));
        } else {
            let correctLetter = String.fromCharCode(65 + w.quizAns);
            quizFeedback.innerHTML = `âŒ Jawaban kurang tepat. Coba lagi! Jawaban yang benar adalah ${correctLetter}.`;
            quizFeedback.style.background = "#6b2e2e";
        }
    }

    // Event listeners
    runBtn.addEventListener('click', runCode);
    submitQuizBtn.addEventListener('click', submitQuiz);

    // Initial load
    renderWeekNav();
    loadWeek();
    updateUI();

