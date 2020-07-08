import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema(
  {
    userId: String,
    text: String,
    time: {
      type: Date,
      default: new Date()
    },
    meta : {
      type: Object,
      default: {}
    }
  },
  {
    timestamp: true
  }
)

const channelSchema = new mongoose.Schema(
  {
    channelName: {
      type: String,
      required: true,
      unique: true,
    },
    usersId: {
      type: [String]
    },
    messages: {
      type: [MessageSchema]
    }
  },
  {
    timestamp: true
  }
)

channelSchema.pre('save', async function (next) {
  return next()
})

// channelSchema.statics = {
//   async findAndValidateUser({ email, password }) {
//     if (!email) {
//       throw new Error('No Email')
//     }
//     if (!password) {
//       throw new Error('No Password')
//     }

//     const user = await this.findOne({ email }).exec()
//     if (!user) {
//       throw new Error('No User')
//     }

//     const isPasswordOk = await user.passwordMatches(password)

//     if (!isPasswordOk) {
//       throw new Error('PasswordIncorrect')
//     }

//     return user
//   }
// }
export default mongoose.model('channels', channelSchema)
