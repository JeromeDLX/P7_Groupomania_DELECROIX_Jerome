const res = require("express/lib/response");

const comment1 = {
    id: "comment1",
    user:"user2@gmail.com",
    content: "C'est mon premier commentaire !"
};

const comment2 = {
    id: "comment2",
    user:"user2@gmail.com",
    content: "C'est mon deuxieme commentaire !"
};

const post1 = {
    id: "1",
    user: "user1@hotmail.fr",
    content: "Premier post",
    url: "https://picsum.photos/400/700",
    comments: [comment1]
};

const post2 = {
    id: "2",
    user: "user1@hotmail.fr",
    content: "Deuxieme post",
    url: "https://picsum.photos/400/700",
    comments: [comment1, comment2]
};

const post3 = {
    id: "3",
    user: "user1@hotmail.fr",
    content: "Troisieme post",
    url: "https://picsum.photos/400/700",
    comments: []
};

const posts = [post1, post2, post3];

// Sert à récupérer les posts présent sur le site
function getPosts(req, res) {
    const email = req.email
    res.send({ posts, email })
};

// Sert à créer un post sur le site
function createPost(req, res) {
    const content = req.body.content
    const hasImage = req.file !=null

    const url = hasImage ? createImageUrl(req) : null
    const email = req.email
    const post = { content, user: email, url, comments: [], id: String(posts.length + 1) }
    posts.unshift(post)
    res.send({ post })
};

// Sert à créer l'url de l'image uploader
function createImageUrl(req) {
    let pathToImage = req.file.path.replace("\\", "/")
    const protocol = req.protocol
    const host = req.get("host")
    return `${protocol}://${host}/${pathToImage}`
};

// Sert à créer un commentaire sur un post
function createCommentary(req, res){
    const postId = req.params.id
    const post = posts.find((post) => post.id === postId)
    
    if (post == null) {
        return res.status(404).send({ error: "Post non trouvé"})
    }
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const user = req.email
    const commentToSend = { id, user, content: req.body.comment}
    post.comments.push(commentToSend)
    res.send({post})
};

// Sert à supprimer un post
function deletePost(req, res) {
    const postId = req.params.id
    const post = posts.find((post) => post.id === postId)
    if (post == null) {
        return res.status(404).send({error: "Post non trouvé"})
    }
    const index = posts.indexOf(post)
    posts.splice(index, 1)
    deleteComments(post)
    res.send({ message: `Post ${posts} à été supprimé`, posts})
};

// Sert à supprimer les commentaires à la suppression d'un post
function deleteComments(post) {
    posts.comments = []
};

module.exports = {getPosts, createPost, createCommentary, deletePost};