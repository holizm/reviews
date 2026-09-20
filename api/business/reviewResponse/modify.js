import {
    addItem,
    dbItems,
} from 'core'

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
    const { items } = params
    const parentIds = items
        .map(item => item.parent?.id || item.parent)
        .filter(Boolean)
    if (parentIds.length === 0) {
        return
    }
    const parents = await dbItems({
        part: 'reviews',
        query: {
            id: {
                $in: parentIds,
            }
        },
        type: 'reviewResponse',
    })
    for (const item of items) {
        const parentId = item.parent?.id || item.parent
        item.parent = parents.find(parent => parent.id === parentId)
    }
}
