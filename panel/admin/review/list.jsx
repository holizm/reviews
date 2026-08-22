import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>reviewsSubject</th>
    <th>reviewsReviewer</th>
    <th>reviewsReviewDate</th>
    <th>reviewsVerified</th>
    <th>reviewsState</th>
</>

const row = item => <>
    <td>{item.subject?.title}</td>
    <td>{item.reviewer?.title}</td>
    <DateTime value={item.reviewDate} />
    <td>{item.verified}</td>
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Text property='content' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
