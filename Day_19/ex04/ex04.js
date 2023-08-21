var arr = [
  [
    "https://picsum.photos/200",
    "Tiêu đề bài viết 1",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ullam officiis dolor necessitatibus ratione quam,
    deleniti hic, aliquam dignissimos laborum commodi laboriosam reiciendis quas perspiciatis fugiat mollitia labore vel
    nulla!`,
  ],
  [
    "https://picsum.photos/200",
    "Tiêu đề bài viết 2",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ullam officiis dolor necessitatibus ratione quam,
    deleniti hic, aliquam dignissimos laborum commodi laboriosam reiciendis quas perspiciatis fugiat mollitia labore vel
    nulla!`,
  ],
  [
    "https://picsum.photos/200",
    "Tiêu đề bài viết 3",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ullam officiis dolor necessitatibus ratione quam,
    deleniti hic, aliquam dignissimos laborum commodi laboriosam reiciendis quas perspiciatis fugiat mollitia labore vel
    nulla!`,
  ],
  [
    "https://picsum.photos/200",
    "Tiêu đề bài viết 4",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ullam officiis dolor necessitatibus ratione quam,
    deleniti hic, aliquam dignissimos laborum commodi laboriosam reiciendis quas perspiciatis fugiat mollitia labore vel
    nulla!`,
  ],
  [
    "https://picsum.photos/200",
    "Tiêu đề bài viết 5",
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ullam officiis dolor necessitatibus ratione quam,
    deleniti hic, aliquam dignissimos laborum commodi laboriosam reiciendis quas perspiciatis fugiat mollitia labore vel
    nulla!`,
  ],
];

var html = `<div>
    ${arr.map(function (value, index) {
      if (index % 2 === 0) {
        return `<div class = "container">
                <div class = "main-img"><img src = "${value[0]}"></div>
                <div class = "main-content">
                <h2>${value[1]}</h2>
                <P>${value[2]}</P>
                </div>
            </div>`;
      } else {
        return `<div class = "container">
            <div class = "main-content">
            <h2>${value[1]}</h2>
            <P>${value[2]}</P>
            </div>
            <div class = "main-img"><img src = "${value[0]}"></div>
          </div>`;
      }
    })}
</div>`;

document.write(html);
