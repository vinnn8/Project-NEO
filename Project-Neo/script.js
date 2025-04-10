const events = [
    { id: 'tech', name: 'Tech Conference 2025', desc: 'Konferensi teknologi masa depan', price: 150000 },
    { id: 'music', name: 'Music Fest Festival', desc: 'Festival musik outdoor terbesar', price: 100000 },
    { id: 'gaming', name: 'Gaming Expo 2025', desc: 'Event untuk pecinta game & teknologi', price: 120000 },
    { id: 'anime', name: 'Anime Fest 2025', desc: 'Kumpul akbar para wibu & cosplayer', price: 80000 },
    { id: 'bookfair', name: 'Book Fair 2025', desc: 'Pameran buku nasional & internasional', price: 50000 },
    { id: 'startup', name: 'Startup Weekend', desc: 'Ajang bertemu investor dan founder startup', price: 170000 },
    { id: 'fashion', name: 'Fashion Night Runway', desc: 'Fashion show dari brand lokal', price: 200000 },
    { id: 'culinary', name: 'Culinary Festival', desc: 'Wisata kuliner dengan 100+ tenant', price: 75000 },
    { id: 'filmfest', name: 'Film Festival 2025', desc: 'Pemutaran film indie & internasional', price: 110000 },
    { id: 'designweek', name: 'Design Week 2025', desc: 'Pameran karya desainer grafis', price: 90000 },
    { id: 'photomeet', name: 'Photography MeetUp', desc: 'Workshop & hunting bareng fotografer', price: 95000 },
    { id: 'esport', name: 'eSport Tournament', desc: 'Pertandingan antar komunitas gaming', price: 125000 },
    { id: 'robotics', name: 'Robotics Challenge', desc: 'Kompetisi antar pelajar & mahasiswa', price: 140000 },
    { id: 'historyexpo', name: 'History Expo', desc: 'Pameran benda bersejarah dan budaya', price: 60000 },
  ];
  
  // Tampilkan semua event
  window.onload = function () {
    const container = document.getElementById("eventCards");
    container.innerHTML = ""; // clear jika reload
  
    events.forEach(evt => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <h3>${evt.name}</h3>
        <p>${evt.desc}</p>
        <p class="price">Rp${evt.price.toLocaleString('id-ID')} / tiket</p>
        <button onclick="showForm('${evt.id}')">Lihat Detail</button>
      `;
      container.appendChild(card);
    });
  };
  
  function showForm(eventId) {
    const evt = events.find(e => e.id === eventId);
    document.getElementById('eventCards').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
  
    const priceText = `Harga per tiket: Rp${evt.price.toLocaleString('id-ID')}`;
    document.getElementById('priceInfo').innerText = priceText;
  
    localStorage.setItem('currentEvent', eventId);
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
    const eventId = localStorage.getItem('currentEvent');
    const evt = events.find(e => e.id === eventId);
  
    const totalPrice = evt.price * qty;
  
    const data = {
      name,
      email,
      phone,
      event: evt.name,
      quantity: qty,
      total: totalPrice
    };
  
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
      <p><strong>Event:</strong> ${data.event}</p>
      <p><strong>Jumlah Tiket:</strong> ${data.quantity}</p>
      <p><strong>Total Bayar:</strong> Rp${data.total.toLocaleString('id-ID')}</p>
    `;
    output.style.display = 'block';
  }
  