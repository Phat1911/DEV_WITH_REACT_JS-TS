import { ShowFriendList } from "./ShowFriendList"
import { ShowInfo } from "./ShowInfo"
import UpdateFriend from "./UpdateFriend"
import UpdateInfo from "./UpdateInfo"

const App = () => {
  return <section>
    <ShowInfo>
      <UpdateInfo />
    </ShowInfo>

    <ShowFriendList>
      <UpdateFriend />
    </ShowFriendList>
  </section>
}

export default App