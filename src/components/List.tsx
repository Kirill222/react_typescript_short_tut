interface ListProps {
    people: {
      name: string
      age: number
      url: string
      note?: string
    }[]
  }


export default function List({people}: ListProps) {
    return (
        <div>
            list
        </div>
    )
}
