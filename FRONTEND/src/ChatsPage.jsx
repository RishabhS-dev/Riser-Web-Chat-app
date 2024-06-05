import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style = {{ height:'100vh'}}>
      <PrettyChatWindow
        projectId='0c923cac-746d-48aa-9d6d-ac667ec1adec'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
      />
    </div>
  );
};

export default ChatsPage;