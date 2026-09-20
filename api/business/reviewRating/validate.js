import {
    clientError,
    dbItem,
} from 'core'

export default async item => {
    const ratingCriterionId = item.ratingCriterion?.id || item.ratingCriterion
    const ratingCriterion = await dbItem({
        id: ratingCriterionId,
        part: 'reviews',
        type: 'ratingCriterion',
    })
    if (!ratingCriterion) {
        clientError('reviewsRatingCriterionNotFound')
    }
    const score = Number(item.score)
    if (
        !Number.isFinite(score)
        || score < ratingCriterion.minimumScore
        || score > ratingCriterion.maximumScore
    ) {
        clientError('reviewsScoreOutOfRange')
    }
    item.score = score
}
