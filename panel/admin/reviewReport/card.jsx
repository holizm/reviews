import {
    Card,
    DateTime,
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
        label='person'
        value={<Item item={item.person} />}
    />
    <Field
        full
        label='reason'
        value={item.reason}
    />
    <Field
        component={DateTime}
        date={item.resolvedDate}
        label='resolvedDate'
    />
    <Field
        full
        label='resolution'
        value={item.resolution}
    />
</Card>
