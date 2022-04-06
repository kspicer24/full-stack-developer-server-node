import posts from "../tuits/tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) =>
    res.json(tuits);

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const tuitToUpdate = tuits.find(t => t.id === tuitdIdToUpdate);
    tuitToUpdate.tuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? tuitToUpdate : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
