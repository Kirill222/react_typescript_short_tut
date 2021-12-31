interface ListProps {
    people: {
      name: string
      age: number
      url: string
      note?: string
    }[]
  }


const List: React.FC<ListProps> = () => {
    return (
        <div>
            list
        </div>
    )
}

export default List
