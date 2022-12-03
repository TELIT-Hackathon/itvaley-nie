import Session from './Models/Session.mjs'
import User from './Models/User.mjs'

export const processUser = async req => {
    const auth = req.get('Authorization')

    const session = await Session.findOne({'token': auth || ''})
    if(!session)
        return null

    return await User.findOne({'id': session.user})
}