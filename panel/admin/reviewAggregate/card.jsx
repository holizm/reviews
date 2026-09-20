import {
    Card,
    Field,
} from 'list'
import { Item } from 'registry'

export default item => <Card>
    <Field
        full
        label='reviewsItem'
        value={<Item item={item.item} />}
    />
    <Field
        label='reviewsReviewCount'
        value={item.reviewCount}
    />
    <Field
        label='reviewsRatingCount'
        value={item.ratingCount}
    />
    <Field
        label='reviewsAverageScore'
        value={item.averageScore}
    />
    <Field
        label='reviewsRecommendedCount'
        value={item.recommendedCount}
    />
</Card>
