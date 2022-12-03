import Session from './Models/Session.mjs'
import User from './Models/User.mjs'

export const processUser = async req => {
    const auth = req.get('Authorization')

    const session = await Session.findOne({'token': auth || ''}).exec()
    if(!session)
        return null

    const user = await User.findOne({'_id': session.user}).exec()
    if(user){
        user.password = undefined
    }
    return user
}