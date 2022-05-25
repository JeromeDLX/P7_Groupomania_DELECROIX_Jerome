const comment1 = {
    user:"user2@gmail.com",
    content: "C'est mon premier commentaire !"
};

const comment2 = {
    user:"user2@gmail.com",
    content: "C'est mon deuxieme commentaire !"
};

const post1 = {
    user: "user1@hotmail.fr",
    content: "Sympa le site",
    url: "https://picsum.photos/400/700",
    comments: [comment1]
};

const post2 = {
    user: "user1@hotmail.fr",
    content: "Sympa le site",
    url: "https://picsum.photos/400/700",
    comments: [comment1, comment2]
};

const post3 = {
    user: "user1@hotmail.fr",
    content: "Sympa le site",
    url: "https://picsum.photos/400/700",
    comments: []
};

const posts = [post1, post2, post3];

// Sert à récupérer les posts présent sur le site
function getPosts(req, res) {
    const email = req.email
    res.send({ posts, email })
};

// Sert à crééer un post sur le site
function createPost(req, res) {
    const content = req.body.content
    const email = req.email
    const post = { content, user: email, comments: [] }
    posts.unshift(post)
    res.send({ post })
};

module.exports = {getPosts, createPost};