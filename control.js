function Freeze() {
    const newElement = document.createElement('div');
    newElement.textContent = 'Sound is playing right now.';
    newElement.classList.add('show'); // Přidání třídy pro zobrazený obsah
  
    const header = document.getElementById('freeze');
    header.appendChild(newElement);
  
    const casovyLimit = rest * 8;
    const casZobrazeni = casovyLimit * 1000;
  
    setTimeout(function() {
      newElement.classList.add('hide'); // Přidání třídy pro skrytý obsah
    }, casZobrazeni);
  }
  