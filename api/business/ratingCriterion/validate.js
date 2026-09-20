import { clientError } from 'core'

export default item => {
    const maximumScore = Number(item.maximumScore)
    const minimumScore = Number(item.minimumScore)
    if (
        !Number.isInteger(maximumScore)
        || !Number.isInteger(minimumScore)
        || minimumScore >= maximumScore
    ) {
        clientError('reviewsInvalidRatingCriterionRange')
    }
    item.maximumScore = maximumScore
    item.minimumScore = minimumScore
}
