import {
    Card,
    DateTime,
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
        label='reviewsPerson'
        value={<Item item={item.person} />}
    />
    <Field
        full
        label='reviewsReason'
        value={item.reason}
    />
    <Field
        component={DateTime}
        date={item.resolvedDate}
        label='reviewsResolvedDate'
    />
    <Field
        full
        label='reviewsResolution'
        value={item.resolution}
    />
</Card>
