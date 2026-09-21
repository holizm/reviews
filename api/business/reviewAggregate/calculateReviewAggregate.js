import {
    dbItem,
    dbItems,
    dbUpsertItem,
    generateId,
    parseId,
} from 'core'
import synchronizeItem from './synchronizeItem.js'

const relationQuery = (property, id) => {
    const query = {
        $or: [
            { [property]: id },
            { [`${property}.id`]: id },
        ]
    }
    return query
}

export default async relatedItem => {
    const itemId = relatedItem?.id || relatedItem
    if (!itemId) {
        return
    }
    const reviews = await dbItems({
        part: 'reviews',
        query: relationQuery('item', itemId),
        type: 'review',
    })
    const reviewIds = reviews.map(review => review.id)
    const ratings = reviewIds.length > 0
        ?
        await dbItems({
            part: 'reviews',
            query: {
                $or: [
                    { review: { $in: reviewIds } },
                    { 'review.id': { $in: reviewIds } },
                ]
            },
            type: 'reviewRating',
        })
        :
        []
    const existingAggregate = await dbItem({
        part: 'reviews',
        query: relationQuery('item', itemId),
        type: 'reviewAggregate',
    })
    const parsedItemId = parseId(itemId)
    const id = existingAggregate?.id || await generateId({
        locale: parsedItemId.locale,
        meaning: parsedItemId.meaning,
        part: 'reviews',
        tenant: parsedItemId.tenant,
        type: 'reviewAggregate',
    })
    const scores = ratings
        .map(rating => Number(rating.score))
        .filter(Number.isFinite)
    const ratingCount = scores.length
    const totalScore = scores.reduce((total, score) => total + score, 0)
    const aggregate = {
        averageScore: ratingCount > 0 ? totalScore / ratingCount : null,
        id,
        item: itemId,
        ratingCount,
        recommendedCount: reviews.filter(review => review.recommended === true).length,
        reviewCount: reviews.length,
    }
    const savedAggregate = await dbUpsertItem({
        item: aggregate,
        part: 'reviews',
        query: relationQuery('item', itemId),
        type: 'reviewAggregate',
    })
    await synchronizeItem({
        aggregate: savedAggregate,
    })
}
