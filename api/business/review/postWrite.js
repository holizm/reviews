import calculateReviewAggregate from '../reviewAggregate/calculateReviewAggregate.js'

export default async item => {
    await calculateReviewAggregate(item.item)
}
