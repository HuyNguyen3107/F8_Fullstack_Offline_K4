import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const posts = document.querySelector(".posts");
const loading = document.querySelector(".loading");

let query = {
  _limit: PAGE_LIMIT,
  _page: 1,
};
let check = true;
let rate = 0.7;
let checkChange = false;
let checkEnd = true;

const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");

const getPosts = async function () {
  let queryString = new URLSearchParams(query).toString();
  const { data } = await client.get(`/posts?${queryString}`);
  check = true;
  if (checkChange) {
    rate = 0.9;
  }
  return data;
};

const renderPosts = async function () {
  const data = await getPosts();
  if (data.length) {
    data.forEach(function (item) {
      const post = document.createElement("div");
      post.classList.add("post");
      post.innerHTML = `
            <div class="header-post">
            <div class="info">
                <div class="avatar-post">
                    <img src="${stripHtml(item.avatar)}" alt="">
                </div>
                <div class="name">
                    <span class="nick-name">${stripHtml(item.name)}
                        <i class="fa-solid fa-circle-check" style="color: #075ef2;"></i>
                    </span>
                    <span class="time">23 giờ
                        <i class="fa-solid fa-earth-americas"></i>
                    </span>
                </div>
            </div>
            <div class="selection">
                <i class="fa-solid fa-ellipsis"></i>
                <i class="fa-solid fa-x"></i>
            </div>
        </div>
        <div class="content">
            <p>
                ${stripHtml(item.content)}
            </p>
            <img src="${stripHtml(item.picture)}" alt="">
        </div>
        <div class="footer-post">
            <div class="emotion">
                <div class="people">
                    <i class="fa-solid fa-heart-crack" style="color: #ea0611;"></i>
                    <p>Hoàng An, Lê Đức Nam và 2,6K người khác</p>
                </div>
                <div>
                    <div class="comment">
                        <span>100</span>
                        <i class="fa-solid fa-comment"></i>
                    </div>
                    <div class="share">
                        <span>26</span>
                        <i class="fa-solid fa-share"></i>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="interaction">
                <div class="like">
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>Thích</span>
                </div>
                <div class="comment-in">
                    <i class="fa-solid fa-comment"></i>
                    <span>Bình luận</span>
                </div>
                <div class="share-in">
                    <i class="fa-solid fa-share"></i>
                    <span>Chia sẻ</span>
                </div>
            </div>
            `;
      posts.append(post);
    });
  } else {
    checkEnd = false;
    const div = document.createElement("div");
    div.innerText = "Anh Quân đã xem hết rùi!!";
    const css = {
      textAlign: "center",
      color: "#fff",
      marginTop: "30px",
      fontWeight: "700",
      marginBottom: "50px",
    };
    Object.assign(div.style, css);
    posts.append(div);
  }
  loading.style.display = "";
};

window.addEventListener("scroll", function () {
  let y = this.scrollY;
  let height = posts.clientHeight * rate;
  if (y >= height) {
    if (check && checkEnd) {
      query._page++;
      renderPosts();
      check = false;
      loading.style.display = "block";
      checkChange = true;
    }
  }
});

renderPosts();
