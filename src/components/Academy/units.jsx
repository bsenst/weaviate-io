import React from "react";
import CardSet from "./cardset";

function Units(props) {

  let cardData1 = [
    {
      title: "Hello, Weaviate",
      body: "Start here: Get an overview of Weaviate, and about Weaviate's various superpowers.",
      buttonType: "Click here",
      badgeType: "mixed",
    },  
    {
      title: "Weaviate Sampler Box",
      body: "Get hands-on impressions of Weaviate by trying out its various capabilities.",
      buttonType: "Click here",
      badgeType: "practical",
    },
    {
      title: "Vector search essentials",
      body: "Vector search powers Weaviate - but what is it and how does it work?",
      buttonType: "Click here",
      badgeType: "theory",
    },  
  ]
  
  let cardData2 = [
    {
      title: "Weaviate Cloud Service (WCS)",
      body: "What is WCS, and how to get started with it.",
      buttonType: "Click here",
      badgeType: "practical",
    },  
    {
      title: "Queries 1",
      body: "About different query types, and how to use them to find data.",
      buttonType: "Click here",
      badgeType: "practical",
    },
    {
      title: "Weaviate Clients",
      body: "The basics about Weaviate clients - what's available, and what you can do with them",
      buttonType: "Click here",
      badgeType: "mixed",
    },
    {
      title: "Vectorizer selection: The basics",
      body: "Select a good, baseline vectorizer for each data and task type.",
      buttonType: "Click here",
      badgeType: "theory", 
    },
    {
      title: "Schema 1",
      body: "What is a schema, why is it important and how to define it",
      buttonType: "Click here",
      badgeType: "mixed",
    },
    {
      title: "Data import",
      body: "How to efficiently import data into Weaviate",
      buttonType: "Click here",
      badgeType: "practical", 
    },
    {
      title: "CRUD operations",
      body: "How to perform other basic object manipulations in Weaviate",
      buttonType: "Click here",
      badgeType: "practical", 
    },
    {
      title: "Modules",
      body: "What roles modules play in Weaviate, how to select and ues them as required.",
      buttonType: "Click here",
      badgeType: "mixed",
    },        
  ]  

  let cardData2a = [  
    {
      title: "Queries 2 (Advanced)",
      body: "Try and compare different types of queries (e.g. BM25, hybrid) to find data.",
      buttonType: "Notify",
      badgeType: "practical",
    },  
    {
      title: "Indexing (Advanced)",
      body: "See how Weaviate indexes data and how what enables fast retrieval.",
      buttonType: "Notify",
      badgeType: "theory",
    },
    {
      title: "Schema 2 (Advanced)",
      body: "Manage cross-referencing, vectorization and indexing through the schema options",
      buttonType: "Notify",
      badgeType: "practical",   
    }
  ]  

  let cardData3 = [
    {
      title: "Text2vec under the hood",
      body: "Exactly how does Weaviate vectorize text, and how to tweak it to suit you.",
      buttonType: "Click here",
      badgeType: "theory",
    },  
    {
      title: "Custom models with Weaviate",
      body: "Use Weaviate with your own, custom, models.",
      buttonType: "Click here",
      badgeType: "mixed",
    },
    {
      title: "Module building",
      body: "About custom modules and how to build one to fit your needs.",
      buttonType: "Notify",
      badgeType: "practical",
    }
  ]    

  let cardData4 = [
    {
      title: "Backups",
      body: "How to back up and restore your Weaviate data",
      buttonType: "Click here",
      badgeType: "practical",
    },  
    {
      title: "Authentication & Authorization",
      body: "Identify your users and control access as needed",
      buttonType: "Click here",
      badgeType: "practical",
    },
    {
      title: "Scaling",
      body: "What to expect and consider when scaling Weaviate to production",
      buttonType: "Click here",
      badgeType: "theory",  
    },
    {
      title: "Replication",
      body: "Key considerations in adding replication, and how to do it.",
      buttonType: "Click here",
      badgeType: "mixed",
    },
    {
      title: "Migration",
      body: "How to upgrade (or downgrade) your Weaviate version.",
      buttonType: "Notify",
      badgeType: "practical",
    },    
    {
      title: "Weaviate and Kubernetes",
      body: "Tips on running Weaviate with Kubernetes",
      buttonType: "Notify",
      badgeType: "practical",
    },    
  ]

  let cardDataStandalone = [
    {
      title: "Weaviate with Docker",
      body: "How to run Weaviate with Docker",
      buttonType: "Click here",
      badgeType: "practical",
    },  
    {
      title: "Readers and Generator modules",
      body: "See other capabilities like question answering, summarization and named entity recognition.",
      buttonType: "Notify",
      badgeType: "mixed",
    },
    {
      title: "Beyond text vectorization",
      body: "How to use Weaviate with non-text media, such as image or audio.",
      buttonType: "Notify",
      badgeType: "mixed",
    },    
    // {
    //   title: "Placeholder",
    //   body: "Something something dark side",
    //   buttonType: "Notify",
    //   badgeType: "mixed",
    // },    
  ]

  return (
    <div>
      <h3>1. Hello, Weaviate</h3><hr/>
      <CardSet cardData={cardData1}/>

      <h3>2. Getting to MVP</h3><hr/>
      <CardSet cardData={cardData2}/>    

      <h3>2A. Advanced Concepts</h3><hr/>  
      <CardSet cardData={cardData2a}/>  

      <h3>3. Data science to deployment</h3><hr/>
      <CardSet cardData={cardData3}/>

      <h3>4. MLOps with Weaviate</h3><hr/>
      <CardSet cardData={cardData4}/>

      <h3>Standalone units</h3><hr/>
      <CardSet cardData={cardDataStandalone}/>
    </div>
  )
}

export default Units;