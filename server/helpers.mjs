export const protectedFunc = (func, userRequired = false) => (req, res) => {
    if(req.user == null && userRequired){
        const msg = "Login is missing, but it is required for this action"
        console.error(msg)
        res.status(500).send(msg)
        return
    }

    try{
        func(req, res)
    }catch(err){
        console.error(err)
        res.status(500).send(err)
    }
}
export const protectedAsyncFunc = (func, userRequired = false) => async (req, res) => {
    if(req.user == null && userRequired){
        const msg = "Login is missing, but it is required for this action"
        console.error(msg)
        res.status(500).send(msg)
        return
    }
    try{
        await func(req, res)
    }catch(err){
        console.error(err)
        res.status(500).send(err)
    }
}