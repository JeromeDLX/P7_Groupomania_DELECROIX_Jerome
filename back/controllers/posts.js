const { prisma } = require('../database/database');

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
    if (post == null) {
        return res.status(404).send({ error: "Post non trouvé"})
    }
    const userWhoCommented = await prisma.user.findUnique({
        where: { email: req.email }
    })
    const userId = userWhoCommented.id

    const commentToSend = { userId, postId, content: req.body.comment }
    const comment = await prisma.comment.create({ data: commentToSend})
    res.send({ comment })
};

// Sert à supprimer un post
async function deletePost(req, res) {
    const postId = Number(req.params.id)
    try {
    const post = await prisma.post.findUnique({
        where: {
            id: postId
        },
        include: {
            user: {
                select: {
                    email: true
                }
            }
        }
    })
    if(post == null) {
        return res.status(404).send({error: "Post non trouvé"})
    }
    const email = req.email
    if(email !== post.user.email) {
        return res.status(404).send({error: "Vous n'etes pas l'auteur de ce post"})
    }
    await prisma.comment.deleteMany({ where: { postId }})
    await prisma.post.delete({ where: { id: postId }})
    res.send({ message: "Post supprimé" })
    } catch (err) {
        return res.status(500).send({error: "Echec de la suppression du post"})
    }
};

module.exports = {getPosts, createPost, createCommentary, deletePost};