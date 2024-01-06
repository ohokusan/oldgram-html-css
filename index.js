const feedEl = document.querySelector(".feed")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function loadPosts() {
    let feed = ""
    for (let i = 0; i < posts.length; i++) {
        feed += getPost(posts[i])
    }
    feedEl.innerHTML = feed
}

function getPost(post) {
    let postContent = `
        <article class="post">
            <header class="post-header">
                <img src="${post.avatar}" class="img-user-avatar">
                <div>
                    <span class="post-name">${post.name}</span>
                    <span class="post-location">${post.location}</span>
                </div>
            </header>
            <img src="${post.post}" class="post-img">
            <div class="post-body">
                <div class="post-interaction">
                    <button class="btn post-like"><img src="images/icon-heart.png"></button>
                    <button class="btn post-comment"><img src="images/icon-comment.png"></button>
                    <button class="btn post-dm"><img src="images/icon-dm.png"></button>
                </div>
                <span class="post-like-number">${post.likes} likes</span>
                <div class="post-comment">
                    <span class="post-comment-username">${post.username}</span> ${post.comment}
                </div>
            </div>
        </article>
`
    return postContent
}

loadPosts()