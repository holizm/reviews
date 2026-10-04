import {
    Card,
    Field,
} from 'list'
import { Item } from 'registry'

export default item => <Card>
    <Field
        full
        label='item'
        value={<Item item={item.item} />}
    />
    <Field
        label='reviewCount'
        value={item.reviewCount}
    />
    <Field
        label='ratingCount'
        value={item.ratingCount}
    />
    <Field
        label='averageScore'
        value={item.averageScore}
    />
    <Field
        label='recommendedCount'
        value={item.recommendedCount}
    />
</Card>
