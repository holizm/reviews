import {
    Card,
    Field,
} from 'list'

export default item => <Card>
    <Field
        full
        label='reviewsRatingCriterion'
        value={item.title}
    />
    <Field
        label='reviewsCode'
        value={item.code}
    />
    <Field
        label='reviewsMinimumScore'
        value={item.minimumScore}
    />
    <Field
        label='reviewsMaximumScore'
        value={item.maximumScore}
    />
    <Field
        full
        label='reviewsDescription'
        value={item.description}
    />
</Card>
