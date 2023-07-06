import { useContext, useState } from 'react';

import {
  collection,
  doc,
  query,
  where,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setError(true);
    }
  };

  const handleSelect = async () => {
    // check whether the chat group exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? `${currentUser.uid}${user.uid}`
        : `${user.uid}${currentUser.uid}`;
    try {
      const res = await getDoc(doc(db, 'chats', combinedId));
      // console.log('something here');

      if (!res.exists()) {
        console.log('something here');
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        //create User chats
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
    setUser(null);
    setUserName('');
  };

  const handleKeyDown = (e) => {
    e.code === 'Enter' && handleSearch();
    // if (e.code === 'Enter') {
    //   fetchUser();
    // }
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKeyDown}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      {error && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="userImage" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};
export default Search;
