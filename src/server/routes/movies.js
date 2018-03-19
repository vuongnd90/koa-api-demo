const Router = require('koa-router');
const queries = require('../db/queries/movies');

const router = new Router();
const BASE_URL = `/api/v1/movies`;

router.get(BASE_URL, async (ctx) => {
  try {
    const movies = await queries.getAllMovies();
    ctx.body = {
      status: 'success',
      data: movies,
    }
  } catch (error) {
    console.log(error);
  }
});

router.get(`${BASE_URL}/:id`, async ctx => {
  try {
    const movie = await queries.getSingleMovie(ctx.params.id);
    ctx.body = {
      status: 'success',
      data: movie,
    }
  } catch (error) {
    console.log(error);
  }
});


router.post(BASE_URL, async ctx => {
  try {
    console.log("ctx.request.body", ctx.request.body)
    const movie = await queries.addMovie(ctx.request.body);
    if (movie.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: movie
      }
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: movie.detail || movie.error
      }
    }
    
  } catch (error) {
    console.log(error)
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: error.detail || error
    }
  }
})

module.exports = router;