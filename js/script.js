function calculate() {
  // Mengambil nilai input untuk semua akun
  const cb1 = parseFloat(document.getElementById('cb1').value);
  const lead1 = parseFloat(document.getElementById('lead1').value);
  const cpl1 = parseFloat(document.getElementById('cpl1').value);
  const spent1 = parseFloat(document.getElementById('spent1').value);
  const landas1 = parseFloat(document.getElementById('landas1').value);
  
  const cb2 = parseFloat(document.getElementById('cb2').value);
  const lead2 = parseFloat(document.getElementById('lead2').value);
  const cpl2 = parseFloat(document.getElementById('cpl2').value);
  const spent2 = parseFloat(document.getElementById('spent2').value);
  const landas2 = parseFloat(document.getElementById('landas2').value);
  
  const cb3 = parseFloat(document.getElementById('cb3').value);
  const lead3 = parseFloat(document.getElementById('lead3').value);
  const cpl3 = parseFloat(document.getElementById('cpl3').value);
  const spent3 = parseFloat(document.getElementById('spent3').value);
  const landas3 = parseFloat(document.getElementById('landas3').value);
  
  const cb4 = parseFloat(document.getElementById('cb4').value);
  const lead4 = parseFloat(document.getElementById('lead4').value);
  const cpl4 = parseFloat(document.getElementById('cpl4').value);
  const spent4 = parseFloat(document.getElementById('spent4').value);
  const landas4 = parseFloat(document.getElementById('landas4').value);

  const cb5 = parseFloat(document.getElementById('cb5').value);
  const lead5 = parseFloat(document.getElementById('lead5').value);
  const cpl5 = parseFloat(document.getElementById('cpl5').value);
  const spent5 = parseFloat(document.getElementById('spent5').value);
  const landas5 = parseFloat(document.getElementById('landas5').value);

  // Fungsi untuk menghitung metrik
  function calculateMetrics(cb, lead, cpl, spent, landas) {
    let realLead = '-';
    let transisiHasil = '-';
    let cprl = '-';

    if (!isNaN(cb) && !isNaN(lead) && lead != 0) {
        realLead = (cb / lead) * 100;
    }

    if (!isNaN(lead) && !isNaN(landas) && landas != 0) {
        transisiHasil = (lead / landas) * 100;
    }

    if (!isNaN(spent) && !isNaN(cb) && cb != 0) {
        cprl = spent / cb;

    } else if (!isNaN(spent) && (isNaN(cb) || cb == 0)) {
        cprl = spent;
    }

    return {
        realLead: isNaN(realLead) ? '-' : realLead.toFixed(2),
        transisiHasil: isNaN(transisiHasil) ? '-' : transisiHasil.toFixed(2),
        cprl: isNaN(cprl) ? '-' : cprl.toFixed(3),
        cpl: isNaN(cpl) ? '-' : cpl,
        lead: isNaN(lead) ? '-' : lead,
        spent: isNaN(spent) ? '-' : spent.toFixed(3)
    };
}


  // Menghitung metrik untuk semua akun
  const result1 = calculateMetrics(cb1, lead1, cpl1, spent1, landas1);
  const result2 = calculateMetrics(cb2, lead2, cpl2, spent2, landas2);
  const result3 = calculateMetrics(cb3, lead3, cpl3, spent3, landas3);
  const result4 = calculateMetrics(cb4, lead4, cpl4, spent4, landas4);
  const result5 = calculateMetrics(cb5, lead5, cpl5, spent5, landas5);

  // Menampilkan hasil
  document.getElementById('result').innerHTML = `
      <p>Kondisi iklan FB WA</p>
      <p>* Fujinka 01 (wa) : lead ${result1.lead}, cpl ${result1.cpl}, real lead ${result1.realLead}%, t.h ${result1.transisiHasil}%, CPRL ${result1.cprl}</p>
      <p>* Fujinka 02 (wa) : lead ${result2.lead}, cpl ${result2.cpl}, real lead ${result2.realLead}%, t.h ${result2.transisiHasil}%,  CPRL ${result2.cprl}</p>
      <p>* Fujinka 03 (wa) : lead ${result3.lead}, cpl ${result3.cpl}, real lead ${result3.realLead}%, t.h ${result3.transisiHasil}%, CPRL ${result3.cprl}</p>
      <p>* Fujinka 04 (wa) : lead ${result4.lead}, cpl ${result4.cpl}, real lead ${result4.realLead}%, t.h ${result4.transisiHasil}%, CPRL ${result4.cprl}</p>
      <p>* Fujinka 05 (wa) : lead ${result5.lead}, cpl ${result5.cpl}, real lead ${result5.realLead}%, t.h ${result5.transisiHasil}%, CPRL ${result5.cprl}</p>
      `;
  `;
}
