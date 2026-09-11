# Calcolatore RAL → Netto 2026

Web app che stima il netto annuale e il netto medio mensile a partire dalla RAL, applicando le principali regole contributive e fiscali previste per il 2026.

## Caso di riferimento

Il calcolo considera un lavoratore:

- dipendente del settore privato non agricolo;
- a tempo indeterminato;
- residente nel Comune di Reggio Emilia;
- impiegato per l'intero anno;
- senza familiari a carico, altri redditi o agevolazioni particolari.

Il netto mensile è mostrato come media su 13 mensilità.

## Come funziona

Il calcolo segue questo percorso:

**RAL → contributi INPS → reddito imponibile → IRPEF → detrazioni e benefici → addizionali → netto annuale → netto medio mensile**

I calcoli vengono eseguiti con la precisione completa di JavaScript e arrotondati a due decimali solo nella visualizzazione.

## Componenti considerate

Il modello comprende:

- contributi INPS a carico del lavoratore e contributo aggiuntivo dell'1% oltre la soglia prevista;
- scaglioni IRPEF 2026;
- detrazione per lavoro dipendente;
- misure relative al cuneo fiscale;
- trattamento integrativo, quando determinabile;
- addizionale regionale IRPEF dell'Emilia-Romagna;
- addizionale comunale IRPEF di Reggio Emilia.

## Assunzioni e semplificazioni

Alcune regole sono state volutamente semplificate per mantenere il modello coerente con il caso di riferimento. In particolare, il calcolo non gestisce situazioni fiscali personali, altri redditi, familiari a carico o agevolazioni specifiche.

Il contributo INPS aggiuntivo dell'1% viene annualizzato, mentre nella gestione reale viene applicato con criterio mensile e successivo conguaglio.

Per redditi tra 15.001 € e 28.000 €, l'eventuale trattamento integrativo può dipendere da condizioni personali non disponibili nel calcolatore e non viene quindi attribuito automaticamente.

## Fonti

Le regole utilizzate sono state verificate attraverso fonti istituzionali:

**PARAMETRI CONTRIBUTIVI 2026 E CONTRIBUTO AGGIUNTIVO DELL'1%**  
[INPS – Circolare n. 6 del 30 gennaio 2026](https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2026.01.circolare-numero-6-del-30-01-2026_15151.html)

**ALIQUOTA CONTRIBUTIVA FPLD A CARICO DEL LAVORATORE**  
[INPS – Circolare n. 101 del 29 novembre 2024](https://www.inps.it/it/it/inps-comunica/atti/circolari-messaggi-e-normativa/dettaglio.circolari-e-messaggi.2024.11.circolare-numero-101-del-29-11-2024_14714.html)

**MODIFICA DELL'ALIQUOTA IRPEF DEL SECONDO SCAGLIONE**  
[Normattiva – Legge 30 dicembre 2025, n. 199](https://www.normattiva.it/eli/stato/LEGGE/2025/12/30/199/CONSOLIDATED)

**MISURE RELATIVE AL CUNEO FISCALE**  
[Normattiva – Legge 30 dicembre 2024, n. 207](https://www.normattiva.it/eli/id/2024/12/31/24G00229/ORIGINAL)

**TRATTAMENTO INTEGRATIVO**  
[Normattiva – Decreto-legge 5 febbraio 2020, n. 3](https://www.normattiva.it/atto/caricaDettaglioAtto?atto.codiceRedazionale=20G00013&atto.dataPubblicazioneGazzetta=2020-02-05&bloccoAggiornamentoBreadCrumb=true&classica=true&dataVigenza=05%2F01%2F2026&generaTabId=true&tipoDettaglio=singolavigenza)

**ADDIZIONALE REGIONALE IRPEF – EMILIA-ROMAGNA 2026**  
[Regione Emilia-Romagna – Addizionale regionale IRPEF](https://finanze.regione.emilia-romagna.it/tributi-regionali/imposte/addizionale-irpef/quanto-come-e-quando-si-paga)

**ADDIZIONALE COMUNALE IRPEF – REGGIO EMILIA 2026**  
[Dipartimento delle Finanze – Addizionale comunale IRPEF di Reggio Emilia](https://www1.finanze.gov.it/finanze2/dipartimentopolitichefiscali/fiscalitalocale/nuova_addcomirpef/risultato.htm?cc=H223&pr=RE&r=1)
## Tecnologie

**HTML5 · CSS3 · JavaScript**

Il progetto non utilizza framework o librerie esterne.