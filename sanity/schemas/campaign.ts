export default {
    name: 'campaign',
    type: 'document',
    title: 'Campaign',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Campaign Title'
        },
        {
            name: 'description',
            type: 'array',
            title: 'Campaign Description',
            of: [
                {
                    type: 'block'
                }
            ]
        }
    ]
}