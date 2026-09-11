const ralInput = document.getElementById("ral");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");
const resultRal = document.getElementById("resultRal");
const resultContributi = document.getElementById("resultContributi");
const resultIrpefLorda = document.getElementById("resultIrpefLorda");
const resultDetrazioneLavoro = document.getElementById("resultDetrazioneLavoro");
const resultCuneo = document.getElementById("resultCuneo");
const resultAddizionaleRegionale = document.getElementById("resultAddizionaleRegionale");
const resultAddizionaleComunale = document.getElementById("resultAddizionaleComunale");
const resultNettoAnnuale = document.getElementById("resultNettoAnnuale");
const resultNettoMensile = document.getElementById("resultNettoMensile");
const descriptionDetrazioneLavoro = document.getElementById("descriptionDetrazioneLavoro");
const descriptionCuneo = document.getElementById("descriptionCuneo");
const descriptionContributi = document.getElementById("descriptionContributi");
const descriptionIrpefLorda = document.getElementById("descriptionIrpefLorda");
const descriptionAddizionaleComunale = document.getElementById("descriptionAddizionaleComunale");
const descriptionAddizionaleRegionale = document.getElementById("descriptionAddizionaleRegionale");
const resultTrattamentoIntegrativo = document.getElementById("resultTrattamentoIntegrativo");
const descriptionTrattamentoIntegrativo = document.getElementById("descriptionTrattamentoIntegrativo");
const inputError = document.getElementById("inputError");

