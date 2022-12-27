---
title: Academy
sidebar_position: 0
---
<div class="hero shadow--lw __academyhero">
  <div class="container">
    <h1 class="hero__title">Become a leader of the AI revolution</h1>
    <p class="hero__subtitle">Learn in-demand skills needed to get the most out of data and AI models with Weaviate.</p>
    <div>
      <button class="button button--secondary button--outline button--lg">
        Get Started
      </button>
    </div>
  </div>
</div>

import AcademyCard from '/src/components/Academy/card.jsx';

<!-- <h2>Programs</h2><p><hr/></p>

<div class="row">
  <div class="col col--6">
    <AcademyCard title="For data scientists" body="Do some stuff" buttonType="Click here" badgeType="mixed"/>
  </div>
  <div class="col col--6">
    <AcademyCard title="For developers" body="Do some stuff" buttonType="Click here" badgeType="mixed"/>
  </div> 
</div>       -->

<h2>Courses</h2><p><hr/></p>

<div class="row">
  <div class="col col--4">
    <AcademyCard 
      title="1. From zero to MVP" 
      body="All the core knowledge and essential skills you need to build a minimum viable product with Weaviate." 
      buttonType="Get started"
      badgeType="mixed"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="2. Data science to deployment" 
      body="Direct Weaviate's vectorization process. Learn how to get custom models into Weaviate and manage its vectorization methods." 
      buttonType="Notify"
      badgeType="mixed"/>
  </div> 
  <div class="col col--4">
    <AcademyCard 
      title="3. Scale to production" 
      body="Get to a production-ready state faster: learn how to add backups, authentication & authorization and replication" 
      buttonType="Notify"
      badgeType="practical"/>
  </div>  
</div>

<h2>Units</h2><p><hr/></p>

<h3>1. From zero to MVP</h3><hr/>

<div class="row __academy_cardgroup">
  <div class="col col--4">
    <AcademyCard 
      title="1.1 Hello, Weaviate" 
      body="Start here: Learn about Weaviate's superpowers" 
      buttonType="Click here" 
      badgeType="mixed"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="1.2 Weaviate Cloud Service (WCS)" 
      body="What is WCS, and get started using it." 
      buttonType="Click here" 
      badgeType="practical"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="1.3 Vector search essentials" 
      body="What is vector search and how does it work?" 
      buttonType="Click here" 
      badgeType="theory"/>
  </div>
</div>

<div class="row __academy_cardgroup">
  <div class="col col--4">
    <AcademyCard 
      title="1.4 Queries 1" 
      body="How to ask questions to Weaviate" 
      buttonType="Click here" 
      badgeType="practical"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="1.5 Vectorizer selection: The basics" 
      body="Selecting a vectorizer based on your data and task types." 
      buttonType="Click here" 
      badgeType="theory"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="1.6 Schema 1" 
      body="What is a schema, why is it important and how to define it" 
      buttonType="Click here" 
      badgeType="mixed"/>
  </div>
</div>

<div class="row __academy_cardgroup">
  <div class="col col--4">
    <AcademyCard 
      title="Weaviate Clients" 
      body="The basics about Weaviate clients - what's available, and what you can do with them" 
      buttonType="Click here" 
      badgeType="mixed"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="1.7 Data import" 
      body="How to efficiently import data into Weaviate" 
      buttonType="Click here" 
      badgeType="practical"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="1.8 CRUD operations" 
      body="How to perform other basic object manipulations in Weaviate" 
      buttonType="Click here" 
      badgeType="practical"/>
  </div> 
</div>

<h3>1A. Advanced Concepts</h3><hr/>

<div class="row __academy_cardgroup">
  <div class="col col--4">
    <AcademyCard 
      title="1.9 Queries 2 (Advanced)" 
      body="Learn about different types of queries, how to perform them and tune them." 
      buttonType="Click here" 
      badgeType="practical"/>
  </div>   
  <div class="col col--4">
    <AcademyCard 
      title="1.10 Indexing (Advanced)" 
      body="Learn about how Weaviate indexes data and how what enables fast retrieval." 
      buttonType="Click here" 
      badgeType="theory"/>
  </div>  
  <div class="col col--4">
    <AcademyCard 
      title="1.11 Schema 2 (Advanced)" 
      body="Manage cross-referencing, vectorization and indexing through the schema options" 
      buttonType="Click here" 
      badgeType="practical"/>
  </div>  
</div>

<h3>2. Data science to deployment</h3><hr/>

<div class="row __academy_cardgroup">
  <div class="col col--4">
    <AcademyCard 
      title="2.1 Vectorization under the hood" 
      body="What is vector search and how does it work?" 
      buttonType="Click here" 
      badgeType="theory"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="2.2 Custom models with Weaviate" 
      body="Use Weaviate with your own, custom, models." 
      buttonType="Click here" 
      badgeType="mixed"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="2.3 Module building" 
      body="About custom modules and how to build one to fit your needs." 
      buttonType="Click here" 
      badgeType="practical"/>
  </div>
</div>

<h3>3. Scale to production</h3><hr/>

<div class="row __academy_cardgroup">
  <div class="col col--4">
    <AcademyCard 
      title="3.1 Backups" 
      body="How to back up and restore your Weaviate data" 
      buttonType="Click here" 
      badgeType="practical"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="3.2 Migration" 
      body="How to upgrade (or downgrade) your Weaviate version." 
      buttonType="Click here" 
      badgeType="practical"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="3.3 Authentication & Authorization" 
      body="Identify your users and control access as needed" 
      buttonType="Click here" 
      badgeType="practical"/>
  </div>
</div>

<div class="row __academy_cardgroup">
  <div class="col col--4">
    <AcademyCard 
      title="3.4 Scaling" 
      body="What to expect and consider when scaling Weaviate to production" 
      buttonType="Click here" 
      badgeType="theory"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="3.5 Replication" 
      body="Key considerations in adding replication, and how to do it." 
      buttonType="Click here" 
      badgeType="mixed"/>
  </div>
</div>

<h3>Standalone units</h3><hr/>

<div class="row __academy_cardgroup">
  <div class="col col--4">
    <AcademyCard 
      title="Weaviate with Docker" 
      body="How to run Weaviate with Docker" 
      buttonType="Click here" 
      badgeType="practical"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="Beyond search: an introduction" 
      body="Weaviate isn't just about search - see what else the vector engine is capable of" 
      buttonType="Notify" 
      badgeType="mixed"/>
  </div>
  <div class="col col--4">
    <AcademyCard 
      title="Lorem Ipsum" 
      body="Something something dark side" 
      buttonType="Notify" 
      badgeType="mixed"/>
  </div>
</div>