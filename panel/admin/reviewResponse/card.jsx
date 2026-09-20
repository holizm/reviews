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
        label='coreParent'
        value={<Item item={item.parent} />}
    />
    <Field
        full
        label='reviewsPerson'
        value={<Item item={item.person} />}
    />
    <Field
        full
        label='reviewsContent'
        value={item.content}
    />
</Card>
