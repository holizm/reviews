import {
    Card,
    Field,
} from 'list'

export default item => <Card>
    <Field
        full
        label='ratingCriterion'
        value={item.title}
    />
    <Field
        label='code'
        value={item.code}
    />
    <Field
        label='minimumScore'
        value={item.minimumScore}
    />
    <Field
        label='maximumScore'
        value={item.maximumScore}
    />
    <Field
        full
        label='description'
        value={item.description}
    />
</Card>
