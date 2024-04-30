import React, { useState, useEffect } from 'react'
import { TopicCard } from './TopicCard';

export const Topics = () => {
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
    <div className='flex flex-col gap-10 justify-between'>
      <div className='divide-x-4 divide-orange-300 space-y-5'>
        <h2 className='text-3xl text-center font-semibold'>Popular no Momento</h2>
        <TopicCard
          title={
            mostPopular
              ? mostPopular.title
              : 'Nenhum tópico popular no momento'
          }
          description={mostPopular?.description}
          likes={mostPopular?.likes}
          messages={mostPopular?.messages}
        />
      </div>

      <div className='space-y-5'>
        <h2 className='text-3xl text-center font-semibold'>Todos os Tópicos</h2>
        <ul>
          {topics.map((topic, i) => (
            <li key={i}>
              <TopicCard
                title={topic.title}
                description={topic.description}
                likes={topic.likes}
                messages={topic.messages}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}