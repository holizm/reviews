import { useContext } from 'react'
import { url } from 'app'
import { ItemContext } from 'contexts'
import { ItemAction } from 'list'

export default () => {
    const { item } = useContext(ItemContext)

    return <ItemAction
        goTo={url({
            parent: item,
            path: '/reviews/review/list',
            query: {
                item: item.id,
            },
        })}
        icon='reviews'
        title='reviewsReviews'
    />
}
