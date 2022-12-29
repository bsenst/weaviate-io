import React from 'react';
import CardSet from './cardset';

function Courses(props) {

  let cardData = [
    {
      title: "Hello, Weaviate",
      body: "A short starter course to get you started. See what Weaviate can do, and try it out yourself.",
      buttonType: "Get started",
      badgeType: "course",
    },  
    {
      title: "Getting to MVP",
      body: "All the core knowledge and essential skills you need to build a minimum viable product with Weaviate.",
      buttonType: "Get started",
      badgeType: "course",
    },
    {
      title: "Data science to deployment",
      body: "How to get custom models into Weaviate and tweak vectorization.",
      buttonType: "Notify",
      badgeType: "course",    
    },
    {
      title: "MLOps with Weaviate",
      body: "Get to a production-ready state faster: how to add backups, authentication & authorization and replication",
      buttonType: "Notify",
      badgeType: "course",      
    }    
  ]

  return (
    <div>
      <CardSet cardData={cardData}/>
    </div>
  )
};

export default Courses;