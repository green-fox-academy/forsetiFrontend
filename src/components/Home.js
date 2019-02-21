import React from 'react';
import TopicItem from './TopicItem';
import NewTopic from './NewTopic';
import QuestionItem from './QuestionItem';

const fetchTopics = (getTopics) => {
  getTopics();
  return (
    <div>Loading...</div>
  );
};

const renderTopics = topics => topics.map(topic => (
  <TopicItem topic={topic}></TopicItem>
));

const q = { text: 'Q', body: 'qb' };

const Home = ({ topics }) => (
  <div>
    {topics = ['a', 'b', 'c']}
    {topics.length !== 0 ? renderTopics(topics) : fetchTopics(() => console.log('HI'))}
    <QuestionItem question={q}></QuestionItem>
    <NewTopic></NewTopic>
  </div>
);

export default Home;


