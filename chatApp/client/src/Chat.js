import React from 'react';
// import {addMessage, getMessages, onMessageAdded} from './graphql/queries';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import {useChatMessages} from './hooks';

const Chat = ({user}) => {
  /*
  const {queryData, queryLoading, queryError} = useQuery(messagesQuery);
  const messages = queryData ? queryData.messages : [];

  useQuery(messagesQuery, {
    onCompleted: ({messages}) => {
     setMessages(messages);
    }
  });
  useSubscription(messageAddedSubscription, {
    onSubscriptionData: ({client, subscriptionData}) => {
      // setMessages((prevMessages) => prevMessages.concat(subscriptionData.data.messageAdded));
      client.writeData({
        data: {
          messages: messages.concat(subscriptionData.data.messageAdded)
        }
      });
    }
  });
  const [addMessage, {mutationLoading, mutationError, mutationData}] = useMutation(addMessageMutation, {variables: ''});
  */

  /*
  const handleSend = async (text) => {

    await addMessage({
      variables: {input: {text}}
    });
  };
 */

  /*
  if (queryLoading || mutationLoading) return <h1>Loading...</h1>;
  if (queryError || mutationError) return <h1>Error !</h1>;
  */

  const {messages, addMessage} = useChatMessages();

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Chatting as {user}</h1>
        <MessageList user={user} messages={messages}/>
        <MessageInput onSend={addMessage}/>
      </div>
    </section>
  );
};

export default Chat;
