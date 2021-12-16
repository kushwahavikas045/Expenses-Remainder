import React, { useState, useEffect } from 'react';
import { List, Avatar, Skeleton, Divider, Modal, Descriptions } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import ErrorTest from '../Error/ErrorTest';

const UserList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [visiable, setVisiable] = useState(false);
  const [singleData, setSingleData] = useState(null);


  const handleOk = () =>{
      setVisiable(false);
  }
  const handleCancel = () => {
      setVisiable(false);
  }

  const handleUserData = async(id, data) =>{
    setVisiable(true);

    const result = data.filter((item) => item.id === id);

    setSingleData(result);

  }




  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(body => {
        setData(body);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
      <>

    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 5}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.name}
                description={item.email}
              />
              <div style={{cursor: 'pointer'}} onClick={() => handleUserData(item.id, data)}>Read more</div>
            </List.Item>

          )}
        />
      </InfiniteScroll>

   {singleData && singleData.map((item) => (
     <Modal
      title={item.name} visible={visiable} onOk={handleOk} onCancel={handleCancel} key={item.id}>
    <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{`${item.name[0]}${item.name[1]}`}</Avatar>
    <Descriptions title="User Info">
    <Descriptions.Item label="UserName">{item.username}</Descriptions.Item>
    <Descriptions.Item label="Email">{item.email}</Descriptions.Item>
    <Descriptions.Item label="Company">{item.company.name}</Descriptions.Item>
    <Descriptions.Item label="Address">
      {item.address.street} - {item.address.suite} - {item.address.city}
    </Descriptions.Item>
  </Descriptions>
   </Modal>
   ))}
      <ErrorTest heroName="vikas" />
      <ErrorTest heroName = "ravi" />
      <ErrorTest heroName = "joker" />
    </div>
    </>
  );
};

export default UserList;