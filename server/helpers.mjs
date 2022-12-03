export const protectedFunc = (func) => (req, res) => {
    try{
        func(req, res)
    }catch(err){
        console.error(err)
        res.status(500).send(err)
    }
}
export const protectedAsyncFunc = (func) => async (req, res) => {
    try{
        await func(req, res)
    }catch(err){
        console.error(err)
        res.status(500).send(err)
    }
}