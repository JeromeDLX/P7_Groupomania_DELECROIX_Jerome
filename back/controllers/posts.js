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
    title: "Mon premier post",
    content: "Sympa le site",
    url: "https://picsum.photos/400/700",
    comments: [comment1]
};

const post2 = {
    user: "user1@hotmail.fr",
    title: "Mon deuxieme post",
    content: "Sympa le site",
    url: "https://picsum.photos/400/700",
    comments: [comment1, comment2]
};

const post3 = {
    user: "user1@hotmail.fr",
    title: "Mon troisieme post",
    content: "Sympa le site",
    url: "https://picsum.photos/400/700",
    comments: []
};


function getPosts (req, res) {
    const posts = [post1, post2, post3]
    const email = req.email
    res.send({ posts, email })
};

module.exports = {getPosts};