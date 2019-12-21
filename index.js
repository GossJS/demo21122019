require('http')
.Server((req, res) => {
  if (req.url === '/hello') res.end('Hello master!'); else res.end('demo 21122019 working!');
})
.listen(process.env.PORT || 4321);
