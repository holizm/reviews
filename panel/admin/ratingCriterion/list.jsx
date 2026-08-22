import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>reviewsRatingCriterion</th>
    <th>reviewsCode</th>
    <th>reviewsMinimumScore</th>
    <th>reviewsMaximumScore</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.minimumScore}</td>
    <td>{item.maximumScore}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
