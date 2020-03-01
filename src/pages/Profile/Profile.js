import React, { useState, useRef } from "react";
import "./Profile.sass";
import { storage } from "../../firebase";
import axios from 'axios'

const Profile = () => {
  let initialState = {
    testObj: {
      title: 'test',
      complete: true,
    },
    currentImageId: null,
    src: null,
    image: null,
    showForm: false,
    showPost: false,
    description: [],
    arrPosts: [
      // {
      //   id: 1,
      //   src: "https://i.stack.imgur.com/UBaxN.jpg"
      // },
      // {
      //   id: 2,
      //   src: 'https://kb.smartliving.ru/wp-content/uploads/2018/02/fs2-1024x560.jpg'
      // },
      // {
      //   id: 3,
      //   src: 'https://i.stack.imgur.com/UBaxN.jpg'
      // },
      // {
      //   id: 4,
      //   src: 'https://i.stack.imgur.com/UBaxN.jpg'
      // }
    ]
  };
  const [state, removeState] = useState(initialState);
  const descrPostRef = useRef(null);

  const showModal = () => {
    removeState({
      ...state,
      showForm: true,
    });
  };

  const showPost = event => {
    // console.log(event.target.id)
    removeState({
      ...state,
      showPost: true,
      src: event.target.src,
      currentImageId: event.target.id
    });
  };

  const uploadHandler = event => {
    event.preventDefault();

    const { image, description } = state;

    const value = descrPostRef.current.value;

    // if (value.trim()) {
    //   removeState({
    //     ...state,
    //     description: [...state.description, value]
    //   });
    // }

    // console.log(state.description);

    const uploadTask = storage.ref(`images/${image.name}`).put(image) // Загружаем изображение в storage в каталог 'images'
    uploadTask.on('state_changed',
      snapshot => {}, // Функция процесса загрузки
      error => { // Отлов ошибок
        console.log(error)
      },
      (complete) => { // Функция выполнения
        storage.ref(`images`).child(image.name).getDownloadURL() // Получаем url картинки
          .then(url => {

            // console.log(url) // URL - картинки из БД Firebase

            removeState({
              ...state,
              arrPosts: [
                ...state.arrPosts,
                {
                  id: state.arrPosts.length + 1,
                  src: url, // Сохраняем url для последующего вывода на странице
                  description: value
                }
              ]
            })

          })
          .catch(error => console.log(error))

          // let {src} = state.arrPosts[0]
          axios.post('https://instagram-app-react.firebaseio.com/posts.json', state.arrPosts)
            .then(res => console.log(res))
            .catch(err => console.log(err))

          axios.get('https://instagram-app-react.firebaseio.com/posts.json')
            .then(res => console.log(res))
            .catch(err => console.log(err))
      })
  };

  const fileSelectHandler = event => {
    // console.log(event.target.files[0])

    if (event.target.files[0]) {
      const image = event.target.files[0]; // Сохраняем выбранную картинку

      removeState({
        ...state,
        image
      });
    }
  };

  const hideBlur = () => {
    removeState({
      ...state,
      showForm: false,
      showPost: false
    });
  };

  return (
    <div className="main-profile">
      <div
        className={state.showForm || state.showPost ? "blur" : "notblur"}
        onClick={hideBlur}
      />

      <div className="profile-header">
        <div className="avatar-box">
          <div className="avatar"></div>
        </div>

        <section className="info-profile">
          <div className="name">name</div>
          <ul className="list-info">
            <li>Публикаций</li>
            <li>Подписчиков</li>
            <li>Подписок</li>
            <button className="add-post" onClick={showModal}>
              +
            </button>
          </ul>
        </section>
      </div>

      <hr />

      <form className={`modal-post ${state.showForm ? "show" : "hide"}`}>
        <textarea
          className="description-post"
          placeholder="Добавьте описание к посту"
          ref={descrPostRef}
        />

        <input
          type="file"
          className="foto"
          onChange={event => fileSelectHandler(event)}
        />

        <button onClick={uploadHandler} className="uploadPost">
          Добавить
        </button>
      </form>

      <div className={`post-window ${state.showPost ? "show" : "hide"}`}>
        <div className="blog-profile">
          <div className="avatar-post"></div>
          <div className="name-avatar">name</div>
        </div>

        <img
          src={state.src}
          alt="post-image"
          className="image-post"
        />
        <div className="info-post">
          <div className="name-post">name:</div>
          { state.arrPosts.map(key => {
            if (state.currentImageId == key.id) {
              return (
                <div key={key.id} className="description-post"> {key.description}</div>
              )
            }
          }) }
        </div>
      </div>

      <div className="posts">
        {state.arrPosts.map(key => {
          const { id, src } = key;

          return (
            <div key={id} className="el-posts" onClick={showPost}>
              <img src={src} alt="post"  id={id}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
