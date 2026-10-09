import Item from 'item'
export default ({ review }) => <Item class='review'>
    <h2 class='title'>
        {
            review.title
        }
    </h2>
    <span class='person'>
        {
            review.person?.title
        }
    </span>
    <div class='content'>
        {
            review.content
        }
    </div>
</Item>
