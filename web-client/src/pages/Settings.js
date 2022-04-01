import React, {useState} from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { deleteAllUserSessions, userInfo, deleteActualSession } from '../graphql/UserSession';
import {deleteUser} from '../graphql/User';
import paintbrushIcon from '../images/paintbrush-solid.svg';
import addImgIcon from '../images/circle-plus-solid.svg';
import messageIcon from '../images/message-solid.svg';
import trashIcon from '../images/trash-solid.svg';
import editIcon from '../images/pen-to-square-solid.svg';

import '../css/pages/Settings.css';

const Settings = () => {

  const { data } = useQuery(userInfo);
  const currentUser = data.userInfo;

  const [userImg, setUserImg] = useState();
  const organization = {
    id: 1,
    name: 'Apple',
    workers: [
      {id: 1, name: 'Louis Girardeau', jobs: 'CEO'},
      {id: 2, name: 'Elon Musk', jobs: 'CTO'},
      {id: 3, name: 'Jeff Besos', jobs: 'CFO'},
      {id: 4, name: 'Steve Jobs', jobs: ' CMO'}
    ]
  }

  const [deleteAccount, { loading: deleting, error: deleteError }] = useMutation(deleteUser);
  const [deleteSessions, { loading: deletingUserSessions, error: deleteSessionsError }] = useMutation(deleteAllUserSessions);
  const [logout, { loading: deletingActualSession, error: deleteActualSessionError}] = useMutation(deleteActualSession);

  const updateUserData = () => {
    
  }

  const onDeleteSessions = () => {
    try {
      deleteSessions({
        variables: {user: currentUser}
      })
    } catch {
      console.log(deleteSessionsError);
    }
  }

  const onLogout = () => {
    try {
      logout();
    } catch {
      console.log(deleteActualSessionError);
    }
  }

  const onDeleteUser = () => {
    try {
      console.log(currentUser)
      const id = parseFloat(currentUser.id);
      deleteAccount({
        variables: { id }
      })

    } catch {
      console.log(deleteError);
    }
  }

  const addUserImg = () => {
    setUserImg('https://www.cdiscount.com/pdt2/3/9/0/1/700x700/auc2009202687390/rw/maylisacc-bonnet-echarpe-homme-bonnet-homme-ensem.jpg');
  }

  const deleteUserImg = () => {
    setUserImg(null)
  }

  const handlePic = (e) => {
    setUserImg(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className="settings-container">
      <div className="user-container">
        <div className="user">
          {userImg ? 
            <div className="avatar-container">
              <img src={userImg} alt="Photo de Profil" title="Photo de Profil" className='avatar-pic'/>
              <div className="avatar-btn">
                <button><img src={editIcon} alt="Changer Photo" title="Changer de Photo" className='white-icon' /></button>
                <button onClick={deleteUserImg}><img src={trashIcon} alt="Supprimer Photo" title="Supprimer une Photo" className='white-icon' /></button>
              </div>
            </div>
          :
            <div className="avatar-container">
              <div className="avatar-initial">
                {currentUser.first_name[0] + currentUser.last_name[0]}
              </div>
              <div className="avatar-btn">
                <button onClick={addUserImg}><img src={addImgIcon} alt="Ajouter photo" title="Ajouter une Photo" className='white-icon' /></button>
                <input type="file" onChange={handlePic} />
                <button><img src={paintbrushIcon} alt="Changer couleur" title="Changer de couleur" className='white-icon' /></button>
              </div>
            </div>
          }
          <div className="user-info">
            <div className="perso">
              <h1>{currentUser.first_name + ' ' + currentUser.last_name}</h1>
              <h2><i>{currentUser.email}</i></h2>
            </div>
            <div className="work">
              <h2>{currentUser.jobs ? currentUser.jobs : 'Jobs inconnu'}</h2>
              <h2>Travaille {organization.name ? 'pour ' + organization.name : 'tout seul'}</h2>
            </div>

          </div>
        </div>
        <div className="user-settings">
          <div className="user-settings-btn">
            <button className="info-btn" onClick={updateUserData}>Modifier les informations personnelles</button>
            <button className="info-btn" onClick={onLogout}>{deletingActualSession ? 'Déconnexion...' : 'Me déconnecter'}</button>
            <button className="info-btn" onClick={onDeleteSessions}>{deletingUserSessions ? 'En attente de déconnexion...' : 'Déconnecter tous les appareils'}</button>
            <hr/>
            <button className="delete-acc-btn" onClick={onDeleteUser}>{deleting ? 'En attente de suppression...' : 'Supprimer mon compte'}</button>
          </div>
        </div>
      </div>
      {organization.id ?
        <div className="user-organization">
          <h1><b>Liste des Employés d'{organization.name}</b></h1>
          <hr />
          {currentUser.roles === "admin" &&
            <div className="organization-btn">
              <input type="email" placeholder={'Ex: ' + currentUser.email}></input>
              <button>Ajouter</button>
            </div>
          }
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Jobs</th>
                <th className="worker-action">Actions</th>
              </tr>
            </thead>
            <tbody>
              {organization.workers.map( worker => {
                return (
                  <tr>
                    <td>{worker.name}</td>
                    <td>{worker.jobs}</td>
                    <td className="worker-action">
                      <button><img src={messageIcon} alt="Envoyer un message" title="Envoyer un message" className='white-icon' /></button>
                      {currentUser.roles === 'admin' &&
                        <button><img src={trashIcon} alt="Supprimer un Employé" title="Supprimer un Employé" className='white-icon' /></button>
                      }
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      :
      <div className="user-no-organization">
        <h1>No actual organization</h1>
        <div className="no-organization-btn">
          <button>Create</button>
        </div>
      </div>
      }
    </div>
  );
}

export default Settings;