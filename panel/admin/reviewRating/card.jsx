import {
    Card,
    Field,
} from 'list'
import { Item } from 'registry'

export default item => <Card>
    <Field
        full
        label='review'
        value={<Item item={item.review} />}
    />
    <Field
        full
        label='ratingCriterion'
        value={<Item item={item.ratingCriterion} />}
    />
    <Field
        label='score'
        value={item.score}
    />
</Card>
