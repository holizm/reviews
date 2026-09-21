import {
    dbItem,
    dbUpdateItem,
    minify,
    parseId,
} from 'core'

export default async ({
    aggregate,
    action,
}) => {
    const itemId = aggregate?.item?.id || aggregate?.item
    if (!itemId || typeof itemId !== 'string') {
        return
    }
    const {
        part,
        type,
    } = parseId(itemId)
    if (!part || !type) {
        return
    }
    const item = await dbItem({
        id: itemId,
        part,
        type,
    })
    if (!item) {
        return
    }
    if (action === 'delete') {
        await dbUpdateItem({
            item,
            part,
            type,
            updateQuery: {
                $unset: { reviewAggregate: '' },
            },
        })
        return
    }
    item.reviewAggregate = minify(aggregate)
    await dbUpdateItem({
        item,
        part,
        type,
    })
}
