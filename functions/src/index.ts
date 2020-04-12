import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase)

exports.calculateTotals = functions.firestore
  .document('trades/{tradeId}')
  .onWrite(() => {
    const tradesRef = admin.firestore().collection('trades')
    const totalRef = admin.firestore().doc('totals/total')
    tradesRef.get().then((snapshot) => {
      let count = 0
      snapshot.forEach(() => {
        count += 1
      })
      totalRef.update({ value: count })
    })
  })
