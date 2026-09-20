import { dbItem } from 'core'
import calculateReviewAggregate from '../reviewAggregate/calculateReviewAggregate.js'

export default async item => {
    const reviewId = item.review?.id || item.review
    const review = await dbItem({
        id: reviewId,
        part: 'reviews',
        type: 'review',
    })
    await calculateReviewAggregate(review?.item)
}
