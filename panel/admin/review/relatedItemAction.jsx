import { useContext } from 'react'
import { url } from 'app'
import { ItemContext } from 'contexts'
import { ItemAction } from 'list'

export default ({
    icon,
    path,
    title,
}) => {
    const { item } = useContext(ItemContext)

    return <ItemAction
        goTo={url({
            parent: item,
            path,
            query: {
                review: item.id,
            },
        })}
        icon={icon}
        title={title}
    />
}
