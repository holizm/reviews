import {
    Boolean,
    DateTime,
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Text
        placeholder='reviewsSubject'
        property='subject'
        required
    />
    <Text
        placeholder='reviewsReviewer'
        property='reviewer'
        required
    />
    <Title />
    <LongText
        placeholder='reviewsContent'
        property='content'
        required
    />
    <DateTime
        placeholder='reviewsReviewDate'
        property='reviewDate'
        required
    />
    <Boolean
        placeholder='reviewsVerified'
        property='verified'
    />
    <Boolean
        placeholder='reviewsRecommended'
        property='recommended'
    />
</>

export default <DialogForm inputs={inputs} />
