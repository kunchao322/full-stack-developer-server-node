import posts from "./data/tuits.js";
let tuits = posts;

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    tuits.push(newTuit);
    res.json(tuits);
}

const findAllTuits = (req, res) => {
    res.json(tuits);
}
const updateTuit = (req, res) => {
    const tuitIDToUpdate = req.params.id;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitIDToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitIDToDelete = req.params.tid;
    tuits = tuits.filter(t => t.id !== tuitIDToDelete);
    res.sendStatus(200);
}
