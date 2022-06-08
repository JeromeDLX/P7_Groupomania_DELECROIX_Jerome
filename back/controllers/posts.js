const { prisma } = require('../database/database');

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
async function getPosts(req, res) {
    const email = req.email
    const posts = await prisma.post.findMany({
        include: {
            comments: {
                orderBy: {
                    createdAt: "asc"
                },
                include: {
                    user: {
                        select: {
                            email: true
                        }
                    }
                }
            },
            user: {
                select: {
                    email: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    res.send({ posts, email })
};

// Sert à créer un post sur le site
async function createPost(req, res) {
    const content = req.body.content
    const email = req.email
    
    try {
    const user = await prisma.user.findUnique({ where: { email }})
    const userId = user.id
    const post = { content, userId }
    addImageUrlInPost(req, post)
    
    const postResult = await prisma.post.create({ data: post })
    res.send({ post: postResult })
    } catch(err) {
        res.status(500).send({ error: "La création du post a échoué"})
    }
};

// Sert à créer l'url de l'image uploader
function addImageUrlInPost(req, post) {
    const hasImage = req.file !=null
    if (!hasImage) return
    let pathToImage = req.file.path.replace("\\", "/")
    const protocol = req.protocol
    const host = req.get("host")
    const url = `${protocol}://${host}/${pathToImage}`
    post.url = url
};

// Sert à créer un commentaire sur un post
async function createCommentary(req, res){
    const postId = Number(req.params.id)
    const post = await prisma.post.findUnique({
        where: { id: postId },
        include: {
            user: {
                select: {
                    id: true
                }
            }
        }
    })
    console.log("POST:", post)
    if (post == null) {
        return res.status(404).send({ error: "Post non trouvé"})
    }
    const userId = post.user.id

    const commentToSend = { userId, postId, content: req.body.comment }
    const comment = await prisma.comment.create({ data: commentToSend})
    res.send({ comment })
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