import {
    Card,
    Field,
} from 'list'
import { Item } from 'registry'

export default item => <Card>
    <Field
        full
        label='reviewsReview'
        value={<Item item={item.review} />}
    />
    <Field
        full
        label='reviewsRatingCriterion'
        value={<Item item={item.ratingCriterion} />}
    />
    <Field
        label='reviewsScore'
        value={item.score}
    />
</Card>
