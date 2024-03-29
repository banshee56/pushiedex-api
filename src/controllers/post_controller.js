import Post from '../models/post_model';

export async function createPost(postFields) {
  const post = new Post();
  post.title = postFields.title;
  post.coverUrl = postFields.coverUrl;
  post.content = postFields.content;
  post.tags = postFields.tags;
  post.gender = postFields.gender;
  post.height = postFields.height;
  post.weight = postFields.weight;
  console.log(postFields);

  try {
    // await creating a post
    const newPost = await post.save();
    // return post
    return newPost;
  } catch (error) {
    throw new Error(`create post error: ${error}`);
  }
}

export async function getPosts() {
  try {
    // await finding posts
    const allPosts = await Post.find({}).sort({ createdAt: -1 });
    // return posts
    return allPosts;
  } catch (error) {
    throw new Error(`get all posts error: ${error}`);
  }
}

export async function getPost(id) {
  try {
    const onePost = await Post.findById(id);
    if (!onePost) {
      throw new Error('Post Already Deleted');
    }
    return onePost;
  } catch (error) {
    throw new Error(`get one post error: ${error}`);
  }
}
export async function deletePost(id) {
  try {
    const post = await Post.findByIdAndDelete(id);
    return post;
  } catch (error) {
    throw new Error(`get one post error: ${error}`);
  }
}
export async function updatePost(id, postFields) {
  try {
    const post = await Post.findByIdAndUpdate(id, postFields, { new: true });
    return post;
  } catch (error) {
    throw new Error(`get one post error: ${error}`);
  }
}
