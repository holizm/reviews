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
        code
        required
    />
    <Numeric
        minimumScore
        required
    />
    <Numeric
        maximumScore
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
