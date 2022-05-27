import express from 'express';

const router = express.Router();

router.get('/images/:filename', (req, res) => {
  const path = './images';
  res.sendFile(req.params.filename, { root: path });
});

export default router;