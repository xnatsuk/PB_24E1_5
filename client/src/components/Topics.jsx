import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { transformToUrl } from '../utils';

export default function Topics() {
  const [topics, setTopics] = useState([])
  const [mostPopular, setMostPopular] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/topics', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setTopics(data.topics)
        setMostPopular(getPopular(data.topics))
      });
  }, []);

  const getPopular = (topics) => {
    return topics.reduce((mostPopular, currentTopic) => {
      const currentPop = currentTopic.likes + currentTopic.messages
      const mostPop = mostPopular.likes + mostPopular.messages

      return currentPop > mostPop ? currentTopic : mostPopular
    }, topics[0])
  }

  return (
    <div className="topics">
      <h2>Popular no Momento</h2>
      <div className='popular'>
        <h3>
          {mostPopular
            ? mostPopular.title
            : 'Nenhum tópico popular no momento'
          }
        </h3>
        <p className='topic-info'>{mostPopular?.description}</p>
        <p className='topic-stats'>Likes: {mostPopular?.likes}</p>
        <p className='topic-stats'>Mensagens: {mostPopular?.messages}</p>
      </div>


      <h2>Todos os Tópicos</h2>
      <ul>
        {topics.map((topic, i) => (
          <li key={i} className='topics-item'>
            <Link to={`topic/${transformToUrl(topic.title)}`} >{topic.title}</Link>
            <p className='topic-info'>{topic.description}</p>
            <p className='topic-stats'>Likes: {topic.likes}</p>
            <p className='topic-stats'>Mensagens: {topic.messages}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}