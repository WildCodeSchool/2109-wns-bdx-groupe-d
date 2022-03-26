import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { userInfo } from '../graphql/UserSession';

import '../css/pages/Settings.css'

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

  return (
    <div className="settings-container">
      <div className="user-container">
        <div className="user">
          {userImg ? 
            <div className="avatar-pic">

            </div>
          :
            <div className="avatar-container">
              <div className="avatar-initial">
                {currentUser.first_name[0] + currentUser.last_name[0]}
              </div>
              <div className="avatar-btn">
                <button>+</button>
                <button>/</button>
              </div>
            </div>
          }
          <div className="user-info">
            <div className="perso">
              <h1>{currentUser.first_name + ' ' + currentUser.last_name}</h1>
              <h2><i>{currentUser.email}</i></h2>
            </div>
            <div className="work">
              <h2>{currentUser.jobs ? currentUser.jobs : 'Unknown Jobs'}</h2>
              <h2>Work {organization.name ? 'at ' + organization.name : 'alone'}</h2>
            </div>

          </div>
        </div>
        <div className="user-settings">
          <div className="user-settings-btn">
            <button className="info-btn">Modifier les informations personnelles</button>
            <button className="info-btn">Me déconnecter</button>
            <button className="info-btn">Déconnecter tous les appareils</button>
            <button className="delete-acc-btn">Supprimer mon compte</button>
          </div>
        </div>
      </div>
      {organization.name &&
        <div className="user-organization">
          <h1><b>{organization.name} Workers</b></h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
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
                      <button>M</button>
                      {currentUser.roles === 'admin' &&
                        <button>X</button>
                      }
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}

export default Settings;