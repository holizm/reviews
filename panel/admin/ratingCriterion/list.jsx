import {
    List,
    Title,
} from 'list'
import Form from './form'

export default <List
    filters={<Title />}
    hasDelete
    hasEdit
    upsert={Form}
/>
