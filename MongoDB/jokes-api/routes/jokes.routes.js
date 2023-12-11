const jokesController=require('../controllers/jokes.contoller')

module.exports=(app)=>{
    app.get('/api/jokes',jokesController.DisplayAll)
    app.get('/api/jokes/:id',jokesController.DisplayJoke)
    app.post('/api/jokes',jokesController.addJoke)
    app.patch('/api/jokes/:id',jokesController.updateJoke)
    app.delete('/api/jokes/:id',jokesController.DeleteJoke)
}