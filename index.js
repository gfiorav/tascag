const router = require('express')();

router.get('/fuera/*', (request, response) => {
  const name = request.path.split('/')[2];
  response.send(`Te has cagao fuera, ${name}`);
});

router.listen(process.env.PORT || 3000, () => {});
