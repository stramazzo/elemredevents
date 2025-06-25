# 🎯 Configurazione Google Forms per SchiacciArte

## 📋 Passi per creare il Google Form

### 1. **Crea il Google Form**
1. Vai su [forms.google.com](https://forms.google.com)
2. Clicca su "+" per creare un nuovo form
3. Titolo: **"Iscrizione SchiacciArte – Giorno 1"**
4. Descrizione: **"Modulo di iscrizione per l'evento SchiacciArte del 1° luglio 2025"**

### 2. **Aggiungi i campi del form**

#### **Campo 1: Nome e Cognome**
- Tipo: **Testo breve**
- Domanda: **"Nome e Cognome *"**
- Obbligatorio: ✅ Sì
- Validazione: Testo

#### **Campo 2: Email**
- Tipo: **Email**
- Domanda: **"Email *"**
- Obbligatorio: ✅ Sì
- Validazione: Email

#### **Campo 3: Numero di partecipanti**
- Tipo: **Numero**
- Domanda: **"Numero di partecipanti *"**
- Obbligatorio: ✅ Sì
- Validazione: Min 1, Max 10

#### **Campo 4: Ingredienti**
- Tipo: **Testo lungo**
- Domanda: **"Ingredienti che desideri portare (opzionale)"**
- Obbligatorio: ❌ No
- Descrizione: "Es: Prosciutto crudo, burrata, verdure grigliate..."

#### **Campo 5: Note aggiuntive**
- Tipo: **Testo lungo**
- Domanda: **"Note aggiuntive (opzionale)"**
- Obbligatorio: ❌ No
- Descrizione: "Allergie, preferenze, ecc..."

### 3. **Configura le impostazioni**

#### **Impostazioni generali:**
- ✅ **Raccogli indirizzi email**
- ✅ **Limitare a 1 risposta per persona**
- ✅ **Mostra barra di progresso**

#### **Impostazioni risposte:**
- ✅**Ricevi notifiche email per nuove risposte**
- ✅ **Includi risposte in notifiche email** 

### 4. **Ottieni il link del form**
1. Clicca su **"Invia"**
2. Copia il link del form (es: `https://forms.gle/ABC123DEF456`)
3. Sostituisci `YOUR_FORM_ID_HERE` nel file `schiacciarte.html`

### 5. **Configura Google Sheets (opzionale)**
1. Nel form, vai su **"Risposte"**
2. Clicca sull'icona **Google Sheets**
3. Crea un nuovo foglio o collega uno esistente
4. Le iscrizioni verranno salvate automaticamente

## 🔗 Aggiorna il link nel sito

Nel file `schiacciarte.html`, riga ~95, sostituisci:
```html
<a href="https://forms.gle/YOUR_FORM_ID_HERE" target="_blank" class="google-form-button">
```

Con il link reale del tuo Google Form:
```html
<a href="https://forms.gle/ABC123DEF456" target="_blank" class="google-form-button">
```

## 📧 Notifiche email

### **Per gli organizzatori:**
- Riceverai un'email per ogni nuova iscrizione
- Le email includeranno tutti i dati inseriti
- Potrai rispondere direttamente agli iscritti

### **Per gli iscritti:**
- Riceveranno una conferma automatica
- Potranno modificare le loro risposte
- Riceveranno un riepilogo della loro iscrizione

## 🎯 Vantaggi di Google Forms

✅ **Gratuito e affidabile**  
✅ **Salvataggio automatico**  
✅ **Notifiche email**  
✅ **Facile da gestire**  
✅ **Integrazione con Google Sheets**  
✅ **Analytics delle risposte**  
✅ **Limitazione a 1 risposta per persona**  
✅ **Validazione automatica dei campi**

## 📱 Test del form

Dopo aver configurato tutto:
1. Testa il form con una email di prova
2. Verifica che le notifiche arrivino correttamente
3. Controlla che i dati vengano salvati in Google Sheets
4. Testa la validazione dei campi obbligatori 