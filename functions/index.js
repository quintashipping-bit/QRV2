const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

const db = admin.firestore()

exports.updateFxRates =
functions.pubsub
.schedule('every day 06:00')
.timeZone('Europe/London')
.onRun(async () => {

  try {

    const res = await fetch(
      'https://api.exchangerate.host/latest?base=GBP&symbols=USD,EUR,JPY,CNY,HKD,AED,AUD,CAD'
    )

    const json = await res.json()

    const batch = db.batch()

    Object.keys(json.rates).forEach(code => {

      const ref =
        db.collection('fxRates').doc(code)

      batch.set(ref, {
        code,
        rate: json.rates[code],
        updated:
          admin.firestore.FieldValue.serverTimestamp(),
        source: 'Cloud Function',
        base: 'GBP'
      })

    })

    await batch.commit()

    return null

  } catch (err) {
    console.error(err)
    return null
  }

})