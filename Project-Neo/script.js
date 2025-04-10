function showForm(eventTitle, backgroundImage) {
    // Ganti background
    document.getElementById('mainBody').style.backgroundImage = `url('images/${backgroundImage}')`;
  
    // Tampilkan form
    document.getElementById('eventCards').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
  
    // Set data event
    document.getElementById('formTitle').textContent = `Form Pendaftaran - ${eventTitle}`;
    document.getElementById('eventName').value = eventTitle;
  
    // Cek localStorage
    const saved = JSON.parse(localStorage.getItem('formData'));
    if (saved && saved.event === eventTitle) {
      document.getElementById('savedName').textContent = `Nama: ${saved.name}`;
      document.getElementById('savedEmail').textContent = `Email: ${saved.email}`;
      document.getElementById('savedEvent').textContent = `Event: ${saved.event}`;
      document.getElementById('dataOutput').style.display = 'block';
    } else {
      document.getElementById('dataOutput').style.display = 'none';
    }
  }
  
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const event = document.getElementById('eventName').value;
  
    const data = { name, email, event };
    localStorage.setItem('formData', JSON.stringify(data));
  
    // Tampilkan
    document.getElementById('savedName').textContent = `Nama: ${name}`;
    document.getElementById('savedEmail').textContent = `Email: ${email}`;
    document.getElementById('savedEvent').textContent = `Event: ${event}`;
    document.getElementById('dataOutput').style.display = 'block';
  
    // Kosongkan input
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  });
  