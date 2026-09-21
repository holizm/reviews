import synchronizeItem from './synchronizeItem.js'

export default async aggregate => {
    await synchronizeItem({
        action: 'delete',
        aggregate,
    })
}
