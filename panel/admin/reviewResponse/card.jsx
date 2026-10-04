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
        label='parent'
        value={<Item item={item.parent} />}
    />
    <Field
        full
        label='person'
        value={<Item item={item.person} />}
    />
    <Field
        full
        label='content'
        value={item.content}
    />
</Card>
