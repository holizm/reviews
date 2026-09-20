import {
    clientError,
    dbItem,
} from 'core'

export default async item => {
    const parentId = item.parent?.id || item.parent
    if (!parentId) {
        return
    }
    const parent = await dbItem({
        id: parentId,
        part: 'reviews',
        type: 'reviewResponse',
    })
    const parentReviewId = parent?.review?.id || parent?.review
    const reviewId = item.review?.id || item.review
    if (!parent || parentReviewId !== reviewId) {
        clientError('reviewsInvalidReviewResponseParent')
    }
}
