export interface ITier{
    _id: string,
    name: string,
    requirement: number,
    description: string,
    image: {
        asset: {
            url: string
        }
    },
    _createdAt: string
}