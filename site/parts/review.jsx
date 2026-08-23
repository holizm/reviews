export default ({ review }) => <article class='review'>
    <h2 class='title'>{review.title}</h2>
    <span class='reviewer'>{review.reviewer?.title}</span>
    <time class='date'>{review.reviewDate}</time>
    <div class='content'>{review.content}</div>
</article>
