import { addItem } from 'core'

export default async params => {
    await Promise.all([
        addItem({
            ...params,
            part: 'reviews',
            type: 'ratingCriterion',
        }),
        addItem({
            ...params,
            part: 'reviews',
            type: 'review',
        }),
    ])
}
