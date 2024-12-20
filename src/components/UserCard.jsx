const UserCard = ({user}) => {
    const { firstName, lastName, age, gender, photoUrl, about, skills } = user;
    return (
        <div className="card bg-base-300 w-72 h-96 shadow-xl">
            <figure>
                <img
                    src={photoUrl}
                    alt="Profile photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{`${firstName} ${lastName}`}</h2>
                <p>{age && gender && `${age} ${gender}`}</p>
                <p>{about && `${about}`}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard