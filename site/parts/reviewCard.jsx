export default ({ review }) => <article class='reviewCard'>
    <h2 class='title'>{review.title}</h2>
    <span class='reviewer'>{review.reviewer?.title}</span>
    <time class='reviewDate'>{review.reviewDate}</time>
    <div class='content'>{review.content}</div>
</article>
