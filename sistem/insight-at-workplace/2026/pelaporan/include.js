// pelaporan/include.js
async function loadComponent(elementId, fileUrl, activeNavId) {
  try {
    let response = await fetch(fileUrl);
    if (response.ok) {
      let html = await textResponse(response);
      document.getElementById(elementId).innerHTML = html;
      
      // Mengaktifkan tab navigasi semasa
      if (activeNavId) {
        let activeEl = document.getElementById(activeNavId);
        if (activeEl) activeEl.classList.add('active');
      }
    }
  } catch (err) {
    console.error('Gagal memuatkan komponen:', fileUrl, err);
  }
}

async function textResponse(res) {
  return await res.text();
}

function logout() {
  sessionStorage.clear();
  window.location.href = 'index.html';
}