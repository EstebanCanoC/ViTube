let videoDummyList = [
    {
        id: "video1",
        title: "Titulo del video 1",
        description: "Descripcion del video 1",
        thumbnail: "https://i.ytimg.com/vi/VKKkVhULRo4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxWnqt5T4Tr7v9Txyl6rpqPvBtiA",
        publishedAt: "2022-12-01T00:00:00Z",
        category: "1"
    },
    {
        id: "video2",
        title: "Titulo del video 2",
        description: "Descripcion del video 2",
        thumbnail: "https://i.ytimg.com/vi/VKKkVhULRo4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxWnqt5T4Tr7v9Txyl6rpqPvBtiA",
        publishedAt: "2022-11-01T00:00:00Z",
        category: "2"
    },
    {
        id: "video3",
        title: "Titulo del video 3",
        description: "Descripcion del video 3",
        thumbnail: "https://i.ytimg.com/vi/VKKkVhULRo4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxWnqt5T4Tr7v9Txyl6rpqPvBtiA",
        publishedAt: "2022-10-01T00:00:00Z",
        category: "3"
    },
    // y asi sucesivamente para 30 elementos
];


const videoContainer = document.getElementById("video-container");

for (let video of videoDummyList) {
    const videoCard = `
        <div class="video-card">
            <img src="${video.thumbnail}" alt="${video.title}">
            <h2>${video.title}</h2>
            <p>${video.description}</p>
            <div class="metadata">
                <span>${video.publishedAt}</span>
                <span>${video.category}</span>
            </div>
        </div>
    `;
    videoContainer.innerHTML += videoCard;
}