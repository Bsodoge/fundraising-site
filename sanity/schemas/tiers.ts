export default {
    name: 'tiers',
    type: 'document',
    title: 'Donation Tiers',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'name'
        },
        {
            name: 'requirement',
            type: 'number',
            title: 'requirement'
        },
        {
            name: 'description',
            type: 'string',
            title: 'description',
        },
        {
            name: 'image',
            type: 'image',
            title: 'image'
        }
    ]
}