import { Router } from 'express';
import * as Posts from './controllers/post_controller';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

const handleCreate = async (req, res) => {
  try {
    const postInitInfo = req.body;
    const result = await Posts.createPost(postInitInfo);
    res.json(result); // send back the result
  } catch (error) {
    res.status(500).json({ error }); // or catch the error and send back an error
  }
};

const handleFetchAll = async (req, res) => {
  try {
    const result = await Posts.getPosts();
    res.json(result); // send back the result
  } catch (error) {
    res.status(500).json({ error }); // or catch the error and send back an error
  }
};

const handleFetch = async (req, res) => {
  try {
    const result = await Posts.getPost(req.params.id);
    res.json(result); // send back the result
  } catch (error) {
    res.status(500).json({ error }); // or catch the error and send back an error
  }
};

const handleUpdate = async (req, res) => {
  try {
    const result = await Posts.updatePost(req.params.id, req.body);
    res.json(result); // send back the result
  } catch (error) {
    res.status(500).json({ error }); // or catch the error and send back an error
  }
};

const handleDelete = async (req, res) => {
  try {
    const result = await Posts.deletePost(req.params.id);
    res.json(result); // send back the result
  } catch (error) {
    res.status(500).json({ error }); // or catch the error and send back an error
  }
};

/// your routes will go here
router.route('/posts')
  .post(handleCreate)
  .get(handleFetchAll);

router.route('/posts/:id')
  .get(handleFetch)
  .put(handleUpdate)
  .delete(handleDelete);

export default router;
