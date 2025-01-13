import './User.css'

const user = {
    name: 'Julio Queiroz',
    imageUrl: 'https://assets.teenvogue.com/photos/5da4a603ed1e8f00086864cf/16:9/w_1920,c_limit/Ent_Steven-Universe_STORY.jpg',
    imageSize: 90,
  };

function User(){
    return(
        <div className='userBox'>
            <h1>{user.name}</h1>
                  <img className="avatar"
                  src={user.imageUrl}
                  alt={'Foto de ' + user.name}/>
        </div>
    );
}

export default User;