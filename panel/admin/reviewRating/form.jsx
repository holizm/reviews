import { parseQuery } from 'app'
import {
    DialogForm,
    Hidden,
    Numeric,
} from 'form'
import RatingCriterionField from '../ratingCriterion/field'
import ReviewField from '../review/field'

const inputs = () => {
    const { review } = parseQuery()

    return <>
        {
            review
            ?
            <Hidden
                review
                value={review}
            />
            :
            <ReviewField required />
        }
        <RatingCriterionField required />
        <Numeric
            required
            score
        />
    </>
}

export default <DialogForm inputs={inputs} />
