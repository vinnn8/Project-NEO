const prices = {
    tech: 150000,
    music: 100000,
    gaming: 120000,
    anime: 80000
  };
  
  function showForm(eventType) {
    document.getElementById('eventCards').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
  
    const priceText = `Harga per tiket: Rp${prices[eventType].toLocaleString('id-ID')}`;
    document.getElementById('priceInfo').innerText = priceText;
  
    localStorage.setItem('currentEvent', eventType);
  }
  
  function goBack() {
    document.getElementById('formSection').style.display = 'none';
    document.getElementById('eventCards').style.display = 'flex';
    document.getElementById('registerForm').reset();
    document.getElementById('dataOutput').style.display = 'none';
  }
  
  function handleSubmit(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const qty = parseInt(document.getElementById('ticketQty').value.trim());
    const eventType = localStorage.getItem('currentEvent');
  
    const totalPrice = prices[eventType] * qty;
  
    const data = {
      name,
      email,
      phone,
      event: eventType,
      quantity: qty,
      total: totalPrice
    };
  
    localStorage.setItem('lastRegistration', JSON.stringify(data));
    showOutput(data);
  }
  
  function showOutput(data) {
    const output = document.getElementById('dataOutput');
    const eventNames = {
      tech: 'Tech Conference 2025',
      music: 'Music Fest Festival',
      gaming: 'Gaming Expo 2025',
      anime: 'Anime Fest 2025'
    };
  
    output.innerHTML = `
      <h4>✅ Data Pendaftaran</h4>
      <p><strong>Nama:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telepon:</strong> ${data.phone}</p>
      <p><strong>Event:</strong> ${eventNames[data.event]}</p>
      <p><strong>Jumlah Tiket:</strong> ${data.quantity}</p>
      <p><strong>Total Bayar:</strong> Rp${data.total.toLocaleString('id-ID')}</p>
    `;
    output.style.display = 'block';
  }
  