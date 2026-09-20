import { addItem } from 'core'

export default async params => {
    await addItem({
        ...params,
        part: 'contacts',
        type: 'person',
    })
}
