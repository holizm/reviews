import {
    BooleanProperty,
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
        full
        label='reviewsPerson'
        value={<Item item={item.person} />}
    />
    <Field
        full
        label='coreTitle'
        value={item.title}
    />
    <Field
        full
        label='reviewsContent'
        value={item.content}
    />
    <Field
        component={BooleanProperty}
        label='reviewsHasUsedPersonally'
        value={item.hasUsedPersonally}
    />
    <Field
        component={BooleanProperty}
        label='reviewsRecommended'
        nullable
        value={item.recommended}
    />
</Card>