calculateBtn.addEventListener("click", function () {
  const ral = Number(ralInput.value);

  if (!ralInput.value || ral <= 0) {
    inputError.textContent =
      "Inserisci una RAL valida maggiore di 0.";
    inputError.style.display = "block";
    result.style.display = "none";
    return;
  }

  inputError.style.display = "none";

  let contributi;

  if (ral <= 56224) {
    contributi = ral * 0.0919;
  } else {
    contributi =
      ral * 0.0919 +
      (ral - 56224) * 0.01;
  }

  const imponibile = ral - contributi;

  let irpefLorda;

  if (imponibile <= 28000) {
    irpefLorda = imponibile * 0.23;
  } else if (imponibile <= 50000) {
    irpefLorda =
      28000 * 0.23 +
      (imponibile - 28000) * 0.33;
  } else {
    irpefLorda =
      28000 * 0.23 +
      22000 * 0.33 +
      (imponibile - 50000) * 0.43;
  }

  let detrazioneLavoro = 0;

  if (imponibile <= 15000) {
    detrazioneLavoro = 1955;
  } else if (imponibile <= 28000) {
    detrazioneLavoro =
      1910 +
      1190 * ((28000 - imponibile) / 13000);
  } else if (imponibile <= 50000) {
    detrazioneLavoro =
      1910 * ((50000 - imponibile) / 22000);
  }

  if (imponibile > 25000 && imponibile <= 35000) {
    detrazioneLavoro += 65;
  }

  let beneficioCuneo = 0;
  let detrazioneCuneo = 0;

  if (imponibile <= 8500) {
    beneficioCuneo = imponibile * 0.071;
  } else if (imponibile <= 15000) {
    beneficioCuneo = imponibile * 0.053;
  } else if (imponibile <= 20000) {
    beneficioCuneo = imponibile * 0.048;
  } else if (imponibile <= 32000) {
    detrazioneCuneo = 1000;
  } else if (imponibile <= 40000) {
    detrazioneCuneo =
      1000 * ((40000 - imponibile) / 8000);
  }

  let irpefNetta =
    irpefLorda -
    detrazioneLavoro -
    detrazioneCuneo;

  if (irpefNetta < 0) {
    irpefNetta = 0;
  }

  let addizionaleRegionale = 0;

  if (irpefNetta > 10.33) {
    if (imponibile <= 15000) {
      addizionaleRegionale = imponibile * 0.0133;
    } else if (imponibile <= 28000) {
      addizionaleRegionale =
        15000 * 0.0133 +
        (imponibile - 15000) * 0.0193;
    } else if (imponibile <= 50000) {
      addizionaleRegionale =
        15000 * 0.0133 +
        13000 * 0.0193 +
        (imponibile - 28000) * 0.0278;
    } else {
      addizionaleRegionale =
        15000 * 0.0133 +
        13000 * 0.0193 +
        22000 * 0.0278 +
        (imponibile - 50000) * 0.0333;
    }
  }

  let addizionaleComunale = 0;

  if (imponibile > 15000) {
    addizionaleComunale = imponibile * 0.008;
  }

  let trattamentoIntegrativo = 0;

  if (
    imponibile <= 15000 &&
    irpefLorda > 1880
  ) {
    trattamentoIntegrativo = 1200;
  }

  const nettoAnnuale =
    ral -
    contributi -
    irpefNetta -
    addizionaleRegionale -
    addizionaleComunale +
    beneficioCuneo +
    trattamentoIntegrativo;

  const nettoMensile = nettoAnnuale / 13;

  console.log("RAL:", ral);
  console.log("Contributi:", contributi);
  console.log("Imponibile:", imponibile);
  console.log("IRPEF lorda:", irpefLorda);
  console.log("Detrazione lavoro:", detrazioneLavoro);
  console.log("Beneficio cuneo:", beneficioCuneo);
  console.log("Detrazione cuneo:", detrazioneCuneo);
  console.log("IRPEF netta:", irpefNetta);
  console.log("Addizionale regionale:", addizionaleRegionale);
  console.log("Addizionale comunale:", addizionaleComunale);
  console.log("Trattamento integrativo:", trattamentoIntegrativo);
  console.log("Netto annuale:", nettoAnnuale);
  console.log("Netto medio mensile:", nettoMensile);

  resultRal.textContent = ral.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR"
  });

  resultContributi.textContent =
    "- " +
    contributi.toLocaleString("it-IT", {
      style: "currency",
      currency: "EUR"
    });

  if (ral <= 56224) {
    descriptionContributi.textContent =
      "Aliquota ordinaria del 9,19% a carico del lavoratore";
  } else {
    descriptionContributi.textContent =
      "9,19% più 1% sulla quota di RAL oltre 56.224 €";
  }

  resultIrpefLorda.textContent =
    "- " +
    irpefLorda.toLocaleString("it-IT", {
      style: "currency",
      currency: "EUR"
    });

  if (imponibile <= 28000) {
    descriptionIrpefLorda.textContent =
      "Applicata l'aliquota IRPEF del 23%";
  } else if (imponibile <= 50000) {
    descriptionIrpefLorda.textContent =
      "Applicati gli scaglioni IRPEF del 23% e 33%";
  } else {
    descriptionIrpefLorda.textContent =
      "Applicati gli scaglioni IRPEF del 23%, 33% e 43%";
  }

  resultDetrazioneLavoro.textContent =
    "+ " +
    detrazioneLavoro.toLocaleString("it-IT", {
      style: "currency",
      currency: "EUR"
    });

  if (imponibile > 25000 && imponibile <= 35000) {
    descriptionDetrazioneLavoro.textContent =
      "Compresa la maggiorazione prevista di 65 €";
  } else {
    descriptionDetrazioneLavoro.textContent =
      "Calcolata in base al reddito imponibile";
  }

  resultCuneo.textContent =
    "+ " +
    (beneficioCuneo + detrazioneCuneo).toLocaleString("it-IT", {
      style: "currency",
      currency: "EUR"
    });

  if (beneficioCuneo > 0) {
    descriptionCuneo.textContent =
      "Somma aggiuntiva prevista per redditi fino a 20.000 €";
  } else if (detrazioneCuneo > 0) {
    descriptionCuneo.textContent =
      "Detrazione fiscale prevista per questa fascia di reddito";
  } else {
    descriptionCuneo.textContent =
      "Nessun beneficio previsto per questa fascia di reddito";
  }

  resultTrattamentoIntegrativo.textContent =
    "+ " +
    trattamentoIntegrativo.toLocaleString("it-IT", {
      style: "currency",
      currency: "EUR"
    });

  if (trattamentoIntegrativo > 0) {
    descriptionTrattamentoIntegrativo.textContent =
      "Trattamento integrativo riconosciuto: 1.200 € annui";
  } else if (imponibile <= 15000) {
    descriptionTrattamentoIntegrativo.textContent =
      "Non spettante in base ai requisiti del modello";
  } else if (imponibile <= 28000) {
    descriptionTrattamentoIntegrativo.textContent =
      "Dipende dalla situazione fiscale personale";
  } else {
    descriptionTrattamentoIntegrativo.textContent =
      "Non previsto oltre 28.000 € di reddito";
  }

  resultAddizionaleRegionale.textContent =
    "- " +
    addizionaleRegionale.toLocaleString("it-IT", {
      style: "currency",
      currency: "EUR"
    });

  if (addizionaleRegionale === 0) {
    descriptionAddizionaleRegionale.textContent =
      "Non dovuta in assenza di IRPEF netta";
  } else if (imponibile <= 15000) {
    descriptionAddizionaleRegionale.textContent =
      "Applicata l'aliquota regionale dell'1,33%";
  } else if (imponibile <= 28000) {
    descriptionAddizionaleRegionale.textContent =
      "Applicati gli scaglioni regionali dell'1,33% e 1,93%";
  } else if (imponibile <= 50000) {
    descriptionAddizionaleRegionale.textContent =
      "Applicati gli scaglioni regionali fino al 2,78%";
  } else {
    descriptionAddizionaleRegionale.textContent =
      "Applicati gli scaglioni regionali fino al 3,33%";
  }

  resultAddizionaleComunale.textContent =
    "- " +
    addizionaleComunale.toLocaleString("it-IT", {
      style: "currency",
      currency: "EUR"
    });

  if (imponibile <= 15000) {
    descriptionAddizionaleComunale.textContent =
      "Esente fino a 15.000 € di reddito imponibile";
  } else {
    descriptionAddizionaleComunale.textContent =
      "Aliquota dello 0,8% nel Comune di Reggio Emilia";
  }

  resultNettoAnnuale.textContent =
    nettoAnnuale.toLocaleString("it-IT", {
      style: "currency",
      currency: "EUR"
    });

  resultNettoMensile.textContent =
    nettoMensile.toLocaleString("it-IT", {
      style: "currency",
      currency: "EUR"
    });

  result.style.display = "block";
});

closeResult.addEventListener("click", function () {
  result.classList.add("closing");

  result.style.height = result.scrollHeight + "px";
  result.style.opacity = "1";

  requestAnimationFrame(function () {
    result.style.height = "0";
    result.style.opacity = "0";
  });

  setTimeout(function () {
    result.style.display = "none";
    result.style.height = "";
    result.style.opacity = "";
    result.classList.remove("closing");
  }, 800);
});

ralInput.addEventListener("focus", function () {
  result.style.display = "none";
});

ralInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculateBtn.click();
  }
});