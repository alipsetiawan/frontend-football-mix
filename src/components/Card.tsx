interface Props {
  firstName: string;
  lastName: string;
  age: number;
}

export default function Card(props: Props){
  const { firstName, lastName, age } = props

  return(
    <div className="card-container">
      <p className="font-face-heebo">{firstName}</p>
      <p className="font-face-rubik">{lastName}</p>
      <p className="font-face-oxygen">{age}</p>
    </div>
  )
}
