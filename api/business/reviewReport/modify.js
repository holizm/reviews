import { addItem } from 'core'

export default async params => {
    await Promise.all([
        addItem({
            ...params,
            part: 'contacts',
            type: 'person',
        }),
        addItem({
            ...params,
            part: 'reviews',
            type: 'review',
        }),
    ])
}
