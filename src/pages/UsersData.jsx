import "./UsersData.css"

export default function UsersData({usersInfo, isLoading}) {
 
  if (isLoading) {
    return <h1 className="isLoading">Loading data, Pls wait!</h1>
  }

  return (
    <ul className="main-container">
      {usersInfo.map(info => (
        <li key={info.cell} className="info-container">
          <img src={info.picture.large} alt={info.name} />
          <h1>
            {info.name.title} {info.name.first} {info.name.last}
          </h1>
          <p>Email: {info.email}</p>
          <p>
            DOB: {info.dob.date.slice(0, 10)} Age: {info.dob.age}
          </p>
          <p>Phone number: {info.phone}</p>
          <p>Location: {info.location.country}</p>
        </li>
      ))}
    </ul>
  );
}
