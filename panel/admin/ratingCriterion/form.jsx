import {
    DialogForm,
    LongText,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='reviewsCode'
        property='code'
        required
    />
    <Numeric
        placeholder='reviewsMinimumScore'
        property='minimumScore'
        required
    />
    <Numeric
        placeholder='reviewsMaximumScore'
        property='maximumScore'
        required
    />
    <LongText
        placeholder='reviewsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
