function showForm(eventType) {
    const background = {
      tech: 'images/tech-bg.jpg',
      music: 'images/music-bg.jpg'
    };
  
    document.getElementById('mainBody').style.backgroundImage = `url('${background[eventType]}')`;
  
    document.getElementById('eventCards').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
  
    // Simpan tipe event
    localStorage.setItem('currentEvent', eventType);
  }
  
  function goBack() {
    document.getElementById('formSection').style.display = 'none';
    document.getElementById('eventCards').style.display = 'flex';
    document.getElementById('mainBody').style.backgroundImage = "url('images/default-bg.jpg')";
    document.getElementById('registerForm').reset();
    document.getElementById('dataOutput').style.display = 'none';
  }
  
  function handleSubmit(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const eventType = localStorage.getItem('currentEvent');
  
    const data = { name, email, phone, event: eventType };
  
    // Simpan ke localStorage
    localStorage.setItem('lastRegistration', JSON.stringify(data));
  
    showOutput(data);
  }
  
  function showOutput(data) {
    const output = document.getElementById('dataOutput');
    output.innerHTML = `
      <h4>✅ Data Pendaftaran</h4>
      <p><strong>Nama:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telepon:</strong> ${data.phone}</p>
      <p><strong>Event:</strong> ${data.event === 'tech' ? 'Tech Conference 2025' : 'Music Fest Festival'}</p>
    `;
    output.style.display = 'block';
  }
  