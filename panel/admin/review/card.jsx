import {
    BooleanProperty,
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
        full
        label='person'
        value={<Item item={item.person} />}
    />
    <Field
        full
        label='title'
        value={item.title}
    />
    <Field
        full
        label='content'
        value={item.content}
    />
    <Field
        component={BooleanProperty}
        label='hasUsedPersonally'
        value={item.hasUsedPersonally}
    />
    <Field
        component={BooleanProperty}
        label='recommended'
        nullable
        value={item.recommended}
    />
</Card>
