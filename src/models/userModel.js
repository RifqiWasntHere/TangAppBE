const generateId = require('../config/nanoid')
const db = require('../config/firestore')

const addUser = async (user) => {
  const uid = generateId(15)
  const usersCollection = db.collection('users').doc(uid)
  if (!user.empty) {
    try {
      await usersCollection.set({
        email: user.emails[0].value,
        username: user.displayName,
      })
    } catch (error) {
      console.error('Error Adding User', error)
    }
  }
}

const getUserByEmail = async (userEmail) => {
  const usersCollection = db.collection('users')

  const userSnapshot = await usersCollection
    .where('email', '==', userEmail)
    .get()

  try {
    if (userSnapshot.empty) {
      return null
    }

    user = userSnapshot.docs
    console.log(user.uid)
    return {
      user,
    }
  } catch (error) {
    return console.log("error while getting user's email")
  }
}

module.exports = { addUser, getUserByEmail }
