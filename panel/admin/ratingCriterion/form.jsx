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
        placeholder='code'
        property='code'
        required
    />
    <Numeric
        placeholder='minimumScore'
        property='minimumScore'
        required
    />
    <Numeric
        placeholder='maximumScore'
        property='maximumScore'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
